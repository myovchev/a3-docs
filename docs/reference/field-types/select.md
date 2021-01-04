# `select`

A single-select input field. The contents of the menu are set using the [`choices`](/reference/field-types/field-properties/choices.md) property and its sub-properties.

### Properties

|  Property | Type   | Default | Description | Sub-properties |
|-----------|-----------|-----------|-----------|------------|---|
|name | String | | Sets the name of the field in the database | |
|label | String | | The field label in the user interface | |
|required | Boolean | false | If `true`, the field is mandatory | |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal | |
|type | String | | Declares the field type (`select` for this type) | |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value | |
|help | String | | Help text for the field that will appear with the field's label | |
|htmlHelp | String | | Help text with support for HTML markup | |
|[choices](/reference/field-types/field-properties/choices.md) | `array` |  | An array of choices that the user can select from. Each must be an object with value and label properties. |  [**showFields**](/reference/field-types/field-properties/choices.md#showfields) |
|widgetContols | Boolean | false | If `true`, `select` fields can be edited in line on the page if the field is in a widget | |
|[sortify](/reference/field-types/field-properties/sortify.md) | Boolean | false | If `true`, creates "sortified" fields |

