/* module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "127.0.0.1"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "mhdatabase"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Awalker20997"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
}); */

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-123.railway.app"),
      port: env.int("DATABASE_PORT", 5844),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "N1qGbGjSU8rMAWOgnnyl"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
