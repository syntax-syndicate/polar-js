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
import {
  AttachedCustomField,
  AttachedCustomField$inboundSchema,
  AttachedCustomField$Outbound,
  AttachedCustomField$outboundSchema,
} from "./attachedcustomfield.js";
import {
  CheckoutDiscountFixedOnceForeverDuration,
  CheckoutDiscountFixedOnceForeverDuration$inboundSchema,
  CheckoutDiscountFixedOnceForeverDuration$Outbound,
  CheckoutDiscountFixedOnceForeverDuration$outboundSchema,
} from "./checkoutdiscountfixedonceforeverduration.js";
import {
  CheckoutDiscountFixedRepeatDuration,
  CheckoutDiscountFixedRepeatDuration$inboundSchema,
  CheckoutDiscountFixedRepeatDuration$Outbound,
  CheckoutDiscountFixedRepeatDuration$outboundSchema,
} from "./checkoutdiscountfixedrepeatduration.js";
import {
  CheckoutDiscountPercentageOnceForeverDuration,
  CheckoutDiscountPercentageOnceForeverDuration$inboundSchema,
  CheckoutDiscountPercentageOnceForeverDuration$Outbound,
  CheckoutDiscountPercentageOnceForeverDuration$outboundSchema,
} from "./checkoutdiscountpercentageonceforeverduration.js";
import {
  CheckoutDiscountPercentageRepeatDuration,
  CheckoutDiscountPercentageRepeatDuration$inboundSchema,
  CheckoutDiscountPercentageRepeatDuration$Outbound,
  CheckoutDiscountPercentageRepeatDuration$outboundSchema,
} from "./checkoutdiscountpercentagerepeatduration.js";
import {
  CheckoutProduct,
  CheckoutProduct$inboundSchema,
  CheckoutProduct$Outbound,
  CheckoutProduct$outboundSchema,
} from "./checkoutproduct.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";
import {
  PaymentProcessor,
  PaymentProcessor$inboundSchema,
  PaymentProcessor$outboundSchema,
} from "./paymentprocessor.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";

/**
 * Key-value object storing custom field values.
 */
export type CheckoutPublicConfirmedCustomFieldData = {};

export type CheckoutPublicConfirmedDiscount =
  | CheckoutDiscountPercentageOnceForeverDuration
  | CheckoutDiscountFixedOnceForeverDuration
  | CheckoutDiscountPercentageRepeatDuration
  | CheckoutDiscountFixedRepeatDuration;

/**
 * Checkout session data retrieved using the client secret after confirmation.
 *
 * @remarks
 *
 * It contains a customer session token to retrieve order information
 * right after the checkout.
 */
export type CheckoutPublicConfirmed = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?: CheckoutPublicConfirmedCustomFieldData | undefined;
  paymentProcessor: PaymentProcessor;
  status?: "confirmed" | undefined;
  /**
   * Client secret used to update and complete the checkout session from the client.
   */
  clientSecret: string;
  /**
   * URL where the customer can access the checkout session.
   */
  url: string;
  /**
   * Expiration date and time of the checkout session.
   */
  expiresAt: Date;
  /**
   * URL where the customer will be redirected after a successful payment.
   */
  successUrl: string;
  /**
   * When checkout is embedded, represents the Origin of the page embedding the checkout. Used as a security measure to send messages only to the embedding page.
   */
  embedOrigin: string | null;
  amount: number | null;
  /**
   * Computed tax amount to pay in cents.
   */
  taxAmount: number | null;
  /**
   * Currency code of the checkout session.
   */
  currency: string | null;
  /**
   * Subtotal amount in cents, including discounts and before tax.
   */
  subtotalAmount: number | null;
  /**
   * Total amount to pay in cents, including discounts and after tax.
   */
  totalAmount: number | null;
  /**
   * ID of the product to checkout.
   */
  productId: string;
  /**
   * ID of the product price to checkout.
   */
  productPriceId: string;
  /**
   * ID of the discount applied to the checkout.
   */
  discountId: string | null;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes: boolean;
  /**
   * Whether the discount is applicable to the checkout. Typically, free and custom prices are not discountable.
   */
  isDiscountApplicable: boolean;
  /**
   * Whether the product price is free, regardless of discounts.
   */
  isFreeProductPrice: boolean;
  /**
   * Whether the checkout requires payment, e.g. in case of free products or discounts that cover the total amount.
   */
  isPaymentRequired: boolean;
  /**
   * Whether the checkout requires setting up a payment method, regardless of the amount, e.g. subscriptions that have first free cycles.
   */
  isPaymentSetupRequired: boolean;
  /**
   * Whether the checkout requires a payment form, whether because of a payment or payment method setup.
   */
  isPaymentFormRequired: boolean;
  customerId: string | null;
  customerName: string | null;
  customerEmail: string | null;
  customerIpAddress: string | null;
  customerBillingAddress: Address | null;
  customerTaxId: string | null;
  paymentProcessorMetadata: { [k: string]: string };
  /**
   * Product data for a checkout session.
   */
  product: CheckoutProduct;
  productPrice: ProductPrice;
  discount:
    | CheckoutDiscountPercentageOnceForeverDuration
    | CheckoutDiscountFixedOnceForeverDuration
    | CheckoutDiscountPercentageRepeatDuration
    | CheckoutDiscountFixedRepeatDuration
    | null;
  organization: Organization;
  attachedCustomFields: Array<AttachedCustomField>;
  customerSessionToken: string;
};

