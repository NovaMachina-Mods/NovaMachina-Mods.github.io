# Melting Recipes

## Method Signature

`melting(input: Item, type: fired | wood, fluidStack: Fluid)`

## Parameters

`input` - Block to be harvested  
`type` - Either 'fired' or 'wood'  
`fluidStack` - Resulting fluid  

## Example

```js
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.melting('minecraft:dirt', 'fired', Fluid.of('minecraft:water', 500))
}
```