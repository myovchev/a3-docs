# `checkboxes`

A `checkboxes` field presents a list of options where a user can select multiple items, or possible none at all depending on the configuration. The values of the checkbox entries are set using the [`choices`](/reference/field-types/field-properties/choices.md) property and its sub-properties.

## Module field definition

```javascript
genres: {
  label: 'Select the genres in which this book belongs',
  type: 'checkbox',
  choices: [
    {
      label: 'Romance',
      value: 'Romance'
    },
    {
      label: 'Comedy',
      value: 'Comedy'
    },
    {
      label: 'Crime',
      value: 'Crime'
    }
  ]
}
```

### Properties

#### Required

|  Property | Type   | Default | Description | Sub-properties |
|-----------|-----------|-----------|-----------|------------|---|
|[choices](/reference/field-types/field-properties/choices.md) | `array` |  | An array of choices that the user can select from. Each must be an object with value and label properties. |  [showFields](/reference/field-types/field-properties/choices.md#showfields) |
|label | String | | The field label in the user interface | |
|type | String | | Declares the field type (`checkbox` for this type) |  |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |
|widgetContols | Boolean | false | If true, `checkbox` fields can be edited in line on the page if the field is in a widget |

## Template usage

Nujucks provides the [`{% for %}` template tag](https://mozilla.github.io/nunjucks/templating.html#for) that you can use to loop over the selected values.

```django
<ul>
{% for genre in data.piece.genres %}
  <li>{{ genre }}</li>
{% endfor %}
</ul>
```