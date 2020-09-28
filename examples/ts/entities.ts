// Let's continue by declaring some classes (concretions). 
// The classes are implementations of the interfaces that we just declared. 
// All the classes must be annotated with the @injectable decorator.

// When a class has a dependency on an interface we also need to use the @inject decorator to define an identifier for the interface that will be available at runtime. 
// In this case we will use the Symbols Symbol.for("Weapon") and Symbol.for("ThrowableWeapon") as runtime identifiers.
// 抽象不应该依赖具体实现，具体实现应该依赖抽象

// 3:------
import { injectable, inject } from "inversify";
import "reflect-metadata";
import { Weapon, ThrowableWeapon, Warrior } from "./interfaces";
import { TYPES } from "./types";

// 要根据抽象生成实体了
// 声明可注入，并将数据注入其中 Ninja
// 申明都在inversify中的方法，inversify接管了对这个类的前置处理，可以对这个类做些处理，注入依赖等
// 之所以使用@provide代替@injectable后不用bind了，应该是他已经做了这不
// 具体得查看源码

@injectable()
class Katana implements Weapon {
    public hit() {
        return "cut!";
    }
    public hu (){
        return "qie!"
    }
}

@injectable()
class Shuriken implements ThrowableWeapon {
    public throw() {
        return "hit!";
    }
}

@injectable()
class Ninja implements Warrior {

    private _katana: Weapon;
    private _shuriken: ThrowableWeapon;

    public constructor(
	    @inject(TYPES.Weapon) katana: Weapon,
	    @inject(TYPES.ThrowableWeapon) shuriken: ThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight() { return this._katana.hit(); }
    public sneak() { return this._shuriken.throw(); }

}

export { Ninja, Katana, Shuriken };