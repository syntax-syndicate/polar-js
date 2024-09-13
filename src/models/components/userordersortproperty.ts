/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const UserOrderSortProperty = {
  CreatedAt: "created_at",
  MinusCreatedAt: "-created_at",
  Amount: "amount",
  MinusAmount: "-amount",
  Organization: "organization",
  MinusOrganization: "-organization",
  Product: "product",
  MinusProduct: "-product",
  Subscription: "subscription",
  MinusSubscription: "-subscription",
} as const;
export type UserOrderSortProperty = ClosedEnum<typeof UserOrderSortProperty>;

/** @internal */
export const UserOrderSortProperty$inboundSchema: z.ZodNativeEnum<
  typeof UserOrderSortProperty
> = z.nativeEnum(UserOrderSortProperty);

/** @internal */
export const UserOrderSortProperty$outboundSchema: z.ZodNativeEnum<
  typeof UserOrderSortProperty
> = UserOrderSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserOrderSortProperty$ {
  /** @deprecated use `UserOrderSortProperty$inboundSchema` instead. */
  export const inboundSchema = UserOrderSortProperty$inboundSchema;
  /** @deprecated use `UserOrderSortProperty$outboundSchema` instead. */
  export const outboundSchema = UserOrderSortProperty$outboundSchema;
}
