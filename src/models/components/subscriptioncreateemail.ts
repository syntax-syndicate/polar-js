/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Request schema for creating a subscription by email.
 */
export type SubscriptionCreateEmail = {
  /**
   * The email address of the user.
   */
  email: string;
  /**
   * The ID of the product. **Must be the free subscription tier**.
   */
  productId: string;
};

/** @internal */
export const SubscriptionCreateEmail$inboundSchema: z.ZodType<
  SubscriptionCreateEmail,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.string(),
  product_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "product_id": "productId",
  });
});

/** @internal */
export type SubscriptionCreateEmail$Outbound = {
  email: string;
  product_id: string;
};

/** @internal */
export const SubscriptionCreateEmail$outboundSchema: z.ZodType<
  SubscriptionCreateEmail$Outbound,
  z.ZodTypeDef,
  SubscriptionCreateEmail
> = z.object({
  email: z.string(),
  productId: z.string(),
}).transform((v) => {
  return remap$(v, {
    productId: "product_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionCreateEmail$ {
  /** @deprecated use `SubscriptionCreateEmail$inboundSchema` instead. */
  export const inboundSchema = SubscriptionCreateEmail$inboundSchema;
  /** @deprecated use `SubscriptionCreateEmail$outboundSchema` instead. */
  export const outboundSchema = SubscriptionCreateEmail$outboundSchema;
  /** @deprecated use `SubscriptionCreateEmail$Outbound` instead. */
  export type Outbound = SubscriptionCreateEmail$Outbound;
}
