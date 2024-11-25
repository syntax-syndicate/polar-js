/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

export type CheckoutPriceCreateMetadata = string | number | boolean;

/**
 * Key-value object storing custom field values.
 */
export type CheckoutPriceCreateCustomFieldData = {};

/**
 * Payment processor to use. Currently only Stripe is supported.
 */
export const CheckoutPriceCreatePaymentProcessor = {
  Stripe: "stripe",
} as const;
/**
 * Payment processor to use. Currently only Stripe is supported.
 */
export type CheckoutPriceCreatePaymentProcessor = ClosedEnum<
  typeof CheckoutPriceCreatePaymentProcessor
>;

/**
 * Create a new checkout session from a product price.
 *
 * @remarks
 *
 * Metadata set on the checkout will be copied
 * to the resulting order and/or subscription.
 */
export type CheckoutPriceCreate = {
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
  customFieldData?: CheckoutPriceCreateCustomFieldData | undefined;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  paymentProcessor?: "stripe" | undefined;
  /**
   * ID of the discount to apply to the checkout.
   */
  discountId?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | undefined;
  amount?: number | null | undefined;
  customerName?: string | null | undefined;
  customerEmail?: string | null | undefined;
  customerIpAddress?: string | null | undefined;
  customerBillingAddress?: Address | null | undefined;
  customerTaxId?: string | null | undefined;
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
   * ID of the product price to checkout.
   */
  productPriceId: string;
};

/** @internal */
export const CheckoutPriceCreateMetadata$inboundSchema: z.ZodType<
  CheckoutPriceCreateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutPriceCreateMetadata$Outbound = string | number | boolean;

/** @internal */
export const CheckoutPriceCreateMetadata$outboundSchema: z.ZodType<
  CheckoutPriceCreateMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutPriceCreateMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPriceCreateMetadata$ {
  /** @deprecated use `CheckoutPriceCreateMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutPriceCreateMetadata$inboundSchema;
  /** @deprecated use `CheckoutPriceCreateMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutPriceCreateMetadata$outboundSchema;
  /** @deprecated use `CheckoutPriceCreateMetadata$Outbound` instead. */
  export type Outbound = CheckoutPriceCreateMetadata$Outbound;
}

export function checkoutPriceCreateMetadataToJSON(
  checkoutPriceCreateMetadata: CheckoutPriceCreateMetadata,
): string {
  return JSON.stringify(
    CheckoutPriceCreateMetadata$outboundSchema.parse(
      checkoutPriceCreateMetadata,
    ),
  );
}

export function checkoutPriceCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPriceCreateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutPriceCreateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPriceCreateMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutPriceCreateCustomFieldData$inboundSchema: z.ZodType<
  CheckoutPriceCreateCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CheckoutPriceCreateCustomFieldData$Outbound = {};

/** @internal */
export const CheckoutPriceCreateCustomFieldData$outboundSchema: z.ZodType<
  CheckoutPriceCreateCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutPriceCreateCustomFieldData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPriceCreateCustomFieldData$ {
  /** @deprecated use `CheckoutPriceCreateCustomFieldData$inboundSchema` instead. */
  export const inboundSchema = CheckoutPriceCreateCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutPriceCreateCustomFieldData$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutPriceCreateCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutPriceCreateCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutPriceCreateCustomFieldData$Outbound;
}

export function checkoutPriceCreateCustomFieldDataToJSON(
  checkoutPriceCreateCustomFieldData: CheckoutPriceCreateCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutPriceCreateCustomFieldData$outboundSchema.parse(
      checkoutPriceCreateCustomFieldData,
    ),
  );
}

export function checkoutPriceCreateCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPriceCreateCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutPriceCreateCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPriceCreateCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutPriceCreatePaymentProcessor$inboundSchema: z.ZodNativeEnum<
  typeof CheckoutPriceCreatePaymentProcessor
> = z.nativeEnum(CheckoutPriceCreatePaymentProcessor);

