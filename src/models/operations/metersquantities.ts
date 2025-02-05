/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  TimeInterval,
  TimeInterval$inboundSchema,
  TimeInterval$outboundSchema,
} from "../components/timeinterval.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Filter by customer ID.
 */
export type MetersQuantitiesQueryParamCustomerIDFilter = string | Array<string>;

/**
 * Filter by external customer ID.
 */
export type QueryParamExternalCustomerIDFilter = string | Array<string>;

export type MetersQuantitiesRequest = {
  /**
   * The meter ID.
   */
  id: string;
  /**
   * Start timestamp.
   */
  startTimestamp: Date;
  /**
   * End timestamp.
   */
  endTimestamp: Date;
  /**
   * Interval between two timestamps.
   */
  interval: TimeInterval;
  /**
   * Filter by customer ID.
   */
  customerId?: string | Array<string> | null | undefined;
  /**
   * Filter by external customer ID.
   */
  exernalCustomerId?: string | Array<string> | null | undefined;
};

/** @internal */
export const MetersQuantitiesQueryParamCustomerIDFilter$inboundSchema:
  z.ZodType<MetersQuantitiesQueryParamCustomerIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type MetersQuantitiesQueryParamCustomerIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const MetersQuantitiesQueryParamCustomerIDFilter$outboundSchema:
  z.ZodType<
    MetersQuantitiesQueryParamCustomerIDFilter$Outbound,
    z.ZodTypeDef,
    MetersQuantitiesQueryParamCustomerIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetersQuantitiesQueryParamCustomerIDFilter$ {
  /** @deprecated use `MetersQuantitiesQueryParamCustomerIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    MetersQuantitiesQueryParamCustomerIDFilter$inboundSchema;
  /** @deprecated use `MetersQuantitiesQueryParamCustomerIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    MetersQuantitiesQueryParamCustomerIDFilter$outboundSchema;
  /** @deprecated use `MetersQuantitiesQueryParamCustomerIDFilter$Outbound` instead. */
  export type Outbound = MetersQuantitiesQueryParamCustomerIDFilter$Outbound;
}

export function metersQuantitiesQueryParamCustomerIDFilterToJSON(
  metersQuantitiesQueryParamCustomerIDFilter:
    MetersQuantitiesQueryParamCustomerIDFilter,
): string {
  return JSON.stringify(
    MetersQuantitiesQueryParamCustomerIDFilter$outboundSchema.parse(
      metersQuantitiesQueryParamCustomerIDFilter,
    ),
  );
}

export function metersQuantitiesQueryParamCustomerIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  MetersQuantitiesQueryParamCustomerIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      MetersQuantitiesQueryParamCustomerIDFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'MetersQuantitiesQueryParamCustomerIDFilter' from JSON`,
  );
}

/** @internal */
export const QueryParamExternalCustomerIDFilter$inboundSchema: z.ZodType<
  QueryParamExternalCustomerIDFilter,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type QueryParamExternalCustomerIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const QueryParamExternalCustomerIDFilter$outboundSchema: z.ZodType<
  QueryParamExternalCustomerIDFilter$Outbound,
  z.ZodTypeDef,
  QueryParamExternalCustomerIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamExternalCustomerIDFilter$ {
  /** @deprecated use `QueryParamExternalCustomerIDFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamExternalCustomerIDFilter$inboundSchema;
  /** @deprecated use `QueryParamExternalCustomerIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    QueryParamExternalCustomerIDFilter$outboundSchema;
  /** @deprecated use `QueryParamExternalCustomerIDFilter$Outbound` instead. */
  export type Outbound = QueryParamExternalCustomerIDFilter$Outbound;
}

export function queryParamExternalCustomerIDFilterToJSON(
  queryParamExternalCustomerIDFilter: QueryParamExternalCustomerIDFilter,
): string {
  return JSON.stringify(
    QueryParamExternalCustomerIDFilter$outboundSchema.parse(
      queryParamExternalCustomerIDFilter,
    ),
  );
}

export function queryParamExternalCustomerIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<QueryParamExternalCustomerIDFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      QueryParamExternalCustomerIDFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryParamExternalCustomerIDFilter' from JSON`,
  );
}

/** @internal */
export const MetersQuantitiesRequest$inboundSchema: z.ZodType<
  MetersQuantitiesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  start_timestamp: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  end_timestamp: z.string().datetime({ offset: true }).transform(v =>
    new Date(v)
  ),
  interval: TimeInterval$inboundSchema,
  customer_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  exernal_customer_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "start_timestamp": "startTimestamp",
    "end_timestamp": "endTimestamp",
    "customer_id": "customerId",
    "exernal_customer_id": "exernalCustomerId",
  });
});

/** @internal */
export type MetersQuantitiesRequest$Outbound = {
  id: string;
  start_timestamp: string;
  end_timestamp: string;
  interval: string;
  customer_id?: string | Array<string> | null | undefined;
  exernal_customer_id?: string | Array<string> | null | undefined;
};

/** @internal */
export const MetersQuantitiesRequest$outboundSchema: z.ZodType<
  MetersQuantitiesRequest$Outbound,
  z.ZodTypeDef,
  MetersQuantitiesRequest
> = z.object({
  id: z.string(),
  startTimestamp: z.date().transform(v => v.toISOString()),
  endTimestamp: z.date().transform(v => v.toISOString()),
  interval: TimeInterval$outboundSchema,
  customerId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  exernalCustomerId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    startTimestamp: "start_timestamp",
    endTimestamp: "end_timestamp",
    customerId: "customer_id",
    exernalCustomerId: "exernal_customer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetersQuantitiesRequest$ {
  /** @deprecated use `MetersQuantitiesRequest$inboundSchema` instead. */
  export const inboundSchema = MetersQuantitiesRequest$inboundSchema;
  /** @deprecated use `MetersQuantitiesRequest$outboundSchema` instead. */
  export const outboundSchema = MetersQuantitiesRequest$outboundSchema;
  /** @deprecated use `MetersQuantitiesRequest$Outbound` instead. */
  export type Outbound = MetersQuantitiesRequest$Outbound;
}

export function metersQuantitiesRequestToJSON(
  metersQuantitiesRequest: MetersQuantitiesRequest,
): string {
  return JSON.stringify(
    MetersQuantitiesRequest$outboundSchema.parse(metersQuantitiesRequest),
  );
}

export function metersQuantitiesRequestFromJSON(
  jsonString: string,
): SafeParseResult<MetersQuantitiesRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetersQuantitiesRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetersQuantitiesRequest' from JSON`,
  );
}
