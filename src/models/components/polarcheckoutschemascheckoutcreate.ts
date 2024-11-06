/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

/**
 * Key-value object storing custom field values.
 */
export type PolarCheckoutSchemasCheckoutCreateCustomFieldData = {};

/**
 * Payment processor to use. Currently only Stripe is supported.
 */
export const PaymentProcessor = {
  Stripe: "stripe",
} as const;
/**
 * Payment processor to use. Currently only Stripe is supported.
 */
export type PaymentProcessor = ClosedEnum<typeof PaymentProcessor>;

/**
 * Create a new checkout session.
 *
 * @remarks
 *
 * Metadata set on the checkout will be copied
 * to the resulting order and/or subscription.
 */
export type PolarCheckoutSchemasCheckoutCreate = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be a string with a maximum length of **500 characters**.
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string } | undefined;
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?:
    | PolarCheckoutSchemasCheckoutCreateCustomFieldData
    | undefined;
  /**
   * Payment processor to use. Currently only Stripe is supported.
   */
  paymentProcessor?: "stripe" | undefined;
  /**
   * ID of the product price to checkout.
   */
  productPriceId: string;
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
};

/** @internal */
export const PolarCheckoutSchemasCheckoutCreateCustomFieldData$inboundSchema:
  z.ZodType<
    PolarCheckoutSchemasCheckoutCreateCustomFieldData,
    z.ZodTypeDef,
    unknown
  > = z.object({});

/** @internal */
export type PolarCheckoutSchemasCheckoutCreateCustomFieldData$Outbound = {};

/** @internal */
export const PolarCheckoutSchemasCheckoutCreateCustomFieldData$outboundSchema:
  z.ZodType<
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$Outbound,
    z.ZodTypeDef,
    PolarCheckoutSchemasCheckoutCreateCustomFieldData
  > = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PolarCheckoutSchemasCheckoutCreateCustomFieldData$ {
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreateCustomFieldData$inboundSchema` instead. */
  export const inboundSchema =
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$inboundSchema;
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreateCustomFieldData$outboundSchema` instead. */
  export const outboundSchema =
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$outboundSchema;
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreateCustomFieldData$Outbound` instead. */
  export type Outbound =
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$Outbound;
}

/** @internal */
export const PaymentProcessor$inboundSchema: z.ZodNativeEnum<
  typeof PaymentProcessor
> = z.nativeEnum(PaymentProcessor);

/** @internal */
export const PaymentProcessor$outboundSchema: z.ZodNativeEnum<
  typeof PaymentProcessor
> = PaymentProcessor$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PaymentProcessor$ {
  /** @deprecated use `PaymentProcessor$inboundSchema` instead. */
  export const inboundSchema = PaymentProcessor$inboundSchema;
  /** @deprecated use `PaymentProcessor$outboundSchema` instead. */
  export const outboundSchema = PaymentProcessor$outboundSchema;
}

/** @internal */
export const PolarCheckoutSchemasCheckoutCreate$inboundSchema: z.ZodType<
  PolarCheckoutSchemasCheckoutCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()).optional(),
  custom_field_data: z.lazy(() =>
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$inboundSchema
  ).optional(),
  payment_processor: z.literal("stripe").optional(),
  product_price_id: z.string(),
  amount: z.nullable(z.number().int()).optional(),
  customer_name: z.nullable(z.string()).optional(),
  customer_email: z.nullable(z.string()).optional(),
  customer_ip_address: z.nullable(z.string()).optional(),
  customer_billing_address: z.nullable(Address$inboundSchema).optional(),
  customer_tax_id: z.nullable(z.string()).optional(),
  subscription_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
  embed_origin: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "custom_field_data": "customFieldData",
    "payment_processor": "paymentProcessor",
    "product_price_id": "productPriceId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_ip_address": "customerIpAddress",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "subscription_id": "subscriptionId",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
  });
});

/** @internal */
export type PolarCheckoutSchemasCheckoutCreate$Outbound = {
  metadata?: { [k: string]: string } | undefined;
  custom_field_data?:
    | PolarCheckoutSchemasCheckoutCreateCustomFieldData$Outbound
    | undefined;
  payment_processor: "stripe";
  product_price_id: string;
  amount?: number | null | undefined;
  customer_name?: string | null | undefined;
  customer_email?: string | null | undefined;
  customer_ip_address?: string | null | undefined;
  customer_billing_address?: Address$Outbound | null | undefined;
  customer_tax_id?: string | null | undefined;
  subscription_id?: string | null | undefined;
  success_url?: string | null | undefined;
  embed_origin?: string | null | undefined;
};

/** @internal */
export const PolarCheckoutSchemasCheckoutCreate$outboundSchema: z.ZodType<
  PolarCheckoutSchemasCheckoutCreate$Outbound,
  z.ZodTypeDef,
  PolarCheckoutSchemasCheckoutCreate
> = z.object({
  metadata: z.record(z.string()).optional(),
  customFieldData: z.lazy(() =>
    PolarCheckoutSchemasCheckoutCreateCustomFieldData$outboundSchema
  ).optional(),
  paymentProcessor: z.literal("stripe").default("stripe"),
  productPriceId: z.string(),
  amount: z.nullable(z.number().int()).optional(),
  customerName: z.nullable(z.string()).optional(),
  customerEmail: z.nullable(z.string()).optional(),
  customerIpAddress: z.nullable(z.string()).optional(),
  customerBillingAddress: z.nullable(Address$outboundSchema).optional(),
  customerTaxId: z.nullable(z.string()).optional(),
  subscriptionId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
  embedOrigin: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    customFieldData: "custom_field_data",
    paymentProcessor: "payment_processor",
    productPriceId: "product_price_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerIpAddress: "customer_ip_address",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    subscriptionId: "subscription_id",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PolarCheckoutSchemasCheckoutCreate$ {
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreate$inboundSchema` instead. */
  export const inboundSchema = PolarCheckoutSchemasCheckoutCreate$inboundSchema;
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreate$outboundSchema` instead. */
  export const outboundSchema =
    PolarCheckoutSchemasCheckoutCreate$outboundSchema;
  /** @deprecated use `PolarCheckoutSchemasCheckoutCreate$Outbound` instead. */
  export type Outbound = PolarCheckoutSchemasCheckoutCreate$Outbound;
}
