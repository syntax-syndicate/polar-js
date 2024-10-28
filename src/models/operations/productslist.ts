/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID. **Required unless you use an organization token.**
 */
export type ProductsListQueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter products granting specific benefit.
 */
export type QueryParamBenefitIDFilter = string | Array<string>;

export type ProductsListRequest = {
  /**
   * Filter by organization ID. **Required unless you use an organization token.**
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by product name.
   */
  query?: string | null | undefined;
  /**
   * Filter on archived products.
   */
  isArchived?: boolean | null | undefined;
  /**
   * Filter on recurring products. If `true`, only subscriptions tiers are returned. If `false`, only one-time purchase products are returned.
   */
  isRecurring?: boolean | null | undefined;
  /**
   * Filter products granting specific benefit.
   */
  benefitId?: string | Array<string> | null | undefined;
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
  sorting?: Array<components.ProductSortProperty> | null | undefined;
};

export type ProductsListResponse = {
  result: components.ListResourceProduct;
};

/** @internal */
export const ProductsListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<ProductsListQueryParamOrganizationIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ProductsListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const ProductsListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    ProductsListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    ProductsListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `ProductsListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    ProductsListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `ProductsListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    ProductsListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `ProductsListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = ProductsListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const QueryParamBenefitIDFilter$inboundSchema: z.ZodType<
  QueryParamBenefitIDFilter,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type QueryParamBenefitIDFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamBenefitIDFilter$outboundSchema: z.ZodType<
  QueryParamBenefitIDFilter$Outbound,
  z.ZodTypeDef,
  QueryParamBenefitIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamBenefitIDFilter$ {
  /** @deprecated use `QueryParamBenefitIDFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamBenefitIDFilter$inboundSchema;
  /** @deprecated use `QueryParamBenefitIDFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamBenefitIDFilter$outboundSchema;
  /** @deprecated use `QueryParamBenefitIDFilter$Outbound` instead. */
  export type Outbound = QueryParamBenefitIDFilter$Outbound;
}

/** @internal */
export const ProductsListRequest$inboundSchema: z.ZodType<
  ProductsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  is_archived: z.nullable(z.boolean()).optional(),
  is_recurring: z.nullable(z.boolean()).optional(),
  benefit_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.ProductSortProperty$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "is_archived": "isArchived",
    "is_recurring": "isRecurring",
    "benefit_id": "benefitId",
  });
});

/** @internal */
export type ProductsListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  query?: string | null | undefined;
  is_archived?: boolean | null | undefined;
  is_recurring?: boolean | null | undefined;
  benefit_id?: string | Array<string> | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const ProductsListRequest$outboundSchema: z.ZodType<
  ProductsListRequest$Outbound,
  z.ZodTypeDef,
  ProductsListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  isArchived: z.nullable(z.boolean()).optional(),
  isRecurring: z.nullable(z.boolean()).optional(),
  benefitId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(components.ProductSortProperty$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    isArchived: "is_archived",
    isRecurring: "is_recurring",
    benefitId: "benefit_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsListRequest$ {
  /** @deprecated use `ProductsListRequest$inboundSchema` instead. */
  export const inboundSchema = ProductsListRequest$inboundSchema;
  /** @deprecated use `ProductsListRequest$outboundSchema` instead. */
  export const outboundSchema = ProductsListRequest$outboundSchema;
  /** @deprecated use `ProductsListRequest$Outbound` instead. */
  export type Outbound = ProductsListRequest$Outbound;
}

/** @internal */
export const ProductsListResponse$inboundSchema: z.ZodType<
  ProductsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceProduct$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ProductsListResponse$Outbound = {
  Result: components.ListResourceProduct$Outbound;
};

/** @internal */
export const ProductsListResponse$outboundSchema: z.ZodType<
  ProductsListResponse$Outbound,
  z.ZodTypeDef,
  ProductsListResponse
> = z.object({
  result: components.ListResourceProduct$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductsListResponse$ {
  /** @deprecated use `ProductsListResponse$inboundSchema` instead. */
  export const inboundSchema = ProductsListResponse$inboundSchema;
  /** @deprecated use `ProductsListResponse$outboundSchema` instead. */
  export const outboundSchema = ProductsListResponse$outboundSchema;
  /** @deprecated use `ProductsListResponse$Outbound` instead. */
  export type Outbound = ProductsListResponse$Outbound;
}
