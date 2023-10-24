# Precipitate Recipe

## Method Signature

`precipitate(input: Item, result: Item, fluid: Fluid)`

## Parameters

`input` - ItemStack to be inserted into barrel  
`result` - Resulting ItemStack  
`fluid` - Fluid in the barrel

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.precipitate('minecraft:stone', 'minecraft:stone_bricks', 'exnihilosequentia:witch_water')
}
```
