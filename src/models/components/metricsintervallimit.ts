/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

/**
 * Date interval limit to get metrics for a given interval.
 */
export type MetricsIntervalLimit = {
  /**
   * Maximum number of days for this interval.
   */
  maxDays: number;
};

/** @internal */
export const MetricsIntervalLimit$inboundSchema: z.ZodType<
  MetricsIntervalLimit,
  z.ZodTypeDef,
  unknown
> = z.object({
  max_days: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "max_days": "maxDays",
  });
});

/** @internal */
export type MetricsIntervalLimit$Outbound = {
  max_days: number;
};

/** @internal */
export const MetricsIntervalLimit$outboundSchema: z.ZodType<
  MetricsIntervalLimit$Outbound,
  z.ZodTypeDef,
  MetricsIntervalLimit
> = z.object({
  maxDays: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    maxDays: "max_days",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsIntervalLimit$ {
  /** @deprecated use `MetricsIntervalLimit$inboundSchema` instead. */
  export const inboundSchema = MetricsIntervalLimit$inboundSchema;
  /** @deprecated use `MetricsIntervalLimit$outboundSchema` instead. */
  export const outboundSchema = MetricsIntervalLimit$outboundSchema;
  /** @deprecated use `MetricsIntervalLimit$Outbound` instead. */
  export type Outbound = MetricsIntervalLimit$Outbound;
}
