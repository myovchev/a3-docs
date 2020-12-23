# `integer`

`integer` adds an editable integer field to the schema. You may set minimum and maximum values using the `min` and `max` options.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `stars` below).

```javascript
rating: {
  label: 'Rate the movie from 1-5',
  type: 'integer',
  min: 1,
  max: 5
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

This example uses a Nunjucks [for tag](https://mozilla.github.io/nunjucks/templating.html#for) and [range function](https://mozilla.github.io/nunjucks/templating.html#range-start-stop-step).

```django
Rating:
{% for i in range(1, data.piece.stars) -%}
  ⭐️
{%- endfor %}
```