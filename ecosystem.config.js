module.exports = {
  apps: [
    {
      script: "index.js",
      user: "web",
      error_file: "/var/log/server/err.log",
      out_file: "/var/log/server/out.log",
      combine_logs: true,
    },
  ],
};