/** @internal */
export const CheckoutPublicConfirmedCustomFieldData$inboundSchema: z.ZodType<
  CheckoutPublicConfirmedCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type CheckoutPublicConfirmedCustomFieldData$Outbound = {};

/** @internal */
export const CheckoutPublicConfirmedCustomFieldData$outboundSchema: z.ZodType<
  CheckoutPublicConfirmedCustomFieldData$Outbound,
  z.ZodTypeDef,
  CheckoutPublicConfirmedCustomFieldData
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPublicConfirmedCustomFieldData$ {
  /** @deprecated use `CheckoutPublicConfirmedCustomFieldData$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutPublicConfirmedCustomFieldData$inboundSchema;
  /** @deprecated use `CheckoutPublicConfirmedCustomFieldData$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutPublicConfirmedCustomFieldData$outboundSchema;
  /** @deprecated use `CheckoutPublicConfirmedCustomFieldData$Outbound` instead. */
  export type Outbound = CheckoutPublicConfirmedCustomFieldData$Outbound;
}

export function checkoutPublicConfirmedCustomFieldDataToJSON(
  checkoutPublicConfirmedCustomFieldData:
    CheckoutPublicConfirmedCustomFieldData,
): string {
  return JSON.stringify(
    CheckoutPublicConfirmedCustomFieldData$outboundSchema.parse(
      checkoutPublicConfirmedCustomFieldData,
    ),
  );
}

export function checkoutPublicConfirmedCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPublicConfirmedCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutPublicConfirmedCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPublicConfirmedCustomFieldData' from JSON`,
  );
}

/** @internal */
export const CheckoutPublicConfirmedDiscount$inboundSchema: z.ZodType<
  CheckoutPublicConfirmedDiscount,
  z.ZodTypeDef,
  unknown
> = z.union([
  CheckoutDiscountPercentageOnceForeverDuration$inboundSchema,
  CheckoutDiscountFixedOnceForeverDuration$inboundSchema,
  CheckoutDiscountPercentageRepeatDuration$inboundSchema,
  CheckoutDiscountFixedRepeatDuration$inboundSchema,
]);

/** @internal */
export type CheckoutPublicConfirmedDiscount$Outbound =
  | CheckoutDiscountPercentageOnceForeverDuration$Outbound
  | CheckoutDiscountFixedOnceForeverDuration$Outbound
  | CheckoutDiscountPercentageRepeatDuration$Outbound
  | CheckoutDiscountFixedRepeatDuration$Outbound;

/** @internal */
export const CheckoutPublicConfirmedDiscount$outboundSchema: z.ZodType<
  CheckoutPublicConfirmedDiscount$Outbound,
  z.ZodTypeDef,
  CheckoutPublicConfirmedDiscount
> = z.union([
  CheckoutDiscountPercentageOnceForeverDuration$outboundSchema,
  CheckoutDiscountFixedOnceForeverDuration$outboundSchema,
  CheckoutDiscountPercentageRepeatDuration$outboundSchema,
  CheckoutDiscountFixedRepeatDuration$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPublicConfirmedDiscount$ {
  /** @deprecated use `CheckoutPublicConfirmedDiscount$inboundSchema` instead. */
  export const inboundSchema = CheckoutPublicConfirmedDiscount$inboundSchema;
  /** @deprecated use `CheckoutPublicConfirmedDiscount$outboundSchema` instead. */
  export const outboundSchema = CheckoutPublicConfirmedDiscount$outboundSchema;
  /** @deprecated use `CheckoutPublicConfirmedDiscount$Outbound` instead. */
  export type Outbound = CheckoutPublicConfirmedDiscount$Outbound;
}

export function checkoutPublicConfirmedDiscountToJSON(
  checkoutPublicConfirmedDiscount: CheckoutPublicConfirmedDiscount,
): string {
  return JSON.stringify(
    CheckoutPublicConfirmedDiscount$outboundSchema.parse(
      checkoutPublicConfirmedDiscount,
    ),
  );
}

export function checkoutPublicConfirmedDiscountFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPublicConfirmedDiscount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutPublicConfirmedDiscount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPublicConfirmedDiscount' from JSON`,
  );
}

