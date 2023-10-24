# Harvest Recipes

## Method Signature

`harvest(input: Item, drops: ItemStackWithChance[])`

## Parameters

`name` - Recipe name  
`input` - Block to be harvested  
`drops` - Array of [ItemStackWithChance] when the input is harvested

## Constraints

- `name` must be globally unique

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.harvest('minecraft:grass_block',[
        {
            chance: 0.5,
            count: 4,
            item: 'minecraft:coal'
        },
        {
            chance: 0.25,
            count: 1,
            item: 'minecraft:iron_ingot'
        }
    ])
}
```

[ItemStackWithChance]: ../../Helpers/ItemStackWithChance