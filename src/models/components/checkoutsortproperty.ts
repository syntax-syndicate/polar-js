/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const CheckoutSortProperty = {
  CreatedAt: "created_at",
  MinusCreatedAt: "-created_at",
  ExpiresAt: "expires_at",
  MinusExpiresAt: "-expires_at",
} as const;
export type CheckoutSortProperty = ClosedEnum<typeof CheckoutSortProperty>;

/** @internal */
export const CheckoutSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof CheckoutSortProperty
> = z.nativeEnum(CheckoutSortProperty);

/** @internal */
export const CheckoutSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof CheckoutSortProperty
> = CheckoutSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutSortProperty$ {
  /** @deprecated use `CheckoutSortProperty$inboundSchema` instead. */
  export const inboundSchema = CheckoutSortProperty$inboundSchema;
  /** @deprecated use `CheckoutSortProperty$outboundSchema` instead. */
  export const outboundSchema = CheckoutSortProperty$outboundSchema;
}