/** @internal */
export const CheckoutPublicConfirmed$inboundSchema: z.ZodType<
  CheckoutPublicConfirmed,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  custom_field_data: z.lazy(() =>
    CheckoutPublicConfirmedCustomFieldData$inboundSchema
  ).optional(),
  payment_processor: PaymentProcessor$inboundSchema,
  status: z.literal("confirmed").optional(),
  client_secret: z.string(),
  url: z.string(),
  expires_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  success_url: z.string(),
  embed_origin: z.nullable(z.string()),
  amount: z.nullable(z.number().int()),
  tax_amount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  subtotal_amount: z.nullable(z.number().int()),
  total_amount: z.nullable(z.number().int()),
  product_id: z.string(),
  product_price_id: z.string(),
  discount_id: z.nullable(z.string()),
  allow_discount_codes: z.boolean(),
  is_discount_applicable: z.boolean(),
  is_free_product_price: z.boolean(),
  is_payment_required: z.boolean(),
  is_payment_setup_required: z.boolean(),
  is_payment_form_required: z.boolean(),
  customer_id: z.nullable(z.string()),
  customer_name: z.nullable(z.string()),
  customer_email: z.nullable(z.string()),
  customer_ip_address: z.nullable(z.string()),
  customer_billing_address: z.nullable(Address$inboundSchema),
  customer_tax_id: z.nullable(z.string()),
  payment_processor_metadata: z.record(z.string()),
  product: CheckoutProduct$inboundSchema,
  product_price: ProductPrice$inboundSchema,
  discount: z.nullable(
    z.union([
      CheckoutDiscountPercentageOnceForeverDuration$inboundSchema,
      CheckoutDiscountFixedOnceForeverDuration$inboundSchema,
      CheckoutDiscountPercentageRepeatDuration$inboundSchema,
      CheckoutDiscountFixedRepeatDuration$inboundSchema,
    ]),
  ),
  organization: Organization$inboundSchema,
  attached_custom_fields: z.array(AttachedCustomField$inboundSchema),
  customer_session_token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "custom_field_data": "customFieldData",
    "payment_processor": "paymentProcessor",
    "client_secret": "clientSecret",
    "expires_at": "expiresAt",
    "success_url": "successUrl",
    "embed_origin": "embedOrigin",
    "tax_amount": "taxAmount",
    "subtotal_amount": "subtotalAmount",
    "total_amount": "totalAmount",
    "product_id": "productId",
    "product_price_id": "productPriceId",
    "discount_id": "discountId",
    "allow_discount_codes": "allowDiscountCodes",
    "is_discount_applicable": "isDiscountApplicable",
    "is_free_product_price": "isFreeProductPrice",
    "is_payment_required": "isPaymentRequired",
    "is_payment_setup_required": "isPaymentSetupRequired",
    "is_payment_form_required": "isPaymentFormRequired",
    "customer_id": "customerId",
    "customer_name": "customerName",
    "customer_email": "customerEmail",
    "customer_ip_address": "customerIpAddress",
    "customer_billing_address": "customerBillingAddress",
    "customer_tax_id": "customerTaxId",
    "payment_processor_metadata": "paymentProcessorMetadata",
    "product_price": "productPrice",
    "attached_custom_fields": "attachedCustomFields",
    "customer_session_token": "customerSessionToken",
  });
});

/** @internal */
export type CheckoutPublicConfirmed$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  custom_field_data?:
    | CheckoutPublicConfirmedCustomFieldData$Outbound
    | undefined;
  payment_processor: string;
  status: "confirmed";
  client_secret: string;
  url: string;
  expires_at: string;
  success_url: string;
  embed_origin: string | null;
  amount: number | null;
  tax_amount: number | null;
  currency: string | null;
  subtotal_amount: number | null;
  total_amount: number | null;
  product_id: string;
  product_price_id: string;
  discount_id: string | null;
  allow_discount_codes: boolean;
  is_discount_applicable: boolean;
  is_free_product_price: boolean;
  is_payment_required: boolean;
  is_payment_setup_required: boolean;
  is_payment_form_required: boolean;
  customer_id: string | null;
  customer_name: string | null;
  customer_email: string | null;
  customer_ip_address: string | null;
  customer_billing_address: Address$Outbound | null;
  customer_tax_id: string | null;
  payment_processor_metadata: { [k: string]: string };
  product: CheckoutProduct$Outbound;
  product_price: ProductPrice$Outbound;
  discount:
    | CheckoutDiscountPercentageOnceForeverDuration$Outbound
    | CheckoutDiscountFixedOnceForeverDuration$Outbound
    | CheckoutDiscountPercentageRepeatDuration$Outbound
    | CheckoutDiscountFixedRepeatDuration$Outbound
    | null;
  organization: Organization$Outbound;
  attached_custom_fields: Array<AttachedCustomField$Outbound>;
  customer_session_token: string;
};

