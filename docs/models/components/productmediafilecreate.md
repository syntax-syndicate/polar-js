# ProductMediaFileCreate

Schema to create a file to be used as a product media file.

## Example Usage

```typescript
import { ProductMediaFileCreate } from "@polar-sh/sdk/models/components/productmediafilecreate.js";

let value: ProductMediaFileCreate = {
  name: "<value>",
  mimeType: "<value>",
  size: 270667,
  upload: {
    parts: [
      {
        number: 276109,
        chunkStart: 708466,
        chunkEnd: 108829,
      },
    ],
  },
};
```

## Fields

| Field                                                                                | Type                                                                                 | Required                                                                             | Description                                                                          |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------ |
| `organizationId`                                                                     | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `name`                                                                               | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `mimeType`                                                                           | *string*                                                                             | :heavy_check_mark:                                                                   | MIME type of the file. Only images are supported for this type of file.              |
| `size`                                                                               | *number*                                                                             | :heavy_check_mark:                                                                   | Size of the file. A maximum of 10 MB is allowed for this type of file.               |
| `checksumSha256Base64`                                                               | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |
| `upload`                                                                             | [components.S3FileCreateMultipart](../../models/components/s3filecreatemultipart.md) | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `service`                                                                            | *string*                                                                             | :heavy_check_mark:                                                                   | N/A                                                                                  |
| `version`                                                                            | *string*                                                                             | :heavy_minus_sign:                                                                   | N/A                                                                                  |