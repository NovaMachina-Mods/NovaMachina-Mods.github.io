# Transition Recipe

## Method Signature

`addRecipe(String name, IIngredient catalyst, IFluidStack input, IFluidStack output)`

## Parameters

`name` - Recipe name  
`catalyst` - Item to start the transition  
`input` - Fluid to transform  
`output` - Result fluid

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.TransitionRecipe;

<recipetype:exnihilosequentia:transition>.addRecipe("example", <fluid:minecraft:lava> * 1000, <item:minecraft:diamond>, <fluid:minecraft:water> * 1000);
```
