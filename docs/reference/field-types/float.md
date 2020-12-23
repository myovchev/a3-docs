# `float`

`float` adds an editable number field which supports decimal input. You may set minimum and maximum values using the `min` and `max` options.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `REPLACE ME` below).

```javascript
gpa: {
  label: 'What was your grade point average (GPA)?',
  type: 'float',
  min: 1.0,
  max: 4.5
}
```

### Properties

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|label | String | | The field label in the user interface |
|type | String | | Declares the field type (`float` for this type) |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|max | `float` |  | The maximum allowed value for the field |
|min | `float` |  | The minimum allowed value for the field |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |

## Template usage

```django
GPA: {{ data.piece.gpa }}
```