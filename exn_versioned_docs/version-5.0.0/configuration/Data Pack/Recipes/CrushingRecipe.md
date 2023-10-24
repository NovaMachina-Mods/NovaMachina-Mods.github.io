# Crushing Recipes

## Structure

```json
{
  "type": "exnihilosequentia:crushing",
  "results": [
    {
      "item": "string",
      "chance": "number",
      "count": "number"
    },
    ...
  ],
  "input": {
    "item/tag": "string"
  }
}
```

## Fields

| Value     | Description                                          | Accepted Values          |
| :-------- | :--------------------------------------------------- | :----------------------- |
| `results` | A list of possible drops.                            | List of Result Objects   |
| `item`    | The item to be dropped.                              | Item                     |
| `chance`  | The resulting fluid.                                 | A value from 0.0 to 1.0. |
| `count`   | Number of result items dropped when recipe completes | A value greater than 0.  |
| `input`   | The block to be hammered.                            | Block or Tag             |
