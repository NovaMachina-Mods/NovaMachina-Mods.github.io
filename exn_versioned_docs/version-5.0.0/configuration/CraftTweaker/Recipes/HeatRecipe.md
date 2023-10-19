# Heat Recipe

## Method Signature

`addRecipe(String name, int amount, Block input, StatePropertiesPredicate properties)`

## Parameters

`name` - Recipe name  
`amount` - Number of heat units provided by block  
`input` - Block to provide heat  
`properties` - BlockState properties that must be met for the block to produce heat (See [StatePropertiesPredicate])

## Constraints

- `name` must be globally unique
- `properties` If no properties are desired, set as `StatePropertiesPredicate.any()`

## Example

```js
import crafttweaker.api.predicate.StatePropertiesPredicate;
import mods.exnihilosequentia.HeatRecipe;

val properties = StatePropertiesPredicate.create().property("lit", true).build();

<recipetype:exnihilosequentia:heat>.addRecipe("example", 100, <block:minecraft:campfire>, properties);
```

[StatePropertiesPredicate]: https://docs.blamejared.com/1.20.1/en/vanilla/api/predicate/StatePropertiesPredicate