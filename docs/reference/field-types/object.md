# `object`

An `object` field has its own schema, and is very similar to an [`array`](array.md) field. However there is always exactly one object, represented as an object property of the doc in the database \(a sub-object\).

Using `object` instead of `array` when only dealing with a single object prevents unnecessary prefixing of field names and nesting docs in the form.

### Properties

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|required | Boolean | false | If `true`, the field is mandatory |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|type | String | | Declares the field type (`object` for this type) |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|schema | `schema` | | The set of fields present for configuring the object |
