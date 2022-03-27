# Don't call us, we'll call you

Is an IoC library for the whole family.

GitHub: https://github.com/stubidoo/dont-call-us-well-call-you

NPM: https://www.npmjs.com/package/dont-call-us-well-call-you

## Why we need this?

- It's the kind of thing that you don't know you need untill you really need it. Say you are building the next killer app, it gets so large and complex that you end up having a complicated mess of components calling each other in any old fashion. This will not scale, the soloution you could be looking for is an IoC library.

## How to use

- First, let's install it:

```bash
npm i dont-call-us-well-call-you
```

-

```javascript
let c = new Container()
c.service("SomeClass", (c) => new SomeClass())
```

- That's it! you've handed control over to the Container

### Throw in some dependencies

```javascript
let c = new Container()
c.service("SomeDependency", (c) => new SomeDependency())
c.service("SomeClass", (c) => new SomeClass(c.SomeDependency))
```

- Now your dependency can be access via the Container

## Why developers will love this

- It's super simple to implement, very few opinions being thrown at you, still structure the important bits the way you want to without having to worry about the mess to follow. Did we mention zero dependencies?

## Think I could do with a lesson on how to write code?

- Submit a pull request!

## Worried about breaking changes?

- Just use a previous version that doesn't suck!

---

## Don't take it from me

Stack-overflow says:
The Inversion-of-Control (IoC) pattern, is about providing any kind of callback (which controls reaction), instead of acting ourself directly (in other words, inversion and/or redirecting control to external handler/controller). The Dependency-Injection (DI) pattern is a more specific version of IoC pattern, and is all about removing dependencies from your code.

Inversion of Control: Traditional control flow for a program is when the program only does what we tell it to do (today). Inversion of control flow happens when we develop frameworks or only refer to plugin architecture with areas of code that can be hooked into. In these areas, we might not know (today) how we want it to be used, or we wish to enable developers to add additional functionality. That means that every lifecycle hook in React.js or Angular is a good example of Inversion of Control in practice. IoC is also often explained by the "Hollywood Design Principle": Don't call us, we'll call you. - https://khalilstemmler.com/articles/tutorials/dependency-injection-inversion-explained/

Wikipedia:
Inversion of control is used to increase modularity of the program and make it extensible,[1] and has applications in object-oriented programming and other programming paradigms.

more:
In traditional programming, the flow of the business logic is determined by objects that are statically bound to one another. With inversion of control, the flow depends on the object graph that is built up during program execution. Such a dynamic flow is made possible by object interactions that are defined through abstractions. This run-time binding is achieved by mechanisms such as dependency injection or a service locator. In IoC, the code could also be linked statically during compilation, but finding the code to execute by reading its description from external configuration instead of with a direct reference in the code itself.

============
