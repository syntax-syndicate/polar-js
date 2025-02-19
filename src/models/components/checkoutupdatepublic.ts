/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

export type CheckoutUpdatePublicCustomFieldData =
  | string
  | number
  | boolean
  | Date;

/**
 * Update an existing checkout session using the client secret.
 */
export type CheckoutUpdatePublic = {
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?:
    | { [k: string]: string | number | boolean | Date | null }
    | null
    | undefined;
  /**
   * ID of the product to checkout. Must be present in the checkout's product list.
   */
  productId?: string | null | undefined;
  /**
   * ID of the product price to checkout. Must correspond to a price present in the checkout's product list.
   *
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  productPriceId?: string | null | undefined;
  amount?: number | null | undefined;
  customerName?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerBillingAddress?: Address | null | undefined;
  customerTaxId?: string | null | undefined;
  /**
   * Discount code to apply to the checkout.
   */
  discountCode?: string | null | undefined;
};

/** @internal */
export const CheckoutUpdatePublicCustomFieldData$inboundSchema: z.ZodType<
  CheckoutUpdatePublicCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.string().datetime({ offset: true }).transform(v => new Date(v)),
]);

/** @internal */
export type CheckoutUpdatePublicCustomFieldData$Outbound =
  | string
  | number
  | boolean
  | string;

/** @internal */
export const CheckoutUpdatePublicCustomFieldData$outboundSchema: z.ZodType<
  CheckoutUpdatePublicCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutUpdatePublicCustomFieldData
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.date().transform(v => v.toISOString()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutUpdatePublicCustomFieldData$ {
  /** @deprecated use `CheckoutUpdatePublicCustomFieldData$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutUpdatePublicCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutUpdatePublicCustomFieldData$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutUpdatePublicCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutUpdatePublicCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutUpdatePublicCustomFieldData$Outbound;
}

export function checkoutUpdatePublicCustomFieldDataToJSON(
  checkoutUpdatePublicCustomFieldData: CheckoutUpdatePublicCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutUpdatePublicCustomFieldData$outboundSchema.parse(
      checkoutUpdatePublicCustomFieldData,
    ),
  );
}

export function checkoutUpdatePublicCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdatePublicCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutUpdatePublicCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdatePublicCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutUpdatePublic$inboundSchema: z.ZodType<
  CheckoutUpdatePublic,
  z.ZodTypeDef,
  unknown
> = z.object({
  custom_field_data: z.nullable(
    z.record(
      z.nullable(
        z.union([
          z.string(),
          z.number().int(),
          z.boolean(),
          z.string().datetime({ offset: true }).transform(v => new Date(v)),
        ]),
      ),
    ),
  ).optional(),
  product_id: z.nullable(z.string()).optional(),
  product_price_id: z.nullable(z.string()).optional(),
  amount: z.nullable(z.number().int()).optional(),
  customer_name: z.nullable(z.string()).optional(),
  customer_email: z.nullable(z.string()).optional(),
  customer_billing_address: z.nullable(Address$inboundSchema).optional(),
  customer_tax_id: z.nullable(z.string()).optional(),
  discount_code: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "product_id": "productId",
    "product_price_id": "productPriceId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "discount_code": "discountCode",
  });
});

/** @internal */
export type CheckoutUpdatePublic$Outbound = {
  custom_field_data?:
    | { [k: string]: string | number | boolean | string | null }
    | null
    | undefined;
  product_id?: string | null | undefined;
  product_price_id?: string | null | undefined;
  amount?: number | null | undefined;
  customer_name?: string | null | undefined;
  customer_email?: string | null | undefined;
  customer_billing_address?: Address$Outbound | null | undefined;
  customer_tax_id?: string | null | undefined;
  discount_code?: string | null | undefined;
};

/** @internal */
export const CheckoutUpdatePublic$outboundSchema: z.ZodType<
  CheckoutUpdatePublic$Outbound,
  z.ZodTypeDef,
  CheckoutUpdatePublic
> = z.object({
  customFieldData: z.nullable(
    z.record(
      z.nullable(
        z.union([
          z.string(),
          z.number().int(),
          z.boolean(),
          z.date().transform(v => v.toISOString()),
        ]),
      ),
    ),
  ).optional(),
  productId: z.nullable(z.string()).optional(),
  productPriceId: z.nullable(z.string()).optional(),
  amount: z.nullable(z.number().int()).optional(),
  customerName: z.nullable(z.string()).optional(),
  customerEmail: z.nullable(z.string()).optional(),
  customerBillingAddress: z.nullable(Address$outboundSchema).optional(),
  customerTaxId: z.nullable(z.string()).optional(),
  discountCode: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    productId: "product_id",
    productPriceId: "product_price_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    discountCode: "discount_code",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutUpdatePublic$ {
  /** @deprecated use `CheckoutUpdatePublic$inboundSchema` instead. */
  export const inboundSchema = CheckoutUpdatePublic$inboundSchema;
  /** @deprecated use `CheckoutUpdatePublic$outboundSchema` instead. */
  export const outboundSchema = CheckoutUpdatePublic$outboundSchema;
  /** @deprecated use `CheckoutUpdatePublic$Outbound` instead. */
  export type Outbound = CheckoutUpdatePublic$Outbound;
}

export function checkoutUpdatePublicToJSON(
  checkoutUpdatePublic: CheckoutUpdatePublic,
): string {
  return JSON.stringify(
    CheckoutUpdatePublic$outboundSchema.parse(checkoutUpdatePublic),
  );
}

export function checkoutUpdatePublicFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdatePublic, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutUpdatePublic$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdatePublic' from JSON`,
  );
}
