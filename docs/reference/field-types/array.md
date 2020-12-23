# `array`

An `array` field has its own field model and allows the user to add one or more items that use the fields in that model. These items are stored as objects in an array in the database.

This is useful for collections of structured data that clearly belong to a parent document but won't have relationships to other documents, such as multiple sets of contact information for business locations or tabs in a widget.

If the objects in the array are also related to other documents (pieces or pages), consider using a [relationship](relationship.md) field instead.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `contactInfo` below).

```javascript
contactInfo: {
  label: 'Contact information',
  type: 'array',
  titleField: 'city',
  fields: {
    add: {
      address: {
        type: 'string',
        label: 'Address'
      },
      city: {
        type: 'string',
        label: 'City'
      },
      email: {
        type: 'email',
        label: 'Email address'
      }
    }
  }
}
```

### Properties

#### Required

|  Property | Type | Default | Description | Sub-properties |
|-----------|-----------|-----------|-----------|:------------:|
|label | String | | The field label in the user interface | |
|type | String | | Declares the field type (`array` for this type) | |
|fields | Object | | The set of fields present for each object. They use the `add` property the same way as a module's top-level `fields` option. | `add` |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|min | Integer |  | The minimum number of entries required in the array |
|max | Integer |  | The maximum number of entries allowed in the array |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |
|titleField | String |  | The name of one of the array model's fields (the `add` object key). If provided, the user interface will use the value of that field as a distinguishing label for each entry in the array. |

::: tip NOTE
- If there is no `titleField` value, the items are numbered.
- Setting `titleField` is recommended to improve clarity for content editors.
- `titleField` can access `relationship` sub-field documents by using dot notation (e.g., `_team[0].mascot`).
:::

## Template usage

Nujucks provides the [`{% for %}` template tag](https://mozilla.github.io/nunjucks/templating.html#for) to loop over arrays.

```django
<ul>
{% for contact in data.piece.contactInfo %}
  <li>{{ contact.city }}: {{ contact.email }}</li>
{% endfor %}
</ul>
```