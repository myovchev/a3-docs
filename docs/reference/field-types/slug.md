# `slug`

`slug` adds a slug field to the schema for specifying the contextual location of content in your site. Usually there is only one, named `slug`, and it is already part of your schema when extending pieces or custom pages.

By default slugs are sanitized.

### Properties

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|required | Boolean | false | If `true`, the field is mandatory |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|type | String | | Declares the field type (`slug` for this type) |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup |
|page | Boolean | false | If `true`, then the slug field is describing a page and slashes are allowed |
|[sortify](/reference/field-types/field-properties/sortify.md) | Boolean | false | If `true`, creates "sortified" fields |
