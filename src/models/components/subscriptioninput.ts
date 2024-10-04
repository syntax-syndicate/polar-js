/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ProductInput,
  ProductInput$inboundSchema,
  ProductInput$Outbound,
  ProductInput$outboundSchema,
} from "./product.js";
import {
  ProductPriceRecurring,
  ProductPriceRecurring$inboundSchema,
  ProductPriceRecurring$Outbound,
  ProductPriceRecurring$outboundSchema,
} from "./productpricerecurring.js";
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
import {
  SubscriptionUser,
  SubscriptionUser$inboundSchema,
  SubscriptionUser$Outbound,
  SubscriptionUser$outboundSchema,
} from "./subscriptionuser.js";

export type SubscriptionInput = {
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
  user: SubscriptionUser;
  /**
   * A product.
   */
  product: ProductInput;
  price: ProductPriceRecurring;
};

/** @internal */
export const SubscriptionInput$inboundSchema: z.ZodType<
  SubscriptionInput,
  z.ZodTypeDef,
  unknown
> = z.object({
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
  user: SubscriptionUser$inboundSchema,
  product: ProductInput$inboundSchema,
  price: ProductPriceRecurring$inboundSchema,
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
  });
});

/** @internal */
export type SubscriptionInput$Outbound = {
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
  user: SubscriptionUser$Outbound;
  product: ProductInput$Outbound;
  price: ProductPriceRecurring$Outbound;
};

/** @internal */
export const SubscriptionInput$outboundSchema: z.ZodType<
  SubscriptionInput$Outbound,
  z.ZodTypeDef,
  SubscriptionInput
> = z.object({
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
  user: SubscriptionUser$outboundSchema,
  product: ProductInput$outboundSchema,
  price: ProductPriceRecurring$outboundSchema,
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
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionInput$ {
  /** @deprecated use `SubscriptionInput$inboundSchema` instead. */
  export const inboundSchema = SubscriptionInput$inboundSchema;
  /** @deprecated use `SubscriptionInput$outboundSchema` instead. */
  export const outboundSchema = SubscriptionInput$outboundSchema;
  /** @deprecated use `SubscriptionInput$Outbound` instead. */
  export type Outbound = SubscriptionInput$Outbound;
}
