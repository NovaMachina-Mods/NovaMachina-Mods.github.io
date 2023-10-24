# Transition Recipe

## Structure

```json
{
  "type": "exnihilosequentia:transition",
  "fluidInTank": {
    "amount": "number",
    "fluid": "string"
  },
  "catalyst": {
    "item/tag": "string"
  },
  "result": {
    "amount": "number",
    "fluid": "string"
  }
}
```

## Fields

| Value         | Description                                                                                                                                              | Accepted Values |
| :------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------- |
| `fluidInTank` | The fluid to be transformed.                                                                                                                             | Fluid           |
| `catalyst`    | The block/type of block that must be below the barrel to transform the fluid. May also be an item that is inserted into the barrel with the fluid in it. | Item or Tag     |
| `result`      | The resulting fluid.                                                                                                                                     | Fluid           |
| `amount`      | The amount of fluid required for the recipe. Should be 1000.                  | Greater than 0  |