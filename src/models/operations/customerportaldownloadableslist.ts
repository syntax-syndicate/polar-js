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
export type CustomerPortalDownloadablesListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

/**
 * Filter by benefit ID.
 */
export type CustomerPortalDownloadablesListQueryParamBenefitIDFilter =
  | string
  | Array<string>;

export type CustomerPortalDownloadablesListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by benefit ID.
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
};

export type CustomerPortalDownloadablesListResponse = {
  result: components.ListResourceDownloadableRead;
};

/** @internal */
export const CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$Outbound;
}

export function customerPortalDownloadablesListQueryParamOrganizationIDFilterToJSON(
  customerPortalDownloadablesListQueryParamOrganizationIDFilter:
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$outboundSchema
      .parse(customerPortalDownloadablesListQueryParamOrganizationIDFilter),
  );
}

export function customerPortalDownloadablesListQueryParamOrganizationIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalDownloadablesListQueryParamOrganizationIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalDownloadablesListQueryParamOrganizationIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalDownloadablesListQueryParamOrganizationIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalDownloadablesListQueryParamBenefitIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalDownloadablesListQueryParamBenefitIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalDownloadablesListQueryParamBenefitIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalDownloadablesListQueryParamBenefitIDFilter$ {
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamBenefitIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamBenefitIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListQueryParamBenefitIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter$Outbound;
}

export function customerPortalDownloadablesListQueryParamBenefitIDFilterToJSON(
  customerPortalDownloadablesListQueryParamBenefitIDFilter:
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalDownloadablesListQueryParamBenefitIDFilter$outboundSchema
      .parse(customerPortalDownloadablesListQueryParamBenefitIDFilter),
  );
}

export function customerPortalDownloadablesListQueryParamBenefitIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalDownloadablesListQueryParamBenefitIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalDownloadablesListQueryParamBenefitIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalDownloadablesListQueryParamBenefitIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalDownloadablesListRequest$inboundSchema: z.ZodType<
  CustomerPortalDownloadablesListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  benefit_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "benefit_id": "benefitId",
  });
});

/** @internal */
export type CustomerPortalDownloadablesListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  benefit_id?: string | Array<string> | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const CustomerPortalDownloadablesListRequest$outboundSchema: z.ZodType<
  CustomerPortalDownloadablesListRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalDownloadablesListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  benefitId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
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
export namespace CustomerPortalDownloadablesListRequest$ {
  /** @deprecated use `CustomerPortalDownloadablesListRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalDownloadablesListRequest$inboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalDownloadablesListRequest$outboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListRequest$Outbound` instead. */
  export type Outbound = CustomerPortalDownloadablesListRequest$Outbound;
}

export function customerPortalDownloadablesListRequestToJSON(
  customerPortalDownloadablesListRequest:
    CustomerPortalDownloadablesListRequest,
): string {
  return JSON.stringify(
    CustomerPortalDownloadablesListRequest$outboundSchema.parse(
      customerPortalDownloadablesListRequest,
    ),
  );
}

export function customerPortalDownloadablesListRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalDownloadablesListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalDownloadablesListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalDownloadablesListRequest' from JSON`,
  );
}

/** @internal */
export const CustomerPortalDownloadablesListResponse$inboundSchema: z.ZodType<
  CustomerPortalDownloadablesListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: components.ListResourceDownloadableRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type CustomerPortalDownloadablesListResponse$Outbound = {
  Result: components.ListResourceDownloadableRead$Outbound;
};

/** @internal */
export const CustomerPortalDownloadablesListResponse$outboundSchema: z.ZodType<
  CustomerPortalDownloadablesListResponse$Outbound,
  z.ZodTypeDef,
  CustomerPortalDownloadablesListResponse
> = z.object({
  result: components.ListResourceDownloadableRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalDownloadablesListResponse$ {
  /** @deprecated use `CustomerPortalDownloadablesListResponse$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalDownloadablesListResponse$inboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListResponse$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalDownloadablesListResponse$outboundSchema;
  /** @deprecated use `CustomerPortalDownloadablesListResponse$Outbound` instead. */
  export type Outbound = CustomerPortalDownloadablesListResponse$Outbound;
}

export function customerPortalDownloadablesListResponseToJSON(
  customerPortalDownloadablesListResponse:
    CustomerPortalDownloadablesListResponse,
): string {
  return JSON.stringify(
    CustomerPortalDownloadablesListResponse$outboundSchema.parse(
      customerPortalDownloadablesListResponse,
    ),
  );
}

export function customerPortalDownloadablesListResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalDownloadablesListResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalDownloadablesListResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalDownloadablesListResponse' from JSON`,
  );
}
