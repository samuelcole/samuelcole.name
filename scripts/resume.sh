#!/usr/bin/env bash
set -euo pipefail

PORT=3137
URL="http://127.0.0.1:$PORT/resume"
COLOR="public/samuel-cole-resume.pdf"
BW="public/samuel-cole-resume-bw.pdf"

CHROME=""
for path in \
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  "/Applications/Chromium.app/Contents/MacOS/Chromium" \
  "$(command -v google-chrome 2>/dev/null || true)" \
  "$(command -v chromium 2>/dev/null || true)"; do
  if [ -n "$path" ] && [ -x "$path" ]; then
    CHROME="$path"
    break
  fi
done
if [ -z "$CHROME" ]; then
  echo "error: Chrome/Chromium not found" >&2
  exit 1
fi
if ! command -v gs >/dev/null 2>&1; then
  echo "error: ghostscript (gs) not found" >&2
  exit 1
fi

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

LOG="$(mktemp -t resume-dev.XXXXXX)"
./node_modules/.bin/next dev -p "$PORT" -H 127.0.0.1 >"$LOG" 2>&1 &
DEV_PID=$!
trap 'kill "$DEV_PID" 2>/dev/null || true; rm -f "$LOG"' EXIT

echo "→ waiting for dev server at $URL"
for _ in $(seq 1 120); do
  if curl -sf "$URL" -o /dev/null; then
    break
  fi
  if ! kill -0 "$DEV_PID" 2>/dev/null; then
    echo "error: dev server exited; log:" >&2
    cat "$LOG" >&2
    exit 1
  fi
  sleep 0.5
done

echo "→ rendering $COLOR"
"$CHROME" --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="$COLOR" "$URL" 2>/dev/null

echo "→ rendering $BW"
gs -sDEVICE=pdfwrite -sColorConversionStrategy=Gray \
  -dProcessColorModel=/DeviceGray -dCompatibilityLevel=1.4 \
  -dNOPAUSE -dBATCH -sOutputFile="$BW" "$COLOR" >/dev/null

echo "✓ done"
