# `string`

`string` adds an editable text field to the schema.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `dogName` and `biography` below). 1

```javascript
dogName: {
  label: 'What is your dog\'s name?',
  type: 'string'
},
// Textarea
biography: {
  label: 'Write a short biography for your dog',
  type: 'string',
  textarea: true,
  max: 800
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
|min | Integer | | Sets the minimum number of characters allowed |
|max | Integer | | Sets the maximum number of characters allowed |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |
|textarea | Boolean | false | If `true`, use a textarea interface with multiple lines |

<!-- TODO: 2.x options not yet available -->
<!-- |pattern | String | | Regular expression to validate entries |
|patternErrorMessage | String | | Error message to display if `pattern` does not match |
|searchable | Boolean | true | If false, content from the area will not appear in search results. |
|[sortify](/reference/field-types/field-properties/sortify.md) | Boolean | false | If `true`, creates "sortified" fields | -->


## Template usage

The Nunjucks [nl2br](https://mozilla.github.io/nunjucks/templating.html#nl2br) tag can help print textarea strings with line breaks.

```django
<h2>{{ data.piece.dogName }}</h2>
<p>
  {{ data.piece.biography | nl2br }}
</p>
```