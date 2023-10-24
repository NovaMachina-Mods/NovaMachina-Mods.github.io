# Sifting Recipe

## Method Signature

`sifting(input: Item, drop: Item, rolls: MeshWithChance[], isWaterlogged: boolean)`

## Parameters

`input` - Block to be sifted  
`drop` - Item to be dropped  
`rolls` - List of [MeshWithChance]  
`isWaterlogged` - Determines if the sieve must be waterlogged for the drop to be acquired

## Constraints

- `rolls` must have at least one entry

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.sifting('minecraft:coarse_dirt', 'minecraft:cobblestone', [
        {
            chance: 1.0,
            mesh: 'iron'
        },
        {
            chance: 1.0,
            mesh: 'diamond'
        }],
        true
    )
}
```

[MeshWithChance]: ../../Helpers/MeshWithChance
