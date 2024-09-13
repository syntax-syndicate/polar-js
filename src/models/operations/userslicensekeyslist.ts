/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

/**
 * Filter by organization ID.
 */
export type UsersLicenseKeysListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

export type UsersLicenseKeysListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by a specific benefit
   */
  benefitId?: string | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type UsersLicenseKeysListResponse = {
  result: components.ListResourceLicenseKeyRead;
};

/** @internal */
export const UsersLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    UsersLicenseKeysListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UsersLicenseKeysListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const UsersLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    UsersLicenseKeysListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    UsersLicenseKeysListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersLicenseKeysListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `UsersLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    UsersLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `UsersLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    UsersLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `UsersLicenseKeysListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    UsersLicenseKeysListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const UsersLicenseKeysListRequest$inboundSchema: z.ZodType<
  UsersLicenseKeysListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  benefit_id: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "benefit_id": "benefitId",
  });
});

/** @internal */
export type UsersLicenseKeysListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  benefit_id?: string | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const UsersLicenseKeysListRequest$outboundSchema: z.ZodType<
  UsersLicenseKeysListRequest$Outbound,
  z.ZodTypeDef,
  UsersLicenseKeysListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  benefitId: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    benefitId: "benefit_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersLicenseKeysListRequest$ {
  /** @deprecated use `UsersLicenseKeysListRequest$inboundSchema` instead. */
  export const inboundSchema = UsersLicenseKeysListRequest$inboundSchema;
  /** @deprecated use `UsersLicenseKeysListRequest$outboundSchema` instead. */
  export const outboundSchema = UsersLicenseKeysListRequest$outboundSchema;
  /** @deprecated use `UsersLicenseKeysListRequest$Outbound` instead. */
  export type Outbound = UsersLicenseKeysListRequest$Outbound;
}

/** @internal */
export const UsersLicenseKeysListResponse$inboundSchema: z.ZodType<
  UsersLicenseKeysListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceLicenseKeyRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type UsersLicenseKeysListResponse$Outbound = {
  Result: components.ListResourceLicenseKeyRead$Outbound;
};

/** @internal */
export const UsersLicenseKeysListResponse$outboundSchema: z.ZodType<
  UsersLicenseKeysListResponse$Outbound,
  z.ZodTypeDef,
  UsersLicenseKeysListResponse
> = z.object({
  result: components.ListResourceLicenseKeyRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersLicenseKeysListResponse$ {
  /** @deprecated use `UsersLicenseKeysListResponse$inboundSchema` instead. */
  export const inboundSchema = UsersLicenseKeysListResponse$inboundSchema;
  /** @deprecated use `UsersLicenseKeysListResponse$outboundSchema` instead. */
  export const outboundSchema = UsersLicenseKeysListResponse$outboundSchema;
  /** @deprecated use `UsersLicenseKeysListResponse$Outbound` instead. */
  export type Outbound = UsersLicenseKeysListResponse$Outbound;
}
