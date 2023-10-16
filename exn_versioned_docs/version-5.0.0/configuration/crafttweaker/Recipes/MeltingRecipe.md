# Melting Recipes

## Method Signature

`addRecipe(String name, IIngredient input, IFluidStack fluidStack, CrucibleType type)`

## Parameters

`name` - Recipe name  
`input` - Block to be harvested  
`fluidStack` - Resulting fluid  
`type` - [CrucibleType]

## Constraints

- `name` must be globally unique

## Example

```js
import mods.exnihilosequentia.MeltingRecipe;
import mods.exnihilosequentia.CrucibleType;

<recipetype:exnihilosequentia:Melting>
    .create("example", <item:minecraft:cobblestone>, <fluid:minecraft:lava> * 1000, CrucibleType.fired());
```

[CrucibleType]: ../../Helpers/CrucibleType