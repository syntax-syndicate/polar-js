# ProductPriceRecurringCustom

A pay-what-you-want recurring price for a product, i.e. a subscription.

## Example Usage

```typescript
import { ProductPriceRecurringCustom } from "@polar-sh/sdk/models/components/productpricerecurringcustom.js";

let value: ProductPriceRecurringCustom = {
  createdAt: new Date("2024-04-16T17:18:20.768Z"),
  modifiedAt: new Date("2024-07-12T23:28:59.820Z"),
  id: "<value>",
  isArchived: false,
  productId: "<value>",
  priceCurrency: "<value>",
  minimumAmount: 536178,
  maximumAmount: 681393,
  presetAmount: 277596,
  recurringInterval: "month",
};
```

## Fields

| Field                                                                                                | Type                                                                                                 | Required                                                                                             | Description                                                                                          |
| ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `createdAt`                                                                                          | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Creation timestamp of the object.                                                                    |
| `modifiedAt`                                                                                         | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)        | :heavy_check_mark:                                                                                   | Last modification timestamp of the object.                                                           |
| `id`                                                                                                 | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the price.                                                                                 |
| `amountType`                                                                                         | *string*                                                                                             | :heavy_check_mark:                                                                                   | N/A                                                                                                  |
| `isArchived`                                                                                         | *boolean*                                                                                            | :heavy_check_mark:                                                                                   | Whether the price is archived and no longer available.                                               |
| `productId`                                                                                          | *string*                                                                                             | :heavy_check_mark:                                                                                   | The ID of the product owning the price.                                                              |
| `priceCurrency`                                                                                      | *string*                                                                                             | :heavy_check_mark:                                                                                   | The currency.                                                                                        |
| `minimumAmount`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | The minimum amount the customer can pay.                                                             |
| `maximumAmount`                                                                                      | *number*                                                                                             | :heavy_check_mark:                                                                                   | The maximum amount the customer can pay.                                                             |
| `presetAmount`                                                                                       | *number*                                                                                             | :heavy_check_mark:                                                                                   | The initial amount shown to the customer.                                                            |
| `type`                                                                                               | *string*                                                                                             | :heavy_check_mark:                                                                                   | The type of the price.                                                                               |
| `recurringInterval`                                                                                  | [components.SubscriptionRecurringInterval](../../models/components/subscriptionrecurringinterval.md) | :heavy_check_mark:                                                                                   | N/A                                                                                                  |