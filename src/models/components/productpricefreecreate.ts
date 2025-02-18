/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Schema to create a free price.
 */
export type ProductPriceFreeCreate = {
  amountType?: "free" | undefined;
};

/** @internal */
export const ProductPriceFreeCreate$inboundSchema: z.ZodType<
  ProductPriceFreeCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  amount_type: z.literal("free").optional(),
}).transform((v) => {
  return remap$(v, {
    "amount_type": "amountType",
  });
});

/** @internal */
export type ProductPriceFreeCreate$Outbound = {
  amount_type: "free";
};

/** @internal */
export const ProductPriceFreeCreate$outboundSchema: z.ZodType<
  ProductPriceFreeCreate$Outbound,
  z.ZodTypeDef,
  ProductPriceFreeCreate
> = z.object({
  amountType: z.literal("free").default("free" as const),
}).transform((v) => {
  return remap$(v, {
    amountType: "amount_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceFreeCreate$ {
  /** @deprecated use `ProductPriceFreeCreate$inboundSchema` instead. */
  export const inboundSchema = ProductPriceFreeCreate$inboundSchema;
  /** @deprecated use `ProductPriceFreeCreate$outboundSchema` instead. */
  export const outboundSchema = ProductPriceFreeCreate$outboundSchema;
  /** @deprecated use `ProductPriceFreeCreate$Outbound` instead. */
  export type Outbound = ProductPriceFreeCreate$Outbound;
}

export function productPriceFreeCreateToJSON(
  productPriceFreeCreate: ProductPriceFreeCreate,
): string {
  return JSON.stringify(
    ProductPriceFreeCreate$outboundSchema.parse(productPriceFreeCreate),
  );
}

export function productPriceFreeCreateFromJSON(
  jsonString: string,
): SafeParseResult<ProductPriceFreeCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ProductPriceFreeCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ProductPriceFreeCreate' from JSON`,
  );
}
