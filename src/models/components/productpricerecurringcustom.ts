/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";

export const ProductPriceRecurringCustomAmountType = {
  Custom: "custom",
} as const;
export type ProductPriceRecurringCustomAmountType = ClosedEnum<
  typeof ProductPriceRecurringCustomAmountType
>;

/**
 * The type of the price.
 */
export const ProductPriceRecurringCustomType = {
  Recurring: "recurring",
} as const;
/**
 * The type of the price.
 */
export type ProductPriceRecurringCustomType = ClosedEnum<
  typeof ProductPriceRecurringCustomType
>;

/**
 * A pay-what-you-want recurring price for a product, i.e. a subscription.
 */
export type ProductPriceRecurringCustom = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the price.
   */
  id: string;
  amountType?: "custom" | undefined;
  /**
   * Whether the price is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the product owning the price.
   */
  productId: string;
  /**
   * The currency.
   */
  priceCurrency: string;
  /**
   * The minimum amount the customer can pay.
   */
  minimumAmount: number | null;
  /**
   * The maximum amount the customer can pay.
   */
  maximumAmount: number | null;
  /**
   * The initial amount shown to the customer.
   */
  presetAmount: number | null;
  /**
   * The type of the price.
   */
  type?: "recurring" | undefined;
  recurringInterval: SubscriptionRecurringInterval;
};

/** @internal */
export const ProductPriceRecurringCustomAmountType$inboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringCustomAmountType> = z.nativeEnum(
    ProductPriceRecurringCustomAmountType,
  );

/** @internal */
export const ProductPriceRecurringCustomAmountType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringCustomAmountType> =
    ProductPriceRecurringCustomAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringCustomAmountType$ {
  /** @deprecated use `ProductPriceRecurringCustomAmountType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceRecurringCustomAmountType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringCustomAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceRecurringCustomAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringCustomType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringCustomType
> = z.nativeEnum(ProductPriceRecurringCustomType);

/** @internal */
export const ProductPriceRecurringCustomType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringCustomType
> = ProductPriceRecurringCustomType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringCustomType$ {
  /** @deprecated use `ProductPriceRecurringCustomType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceRecurringCustomType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringCustomType$outboundSchema` instead. */
  export const outboundSchema = ProductPriceRecurringCustomType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringCustom$inboundSchema: z.ZodType<
  ProductPriceRecurringCustom,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("custom").optional(),
  is_archived: z.boolean(),
  product_id: z.string(),
  price_currency: z.string(),
  minimum_amount: z.nullable(z.number().int()),
  maximum_amount: z.nullable(z.number().int()),
  preset_amount: z.nullable(z.number().int()),
  type: z.literal("recurring").optional(),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "product_id": "productId",
    "price_currency": "priceCurrency",
    "minimum_amount": "minimumAmount",
    "maximum_amount": "maximumAmount",
    "preset_amount": "presetAmount",
    "recurring_interval": "recurringInterval",
  });
});

/** @internal */
export type ProductPriceRecurringCustom$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "custom";
  is_archived: boolean;
  product_id: string;
  price_currency: string;
  minimum_amount: number | null;
  maximum_amount: number | null;
  preset_amount: number | null;
  type: "recurring";
  recurring_interval: string;
};

/** @internal */
export const ProductPriceRecurringCustom$outboundSchema: z.ZodType<
  ProductPriceRecurringCustom$Outbound,
  z.ZodTypeDef,
  ProductPriceRecurringCustom
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("custom").default("custom"),
  isArchived: z.boolean(),
  productId: z.string(),
  priceCurrency: z.string(),
  minimumAmount: z.nullable(z.number().int()),
  maximumAmount: z.nullable(z.number().int()),
  presetAmount: z.nullable(z.number().int()),
  type: z.literal("recurring").default("recurring"),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    productId: "product_id",
    priceCurrency: "price_currency",
    minimumAmount: "minimum_amount",
    maximumAmount: "maximum_amount",
    presetAmount: "preset_amount",
    recurringInterval: "recurring_interval",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringCustom$ {
  /** @deprecated use `ProductPriceRecurringCustom$inboundSchema` instead. */
  export const inboundSchema = ProductPriceRecurringCustom$inboundSchema;
  /** @deprecated use `ProductPriceRecurringCustom$outboundSchema` instead. */
  export const outboundSchema = ProductPriceRecurringCustom$outboundSchema;
  /** @deprecated use `ProductPriceRecurringCustom$Outbound` instead. */
  export type Outbound = ProductPriceRecurringCustom$Outbound;
}
