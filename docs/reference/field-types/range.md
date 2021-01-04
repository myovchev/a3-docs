# `range`

A `range` field provides [range input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range) for selecting a numeric value, often represented in the browser as a slider. The step option may be used along with min and max, if desired, to effectively limit the results to integers.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `REPLACE ME` below).

```javascript
{
  type: 'range',
  name: 'fontSize',
  label: 'Font Size',
  min: 18,
  max: 32,
  step: 2 // optional
}
```

### Properties

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|required | Boolean | false | If `true`, the field is mandatory |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|type | String | | Declares the field type (`range` for this type) |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|min | Integer |  | The minimum acceptable value for the field |
|max | Integer |  | The maximum acceptable value for the field |
|step | Integer |  | The interval between numbers |
