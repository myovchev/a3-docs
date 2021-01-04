# `url`

`url` adds an editable URL field to the schema.

::: tip
Apostrophe will detect common mistakes, like leaving off `http://`, and add them. Common XSS attack vectors are laundered and discarded. Only "safe" URL schemes, e.g. `http`, `https`, `ftp` and `mailto`, are permitted.
:::

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `REPLACE ME` below).

```javascript
{
  name: 'portfolio',
  label: 'Portfolio URL',
  type: 'url'
}
```

### Properties

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|required | Boolean | false | If `true`, the field is mandatory |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|type | String | | Declares the field type (`url` for this type) |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
