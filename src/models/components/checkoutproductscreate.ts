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

export type CheckoutProductsCreateMetadata = string | number | boolean;

export type CheckoutProductsCreateCustomFieldData =
  | string
  | number
  | boolean
  | Date;

export type CheckoutProductsCreateCustomerMetadata = string | number | boolean;

/**
 * Create a new checkout session from a list of products.
 *
 * @remarks
 * Customers will be able to switch between those products.
 *
 * Metadata set on the checkout will be copied
 * to the resulting order and/or subscription.
 */
export type CheckoutProductsCreate = {
  /**
   * Key-value object allowing you to store additional information.
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
  metadata?: { [k: string]: string | number | boolean } | undefined;
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?:
    | { [k: string]: string | number | boolean | Date }
    | undefined;
  /**
   * ID of the discount to apply to the checkout.
   */
  discountId?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | undefined;
  amount?: number | null | undefined;
  /**
   * ID of an existing customer in the organization. The customer data will be pre-filled in the checkout form. The resulting order will be linked to this customer.
   */
  customerId?: string | null | undefined;
  customerName?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerIpAddress?: string | null | undefined;
  customerBillingAddress?: Address | null | undefined;
  customerTaxId?: string | null | undefined;
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
  customerMetadata?: { [k: string]: string | number | boolean } | undefined;
  /**
   * ID of a subscription to upgrade. It must be on a free pricing. If checkout is successful, metadata set on this checkout will be copied to the subscription, and existing keys will be overwritten.
   */
  subscriptionId?: string | null | undefined;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl?: string | null | undefined;
  /**
   * If you plan to embed the checkout session, set this to the Origin of the embedding page. It'll allow the Polar iframe to communicate with the parent page.
   */
  embedOrigin?: string | null | undefined;
  /**
   * List of product IDs available to select at that checkout. The first one will be selected by default.
   */
  products: Array<string>;
};

/** @internal */
export const CheckoutProductsCreateMetadata$inboundSchema: z.ZodType<
  CheckoutProductsCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutProductsCreateMetadata$Outbound = string | number | boolean;

/** @internal */
export const CheckoutProductsCreateMetadata$outboundSchema: z.ZodType<
  CheckoutProductsCreateMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutProductsCreateMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutProductsCreateMetadata$ {
  /** @deprecated use `CheckoutProductsCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutProductsCreateMetadata$inboundSchema;
  /** @deprecated use `CheckoutProductsCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutProductsCreateMetadata$outboundSchema;
  /** @deprecated use `CheckoutProductsCreateMetadata$Outbound` instead. */
  export type Outbound = CheckoutProductsCreateMetadata$Outbound;
}

export function checkoutProductsCreateMetadataToJSON(
  checkoutProductsCreateMetadata: CheckoutProductsCreateMetadata,
): string {
  return JSON.stringify(
    CheckoutProductsCreateMetadata$outboundSchema.parse(
      checkoutProductsCreateMetadata,
    ),
  );
}

export function checkoutProductsCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutProductsCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutProductsCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutProductsCreateMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutProductsCreateCustomFieldData$inboundSchema: z.ZodType<
  CheckoutProductsCreateCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.string().datetime({ offset: true }).transform(v => new Date(v)),
]);

/** @internal */
export type CheckoutProductsCreateCustomFieldData$Outbound =
  | string
  | number
  | boolean
  | string;

