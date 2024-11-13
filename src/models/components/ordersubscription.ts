/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  SubscriptionRecurringInterval,
  SubscriptionRecurringInterval$inboundSchema,
  SubscriptionRecurringInterval$outboundSchema,
} from "./subscriptionrecurringinterval.js";
import {
  SubscriptionStatus,
  SubscriptionStatus$inboundSchema,
  SubscriptionStatus$outboundSchema,
} from "./subscriptionstatus.js";

export type OrderSubscriptionMetadata = string | number | boolean;

export type OrderSubscription = {
  metadata: { [k: string]: string | number | boolean };
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  amount: number | null;
  currency: string | null;
  recurringInterval: SubscriptionRecurringInterval;
  status: SubscriptionStatus;
  currentPeriodStart: Date;
  currentPeriodEnd: Date | null;
  cancelAtPeriodEnd: boolean;
  startedAt: Date | null;
  endedAt: Date | null;
  userId: string;
  productId: string;
  priceId: string;
  checkoutId: string | null;
};

/** @internal */
export const OrderSubscriptionMetadata$inboundSchema: z.ZodType<
  OrderSubscriptionMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type OrderSubscriptionMetadata$Outbound = string | number | boolean;

/** @internal */
export const OrderSubscriptionMetadata$outboundSchema: z.ZodType<
  OrderSubscriptionMetadata$Outbound,
  z.ZodTypeDef,
  OrderSubscriptionMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderSubscriptionMetadata$ {
  /** @deprecated use `OrderSubscriptionMetadata$inboundSchema` instead. */
  export const inboundSchema = OrderSubscriptionMetadata$inboundSchema;
  /** @deprecated use `OrderSubscriptionMetadata$outboundSchema` instead. */
  export const outboundSchema = OrderSubscriptionMetadata$outboundSchema;
  /** @deprecated use `OrderSubscriptionMetadata$Outbound` instead. */
  export type Outbound = OrderSubscriptionMetadata$Outbound;
}

/** @internal */
export const OrderSubscription$inboundSchema: z.ZodType<
  OrderSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  amount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  recurring_interval: SubscriptionRecurringInterval$inboundSchema,
  status: SubscriptionStatus$inboundSchema,
  current_period_start: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  current_period_end: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  cancel_at_period_end: z.boolean(),
  started_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  ended_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  user_id: z.string(),
  product_id: z.string(),
  price_id: z.string(),
  checkout_id: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "recurring_interval": "recurringInterval",
    "current_period_start": "currentPeriodStart",
    "current_period_end": "currentPeriodEnd",
    "cancel_at_period_end": "cancelAtPeriodEnd",
    "started_at": "startedAt",
    "ended_at": "endedAt",
    "user_id": "userId",
    "product_id": "productId",
    "price_id": "priceId",
    "checkout_id": "checkoutId",
  });
});

/** @internal */
export type OrderSubscription$Outbound = {
  metadata: { [k: string]: string | number | boolean };
  created_at: string;
  modified_at: string | null;
  id: string;
  amount: number | null;
  currency: string | null;
  recurring_interval: string;
  status: string;
  current_period_start: string;
  current_period_end: string | null;
  cancel_at_period_end: boolean;
  started_at: string | null;
  ended_at: string | null;
  user_id: string;
  product_id: string;
  price_id: string;
  checkout_id: string | null;
};

/** @internal */
export const OrderSubscription$outboundSchema: z.ZodType<
  OrderSubscription$Outbound,
  z.ZodTypeDef,
  OrderSubscription
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  amount: z.nullable(z.number().int()),
  currency: z.nullable(z.string()),
  recurringInterval: SubscriptionRecurringInterval$outboundSchema,
  status: SubscriptionStatus$outboundSchema,
  currentPeriodStart: z.date().transform(v => v.toISOString()),
  currentPeriodEnd: z.nullable(z.date().transform(v => v.toISOString())),
  cancelAtPeriodEnd: z.boolean(),
  startedAt: z.nullable(z.date().transform(v => v.toISOString())),
  endedAt: z.nullable(z.date().transform(v => v.toISOString())),
  userId: z.string(),
  productId: z.string(),
  priceId: z.string(),
  checkoutId: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    recurringInterval: "recurring_interval",
    currentPeriodStart: "current_period_start",
    currentPeriodEnd: "current_period_end",
    cancelAtPeriodEnd: "cancel_at_period_end",
    startedAt: "started_at",
    endedAt: "ended_at",
    userId: "user_id",
    productId: "product_id",
    priceId: "price_id",
    checkoutId: "checkout_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderSubscription$ {
  /** @deprecated use `OrderSubscription$inboundSchema` instead. */
  export const inboundSchema = OrderSubscription$inboundSchema;
  /** @deprecated use `OrderSubscription$outboundSchema` instead. */
  export const outboundSchema = OrderSubscription$outboundSchema;
  /** @deprecated use `OrderSubscription$Outbound` instead. */
  export type Outbound = OrderSubscription$Outbound;
}
