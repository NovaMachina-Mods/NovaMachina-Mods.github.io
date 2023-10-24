# Melting Recipes

## Structure

```json
{
  "type": "exnihilosequentia:melting",
  "input": {
    "item/tag": "string"
  },
  "fluidResult": {
    "amount": "number",
    "fluid": "string"
  },
  "crucibleType": "string"
}
```

## Fields

| Value          | Description                                                                                                     | Accepted Values                          |
| :------------- | :-------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| `input`        | The block/type of block to be placed in a crucible to produce the connected fluid.                              | Item or Tag                              |
| `amount`       | The amount of fluid that will be produced by the input (represented in millibuckets)                            | A value greater than 0.                  |
| `fluidResult`  | The fluid that results from the input.                                                                          | Fluid                                    |
| `crucibleType` | Type of crucible. `wood` crucible recipies can be processed by `fired` crucibles, but not the other way around. | <ul><li>`fired`</li><li>`wood`</li></ul> |

:::info
Since `wood` crucible recipies can be processed in `fired` crucibles, there is no need to create two separate recipies for `wood` and `fired` recipies that result in the same fluid and amount.
:::