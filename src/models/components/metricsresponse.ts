/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  MetricPeriod,
  MetricPeriod$inboundSchema,
  MetricPeriod$Outbound,
  MetricPeriod$outboundSchema,
} from "./metricperiod.js";
import {
  Metrics,
  Metrics$inboundSchema,
  Metrics$Outbound,
  Metrics$outboundSchema,
} from "./metrics.js";

/**
 * Metrics response schema.
 */
export type MetricsResponse = {
  /**
   * List of data for each timestamp.
   */
  periods: Array<MetricPeriod>;
  metrics: Metrics;
};

/** @internal */
export const MetricsResponse$inboundSchema: z.ZodType<
  MetricsResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  periods: z.array(MetricPeriod$inboundSchema),
  metrics: Metrics$inboundSchema,
});

/** @internal */
export type MetricsResponse$Outbound = {
  periods: Array<MetricPeriod$Outbound>;
  metrics: Metrics$Outbound;
};

/** @internal */
export const MetricsResponse$outboundSchema: z.ZodType<
  MetricsResponse$Outbound,
  z.ZodTypeDef,
  MetricsResponse
> = z.object({
  periods: z.array(MetricPeriod$outboundSchema),
  metrics: Metrics$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetricsResponse$ {
  /** @deprecated use `MetricsResponse$inboundSchema` instead. */
  export const inboundSchema = MetricsResponse$inboundSchema;
  /** @deprecated use `MetricsResponse$outboundSchema` instead. */
  export const outboundSchema = MetricsResponse$outboundSchema;
  /** @deprecated use `MetricsResponse$Outbound` instead. */
  export type Outbound = MetricsResponse$Outbound;
}

export function metricsResponseToJSON(
  metricsResponse: MetricsResponse,
): string {
  return JSON.stringify(MetricsResponse$outboundSchema.parse(metricsResponse));
}

export function metricsResponseFromJSON(
  jsonString: string,
): SafeParseResult<MetricsResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetricsResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetricsResponse' from JSON`,
  );
}
