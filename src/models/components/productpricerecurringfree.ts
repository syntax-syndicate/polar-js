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

export const ProductPriceRecurringFreeAmountType = {
  Free: "free",
} as const;
export type ProductPriceRecurringFreeAmountType = ClosedEnum<
  typeof ProductPriceRecurringFreeAmountType
>;

/**
 * The type of the price.
 */
export const ProductPriceRecurringFreeType = {
  Recurring: "recurring",
} as const;
/**
 * The type of the price.
 */
export type ProductPriceRecurringFreeType = ClosedEnum<
  typeof ProductPriceRecurringFreeType
>;

/**
 * A free recurring price for a product, i.e. a subscription.
 */
export type ProductPriceRecurringFree = {
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
  amountType?: "free" | undefined;
  /**
   * Whether the price is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The type of the price.
   */
  type?: "recurring" | undefined;
  /**
   * The recurring interval of the price.
   */
  recurringInterval: SubscriptionRecurringInterval;
};

/** @internal */
export const ProductPriceRecurringFreeAmountType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringFreeAmountType
> = z.nativeEnum(ProductPriceRecurringFreeAmountType);

/** @internal */
export const ProductPriceRecurringFreeAmountType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceRecurringFreeAmountType> =
    ProductPriceRecurringFreeAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFreeAmountType$ {
  /** @deprecated use `ProductPriceRecurringFreeAmountType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceRecurringFreeAmountType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceRecurringFreeAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringFreeType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringFreeType
> = z.nativeEnum(ProductPriceRecurringFreeType);

/** @internal */
export const ProductPriceRecurringFreeType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceRecurringFreeType
> = ProductPriceRecurringFreeType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFreeType$ {
  /** @deprecated use `ProductPriceRecurringFreeType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceRecurringFreeType$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFreeType$outboundSchema` instead. */
  export const outboundSchema = ProductPriceRecurringFreeType$outboundSchema;
}

/** @internal */
export const ProductPriceRecurringFree$inboundSchema: z.ZodType<
  ProductPriceRecurringFree,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("free").optional(),
  is_archived: z.boolean(),
  type: z.literal("recurring").optional(),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "recurring_interval": "recurringInterval",
  });
});

/** @internal */
export type ProductPriceRecurringFree$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "free";
  is_archived: boolean;
  type: "recurring";
  recurring_interval: string;
};

/** @internal */
export const ProductPriceRecurringFree$outboundSchema: z.ZodType<
  ProductPriceRecurringFree$Outbound,
  z.ZodTypeDef,
  ProductPriceRecurringFree
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("free").default("free"),
  isArchived: z.boolean(),
  type: z.literal("recurring").default("recurring"),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    recurringInterval: "recurring_interval",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceRecurringFree$ {
  /** @deprecated use `ProductPriceRecurringFree$inboundSchema` instead. */
  export const inboundSchema = ProductPriceRecurringFree$inboundSchema;
  /** @deprecated use `ProductPriceRecurringFree$outboundSchema` instead. */
  export const outboundSchema = ProductPriceRecurringFree$outboundSchema;
  /** @deprecated use `ProductPriceRecurringFree$Outbound` instead. */
  export type Outbound = ProductPriceRecurringFree$Outbound;
}
