/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import {
    MetricsIntervalLimit,
    MetricsIntervalLimit$inboundSchema,
    MetricsIntervalLimit$Outbound,
    MetricsIntervalLimit$outboundSchema,
} from "./metricsintervallimit.js";
import * as z from "zod";

/**
 * Date interval limits to get metrics for each interval.
 */
export type MetricsIntervalsLimits = {
    /**
     * Limits for the hour interval.
     */
    hour: MetricsIntervalLimit;
    /**
     * Limits for the day interval.
     */
    day: MetricsIntervalLimit;
    /**
     * Limits for the week interval.
     */
    week: MetricsIntervalLimit;
    /**
     * Limits for the month interval.
     */
    month: MetricsIntervalLimit;
    /**
     * Limits for the year interval.
     */
    year: MetricsIntervalLimit;
};

/** @internal */
export const MetricsIntervalsLimits$inboundSchema: z.ZodType<
    MetricsIntervalsLimits,
    z.ZodTypeDef,
    unknown
> = z.object({
    hour: MetricsIntervalLimit$inboundSchema,
    day: MetricsIntervalLimit$inboundSchema,
    week: MetricsIntervalLimit$inboundSchema,
    month: MetricsIntervalLimit$inboundSchema,
    year: MetricsIntervalLimit$inboundSchema,
});

/** @internal */
export type MetricsIntervalsLimits$Outbound = {
    hour: MetricsIntervalLimit$Outbound;
    day: MetricsIntervalLimit$Outbound;
    week: MetricsIntervalLimit$Outbound;
    month: MetricsIntervalLimit$Outbound;
    year: MetricsIntervalLimit$Outbound;
};

/** @internal */
export const MetricsIntervalsLimits$outboundSchema: z.ZodType<
    MetricsIntervalsLimits$Outbound,
    z.ZodTypeDef,
    MetricsIntervalsLimits
> = z.object({
    hour: MetricsIntervalLimit$outboundSchema,
    day: MetricsIntervalLimit$outboundSchema,
    week: MetricsIntervalLimit$outboundSchema,
    month: MetricsIntervalLimit$outboundSchema,
    year: MetricsIntervalLimit$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsIntervalsLimits$ {
    /** @deprecated use `MetricsIntervalsLimits$inboundSchema` instead. */
    export const inboundSchema = MetricsIntervalsLimits$inboundSchema;
    /** @deprecated use `MetricsIntervalsLimits$outboundSchema` instead. */
    export const outboundSchema = MetricsIntervalsLimits$outboundSchema;
    /** @deprecated use `MetricsIntervalsLimits$Outbound` instead. */
    export type Outbound = MetricsIntervalsLimits$Outbound;
}
