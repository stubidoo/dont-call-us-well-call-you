// TLDR; check if the container builds dependency graph
const Container = require("./index")

let c = new Container()

const config = {
  DB_CONFIG_MYSQL: "db_conect_string_here",
  EMAIL_CONFIG: "email_config_string_here"
}

class UserRepo {}
class UserRoute {}
class Database {}
class Emailer {}

c.service("config", (c) => config)
c.service("UserRepo", (c) => new UserRepo(c.Database, c.Emailer))
c.service("UserRoute", (c) => new UserRoute(c.UserRepo))
c.service("Database", (c) => new Database(c.config.DB_CONFIG_MYSQL))
c.service("Emailer", (c) => new Emailer(c.config.EMAIL_CONFIG))

test("Container should contain the services property", () => {
  expect(c).toHaveProperty("services")
})

test("Container should contain the given config object", () => {
  const expected = {
    DB_CONFIG_MYSQL: "db_conect_string_here",
    EMAIL_CONFIG: "email_config_string_here"
  }
  expect(c.config).toMatchObject(expected)
})

test("Services should contain the dependencies for UserRoute", () => {
  // Call the dependencies by calling
  c.UserRoute
  // console.log(c)
  // Test each property exists
  expect(c.services).toHaveProperty("config")
  expect(c.services).toHaveProperty("Database")
  expect(c.services).toHaveProperty("Emailer")
  expect(c.services).toHaveProperty("UserRepo")
  expect(c.services).toHaveProperty("UserRoute")
})
