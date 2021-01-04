# `joinByArrayReverse`

A `joinByArrayReverse` field allows us to access the other side of a [joinByArray](/reference/field-types/joinbyarray.md) relationship. Since this is the "other end" of the relationship, there is no editing interface. It is just a convenience allowing us to "see" the related objects from the other point of view.

::: tip
For backwards compatibility, you can set the `idField` option instead to match that in the other join, but this is confusing and hard to maintain. Just use `reverseOf`.
:::

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `REPLACE ME` below).

```javascript
// Part of our schema for fabrics (see the joinByArray example)
{
  // No actual editing interface is currently offered, edit it from the other end
  name: '_products',
  type: 'joinByArrayReverse',
  // Optional since the name of our join matches the name of the type, plus an s
  withType: 'product',
  // Optional since there is only one join with fabrics in the product schema
  reverseOf: '_fabrics'
}
```

We can now see `_products` as a property of each `fabric` object that is related to a product.

If desired, we can specify `relationship` and `relationshipsField` just as we would for `joinByArray`. Currently these are not automatic in a reverse join and must be fully specified if relationship properties are to be accessed. Most array joins do not have relationship properties and thus do not require reverse access to them.

### Properties

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|required | Boolean | false | If `true`, the field is mandatory |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|type | String | | Declares the field type (`relationshipReverse` for this type) |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|withType | String | | The name of the related type, if it differs from the name of the join. If you do not set `withType`, then the name of the join must match the name of the related type, with a leading `_` added.  |
|reverseOf | String | | Set to the name of the join you are reversing (optional) |
|ifOnlyOne | Boolean | false | If `true`, it will only carry out the join if the query that returned the original document returned only one document. This is useful if the joined information is only to be displayed on the `show.html` page of a piece, for instance, and you don't want the performance impact of loading it on the `index.html` page. |

::: tip
In documents with many joins in play, the `ifOnlyOne` option will avoid running through all the possible joins, and can be used to avoid a heavy performance impact in complex documents.
:::
