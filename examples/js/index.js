// 之前是我们通过代码调用框架组件模块等实现功能，现在是ioc容器帮我们去做这些事？？？？？
// 原则：
// 1. 高层模块不应该依赖低层模块。两个都应该依赖抽象
// 2. 抽象不应该依赖具体实现
// 3. 面向接口编程，而非面向实现编程
var inversify = require("inversify");
require("reflect-metadata");

var TYPES = {
    Ninja: "Ninja",
    Katana: "Katana",
    Shuriken: "Shuriken"
};

class Katana {
    hit() {
        return "cut!";
    }
}

class Shuriken {
    throw() {
        return "hit!";
    }
}

class Ninja {
    constructor(katana, shuriken) {
        this._katana = katana;
        this._shuriken = shuriken;
    }
    fight() { return this._katana.hit(); };
    sneak() { return this._shuriken.throw(); };
}

// Declare as injectable and its dependencies
// 声明对象可注入，并注入依赖
inversify.decorate(inversify.injectable(), Katana);
inversify.decorate(inversify.injectable(), Shuriken);
inversify.decorate(inversify.injectable(), Ninja);
inversify.decorate(inversify.inject(TYPES.Katana), Ninja, 0);
inversify.decorate(inversify.inject(TYPES.Shuriken), Ninja, 1);

// Declare bindings
// 声明绑定
var container = new inversify.Container(); // 建立第三方容器来管理并负责注入依赖
// 绑定对应的对象
container.bind(TYPES.Ninja).to(Ninja);
container.bind(TYPES.Katana).to(Katana);
container.bind(TYPES.Shuriken).to(Shuriken);


// Resolve dependencies
// 解决依赖关系
//TYPES.Ninja 就指代Ninja对象了
// var ninja = container.get(TYPES.Ninja);
var ninja = container.get('Ninja');

console.log(ninja.fight())

// 理解：Ninja依赖Shuriken和Katana，但是在他的定义中不直接用，而是采用外界传值注入构造的方式，去传入他的依赖。只要依赖符合一定的规则(接口)
// 符合其原则：面向接口编程，而非面向实现编程？？？
// 就能随时服用而不用更改Ninja中的代码