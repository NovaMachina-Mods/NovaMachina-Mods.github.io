# Solidifying Recipe

## Method Signature

`solidifying(fluidInTank: Fluid, fluidOnTop: Fluid, result: Item)`

## Parameters

`fluidInTank` - Fluid in the barrel  
`fluidOnTop` - Fluid in the block space above the barrel  
`result` - Resulting ItemStack


## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.solidifying('exnihilosequentia:witch_water', 'exnihilosequentia:sea_water', 'minecraft:coarse_dirt')
}
```