/** @internal */
export const CheckoutPublicConfirmed$outboundSchema: z.ZodType<
  CheckoutPublicConfirmed$Outbound,
  z.ZodTypeDef,
  CheckoutPublicConfirmed
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  customFieldData: z.lazy(() =>
    CheckoutPublicConfirmedCustomFieldData$outboundSchema
  ).optional(),
  paymentProcessor: PaymentProcessor$outboundSchema,
  status: z.literal("confirmed").default("confirmed" as const),
  clientSecret: z.string(),
  url: z.string(),
  expiresAt: z.date().transform(v => v.toISOString()),
  successUrl: z.string(),
  embedOrigin: z.nullable(z.string()),
  amount: z.nullable(z.number().int()),
  taxAmount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  subtotalAmount: z.nullable(z.number().int()),
  totalAmount: z.nullable(z.number().int()),
  productId: z.string(),
  productPriceId: z.string(),
  discountId: z.nullable(z.string()),
  allowDiscountCodes: z.boolean(),
  isDiscountApplicable: z.boolean(),
  isFreeProductPrice: z.boolean(),
  isPaymentRequired: z.boolean(),
  isPaymentSetupRequired: z.boolean(),
  isPaymentFormRequired: z.boolean(),
  customerId: z.nullable(z.string()),
  customerName: z.nullable(z.string()),
  customerEmail: z.nullable(z.string()),
  customerIpAddress: z.nullable(z.string()),
  customerBillingAddress: z.nullable(Address$outboundSchema),
  customerTaxId: z.nullable(z.string()),
  paymentProcessorMetadata: z.record(z.string()),
  product: CheckoutProduct$outboundSchema,
  productPrice: ProductPrice$outboundSchema,
  discount: z.nullable(
    z.union([
      CheckoutDiscountPercentageOnceForeverDuration$outboundSchema,
      CheckoutDiscountFixedOnceForeverDuration$outboundSchema,
      CheckoutDiscountPercentageRepeatDuration$outboundSchema,
      CheckoutDiscountFixedRepeatDuration$outboundSchema,
    ]),
  ),
  organization: Organization$outboundSchema,
  attachedCustomFields: z.array(AttachedCustomField$outboundSchema),
  customerSessionToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    customFieldData: "custom_field_data",
    paymentProcessor: "payment_processor",
    clientSecret: "client_secret",
    expiresAt: "expires_at",
    successUrl: "success_url",
    embedOrigin: "embed_origin",
    taxAmount: "tax_amount",
    subtotalAmount: "subtotal_amount",
    totalAmount: "total_amount",
    productId: "product_id",
    productPriceId: "product_price_id",
    discountId: "discount_id",
    allowDiscountCodes: "allow_discount_codes",
    isDiscountApplicable: "is_discount_applicable",
    isFreeProductPrice: "is_free_product_price",
    isPaymentRequired: "is_payment_required",
    isPaymentSetupRequired: "is_payment_setup_required",
    isPaymentFormRequired: "is_payment_form_required",
    customerId: "customer_id",
    customerName: "customer_name",
    customerEmail: "customer_email",
    customerIpAddress: "customer_ip_address",
    customerBillingAddress: "customer_billing_address",
    customerTaxId: "customer_tax_id",
    paymentProcessorMetadata: "payment_processor_metadata",
    productPrice: "product_price",
    attachedCustomFields: "attached_custom_fields",
    customerSessionToken: "customer_session_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutPublicConfirmed$ {
  /** @deprecated use `CheckoutPublicConfirmed$inboundSchema` instead. */
  export const inboundSchema = CheckoutPublicConfirmed$inboundSchema;
  /** @deprecated use `CheckoutPublicConfirmed$outboundSchema` instead. */
  export const outboundSchema = CheckoutPublicConfirmed$outboundSchema;
  /** @deprecated use `CheckoutPublicConfirmed$Outbound` instead. */
  export type Outbound = CheckoutPublicConfirmed$Outbound;
}

export function checkoutPublicConfirmedToJSON(
  checkoutPublicConfirmed: CheckoutPublicConfirmed,
): string {
  return JSON.stringify(
    CheckoutPublicConfirmed$outboundSchema.parse(checkoutPublicConfirmed),
  );
}

export function checkoutPublicConfirmedFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutPublicConfirmed, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutPublicConfirmed$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutPublicConfirmed' from JSON`,
  );
}
