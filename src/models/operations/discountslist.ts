/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Filter by organization ID.
 */
export type DiscountsListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

export type DiscountsListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by name.
   */
  query?: string | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
  /**
   * Sorting criterion. Several criteria can be used simultaneously and will be applied in order. Add a minus sign `-` before the criteria name to sort by descending order.
   */
  sorting?: Array<components.DiscountSortProperty> | null | undefined;
};

export type DiscountsListResponse = {
  result: components.ListResourceDiscount;
};

/** @internal */
export const DiscountsListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    DiscountsListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type DiscountsListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const DiscountsListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    DiscountsListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    DiscountsListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountsListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `DiscountsListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    DiscountsListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `DiscountsListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    DiscountsListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `DiscountsListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = DiscountsListQueryParamOrganizationIDFilter$Outbound;
}

export function discountsListQueryParamOrganizationIDFilterToJSON(
  discountsListQueryParamOrganizationIDFilter:
    DiscountsListQueryParamOrganizationIDFilter,
): string {
  return JSON.stringify(
    DiscountsListQueryParamOrganizationIDFilter$outboundSchema.parse(
      discountsListQueryParamOrganizationIDFilter,
    ),
  );
}

export function discountsListQueryParamOrganizationIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  DiscountsListQueryParamOrganizationIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DiscountsListQueryParamOrganizationIDFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DiscountsListQueryParamOrganizationIDFilter' from JSON`,
  );
}

/** @internal */
export const DiscountsListRequest$inboundSchema: z.ZodType<
  DiscountsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.DiscountSortProperty$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type DiscountsListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  query?: string | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const DiscountsListRequest$outboundSchema: z.ZodType<
  DiscountsListRequest$Outbound,
  z.ZodTypeDef,
  DiscountsListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.DiscountSortProperty$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountsListRequest$ {
  /** @deprecated use `DiscountsListRequest$inboundSchema` instead. */
  export const inboundSchema = DiscountsListRequest$inboundSchema;
  /** @deprecated use `DiscountsListRequest$outboundSchema` instead. */
  export const outboundSchema = DiscountsListRequest$outboundSchema;
  /** @deprecated use `DiscountsListRequest$Outbound` instead. */
  export type Outbound = DiscountsListRequest$Outbound;
}

export function discountsListRequestToJSON(
  discountsListRequest: DiscountsListRequest,
): string {
  return JSON.stringify(
    DiscountsListRequest$outboundSchema.parse(discountsListRequest),
  );
}

export function discountsListRequestFromJSON(
  jsonString: string,
): SafeParseResult<DiscountsListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountsListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountsListRequest' from JSON`,
  );
}

/** @internal */
export const DiscountsListResponse$inboundSchema: z.ZodType<
  DiscountsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceDiscount$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type DiscountsListResponse$Outbound = {
  Result: components.ListResourceDiscount$Outbound;
};

/** @internal */
export const DiscountsListResponse$outboundSchema: z.ZodType<
  DiscountsListResponse$Outbound,
  z.ZodTypeDef,
  DiscountsListResponse
> = z.object({
  result: components.ListResourceDiscount$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountsListResponse$ {
  /** @deprecated use `DiscountsListResponse$inboundSchema` instead. */
  export const inboundSchema = DiscountsListResponse$inboundSchema;
  /** @deprecated use `DiscountsListResponse$outboundSchema` instead. */
  export const outboundSchema = DiscountsListResponse$outboundSchema;
  /** @deprecated use `DiscountsListResponse$Outbound` instead. */
  export type Outbound = DiscountsListResponse$Outbound;
}

export function discountsListResponseToJSON(
  discountsListResponse: DiscountsListResponse,
): string {
  return JSON.stringify(
    DiscountsListResponse$outboundSchema.parse(discountsListResponse),
  );
}

export function discountsListResponseFromJSON(
  jsonString: string,
): SafeParseResult<DiscountsListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountsListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountsListResponse' from JSON`,
  );
}
