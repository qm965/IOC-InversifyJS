1. 定义抽象接口（interface.ts）
2. 定义类型（types.ts）
3. 生成对应实体，用装饰器做可注入设置，并注入依赖（entities.ts） 
4. 生成容器，并将类型与实体绑定（inversify.config.ts）
5. 容器通过对应的类型来获取实体并做操作（index.ts）