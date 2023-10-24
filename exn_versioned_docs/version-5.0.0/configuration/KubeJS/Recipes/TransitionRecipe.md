# Transition Recipe

## Method Signature

`transition(input: Fluid, output: Fluid, catalyst: Item)`

## Parameters

`input` - Fluid to transform  
`output` - Result fluid  
`catalyst` - Item to start the transition

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.transition('minecraft:lava', 'minecraft:water', '#forge:ores')
}
```
