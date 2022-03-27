// Library requirements
/**
- The steps you take to make the library great to use
- How you set up the code for further collaborative development
- Your approach to testing
- How you deal with feature gaps and edge cases
 * 
 */

/**
 * IoC Container
 * @example
 * let c = new Container()
 * c.service("config", (c) => config)
 * @example
 * c.service("UserRoute", (c) => new UserRoute(c.UserRepo))
 */

class Container {
  constructor() {
    this.services = {}
  }

  service(name, cb) {
    Object.defineProperty(this, name, {
      get: () => {
        if (!this.services.hasOwnProperty(name)) {
          this.services[name] = cb(this)
        }

        return this.services[name]
      },
      configurable: true,
      enumerable: true
    })

    return this
  }
}

module.exports = Container
