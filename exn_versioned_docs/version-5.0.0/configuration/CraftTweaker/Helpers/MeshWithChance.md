# MeshWithChance

---

#### Method Signature

`of(MeshType meshType, float chance)`

#### Returns

A roll with `meshType` and a with drop rate of `chance`

---

#### Method Signature

`getMesh()`

#### Returns

The [MeshType] for this roll

---

#### Method Signature

`getChance()`

#### Returns

The float value of the chance for this roll

---

#### Example

```js
import mods.exnihilosequentia.MeshWithChance;
import mods.exnihilosequentia.MeshType;

val roll = MeshWithChance.of(MeshType.stringMesh(), 0.25);
```

[MeshType]: ../MeshType