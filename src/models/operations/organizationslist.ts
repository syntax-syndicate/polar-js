/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type OrganizationsListRequest = {
  /**
   * Filter by slug.
   */
  slug?: string | null | undefined;
  /**
   * Filter by membership. If `true`, only organizations the user is a member of are returned. If `false`, only organizations the user is not a member of are returned.
   */
  isMember?: boolean | null | undefined;
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
  sorting?: Array<components.OrganizationSortProperty> | null | undefined;
};

export type OrganizationsListResponse = {
  result: components.ListResourceOrganization;
};

/** @internal */
export const OrganizationsListRequest$inboundSchema: z.ZodType<
  OrganizationsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  slug: z.nullable(z.string()).optional(),
  is_member: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(
    z.array(components.OrganizationSortProperty$inboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "is_member": "isMember",
  });
});

/** @internal */
export type OrganizationsListRequest$Outbound = {
  slug?: string | null | undefined;
  is_member?: boolean | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const OrganizationsListRequest$outboundSchema: z.ZodType<
  OrganizationsListRequest$Outbound,
  z.ZodTypeDef,
  OrganizationsListRequest
> = z.object({
  slug: z.nullable(z.string()).optional(),
  isMember: z.nullable(z.boolean()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(
    z.array(components.OrganizationSortProperty$outboundSchema),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    isMember: "is_member",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationsListRequest$ {
  /** @deprecated use `OrganizationsListRequest$inboundSchema` instead. */
  export const inboundSchema = OrganizationsListRequest$inboundSchema;
  /** @deprecated use `OrganizationsListRequest$outboundSchema` instead. */
  export const outboundSchema = OrganizationsListRequest$outboundSchema;
  /** @deprecated use `OrganizationsListRequest$Outbound` instead. */
  export type Outbound = OrganizationsListRequest$Outbound;
}

/** @internal */
export const OrganizationsListResponse$inboundSchema: z.ZodType<
  OrganizationsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceOrganization$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type OrganizationsListResponse$Outbound = {
  Result: components.ListResourceOrganization$Outbound;
};

/** @internal */
export const OrganizationsListResponse$outboundSchema: z.ZodType<
  OrganizationsListResponse$Outbound,
  z.ZodTypeDef,
  OrganizationsListResponse
> = z.object({
  result: components.ListResourceOrganization$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationsListResponse$ {
  /** @deprecated use `OrganizationsListResponse$inboundSchema` instead. */
  export const inboundSchema = OrganizationsListResponse$inboundSchema;
  /** @deprecated use `OrganizationsListResponse$outboundSchema` instead. */
  export const outboundSchema = OrganizationsListResponse$outboundSchema;
  /** @deprecated use `OrganizationsListResponse$Outbound` instead. */
  export type Outbound = OrganizationsListResponse$Outbound;
}
