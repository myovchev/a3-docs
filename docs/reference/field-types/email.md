# `email`

`email` fields operate similarly to `string` fields, but will only accept a valid email address.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `workEmail` below).

```javascript
workEmail: {
  label: 'Work email address',
  type: 'email'
}
```

### Properties

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|label | String | | The field label in the user interface |
|type | String | | Declares the field type (`email` for this type) |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |

## Template usage

```django
Email: {{ data.piece.workEmail }}
```