# Compost Recipe

## Structure

```json
{
  "type": "exnihilosequentia:compost",
  "input": {
    "item/tag": "string"
  },
  "amount": "number"
}
```

## Fields

| Value    | Description                                                           | Accepted Values      |
| :------- | :-------------------------------------------------------------------- | :------------------- |
| `input`  | The item/block being inserted into a barrel to be composted.          | Item or Tag          |
| `amount` | The amount an item/block contributes to the solid amount in a barrel. | Value greater than 0 |