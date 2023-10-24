# Crushing Recipes

## Method Signature

`crushing(input: Item, drops: ItemStackWithChance[])`

## Parameters

`name` - Recipe name  
`input` - Block to be crushed  
`drops` - Array of [ItemStackWithChance] when the input is crushed

## Constraints

- `name` must be globally unique

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.crushing('minecraft:pumpkin',[
        {
            chance: 0.75,
            count: 20,
            item: 'minecraft:melon_slice'
        },
        {
            chance: 1.0,
            count: 1,
            item: 'minecraft:pumpkin_seeds'
        }
    ])
}
```

[ItemStackWithChance]: ../../Helpers/ItemStackWithChance