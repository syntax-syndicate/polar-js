/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type ArticlesListQueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter by visibility.
 */
export type ArticleVisibilityFilter =
  | components.ArticleVisibility
  | Array<components.ArticleVisibility>;

export type ArticlesListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by slug.
   */
  slug?: string | null | undefined;
  /**
   * Filter by visibility.
   */
  visibility?:
    | components.ArticleVisibility
    | Array<components.ArticleVisibility>
    | null
    | undefined;
  /**
   * Filter by subscription status.
   */
  isSubscribed?: boolean | null | undefined;
  /**
   * Filter by published status.
   */
  isPublished?: boolean | null | undefined;
  /**
   * Filter by pinned status.
   */
  isPinned?: boolean | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type ArticlesListResponse = {
  result: components.ListResourceArticle;
};

/** @internal */
export const ArticlesListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<ArticlesListQueryParamOrganizationIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ArticlesListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const ArticlesListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    ArticlesListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    ArticlesListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `ArticlesListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    ArticlesListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `ArticlesListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    ArticlesListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `ArticlesListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound = ArticlesListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const ArticleVisibilityFilter$inboundSchema: z.ZodType<
  ArticleVisibilityFilter,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.ArticleVisibility$inboundSchema,
  z.array(components.ArticleVisibility$inboundSchema),
]);

/** @internal */
export type ArticleVisibilityFilter$Outbound = string | Array<string>;

/** @internal */
export const ArticleVisibilityFilter$outboundSchema: z.ZodType<
  ArticleVisibilityFilter$Outbound,
  z.ZodTypeDef,
  ArticleVisibilityFilter
> = z.union([
  components.ArticleVisibility$outboundSchema,
  z.array(components.ArticleVisibility$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticleVisibilityFilter$ {
  /** @deprecated use `ArticleVisibilityFilter$inboundSchema` instead. */
  export const inboundSchema = ArticleVisibilityFilter$inboundSchema;
  /** @deprecated use `ArticleVisibilityFilter$outboundSchema` instead. */
  export const outboundSchema = ArticleVisibilityFilter$outboundSchema;
  /** @deprecated use `ArticleVisibilityFilter$Outbound` instead. */
  export type Outbound = ArticleVisibilityFilter$Outbound;
}

/** @internal */
export const ArticlesListRequest$inboundSchema: z.ZodType<
  ArticlesListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  slug: z.nullable(z.string()).optional(),
  visibility: z.nullable(
    z.union([
      components.ArticleVisibility$inboundSchema,
      z.array(components.ArticleVisibility$inboundSchema),
    ]),
  ).optional(),
  is_subscribed: z.nullable(z.boolean()).optional(),
  is_published: z.nullable(z.boolean()).optional(),
  is_pinned: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "is_subscribed": "isSubscribed",
    "is_published": "isPublished",
    "is_pinned": "isPinned",
  });
});

/** @internal */
export type ArticlesListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  slug?: string | null | undefined;
  visibility?: string | Array<string> | null | undefined;
  is_subscribed?: boolean | null | undefined;
  is_published?: boolean | null | undefined;
  is_pinned?: boolean | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const ArticlesListRequest$outboundSchema: z.ZodType<
  ArticlesListRequest$Outbound,
  z.ZodTypeDef,
  ArticlesListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  slug: z.nullable(z.string()).optional(),
  visibility: z.nullable(
    z.union([
      components.ArticleVisibility$outboundSchema,
      z.array(components.ArticleVisibility$outboundSchema),
    ]),
  ).optional(),
  isSubscribed: z.nullable(z.boolean()).optional(),
  isPublished: z.nullable(z.boolean()).optional(),
  isPinned: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    isSubscribed: "is_subscribed",
    isPublished: "is_published",
    isPinned: "is_pinned",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesListRequest$ {
  /** @deprecated use `ArticlesListRequest$inboundSchema` instead. */
  export const inboundSchema = ArticlesListRequest$inboundSchema;
  /** @deprecated use `ArticlesListRequest$outboundSchema` instead. */
  export const outboundSchema = ArticlesListRequest$outboundSchema;
  /** @deprecated use `ArticlesListRequest$Outbound` instead. */
  export type Outbound = ArticlesListRequest$Outbound;
}

/** @internal */
export const ArticlesListResponse$inboundSchema: z.ZodType<
  ArticlesListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceArticle$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type ArticlesListResponse$Outbound = {
  Result: components.ListResourceArticle$Outbound;
};

/** @internal */
export const ArticlesListResponse$outboundSchema: z.ZodType<
  ArticlesListResponse$Outbound,
  z.ZodTypeDef,
  ArticlesListResponse
> = z.object({
  result: components.ListResourceArticle$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesListResponse$ {
  /** @deprecated use `ArticlesListResponse$inboundSchema` instead. */
  export const inboundSchema = ArticlesListResponse$inboundSchema;
  /** @deprecated use `ArticlesListResponse$outboundSchema` instead. */
  export const outboundSchema = ArticlesListResponse$outboundSchema;
  /** @deprecated use `ArticlesListResponse$Outbound` instead. */
  export type Outbound = ArticlesListResponse$Outbound;
}
