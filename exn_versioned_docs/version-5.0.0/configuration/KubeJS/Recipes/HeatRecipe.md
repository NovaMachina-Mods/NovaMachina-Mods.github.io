# Heat Recipe

## Method Signature

`heat(input: string, amount: number, properties: Map<string, any>)`

## Parameters

`input` - Block to provide heat  
`amount` - Number of heat units provided by block  
`properties` - BlockState properties that must be met for the block to produce heat


## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.heat('minecraft:hay_block', 200)
    event.recipes.exnihilosequentia.heat('minecraft:campfire', 4, {"lit": "true"})
});
```