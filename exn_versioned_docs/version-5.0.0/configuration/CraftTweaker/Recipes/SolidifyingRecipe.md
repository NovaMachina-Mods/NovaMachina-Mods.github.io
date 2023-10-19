# Solidifying Recipe

## Method Signature

`addRecipe(String name, IFluidStack fluidInTank, IFluidStack fluidOnTop, IItemStack result)`

## Parameters

`name` - Recipe name  
`fluidInTank` - Fluid in the barrel  
`fluidOnTop` - Fluid in the block space above the barrel  
`result` - Resulting ItemStack

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.SolidifyingRecipe;

<recipetype:exnihilosequentia:solidifying>.addRecipe("example", <fluid:minecraft:lava> * 1000, <fluid:minecraft:water> * 1000, <item:minecraft:obsidian>);
```
