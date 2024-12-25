module.exports = {
  apps: [
    {
      script: "pnpm start",
      watch: ["./src"],
    },
  ],
  env: {
    NODE_ENV: "development",
  },
  env_production: {
    NODE_ENV: "production",
  },
};
