/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { Metric, Metric$inboundSchema, Metric$Outbound, Metric$outboundSchema } from "./metric.js";
import * as z from "zod";

export type Metrics = {
    /**
     * Information about a metric.
     */
    orders: Metric;
    /**
     * Information about a metric.
     */
    revenue: Metric;
    /**
     * Information about a metric.
     */
    averageOrderValue: Metric;
    /**
     * Information about a metric.
     */
    oneTimeProducts: Metric;
    /**
     * Information about a metric.
     */
    oneTimeProductsRevenue: Metric;
    /**
     * Information about a metric.
     */
    newSubscriptions: Metric;
    /**
     * Information about a metric.
     */
    newSubscriptionsRevenue: Metric;
    /**
     * Information about a metric.
     */
    renewedSubscriptions: Metric;
    /**
     * Information about a metric.
     */
    renewedSubscriptionsRevenue: Metric;
    /**
     * Information about a metric.
     */
    activeSubscriptions: Metric;
    /**
     * Information about a metric.
     */
    monthlyRecurringRevenue: Metric;
};

/** @internal */
export const Metrics$inboundSchema: z.ZodType<Metrics, z.ZodTypeDef, unknown> = z
    .object({
        orders: Metric$inboundSchema,
        revenue: Metric$inboundSchema,
        average_order_value: Metric$inboundSchema,
        one_time_products: Metric$inboundSchema,
        one_time_products_revenue: Metric$inboundSchema,
        new_subscriptions: Metric$inboundSchema,
        new_subscriptions_revenue: Metric$inboundSchema,
        renewed_subscriptions: Metric$inboundSchema,
        renewed_subscriptions_revenue: Metric$inboundSchema,
        active_subscriptions: Metric$inboundSchema,
        monthly_recurring_revenue: Metric$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            average_order_value: "averageOrderValue",
            one_time_products: "oneTimeProducts",
            one_time_products_revenue: "oneTimeProductsRevenue",
            new_subscriptions: "newSubscriptions",
            new_subscriptions_revenue: "newSubscriptionsRevenue",
            renewed_subscriptions: "renewedSubscriptions",
            renewed_subscriptions_revenue: "renewedSubscriptionsRevenue",
            active_subscriptions: "activeSubscriptions",
            monthly_recurring_revenue: "monthlyRecurringRevenue",
        });
    });

/** @internal */
export type Metrics$Outbound = {
    orders: Metric$Outbound;
    revenue: Metric$Outbound;
    average_order_value: Metric$Outbound;
    one_time_products: Metric$Outbound;
    one_time_products_revenue: Metric$Outbound;
    new_subscriptions: Metric$Outbound;
    new_subscriptions_revenue: Metric$Outbound;
    renewed_subscriptions: Metric$Outbound;
    renewed_subscriptions_revenue: Metric$Outbound;
    active_subscriptions: Metric$Outbound;
    monthly_recurring_revenue: Metric$Outbound;
};

/** @internal */
export const Metrics$outboundSchema: z.ZodType<Metrics$Outbound, z.ZodTypeDef, Metrics> = z
    .object({
        orders: Metric$outboundSchema,
        revenue: Metric$outboundSchema,
        averageOrderValue: Metric$outboundSchema,
        oneTimeProducts: Metric$outboundSchema,
        oneTimeProductsRevenue: Metric$outboundSchema,
        newSubscriptions: Metric$outboundSchema,
        newSubscriptionsRevenue: Metric$outboundSchema,
        renewedSubscriptions: Metric$outboundSchema,
        renewedSubscriptionsRevenue: Metric$outboundSchema,
        activeSubscriptions: Metric$outboundSchema,
        monthlyRecurringRevenue: Metric$outboundSchema,
    })
    .transform((v) => {
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
export namespace Metrics$ {
    /** @deprecated use `Metrics$inboundSchema` instead. */
    export const inboundSchema = Metrics$inboundSchema;
    /** @deprecated use `Metrics$outboundSchema` instead. */
    export const outboundSchema = Metrics$outboundSchema;
    /** @deprecated use `Metrics$Outbound` instead. */
    export type Outbound = Metrics$Outbound;
}
