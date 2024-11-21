/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const ProductPriceOneTimeFreeCreateType = {
  OneTime: "one_time",
} as const;
export type ProductPriceOneTimeFreeCreateType = ClosedEnum<
  typeof ProductPriceOneTimeFreeCreateType
>;

export const ProductPriceOneTimeFreeCreateAmountType = {
  Free: "free",
} as const;
export type ProductPriceOneTimeFreeCreateAmountType = ClosedEnum<
  typeof ProductPriceOneTimeFreeCreateAmountType
>;

/**
 * Schema to create a free one-time product price.
 */
export type ProductPriceOneTimeFreeCreate = {
  type?: "one_time" | undefined;
  amountType?: "free" | undefined;
};

/** @internal */
export const ProductPriceOneTimeFreeCreateType$inboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFreeCreateType
> = z.nativeEnum(ProductPriceOneTimeFreeCreateType);

/** @internal */
export const ProductPriceOneTimeFreeCreateType$outboundSchema: z.ZodNativeEnum<
  typeof ProductPriceOneTimeFreeCreateType
> = ProductPriceOneTimeFreeCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFreeCreateType$ {
  /** @deprecated use `ProductPriceOneTimeFreeCreateType$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFreeCreateType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFreeCreateType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceOneTimeFreeCreateType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeFreeCreateAmountType$inboundSchema:
  z.ZodNativeEnum<typeof ProductPriceOneTimeFreeCreateAmountType> = z
    .nativeEnum(ProductPriceOneTimeFreeCreateAmountType);

/** @internal */
export const ProductPriceOneTimeFreeCreateAmountType$outboundSchema:
  z.ZodNativeEnum<typeof ProductPriceOneTimeFreeCreateAmountType> =
    ProductPriceOneTimeFreeCreateAmountType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFreeCreateAmountType$ {
  /** @deprecated use `ProductPriceOneTimeFreeCreateAmountType$inboundSchema` instead. */
  export const inboundSchema =
    ProductPriceOneTimeFreeCreateAmountType$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFreeCreateAmountType$outboundSchema` instead. */
  export const outboundSchema =
    ProductPriceOneTimeFreeCreateAmountType$outboundSchema;
}

/** @internal */
export const ProductPriceOneTimeFreeCreate$inboundSchema: z.ZodType<
  ProductPriceOneTimeFreeCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("one_time").optional(),
  amount_type: z.literal("free").optional(),
}).transform((v) => {
  return remap$(v, {
    "amount_type": "amountType",
  });
});

/** @internal */
export type ProductPriceOneTimeFreeCreate$Outbound = {
  type: "one_time";
  amount_type: "free";
};

/** @internal */
export const ProductPriceOneTimeFreeCreate$outboundSchema: z.ZodType<
  ProductPriceOneTimeFreeCreate$Outbound,
  z.ZodTypeDef,
  ProductPriceOneTimeFreeCreate
> = z.object({
  type: z.literal("one_time").default("one_time"),
  amountType: z.literal("free").default("free"),
}).transform((v) => {
  return remap$(v, {
    amountType: "amount_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceOneTimeFreeCreate$ {
  /** @deprecated use `ProductPriceOneTimeFreeCreate$inboundSchema` instead. */
  export const inboundSchema = ProductPriceOneTimeFreeCreate$inboundSchema;
  /** @deprecated use `ProductPriceOneTimeFreeCreate$outboundSchema` instead. */
  export const outboundSchema = ProductPriceOneTimeFreeCreate$outboundSchema;
  /** @deprecated use `ProductPriceOneTimeFreeCreate$Outbound` instead. */
  export type Outbound = ProductPriceOneTimeFreeCreate$Outbound;
}

export function productPriceOneTimeFreeCreateToJSON(
  productPriceOneTimeFreeCreate: ProductPriceOneTimeFreeCreate,
): string {
  return JSON.stringify(
    ProductPriceOneTimeFreeCreate$outboundSchema.parse(
      productPriceOneTimeFreeCreate,
    ),
  );
}

export function productPriceOneTimeFreeCreateFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceOneTimeFreeCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceOneTimeFreeCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceOneTimeFreeCreate' from JSON`,
  );
}
