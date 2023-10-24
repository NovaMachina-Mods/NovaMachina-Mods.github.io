# Heat Recipe

## Structure

```json
{
  "type": "exnihilosequentia:heat",
  "block": "string",
  "amount": "number",
  "state": {
    "key": "string"
  }
}
```

## Fields

| Value    | Description                                                                                                                                                   | Accepted Values         |
| :------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :---------------------- |
| `block`  | The block placed below a crucible that will generate heat.                                                                                                    | Block                   |
| `amount` | The number of millibuckets that will be melted down per operation.                                                                                            | A value greater than 0. |
| `state`  | A collection of properties that the block must match for the heat recipe to be valid. Optional and may be omitted. (See [Block States] on the Minecraft Wiki) | Block State             |

[block states]: https://minecraft.fandom.com/wiki/Block_states
