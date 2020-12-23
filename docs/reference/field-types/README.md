# Field Reference

| Field | Description |
|-------|-------------|
|[area](/reference/field-types/area.md) | an editable content area |
|[array](/reference/field-types/array.md) | A field which can store one or more objects as an array. Has its own schema |
|[attachment](/reference/field-types/attachment.md) | provides access to upload a file to the server |
|[boolean](/reference/field-types/boolean.md) | provides a "True" or "False" input |
|[checkboxes](/reference/field-types/checkbox.md) | provides an array of checkboxes |
|[color](/reference/field-types/color.md) | provides a color picker |
|[date](/reference/field-types/date.md) | provides a date picker |
|[email](/reference/field-types/email.md) | accepts a valid email address  |
|[float](/reference/field-types/float.md) | accepts input of a decimal number with stepped parameters |
|[integer](/reference/field-types/integer.md) | accepts input of an integer |

## To update:

| Field | Description |
|-------|-------------|
|[relationship](/reference/field-types/relationship.md) | expresses a one-to-many relationship between this document and one or more pieces or pages |
|[relationshipReverse](/reference/field-types/relationship-reverse.md) | allows the user to see the "other side" of a joinByArray relationship |
|[object](/reference/field-types/object.md) | A field which can store a single object with its own schema |
|[password](/reference/field-types/password.md) | hidden text entry |
|[range](/reference/field-types/range.md) | "provides an input for selecting a range of numbers" |
|[select](/reference/field-types/select.md) | provides a single-select dropdown menu |
|[slug](/reference/field-types/slug.md) | A string which, when saved, is simplified to lowercase, hyphens, etc. suitable for use as part of a URL. All docs in Apostrophe have at least a field of this type named slug, but you may have more. |
|[string](/reference/field-types/string.md) | accepts text entry |
|[time](/reference/field-types/time.md) | provides entry for a time, which is stored in HH:MM:SS format |
|[url](/reference/field-types/url.md) | provides an editable URL field |

::: tip
You can also add more field types to the system; check out the source code of the [`apostrophe-attachments`](https://github.com/apostrophecms/apostrophe/tree/master/lib/modules/apostrophe-attachments) module for a good example.
:::

