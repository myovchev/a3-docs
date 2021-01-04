# Field Properties

Each [field type](/reference/field-types) in Apostrophe can take a number of different properties for configuration and display settings. Below is a reference of the most commonly used properties. You can also view the reference for each individual field for a complete list of properties used by that field and an explanation of what it does.

## Commonly Used Properties

| Property | Type | Default | Description | Used By | Sub-properties |
|----------|------|---------|-------------|---------|----------------|
|name | `string` | | Sets the name of the field in the database | all fields | |
|label | `string` | | Sets the label of the field that the user sees | all fields | |
|required | `boolean` | false | If `true`, the field is mandatory | all fields | |
|type | `string` | | Declares the field type | all fields | |
|readOnly | `boolean` | false | If `true`, prevents the user from editing the field | all fields | |
|help | `string` | | Help text for the field that will appear with the field's label | all fields | |
|htmlHelp | `string` | | Help text with support for HTML markup | all fields | |
|contextual | `boolean` | false | If `true`, it will prevent the field from appearing in the dialog box for a widget | all fields | |
|def | depends on field type | | The default value for the field | most fields, excluding areas, singletons, objects, and arrays | |
|[sortify](sortify.md) | `boolean` | false | If `true`, make sort() operations on the field case-insensitive and more intuitive  | [string](../string.md), [email](../email.md), [slug](../slug.md), [select](../select.md) | |
|searchable | `boolean` | `true` | If false a field will not inform sitewide search | [string](../string.md), [area](../area.md), [singleton](../singleton.md) | |
|limit | `int` | | sets the max number of tags in a tag field, the max number of widgets in an area, and the max number of entries in an array  |[tags](../tags.md), [area](../area.md), [array](../array.md)  | |
|[choices](choices.md) | `array` | | An array of values that the user can select from with each being an object with value and label properties | [boolean](../boolean.md) [select](../select.md), [checkbox](../checkbox.md) | `label`, `value`, `showFields` |
