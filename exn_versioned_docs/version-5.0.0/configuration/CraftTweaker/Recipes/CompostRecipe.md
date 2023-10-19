# Compost Recipe

## Method Signature

`addRecipe(String name, IIngredient input, int amount)`

## Parameters

`name` - Recipe name  
`input` - Item to be inserted into barrel for composting  
`amount` - Amount of solids added to a barrel from the input item

## Constraints

- `name` must be globally unique
- `amount` must be greater than 0

## Example

```js
import mods.exnihilosequentia.CompostRecipe;

<recipetype:exnihilosequentia:compost>.addRecipe("example", <item:minecraft:oak_leaves>, 100);
```
