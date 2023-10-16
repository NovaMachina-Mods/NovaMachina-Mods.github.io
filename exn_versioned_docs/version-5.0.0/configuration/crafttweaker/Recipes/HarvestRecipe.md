# Harvest Recipes

## Method Signature

`addRecipe(String name, IIngredient input, ItemStackWithChance[] drops)`

## Parameters

`name` - Recipe name  
`input` - Block to be harvested  
`drops` - Array of [ItemStackWithChance] when the input is harvested

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.HarvestRecipe;

<recipetype:exnihilosequentia:harvest>
    .create("example", <item:minecraft:oak_leaves>, [ItemStackWithChance.of(<item:exnihilosequentia:silkworm>), ItemStackWithChance.of(<item:minecraft:diamond * 2, 0.01>)]);
```

[ItemStackWithChance]: ../../Helpers/ItemStackWithChance