/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  SubscriptionProrationBehavior,
  SubscriptionProrationBehavior$inboundSchema,
  SubscriptionProrationBehavior$outboundSchema,
} from "./subscriptionprorationbehavior.js";

export type SubscriptionUpdatePrice = {
  /**
   * Update subscription to another price.
   */
  productPriceId: string;
  /**
   * Determine how to handle the proration billing. If not provided, will use the default organization setting.
   */
  prorationBehavior?: SubscriptionProrationBehavior | null | undefined;
};

/** @internal */
export const SubscriptionUpdatePrice$inboundSchema: z.ZodType<
  SubscriptionUpdatePrice,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_price_id: z.string(),
  proration_behavior: z.nullable(SubscriptionProrationBehavior$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "product_price_id": "productPriceId",
    "proration_behavior": "prorationBehavior",
  });
});

/** @internal */
export type SubscriptionUpdatePrice$Outbound = {
  product_price_id: string;
  proration_behavior?: string | null | undefined;
};

/** @internal */
export const SubscriptionUpdatePrice$outboundSchema: z.ZodType<
  SubscriptionUpdatePrice$Outbound,
  z.ZodTypeDef,
  SubscriptionUpdatePrice
> = z.object({
  productPriceId: z.string(),
  prorationBehavior: z.nullable(SubscriptionProrationBehavior$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    productPriceId: "product_price_id",
    prorationBehavior: "proration_behavior",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionUpdatePrice$ {
  /** @deprecated use `SubscriptionUpdatePrice$inboundSchema` instead. */
  export const inboundSchema = SubscriptionUpdatePrice$inboundSchema;
  /** @deprecated use `SubscriptionUpdatePrice$outboundSchema` instead. */
  export const outboundSchema = SubscriptionUpdatePrice$outboundSchema;
  /** @deprecated use `SubscriptionUpdatePrice$Outbound` instead. */
  export type Outbound = SubscriptionUpdatePrice$Outbound;
}

export function subscriptionUpdatePriceToJSON(
  subscriptionUpdatePrice: SubscriptionUpdatePrice,
): string {
  return JSON.stringify(
    SubscriptionUpdatePrice$outboundSchema.parse(subscriptionUpdatePrice),
  );
}

export function subscriptionUpdatePriceFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionUpdatePrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionUpdatePrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionUpdatePrice' from JSON`,
  );
}
