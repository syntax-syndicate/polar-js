/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";

export const ProductPriceOneTimeFixedAmountType = {
  Fixed: "fixed",
} as const;
export type ProductPriceOneTimeFixedAmountType = ClosedEnum<
  typeof ProductPriceOneTimeFixedAmountType
>;

/**
 * The type of the price.
 */
export const ProductPriceOneTimeFixedType = {
  OneTime: "one_time",
} as const;
/**
 * The type of the price.
 */
export type ProductPriceOneTimeFixedType = ClosedEnum<
  typeof ProductPriceOneTimeFixedType
>;

/**
 * A one-time price for a product.
 */
export type ProductPriceOneTimeFixed = {
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
  amountType?: "fixed" | undefined;
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
   * The price in cents.
   */
  priceAmount: number;
  /**
   * The type of the price.
   */
  type?: "one_time" | undefined;
};

/** @internal */
export const ProductPriceOneTimeFixedAmountType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFixedAmountType
> = z.nativeEnum(ProductPriceOneTimeFixedAmountType);

/** @internal */
export const ProductPriceOneTimeFixedAmountType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFixedAmountType
> = ProductPriceOneTimeFixedAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFixedAmountType$ {
  /** @deprecated use `ProductPriceOneTimeFixedAmountType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFixedAmountType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixedAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceOneTimeFixedAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeFixedType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFixedType
> = z.nativeEnum(ProductPriceOneTimeFixedType);

/** @internal */
export const ProductPriceOneTimeFixedType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFixedType
> = ProductPriceOneTimeFixedType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFixedType$ {
  /** @deprecated use `ProductPriceOneTimeFixedType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFixedType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixedType$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeFixedType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeFixed$inboundSchema: z.ZodType<
  ProductPriceOneTimeFixed,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount_type: z.literal("fixed").optional(),
  is_archived: z.boolean(),
  product_id: z.string(),
  price_currency: z.string(),
  price_amount: z.number().int(),
  type: z.literal("one_time").optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "amount_type": "amountType",
    "is_archived": "isArchived",
    "product_id": "productId",
    "price_currency": "priceCurrency",
    "price_amount": "priceAmount",
  });
});

/** @internal */
export type ProductPriceOneTimeFixed$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  amount_type: "fixed";
  is_archived: boolean;
  product_id: string;
  price_currency: string;
  price_amount: number;
  type: "one_time";
};

/** @internal */
export const ProductPriceOneTimeFixed$outboundSchema: z.ZodType<
  ProductPriceOneTimeFixed$Outbound,
  z.ZodTypeDef,
  ProductPriceOneTimeFixed
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amountType: z.literal("fixed").default("fixed"),
  isArchived: z.boolean(),
  productId: z.string(),
  priceCurrency: z.string(),
  priceAmount: z.number().int(),
  type: z.literal("one_time").default("one_time"),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    amountType: "amount_type",
    isArchived: "is_archived",
    productId: "product_id",
    priceCurrency: "price_currency",
    priceAmount: "price_amount",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFixed$ {
  /** @deprecated use `ProductPriceOneTimeFixed$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFixed$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixed$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeFixed$outboundSchema;
  /** @deprecated use `ProductPriceOneTimeFixed$Outbound` instead. */
  export type Outbound = ProductPriceOneTimeFixed$Outbound;
}
