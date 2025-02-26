# CustomerUpdate

## Example Usage

```typescript
import { CustomerUpdate } from "@polar-sh/sdk/models/components/customerupdate.js";

let value: CustomerUpdate = {};
```

## Fields

| Field                                                    | Type                                                     | Required                                                 | Description                                              |
| -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- | -------------------------------------------------------- |
| `metadata`                                               | Record<string, *components.CustomerUpdateMetadata*>      | :heavy_minus_sign:                                       | N/A                                                      |
| `email`                                                  | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `name`                                                   | *string*                                                 | :heavy_minus_sign:                                       | N/A                                                      |
| `billingAddress`                                         | [components.Address](../../models/components/address.md) | :heavy_minus_sign:                                       | N/A                                                      |
| `taxId`                                                  | *components.CustomerUpdateTaxId*[]                       | :heavy_minus_sign:                                       | N/A                                                      |