/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const ProductPriceOneTimeCustomAmountType = {
  Custom: "custom",
} as const;
export type ProductPriceOneTimeCustomAmountType = ClosedEnum<
  typeof ProductPriceOneTimeCustomAmountType
>;

/**
 * The type of the price.
 */
export const ProductPriceOneTimeCustomType = {
  OneTime: "one_time",
} as const;
/**
 * The type of the price.
 */
export type ProductPriceOneTimeCustomType = ClosedEnum<
  typeof ProductPriceOneTimeCustomType
>;

/**
 * A pay-what-you-want price for a one-time product.
 */
export type ProductPriceOneTimeCustom = {
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
   * The currency.
   */
  priceCurrency: string;
  /**
   * Whether the price is archived and no longer available.
   */
  isArchived: boolean;
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
  type?: "one_time" | undefined;
};

/** @internal */
export const ProductPriceOneTimeCustomAmountType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeCustomAmountType
> = z.nativeEnum(ProductPriceOneTimeCustomAmountType);

/** @internal */
export const ProductPriceOneTimeCustomAmountType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceOneTimeCustomAmountType> =
    ProductPriceOneTimeCustomAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeCustomAmountType$ {
  /** @deprecated use `ProductPriceOneTimeCustomAmountType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceOneTimeCustomAmountType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeCustomAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceOneTimeCustomAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeCustomType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeCustomType
> = z.nativeEnum(ProductPriceOneTimeCustomType);

/** @internal */
export const ProductPriceOneTimeCustomType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeCustomType
> = ProductPriceOneTimeCustomType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeCustomType$ {
  /** @deprecated use `ProductPriceOneTimeCustomType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeCustomType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeCustomType$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeCustomType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeCustom$inboundSchema: z.ZodType<
  ProductPriceOneTimeCustom,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("custom").optional(),
  price_currency: z.string(),
  is_archived: z.boolean(),
  minimum_amount: z.nullable(z.number().int()),
  maximum_amount: z.nullable(z.number().int()),
  preset_amount: z.nullable(z.number().int()),
  type: z.literal("one_time").optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "price_currency": "priceCurrency",
    "is_archived": "isArchived",
    "minimum_amount": "minimumAmount",
    "maximum_amount": "maximumAmount",
    "preset_amount": "presetAmount",
  });
});

/** @internal */
export type ProductPriceOneTimeCustom$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "custom";
  price_currency: string;
  is_archived: boolean;
  minimum_amount: number | null;
  maximum_amount: number | null;
  preset_amount: number | null;
  type: "one_time";
};

/** @internal */
export const ProductPriceOneTimeCustom$outboundSchema: z.ZodType<
  ProductPriceOneTimeCustom$Outbound,
  z.ZodTypeDef,
  ProductPriceOneTimeCustom
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("custom").default("custom"),
  priceCurrency: z.string(),
  isArchived: z.boolean(),
  minimumAmount: z.nullable(z.number().int()),
  maximumAmount: z.nullable(z.number().int()),
  presetAmount: z.nullable(z.number().int()),
  type: z.literal("one_time").default("one_time"),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    priceCurrency: "price_currency",
    isArchived: "is_archived",
    minimumAmount: "minimum_amount",
    maximumAmount: "maximum_amount",
    presetAmount: "preset_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeCustom$ {
  /** @deprecated use `ProductPriceOneTimeCustom$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeCustom$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeCustom$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeCustom$outboundSchema;
  /** @deprecated use `ProductPriceOneTimeCustom$Outbound` instead. */
  export type Outbound = ProductPriceOneTimeCustom$Outbound;
}
