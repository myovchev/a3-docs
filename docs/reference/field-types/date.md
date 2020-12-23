# `date`

`date` adds an editable date field to the schema. A friendly date picker UI is presented when the field is clicked. Dates are stored as strings in `YYYY-MM-DD` format.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `birthday` below). 1

```javascript
birthday: {
  label: 'What is your birthday?',
  type: 'date'
}
```

### Properties

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|label | String | | The field label in the user interface |
|type | String | | Declares the field type (`date` for this type) |

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |

## Template usage

A date value will often be paired with the [date template filter](TODO).

```django
Their birthday is {{ data.piece.birthday | date('MMMM D, YYYY') }}.
```