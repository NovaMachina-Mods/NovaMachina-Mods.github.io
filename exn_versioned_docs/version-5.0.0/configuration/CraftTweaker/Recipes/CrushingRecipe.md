# Crushing Recipes

## Method Signature

`addRecipe(String name, IIngredient input, ItemStackWithChance[] drops)`

## Parameters

`name` - Recipe name  
`input` - Block to be crushed  
`drops` - Array of [ItemStackWithChance] when the input is crushed

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.CrushingRecipe;

<recipetype:exnihilosequentia:crushing>
    .create("example", <item:minecraft:cobblestone>, [ItemStackWithChance.of(<item:minecraft:gravel>), ItemStackWithChance.of(<item:minecraft:diamond, 0.01>)]);
```

[ItemStackWithChance]: ../../Helpers/ItemStackWithChance