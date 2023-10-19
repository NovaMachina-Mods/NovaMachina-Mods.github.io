# Sifting Recipe

## Method Signature

`addRecipe(String name, IIngredient input, IItemStack drop, boolean isWaterlogged, MeshWithChance[] rolls)`

## Parameters

`name` - Recipe name  
`input` - Block to be sifted  
`drop` - Item to be dropped  
`isWaterlogged` - Determines if the sieve must be waterlogged for the drop to be acquired  
`rolls` - List of [MeshWithChance]

## Constraints

- `name` must be globally unique
- `rolls` must have at least one entry

## Example

```js
import mods.exnihilosequentia.SiftingRecipe;
import mods.exnihilosequentia.MeshWithChance;
import mods.exnihilosequentia.MeshType;

<recipetype:exnihilosequentia:sifting>.addRecipe("example",<item:minecraft:cobblestone>, <item:minecraft:netherite_ingot>, true, [MeshWithChance.of(MeshType.diamondMesh(), 0.01), MeshWithChance.of(MeshType.stringMesh(), 1.0)]);
```

[MeshWithChance]: ../../Helpers/MeshWithChance
