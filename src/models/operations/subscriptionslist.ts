/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type SubscriptionsListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

/**
 * Filter by product ID.
 */
export type SubscriptionsListQueryParamProductIDFilter = string | Array<string>;

export type SubscriptionsListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by product ID.
   */
  productId?: string | Array<string> | null | undefined;
  /**
   * Filter by active or inactive subscription.
   */
  active?: boolean | null | undefined;
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
  sorting?: Array<components.SubscriptionSortProperty> | null | undefined;
};

export type SubscriptionsListResponse = {
  result: components.ListResourceSubscription;
};

/** @internal */
export const SubscriptionsListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    SubscriptionsListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type SubscriptionsListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const SubscriptionsListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    SubscriptionsListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    SubscriptionsListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionsListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `SubscriptionsListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    SubscriptionsListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `SubscriptionsListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    SubscriptionsListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `SubscriptionsListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    SubscriptionsListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const SubscriptionsListQueryParamProductIDFilter$inboundSchema:
  z.ZodType<SubscriptionsListQueryParamProductIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type SubscriptionsListQueryParamProductIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const SubscriptionsListQueryParamProductIDFilter$outboundSchema:
  z.ZodType<
    SubscriptionsListQueryParamProductIDFilter$Outbound,
    z.ZodTypeDef,
    SubscriptionsListQueryParamProductIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionsListQueryParamProductIDFilter$ {
  /** @deprecated use `SubscriptionsListQueryParamProductIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    SubscriptionsListQueryParamProductIDFilter$inboundSchema;
  /** @deprecated use `SubscriptionsListQueryParamProductIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    SubscriptionsListQueryParamProductIDFilter$outboundSchema;
  /** @deprecated use `SubscriptionsListQueryParamProductIDFilter$Outbound` instead. */
  export type Outbound = SubscriptionsListQueryParamProductIDFilter$Outbound;
}

/** @internal */
export const SubscriptionsListRequest$inboundSchema: z.ZodType<
  SubscriptionsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  product_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  active: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(
    z.array(components.SubscriptionSortProperty$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "product_id": "productId",
  });
});

/** @internal */
export type SubscriptionsListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  product_id?: string | Array<string> | null | undefined;
  active?: boolean | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const SubscriptionsListRequest$outboundSchema: z.ZodType<
  SubscriptionsListRequest$Outbound,
  z.ZodTypeDef,
  SubscriptionsListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  productId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  active: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(
    z.array(components.SubscriptionSortProperty$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    productId: "product_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionsListRequest$ {
  /** @deprecated use `SubscriptionsListRequest$inboundSchema` instead. */
  export const inboundSchema = SubscriptionsListRequest$inboundSchema;
  /** @deprecated use `SubscriptionsListRequest$outboundSchema` instead. */
  export const outboundSchema = SubscriptionsListRequest$outboundSchema;
  /** @deprecated use `SubscriptionsListRequest$Outbound` instead. */
  export type Outbound = SubscriptionsListRequest$Outbound;
}

/** @internal */
export const SubscriptionsListResponse$inboundSchema: z.ZodType<
  SubscriptionsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceSubscription$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type SubscriptionsListResponse$Outbound = {
  Result: components.ListResourceSubscription$Outbound;
};

/** @internal */
export const SubscriptionsListResponse$outboundSchema: z.ZodType<
  SubscriptionsListResponse$Outbound,
  z.ZodTypeDef,
  SubscriptionsListResponse
> = z.object({
  result: components.ListResourceSubscription$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionsListResponse$ {
  /** @deprecated use `SubscriptionsListResponse$inboundSchema` instead. */
  export const inboundSchema = SubscriptionsListResponse$inboundSchema;
  /** @deprecated use `SubscriptionsListResponse$outboundSchema` instead. */
  export const outboundSchema = SubscriptionsListResponse$outboundSchema;
  /** @deprecated use `SubscriptionsListResponse$Outbound` instead. */
  export type Outbound = SubscriptionsListResponse$Outbound;
}
