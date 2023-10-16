# ItemStackWithChance

---

#### Method Signature

`of(IItemsStack itemStack)`

#### Parameters

`itemStack` - ItemStack to add chance to.

#### Returns

ItemStack with chance of 100%

---

#### Method Signature

`of(IItemsStack itemStack, float chance)`

#### Parameters

`itemStack` - ItemStack to add chance to.  
`chance` - Percentage that the itemstack should drop

#### Returns

ItemStack with chance of `chance`%

---

#### Method Signature

`itemStack()`


#### Returns

[IItemStack] representation of ItemStack

---

#### Method Signature

`chance()`


#### Returns

Float representation of chance value

---

#### Example

```js
import mods.exnihilosequentia.ItemStackWithChance;

val itemStack = ItemStackWithChance.of(<item:minecraft:sand>);
val itemStack2 = ItemStackWithChance.of(<item:minecraft:sand>, 0.05);
```

[IItemStack]: https://docs.blamejared.com/1.20.1/en/vanilla/api/item/IItemStack