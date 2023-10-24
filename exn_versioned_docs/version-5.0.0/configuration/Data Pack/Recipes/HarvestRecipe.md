# Harvest Recipes

## Structure

```json
{
  "type": "exnihilosequentia:harvest",
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

| Value     | Description                                                                    | Accepted Values          |
| :-------- | :----------------------------------------------------------------------------- | :----------------------- |
| `results` | A list of items that can be dropped and the chance that they will be.          | List of Result Objects   |
| `chance`  | Percentage that this recipe will produce drop.                                 | A value from 0.0 to 1.0. |
| `item`    | The item to be dropped.                                                        | Item                     |
| `count`   | Number of result items to drop when recipe completes.                          | A value greater than 0.  |
| `input`   | The block/type of block that must be broken by a crook to produce the results. | Block or Tag             |
