/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type MetricPeriod = {
  /**
   * Timestamp of this period data.
   */
  timestamp: Date;
  orders: number;
  revenue: number;
  averageOrderValue: number;
  oneTimeProducts: number;
  oneTimeProductsRevenue: number;
  newSubscriptions: number;
  newSubscriptionsRevenue: number;
  renewedSubscriptions: number;
  renewedSubscriptionsRevenue: number;
  activeSubscriptions: number;
  monthlyRecurringRevenue: number;
};

/** @internal */
export const MetricPeriod$inboundSchema: z.ZodType<
  MetricPeriod,
  z.ZodTypeDef,
  unknown
> = z.object({
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  orders: z.number().int(),
  revenue: z.number().int(),
  average_order_value: z.number().int(),
  one_time_products: z.number().int(),
  one_time_products_revenue: z.number().int(),
  new_subscriptions: z.number().int(),
  new_subscriptions_revenue: z.number().int(),
  renewed_subscriptions: z.number().int(),
  renewed_subscriptions_revenue: z.number().int(),
  active_subscriptions: z.number().int(),
  monthly_recurring_revenue: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "average_order_value": "averageOrderValue",
    "one_time_products": "oneTimeProducts",
    "one_time_products_revenue": "oneTimeProductsRevenue",
    "new_subscriptions": "newSubscriptions",
    "new_subscriptions_revenue": "newSubscriptionsRevenue",
    "renewed_subscriptions": "renewedSubscriptions",
    "renewed_subscriptions_revenue": "renewedSubscriptionsRevenue",
    "active_subscriptions": "activeSubscriptions",
    "monthly_recurring_revenue": "monthlyRecurringRevenue",
  });
});

/** @internal */
export type MetricPeriod$Outbound = {
  timestamp: string;
  orders: number;
  revenue: number;
  average_order_value: number;
  one_time_products: number;
  one_time_products_revenue: number;
  new_subscriptions: number;
  new_subscriptions_revenue: number;
  renewed_subscriptions: number;
  renewed_subscriptions_revenue: number;
  active_subscriptions: number;
  monthly_recurring_revenue: number;
};

/** @internal */
export const MetricPeriod$outboundSchema: z.ZodType<
  MetricPeriod$Outbound,
  z.ZodTypeDef,
  MetricPeriod
> = z.object({
  timestamp: z.date().transform(v => v.toISOString()),
  orders: z.number().int(),
  revenue: z.number().int(),
  averageOrderValue: z.number().int(),
  oneTimeProducts: z.number().int(),
  oneTimeProductsRevenue: z.number().int(),
  newSubscriptions: z.number().int(),
  newSubscriptionsRevenue: z.number().int(),
  renewedSubscriptions: z.number().int(),
  renewedSubscriptionsRevenue: z.number().int(),
  activeSubscriptions: z.number().int(),
  monthlyRecurringRevenue: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    averageOrderValue: "average_order_value",
    oneTimeProducts: "one_time_products",
    oneTimeProductsRevenue: "one_time_products_revenue",
    newSubscriptions: "new_subscriptions",
    newSubscriptionsRevenue: "new_subscriptions_revenue",
    renewedSubscriptions: "renewed_subscriptions",
    renewedSubscriptionsRevenue: "renewed_subscriptions_revenue",
    activeSubscriptions: "active_subscriptions",
    monthlyRecurringRevenue: "monthly_recurring_revenue",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricPeriod$ {
  /** @deprecated use `MetricPeriod$inboundSchema` instead. */
  export const inboundSchema = MetricPeriod$inboundSchema;
  /** @deprecated use `MetricPeriod$outboundSchema` instead. */
  export const outboundSchema = MetricPeriod$outboundSchema;
  /** @deprecated use `MetricPeriod$Outbound` instead. */
  export type Outbound = MetricPeriod$Outbound;
}
