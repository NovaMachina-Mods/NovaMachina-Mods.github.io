# Precipitate Recipe

## Method Signature

`addRecipe(String name, IFluidStack fluid, IIngredient input, IItemStack result)`

## Parameters

`name` - Recipe name  
`fluid` - Fluid in the barrel  
`input` - ItemStack to be inserted into barrel  
`result` - Resulting ItemStack 

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.PrecipitateRecipe;

<recipetype:exnihilosequentia:precipitate>.addRecipe("example", <fluid:minecraft:water> * 1000, <item:minecraft:diamond>, <item:minecraft:dirt>);
```