/** @internal */
export const CheckoutProductsCreateCustomFieldData$outboundSchema: z.ZodType<
  CheckoutProductsCreateCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutProductsCreateCustomFieldData
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
export namespace CheckoutProductsCreateCustomFieldData$ {
  /** @deprecated use `CheckoutProductsCreateCustomFieldData$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutProductsCreateCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutProductsCreateCustomFieldData$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutProductsCreateCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutProductsCreateCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutProductsCreateCustomFieldData$Outbound;
}

export function checkoutProductsCreateCustomFieldDataToJSON(
  checkoutProductsCreateCustomFieldData: CheckoutProductsCreateCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutProductsCreateCustomFieldData$outboundSchema.parse(
      checkoutProductsCreateCustomFieldData,
    ),
  );
}

export function checkoutProductsCreateCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutProductsCreateCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutProductsCreateCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutProductsCreateCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutProductsCreateCustomerMetadata$inboundSchema: z.ZodType<
  CheckoutProductsCreateCustomerMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutProductsCreateCustomerMetadata$Outbound =
  | string
  | number
  | boolean;

/** @internal */
export const CheckoutProductsCreateCustomerMetadata$outboundSchema: z.ZodType<
  CheckoutProductsCreateCustomerMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutProductsCreateCustomerMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutProductsCreateCustomerMetadata$ {
  /** @deprecated use `CheckoutProductsCreateCustomerMetadata$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutProductsCreateCustomerMetadata$inboundSchema;
  /** @deprecated use `CheckoutProductsCreateCustomerMetadata$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutProductsCreateCustomerMetadata$outboundSchema;
  /** @deprecated use `CheckoutProductsCreateCustomerMetadata$Outbound` instead. */
  export type Outbound = CheckoutProductsCreateCustomerMetadata$Outbound;
}

export function checkoutProductsCreateCustomerMetadataToJSON(
  checkoutProductsCreateCustomerMetadata:
    CheckoutProductsCreateCustomerMetadata,
): string {
  return JSON.stringify(
    CheckoutProductsCreateCustomerMetadata$outboundSchema.parse(
      checkoutProductsCreateCustomerMetadata,
    ),
  );
}

export function checkoutProductsCreateCustomerMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutProductsCreateCustomerMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutProductsCreateCustomerMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutProductsCreateCustomerMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutProductsCreate$inboundSchema: z.ZodType<
  CheckoutProductsCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  custom_field_data: z.record(
    z.union([
      z.string(),
      z.number().int(),
      z.boolean(),
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ]),
  ).optional(),
  discount_id: z.nullable(z.string()).optional(),
  allow_discount_codes: z.boolean().default(true),
  amount: z.nullable(z.number().int()).optional(),
  customer_id: z.nullable(z.string()).optional(),
  customer_name: z.nullable(z.string()).optional(),
  customer_email: z.nullable(z.string()).optional(),
  customer_ip_address: z.nullable(z.string()).optional(),
  customer_billing_address: z.nullable(Address$inboundSchema).optional(),
  customer_tax_id: z.nullable(z.string()).optional(),
  customer_metadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean()]),
  ).optional(),
  subscription_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
  embed_origin: z.nullable(z.string()).optional(),
  products: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "discount_id": "discountId",
    "allow_discount_codes": "allowDiscountCodes",
    "customer_id": "customerId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_ip_address": "customerIpAddress",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "customer_metadata": "customerMetadata",
    "subscription_id": "subscriptionId",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
  });
});

/** @internal */
export type CheckoutProductsCreate$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | undefined;
  custom_field_data?:
    | { [k: string]: string | number | boolean | string }
    | undefined;
  discount_id?: string | null | undefined;
  allow_discount_codes: boolean;
  amount?: number | null | undefined;
  customer_id?: string | null | undefined;
  customer_name?: string | null | undefined;
  customer_email?: string | null | undefined;
  customer_ip_address?: string | null | undefined;
  customer_billing_address?: Address$Outbound | null | undefined;
  customer_tax_id?: string | null | undefined;
  customer_metadata?: { [k: string]: string | number | boolean } | undefined;
  subscription_id?: string | null | undefined;
  success_url?: string | null | undefined;
  embed_origin?: string | null | undefined;
  products: Array<string>;
};

/** @internal */
export const CheckoutProductsCreate$outboundSchema: z.ZodType<
  CheckoutProductsCreate$Outbound,
  z.ZodTypeDef,
  CheckoutProductsCreate
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  customFieldData: z.record(
    z.union([
      z.string(),
      z.number().int(),
      z.boolean(),
      z.date().transform(v => v.toISOString()),
    ]),
  ).optional(),
  discountId: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.boolean().default(true),
  amount: z.nullable(z.number().int()).optional(),
  customerId: z.nullable(z.string()).optional(),
  customerName: z.nullable(z.string()).optional(),
  customerEmail: z.nullable(z.string()).optional(),
  customerIpAddress: z.nullable(z.string()).optional(),
  customerBillingAddress: z.nullable(Address$outboundSchema).optional(),
  customerTaxId: z.nullable(z.string()).optional(),
  customerMetadata: z.record(
    z.union([z.string(), z.number().int(), z.boolean()]),
  ).optional(),
  subscriptionId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
  embedOrigin: z.nullable(z.string()).optional(),
  products: z.array(z.string()),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    discountId: "discount_id",
    allowDiscountCodes: "allow_discount_codes",
    customerId: "customer_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerIpAddress: "customer_ip_address",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    customerMetadata: "customer_metadata",
    subscriptionId: "subscription_id",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutProductsCreate$ {
  /** @deprecated use `CheckoutProductsCreate$inboundSchema` instead. */
  export const inboundSchema = CheckoutProductsCreate$inboundSchema;
  /** @deprecated use `CheckoutProductsCreate$outboundSchema` instead. */
  export const outboundSchema = CheckoutProductsCreate$outboundSchema;
  /** @deprecated use `CheckoutProductsCreate$Outbound` instead. */
  export type Outbound = CheckoutProductsCreate$Outbound;
}

export function checkoutProductsCreateToJSON(
  checkoutProductsCreate: CheckoutProductsCreate,
): string {
  return JSON.stringify(
    CheckoutProductsCreate$outboundSchema.parse(checkoutProductsCreate),
  );
}

export function checkoutProductsCreateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutProductsCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutProductsCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutProductsCreate' from JSON`,
  );
}
