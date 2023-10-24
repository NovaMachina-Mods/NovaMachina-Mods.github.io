# Precipitate Recipe

## Structure

```json
{
  "type": "exnihilosequentia:precipitate",
  "fluid": {
    "amount": "number",
    "fluid": "string"
  },
  "input": {
    "item/tag": "string"
  },
  "result": {
    "count": "number",
    "item": "string"
  }
}
```

## Fields

| Value    | Description                                                  | Accepted Values |
| :------- | :----------------------------------------------------------- | :-------------- |
| `fluid`  | The fluid in the barrel.                                     | Fluid           |
| `amount` | The amount of fluid required for the recipe. Should be 1000. | Greater than 0  |
| `input`  | The item or type of item to be consumed by the recipe.       | Item or Tag     |
| `result` | The resulting item/block.                                    | Item            |
| `count`  | Number of items to drop.                                     | Greater than 0  |