/** @internal */
export const CheckoutPriceCreatePaymentProcessor$outboundSchema:
  z.ZodNativeEnum<typeof CheckoutPriceCreatePaymentProcessor> =
    CheckoutPriceCreatePaymentProcessor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPriceCreatePaymentProcessor$ {
  /** @deprecated use `CheckoutPriceCreatePaymentProcessor$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutPriceCreatePaymentProcessor$inboundSchema;
  /** @deprecated use `CheckoutPriceCreatePaymentProcessor$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutPriceCreatePaymentProcessor$outboundSchema;
}

/** @internal */
export const CheckoutPriceCreate$inboundSchema: z.ZodType<
  CheckoutPriceCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  custom_field_data: z.lazy(() =>
    CheckoutPriceCreateCustomFieldData$inboundSchema
  ).optional(),
  payment_processor: z.literal("stripe").optional(),
  discount_id: z.nullable(z.string()).optional(),
  allow_discount_codes: z.boolean().default(true),
  amount: z.nullable(z.number().int()).optional(),
  customer_name: z.nullable(z.string()).optional(),
  customer_email: z.nullable(z.string()).optional(),
  customer_ip_address: z.nullable(z.string()).optional(),
  customer_billing_address: z.nullable(Address$inboundSchema).optional(),
  customer_tax_id: z.nullable(z.string()).optional(),
  subscription_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
  embed_origin: z.nullable(z.string()).optional(),
  product_price_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "payment_processor": "paymentProcessor",
    "discount_id": "discountId",
    "allow_discount_codes": "allowDiscountCodes",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_ip_address": "customerIpAddress",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "subscription_id": "subscriptionId",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
    "product_price_id": "productPriceId",
  });
});

/** @internal */
export type CheckoutPriceCreate$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | undefined;
  custom_field_data?: CheckoutPriceCreateCustomFieldData$Outbound | undefined;
  payment_processor: "stripe";
  discount_id?: string | null | undefined;
  allow_discount_codes: boolean;
  amount?: number | null | undefined;
  customer_name?: string | null | undefined;
  customer_email?: string | null | undefined;
  customer_ip_address?: string | null | undefined;
  customer_billing_address?: Address$Outbound | null | undefined;
  customer_tax_id?: string | null | undefined;
  subscription_id?: string | null | undefined;
  success_url?: string | null | undefined;
  embed_origin?: string | null | undefined;
  product_price_id: string;
};

/** @internal */
export const CheckoutPriceCreate$outboundSchema: z.ZodType<
  CheckoutPriceCreate$Outbound,
  z.ZodTypeDef,
  CheckoutPriceCreate
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  customFieldData: z.lazy(() =>
    CheckoutPriceCreateCustomFieldData$outboundSchema
  ).optional(),
  paymentProcessor: z.literal("stripe").default("stripe"),
  discountId: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.boolean().default(true),
  amount: z.nullable(z.number().int()).optional(),
  customerName: z.nullable(z.string()).optional(),
  customerEmail: z.nullable(z.string()).optional(),
  customerIpAddress: z.nullable(z.string()).optional(),
  customerBillingAddress: z.nullable(Address$outboundSchema).optional(),
  customerTaxId: z.nullable(z.string()).optional(),
  subscriptionId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
  embedOrigin: z.nullable(z.string()).optional(),
  productPriceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    paymentProcessor: "payment_processor",
    discountId: "discount_id",
    allowDiscountCodes: "allow_discount_codes",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerIpAddress: "customer_ip_address",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    subscriptionId: "subscription_id",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
    productPriceId: "product_price_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPriceCreate$ {
  /** @deprecated use `CheckoutPriceCreate$inboundSchema` instead. */
  export const inboundSchema = CheckoutPriceCreate$inboundSchema;
  /** @deprecated use `CheckoutPriceCreate$outboundSchema` instead. */
  export const outboundSchema = CheckoutPriceCreate$outboundSchema;
  /** @deprecated use `CheckoutPriceCreate$Outbound` instead. */
  export type Outbound = CheckoutPriceCreate$Outbound;
}

export function checkoutPriceCreateToJSON(
  checkoutPriceCreate: CheckoutPriceCreate,
): string {
  return JSON.stringify(
    CheckoutPriceCreate$outboundSchema.parse(checkoutPriceCreate),
  );
}

export function checkoutPriceCreateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPriceCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutPriceCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPriceCreate' from JSON`,
  );
}
