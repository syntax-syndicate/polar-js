# ProductPriceOneTimeFixed

A one-time price for a product.

## Example Usage

```typescript
import { ProductPriceOneTimeFixed } from "@polar-sh/sdk/models/components/productpriceonetimefixed.js";

let value: ProductPriceOneTimeFixed = {
  createdAt: new Date("2023-12-26T04:21:26.793Z"),
  modifiedAt: new Date("2025-04-09T10:18:19.507Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  priceAmount: 636061,
};
```

## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                   | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Creation timestamp of the object.                                                             |
| `modifiedAt`                                                                                  | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | Last modification timestamp of the object.                                                    |
| `id`                                                                                          | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the price.                                                                          |
| `amountType`                                                                                  | *string*                                                                                      | :heavy_check_mark:                                                                            | N/A                                                                                           |
| `isArchived`                                                                                  | *boolean*                                                                                     | :heavy_check_mark:                                                                            | Whether the price is archived and no longer available.                                        |
| `productId`                                                                                   | *string*                                                                                      | :heavy_check_mark:                                                                            | The ID of the product owning the price.                                                       |
| `priceCurrency`                                                                               | *string*                                                                                      | :heavy_check_mark:                                                                            | The currency.                                                                                 |
| `priceAmount`                                                                                 | *number*                                                                                      | :heavy_check_mark:                                                                            | The price in cents.                                                                           |
| `type`                                                                                        | *string*                                                                                      | :heavy_check_mark:                                                                            | The type of the price.                                                                        |