# `color`

A `color` field provides a color picker interface. Colors are saved as strings in [8 digit hex code](https://caniuse.com/css-rrggbbaa), or `#rrggbbaa`, format.

<!-- TODO: Add vue-color options config documentation once supported. -->

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `themeColor` below).

```javascript
themeColor: {
  type: 'color',
  label: 'Theme color'
}
```

### Properties

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|type | String | | Declares the field type (`color` for this type) |

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
<button style="background-color: {{ data.piece.themeColor or '#639' }}">
  Enhance
</button>
```