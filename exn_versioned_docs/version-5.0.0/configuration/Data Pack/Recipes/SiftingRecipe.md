# Sifting Recipe

## Structure

```json
{
  "type": "exnihilosequentia:sifting",
  "rolls": [
    {
      "chance": "number",
      "mesh": "string"
    },
    ...
  ],
  "input": {
    "item/tag": "string"
  },
  "result": {
    "item": "string"
  },
  "waterlogged": "boolean"
}
```

## Fields

| Value         | Description                                                 | Accepted Values                                                                                                   |
| :------------ | :---------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------- |
| `rolls`       | A list of rolls for this recipe.                            | A list of Mesh Rolls                                                                                              |
| `chance`      | Chance that this recipe completes.                          | A value from 0.0 to 1.0.                                                                                          |
| `mesh`        | The mesh required to cause this roll to be considered.      | <ul><li>`string`</li><li>`flint`</li><li>`iron`</li><li>`diamond`</li><li>`emerald`</li><li>`netherite`</li></ul> |
| `input`       | The block/type of block that will be consumed by the sieve. | Block or Tag                                                                                                      |
| `result`      | The resulting item.                                         | Item                                                                                                              |
| `waterlogged` | The sieve must be placed in water to produce result.        | Either `true` or `false`. Optional and enitire tag may be omitted. Will default to `false`.                       |