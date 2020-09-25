// 1. 定义接口，面向接口编程
// string类型的返回函数？？？
// we should "depend upon Abstractions and do not depend upon concretions"
export interface Warrior {
    fight(): string;
    sneak(): string;
}

export interface Weapon {
    hit(): string;
}

export interface ThrowableWeapon {
    throw(): string;
}