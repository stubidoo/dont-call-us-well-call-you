const Container = require("../src/index")

const config = {
  DB_CONFIG_MYSQL: "db_conect_string_here",
  EMAIL_CONFIG: "email_config_string_here"
}

class UserRepo {}
class UserRoute {}
class TodoRepo {}
class TodoRoute {}
class Database {}
class Emailer {}

let c = new Container()

c.service("config", (c) => config)

c.service("UserRepo", (c) => new UserRepo(c.Database, c.Emailer))
c.service("UserRoute", (c) => new UserRoute(c.UserRepo))

c.service("TodoRepo", (c) => new TodoRepo(c.Database))
c.service("TodoRoute", (c) => new TodoRoute(c.TodoRepo))

c.service("Database", (c) => new Database(c.config.DB_CONFIG_MYSQL))
c.service("Emailer", (c) => new Emailer(c.config.EMAIL_CONFIG))
c.UserRoute // get dependencies
console.log(c.services)
