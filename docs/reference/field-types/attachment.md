# `attachment`

An `attachment` field allows the user to upload a file to the server, or replace a file which was previously uploaded. Attachments are most often used indirectly through the [image](TODO) and [file](TODO) piece types. Each of those piece types contains an attachment field and some metadata fields, making them a convenient way to reuse files.

You may also use attachment fields directly as well, however **doing so means that the uploaded file will not be available in the media library or file manager**. It will only be accessible as a property of the piece or page where it is uploaded. This can be appropriate for files that are only relevant for a single piece of content, such as resumés and job applications for a specific person.

## Module field definition

All fields in a piece or page module use their object key as their database field name (e.g., `resume` below).

```javascript
resume: {
  label: 'Resumé',
  type: 'attachment',
  group: 'office'
},
```

### Properties

#### Required

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|name | String | | Sets the name of the field in the database |
|label | String | | The field label in the user interface |
|type | String | | Declares the field type (`attachment` for this type) |

#### Optional

|  Property | Type   | Default | Description |
|-----------|-----------|-----------|-----------|------------|
|aspectRatio | array | | if set to an array like \[ 2, 1 \], the image must have that aspect ratio and will be autocropped if the user does not manually crop. Only suitable if group is images. |
|contextual | Boolean | false | If `true`, it will prevent the field from appearing in the editor modal |
|crop | boolean | false | If `true`, the user may crop the attachment. Only suitable if group is images. |
|group | String |  | Can be set to "image" or "office" to limit the file types that can be uploaded. Other groups can be configured via the `fileGroups` option of the [apostrophe-attachments](/reference/modules/apostrophe-attachments/README.md) module. |
|help | String | | Help text for the field that will appear with the field's label |
|htmlHelp | String | | Help text with support for HTML markup | |
|minSize | array | | if set to an array like \[ 640, 480 \], the image must have at least the specified minimum width and height. Only suitable if group is images. |
|readOnly | Boolean | false | If `true`, prevents the user from editing the field value |
|required | Boolean | false | If `true`, the field is mandatory |


::: warning NOTE
The uploaded files are stored in a web-accessible folder, however their file names are prepended with a randomized ID to avoid naming collisions.
:::


## Template usage

Once an attachment field has a value, you can obtain the file's public URL with the `apos.attachments.url` template helper.

```django
<a href="{{ apos.attachment.url(data.piece.resume) }}">Download</a>
```