# Compost Recipe

## Method Signature

`compost(input: Item, amount: number)`

## Parameters

`input` - Item to be inserted into barrel for composting  
`amount` - Amount of solids added to a barrel from the input item

## Constraints

- `amount` must be a whole number greater than 0

## Example

```javascript
onEvent('recipes', event => {
    event.recipes.exnihilosequentia.compost('minecraft:cobblestone', 750)
}
```
