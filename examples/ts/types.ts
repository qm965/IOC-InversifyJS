// 2.
// InversifyJS need to use the type as identifiers at runtime. We use symbols as identifiers but you can also use classes and or string literals.
// 在运行中用type作为标识符，可以用symbols,classes,string
const TYPES = {
    // symbol.for()参数一致则全局同一个symbol值
    Warrior: Symbol.for("Warrior"),
    Weapon: Symbol.for("Weapon"),
    ThrowableWeapon: Symbol.for("ThrowableWeapon")
};

export { TYPES };