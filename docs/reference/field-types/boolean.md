# `boolean`

A `boolean` field is a simple "True/False" choice. The value stored in the database will be either `true` or `false`. To customize the displayed values, use the `label` sub-property of [`choices`](/reference/field-types/field-properties/choices.md). The `value` for each choice must always be "true" or "false".

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `isSpecial` below).

```javascript
isSpecial: {
  label: 'Is this a special item?',
  type: 'boolean',
  choices: [
    {
      label: 'Yes, it is',
      value: true
    },
    {
      label: 'No, it is not',
      value: false
    }
  ]
}
```

### Properties

#### Required

|  Property | Type   | Default | Description | Sub-properties |
|-----------|-----------|-----------|-----------|------------|---|
|[choices](/reference/field-types/field-properties/choices.md) | `array` |  | An array of choices the user can select from. Each must be an object with value and label properties. |  [**showFields**](/reference/field-types/field-properties/choices.md#showfields) |
|label | String | | The field label in the user interface | |
|type | String | | Declares the field type (`boolean` for this type) |  |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|required | Boolean | false | If `true`, the field is mandatory |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |

<!-- TODO: Add once the feature is ported to A3 -->
<!-- |mandatory | String |  | If set, the string is displayed if the user does not set the field to the `true` choice. This can be used for required confirmation fields. | | -->

## Template usage

```django
<!-- To print the value: -->
{{ data.piece.isSpecial }}
<!-- or use it in a conditional: -->
<button class="{% if data.piece.isSpecial %}is-special{% endif %}">
  Engage
</button>
```