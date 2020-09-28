1. 使用inversify-binding-decorators提供的provide方法后，不用再对container进行绑定操作，他替你做了
之前的：都不用了，provide通过传参已绑定

> // const myContainer = new Container();
> myContainer.bind<Warrior>(TYPES.Warrior).to(Ninja);
> myContainer.bind<Weapon>(TYPES.Weapon).to(Katana);
> myContainer.bind<ThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);