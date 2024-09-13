/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";
import {
  SubscriptionOutput,
  SubscriptionOutput$inboundSchema,
  SubscriptionOutput$Outbound,
  SubscriptionOutput$outboundSchema,
} from "./subscriptionoutput.js";

export type ListResourceSubscription = {
  items: Array<SubscriptionOutput>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceSubscription$inboundSchema: z.ZodType<
  ListResourceSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(SubscriptionOutput$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceSubscription$Outbound = {
  items: Array<SubscriptionOutput$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceSubscription$outboundSchema: z.ZodType<
  ListResourceSubscription$Outbound,
  z.ZodTypeDef,
  ListResourceSubscription
> = z.object({
  items: z.array(SubscriptionOutput$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceSubscription$ {
  /** @deprecated use `ListResourceSubscription$inboundSchema` instead. */
  export const inboundSchema = ListResourceSubscription$inboundSchema;
  /** @deprecated use `ListResourceSubscription$outboundSchema` instead. */
  export const outboundSchema = ListResourceSubscription$outboundSchema;
  /** @deprecated use `ListResourceSubscription$Outbound` instead. */
  export type Outbound = ListResourceSubscription$Outbound;
}
