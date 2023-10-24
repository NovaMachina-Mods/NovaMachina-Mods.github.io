# Solidifying Recipe

## Structure

```json
{
  "type": "exnihilosequentia:solidifying",
  "fluidInTank": {
    "amount": "number",
    "fluid": "string"
  },
  "fluidOnTop": {
    "amount": "number",
    "fluid": "string"
  },
  "result": {
    "item": "string"
  }
}
```

## Fields

| Value         | Description                                                                   | Accepted Values |
| :------------ | :---------------------------------------------------------------------------- | :-------------- |
| `fluidInTank` | The fluid in the tank that will be consumed.                                  | Fluid           |
| `fluidOnTop`  | The fluid that will be placed on top of the barrel that will not be consumed. | Fluid           |
| `amount`      | The amount of fluid required for the recipe. Should be 1000.                  | Greater than 0  |
| `result`      | The resulting block.                                                          | Block           |
