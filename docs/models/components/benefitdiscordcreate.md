# BenefitDiscordCreate

## Example Usage

```typescript
import { BenefitDiscordCreate } from "@polar-sh/sdk/models/components/benefitdiscordcreate.js";

let value: BenefitDiscordCreate = {
  description: "amongst supposing elastic",
  properties: {
    guildToken: "<value>",
    roleId: "<id>",
  },
};
```

## Fields

| Field                                                                                                  | Type                                                                                                   | Required                                                                                               | Description                                                                                            |
| ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ |
| `type`                                                                                                 | *string*                                                                                               | :heavy_check_mark:                                                                                     | N/A                                                                                                    |
| `description`                                                                                          | *string*                                                                                               | :heavy_check_mark:                                                                                     | The description of the benefit. Will be displayed on products having this benefit.                     |
| `organizationId`                                                                                       | *string*                                                                                               | :heavy_minus_sign:                                                                                     | The ID of the organization owning the benefit. **Required unless you use an organization token.**      |
| `properties`                                                                                           | [components.BenefitDiscordCreateProperties](../../models/components/benefitdiscordcreateproperties.md) | :heavy_check_mark:                                                                                     | Properties to create a benefit of type `discord`.                                                      |