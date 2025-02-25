/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ListResourceLicenseKeyRead,
  ListResourceLicenseKeyRead$inboundSchema,
  ListResourceLicenseKeyRead$Outbound,
  ListResourceLicenseKeyRead$outboundSchema,
} from "../components/listresourcelicensekeyread.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalLicenseKeysListSecurity = {
  customerSession: string;
};

/**
 * Filter by organization ID.
 */
export type CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

export type CustomerPortalLicenseKeysListRequest = {
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

export type CustomerPortalLicenseKeysListResponse = {
  result: ListResourceLicenseKeyRead;
};

/** @internal */
export const CustomerPortalLicenseKeysListSecurity$inboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  customer_session: z.string(),
}).transform((v) => {
  return remap$(v, {
    "customer_session": "customerSession",
  });
});

/** @internal */
export type CustomerPortalLicenseKeysListSecurity$Outbound = {
  customer_session: string;
};

/** @internal */
export const CustomerPortalLicenseKeysListSecurity$outboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListSecurity$Outbound,
  z.ZodTypeDef,
  CustomerPortalLicenseKeysListSecurity
> = z.object({
  customerSession: z.string(),
}).transform((v) => {
  return remap$(v, {
    customerSession: "customer_session",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalLicenseKeysListSecurity$ {
  /** @deprecated use `CustomerPortalLicenseKeysListSecurity$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalLicenseKeysListSecurity$inboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListSecurity$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalLicenseKeysListSecurity$outboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListSecurity$Outbound` instead. */
  export type Outbound = CustomerPortalLicenseKeysListSecurity$Outbound;
}

export function customerPortalLicenseKeysListSecurityToJSON(
  customerPortalLicenseKeysListSecurity: CustomerPortalLicenseKeysListSecurity,
): string {
  return JSON.stringify(
    CustomerPortalLicenseKeysListSecurity$outboundSchema.parse(
      customerPortalLicenseKeysListSecurity,
    ),
  );
}

export function customerPortalLicenseKeysListSecurityFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalLicenseKeysListSecurity, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalLicenseKeysListSecurity$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalLicenseKeysListSecurity' from JSON`,
  );
}

/** @internal */
export const CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$Outbound;
}

export function customerPortalLicenseKeysListQueryParamOrganizationIDFilterToJSON(
  customerPortalLicenseKeysListQueryParamOrganizationIDFilter:
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$outboundSchema
      .parse(customerPortalLicenseKeysListQueryParamOrganizationIDFilter),
  );
}

export function customerPortalLicenseKeysListQueryParamOrganizationIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalLicenseKeysListQueryParamOrganizationIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalLicenseKeysListRequest$inboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListRequest,
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
export type CustomerPortalLicenseKeysListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  benefit_id?: string | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const CustomerPortalLicenseKeysListRequest$outboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalLicenseKeysListRequest
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
export namespace CustomerPortalLicenseKeysListRequest$ {
  /** @deprecated use `CustomerPortalLicenseKeysListRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalLicenseKeysListRequest$inboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalLicenseKeysListRequest$outboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListRequest$Outbound` instead. */
  export type Outbound = CustomerPortalLicenseKeysListRequest$Outbound;
}

export function customerPortalLicenseKeysListRequestToJSON(
  customerPortalLicenseKeysListRequest: CustomerPortalLicenseKeysListRequest,
): string {
  return JSON.stringify(
    CustomerPortalLicenseKeysListRequest$outboundSchema.parse(
      customerPortalLicenseKeysListRequest,
    ),
  );
}

export function customerPortalLicenseKeysListRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalLicenseKeysListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalLicenseKeysListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalLicenseKeysListRequest' from JSON`,
  );
}

/** @internal */
export const CustomerPortalLicenseKeysListResponse$inboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: ListResourceLicenseKeyRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type CustomerPortalLicenseKeysListResponse$Outbound = {
  Result: ListResourceLicenseKeyRead$Outbound;
};

/** @internal */
export const CustomerPortalLicenseKeysListResponse$outboundSchema: z.ZodType<
  CustomerPortalLicenseKeysListResponse$Outbound,
  z.ZodTypeDef,
  CustomerPortalLicenseKeysListResponse
> = z.object({
  result: ListResourceLicenseKeyRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalLicenseKeysListResponse$ {
  /** @deprecated use `CustomerPortalLicenseKeysListResponse$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalLicenseKeysListResponse$inboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListResponse$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalLicenseKeysListResponse$outboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysListResponse$Outbound` instead. */
  export type Outbound = CustomerPortalLicenseKeysListResponse$Outbound;
}

export function customerPortalLicenseKeysListResponseToJSON(
  customerPortalLicenseKeysListResponse: CustomerPortalLicenseKeysListResponse,
): string {
  return JSON.stringify(
    CustomerPortalLicenseKeysListResponse$outboundSchema.parse(
      customerPortalLicenseKeysListResponse,
    ),
  );
}

export function customerPortalLicenseKeysListResponseFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalLicenseKeysListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalLicenseKeysListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalLicenseKeysListResponse' from JSON`,
  );
}
