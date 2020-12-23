# `area`

The `area` field type defines an editable content area that allows users to add a series of widgets. The properties configured in `options` specify the allowed widget types and, in some cases, the configuration for those widgets.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `body` below).

```javascript
body: {
  label: 'Body content',
  type: 'area',
  options: {
    widgets: {
      '@apostrophecms/image': {},
      '@apostrophecms/video': {},
      '@apostrophecms/richs-text': {}
    }
  }
}
```
### Properties

#### Required

|  Property | Type | Default | Description | Sub-properties |
|-----------|-----------|-----------|-----------|:------------:|
|label | String | | The field label in the user interface | |
|[options](/reference/field-types/field-properties/options.md)| Object | | A configuration object for the area UI | `widgets` |
|type | String | | Declares the field type (`area` for this type) | |

The primary property inside of `options` is `widgets`. The `widgets` value is an object of widgets and their configuration. For more information about the configuration for commonly used widgets, read the [standard widgets guide](TODO).

#### Optional

|  Property | Type | Default | Description |
|-----------|-----------|-----------|-----------|
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|max | Integer | | Limits the number of widgets that can be added to the area |
|required | Boolean | false | If `true`, the field is mandatory |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |

## Template usage

Add an area to a template using the `{% area ... %}` template tag.

```django
Template tag format:
{% area [document context], [field name] %}
Example:
{% area data.page, 'intro' %}
```
