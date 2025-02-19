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

export type CheckoutUpdateCustomFieldData = string | number | boolean | Date;

export type CheckoutUpdateMetadata = string | number | boolean;

export type CheckoutUpdateCustomerMetadata = string | number | boolean;

/**
 * Update an existing checkout session using an access token.
 */
export type CheckoutUpdate = {
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
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  /**
   * ID of the discount to apply to the checkout.
   */
  discountId?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | null | undefined;
  customerIpAddress?: string | null | undefined;
  /**
   * Key-value object allowing you to store additional information that'll be copied to the created customer.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  customerMetadata?:
    | { [k: string]: string | number | boolean }
    | null
    | undefined;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl?: string | null | undefined;
  /**
   * If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Polar iframe to communicate with the parent page.
   */
  embedOrigin?: string | null | undefined;
};

/** @internal */
export const CheckoutUpdateCustomFieldData$inboundSchema: z.ZodType<
  CheckoutUpdateCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.string().datetime({ offset: true }).transform(v => new Date(v)),
]);

/** @internal */
export type CheckoutUpdateCustomFieldData$Outbound =
  | string
  | number
  | boolean
  | string;

/** @internal */
export const CheckoutUpdateCustomFieldData$outboundSchema: z.ZodType<
  CheckoutUpdateCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutUpdateCustomFieldData
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
export namespace CheckoutUpdateCustomFieldData$ {
  /** @deprecated use `CheckoutUpdateCustomFieldData$inboundSchema` instead. */
  export const inboundSchema = CheckoutUpdateCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutUpdateCustomFieldData$outboundSchema` instead. */
  export const outboundSchema = CheckoutUpdateCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutUpdateCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutUpdateCustomFieldData$Outbound;
}

export function checkoutUpdateCustomFieldDataToJSON(
  checkoutUpdateCustomFieldData: CheckoutUpdateCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutUpdateCustomFieldData$outboundSchema.parse(
      checkoutUpdateCustomFieldData,
    ),
  );
}

export function checkoutUpdateCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdateCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutUpdateCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdateCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutUpdateMetadata$inboundSchema: z.ZodType<
  CheckoutUpdateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutUpdateMetadata$Outbound = string | number | boolean;

/** @internal */
export const CheckoutUpdateMetadata$outboundSchema: z.ZodType<
  CheckoutUpdateMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutUpdateMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutUpdateMetadata$ {
  /** @deprecated use `CheckoutUpdateMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutUpdateMetadata$inboundSchema;
  /** @deprecated use `CheckoutUpdateMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutUpdateMetadata$outboundSchema;
  /** @deprecated use `CheckoutUpdateMetadata$Outbound` instead. */
  export type Outbound = CheckoutUpdateMetadata$Outbound;
}

export function checkoutUpdateMetadataToJSON(
  checkoutUpdateMetadata: CheckoutUpdateMetadata,
): string {
  return JSON.stringify(
    CheckoutUpdateMetadata$outboundSchema.parse(checkoutUpdateMetadata),
  );
}

export function checkoutUpdateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutUpdateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdateMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutUpdateCustomerMetadata$inboundSchema: z.ZodType<
  CheckoutUpdateCustomerMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutUpdateCustomerMetadata$Outbound = string | number | boolean;

/** @internal */
export const CheckoutUpdateCustomerMetadata$outboundSchema: z.ZodType<
  CheckoutUpdateCustomerMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutUpdateCustomerMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutUpdateCustomerMetadata$ {
  /** @deprecated use `CheckoutUpdateCustomerMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutUpdateCustomerMetadata$inboundSchema;
  /** @deprecated use `CheckoutUpdateCustomerMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutUpdateCustomerMetadata$outboundSchema;
  /** @deprecated use `CheckoutUpdateCustomerMetadata$Outbound` instead. */
  export type Outbound = CheckoutUpdateCustomerMetadata$Outbound;
}

export function checkoutUpdateCustomerMetadataToJSON(
  checkoutUpdateCustomerMetadata: CheckoutUpdateCustomerMetadata,
): string {
  return JSON.stringify(
    CheckoutUpdateCustomerMetadata$outboundSchema.parse(
      checkoutUpdateCustomerMetadata,
    ),
  );
}

export function checkoutUpdateCustomerMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdateCustomerMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutUpdateCustomerMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdateCustomerMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutUpdate$inboundSchema: z.ZodType<
  CheckoutUpdate,
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
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  discount_id: z.nullable(z.string()).optional(),
  allow_discount_codes: z.nullable(z.boolean()).optional(),
  customer_ip_address: z.nullable(z.string()).optional(),
  customer_metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  success_url: z.nullable(z.string()).optional(),
  embed_origin: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "product_id": "productId",
    "product_price_id": "productPriceId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "discount_id": "discountId",
    "allow_discount_codes": "allowDiscountCodes",
    "customer_ip_address": "customerIpAddress",
    "customer_metadata": "customerMetadata",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
  });
});

/** @internal */
export type CheckoutUpdate$Outbound = {
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
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  discount_id?: string | null | undefined;
  allow_discount_codes?: boolean | null | undefined;
  customer_ip_address?: string | null | undefined;
  customer_metadata?:
    | { [k: string]: string | number | boolean }
    | null
    | undefined;
  success_url?: string | null | undefined;
  embed_origin?: string | null | undefined;
};

/** @internal */
export const CheckoutUpdate$outboundSchema: z.ZodType<
  CheckoutUpdate$Outbound,
  z.ZodTypeDef,
  CheckoutUpdate
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
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  discountId: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.nullable(z.boolean()).optional(),
  customerIpAddress: z.nullable(z.string()).optional(),
  customerMetadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  successUrl: z.nullable(z.string()).optional(),
  embedOrigin: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    productId: "product_id",
    productPriceId: "product_price_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    discountId: "discount_id",
    allowDiscountCodes: "allow_discount_codes",
    customerIpAddress: "customer_ip_address",
    customerMetadata: "customer_metadata",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutUpdate$ {
  /** @deprecated use `CheckoutUpdate$inboundSchema` instead. */
  export const inboundSchema = CheckoutUpdate$inboundSchema;
  /** @deprecated use `CheckoutUpdate$outboundSchema` instead. */
  export const outboundSchema = CheckoutUpdate$outboundSchema;
  /** @deprecated use `CheckoutUpdate$Outbound` instead. */
  export type Outbound = CheckoutUpdate$Outbound;
}

export function checkoutUpdateToJSON(checkoutUpdate: CheckoutUpdate): string {
  return JSON.stringify(CheckoutUpdate$outboundSchema.parse(checkoutUpdate));
}

export function checkoutUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutUpdate' from JSON`,
  );
}
