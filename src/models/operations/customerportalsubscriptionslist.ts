/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CustomerSubscriptionSortProperty,
  CustomerSubscriptionSortProperty$inboundSchema,
  CustomerSubscriptionSortProperty$outboundSchema,
} from "../components/customersubscriptionsortproperty.js";
import {
  ListResourceCustomerSubscription,
  ListResourceCustomerSubscription$inboundSchema,
  ListResourceCustomerSubscription$Outbound,
  ListResourceCustomerSubscription$outboundSchema,
} from "../components/listresourcecustomersubscription.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalSubscriptionsListSecurity = {
  customerSession: string;
};

/**
 * Filter by organization ID.
 */
export type CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

/**
 * Filter by product ID.
 */
export type CustomerPortalSubscriptionsListQueryParamProductIDFilter =
  | string
  | Array<string>;

export type CustomerPortalSubscriptionsListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by product ID.
   */
  productId?: string | Array<string> | null | undefined;
  /**
   * Filter by active or cancelled subscription.
   */
  active?: boolean | null | undefined;
  /**
   * Search by product or organization name.
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
  sorting?: Array<CustomerSubscriptionSortProperty> | null | undefined;
};

export type CustomerPortalSubscriptionsListResponse = {
  result: ListResourceCustomerSubscription;
};

/** @internal */
export const CustomerPortalSubscriptionsListSecurity$inboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListSecurity,
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
export type CustomerPortalSubscriptionsListSecurity$Outbound = {
  customer_session: string;
};

/** @internal */
export const CustomerPortalSubscriptionsListSecurity$outboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListSecurity$Outbound,
  z.ZodTypeDef,
  CustomerPortalSubscriptionsListSecurity
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
export namespace CustomerPortalSubscriptionsListSecurity$ {
  /** @deprecated use `CustomerPortalSubscriptionsListSecurity$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalSubscriptionsListSecurity$inboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListSecurity$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalSubscriptionsListSecurity$outboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListSecurity$Outbound` instead. */
  export type Outbound = CustomerPortalSubscriptionsListSecurity$Outbound;
}

export function customerPortalSubscriptionsListSecurityToJSON(
  customerPortalSubscriptionsListSecurity:
    CustomerPortalSubscriptionsListSecurity,
): string {
  return JSON.stringify(
    CustomerPortalSubscriptionsListSecurity$outboundSchema.parse(
      customerPortalSubscriptionsListSecurity,
    ),
  );
}

export function customerPortalSubscriptionsListSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalSubscriptionsListSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalSubscriptionsListSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalSubscriptionsListSecurity' from JSON`,
  );
}

/** @internal */
export const CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$Outbound;
}

export function customerPortalSubscriptionsListQueryParamOrganizationIDFilterToJSON(
  customerPortalSubscriptionsListQueryParamOrganizationIDFilter:
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$outboundSchema
      .parse(customerPortalSubscriptionsListQueryParamOrganizationIDFilter),
  );
}

export function customerPortalSubscriptionsListQueryParamOrganizationIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalSubscriptionsListQueryParamOrganizationIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalSubscriptionsListQueryParamProductIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalSubscriptionsListQueryParamProductIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalSubscriptionsListQueryParamProductIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalSubscriptionsListQueryParamProductIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalSubscriptionsListQueryParamProductIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalSubscriptionsListQueryParamProductIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalSubscriptionsListQueryParamProductIDFilter$ {
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamProductIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalSubscriptionsListQueryParamProductIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamProductIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalSubscriptionsListQueryParamProductIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListQueryParamProductIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalSubscriptionsListQueryParamProductIDFilter$Outbound;
}

export function customerPortalSubscriptionsListQueryParamProductIDFilterToJSON(
  customerPortalSubscriptionsListQueryParamProductIDFilter:
    CustomerPortalSubscriptionsListQueryParamProductIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalSubscriptionsListQueryParamProductIDFilter$outboundSchema
      .parse(customerPortalSubscriptionsListQueryParamProductIDFilter),
  );
}

export function customerPortalSubscriptionsListQueryParamProductIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalSubscriptionsListQueryParamProductIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalSubscriptionsListQueryParamProductIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalSubscriptionsListQueryParamProductIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalSubscriptionsListRequest$inboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  product_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  active: z.nullable(z.boolean()).optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(CustomerSubscriptionSortProperty$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "product_id": "productId",
  });
});

/** @internal */
export type CustomerPortalSubscriptionsListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  product_id?: string | Array<string> | null | undefined;
  active?: boolean | null | undefined;
  query?: string | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const CustomerPortalSubscriptionsListRequest$outboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalSubscriptionsListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  productId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  active: z.nullable(z.boolean()).optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(CustomerSubscriptionSortProperty$outboundSchema))
    .optional(),
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
export namespace CustomerPortalSubscriptionsListRequest$ {
  /** @deprecated use `CustomerPortalSubscriptionsListRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalSubscriptionsListRequest$inboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalSubscriptionsListRequest$outboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListRequest$Outbound` instead. */
  export type Outbound = CustomerPortalSubscriptionsListRequest$Outbound;
}

export function customerPortalSubscriptionsListRequestToJSON(
  customerPortalSubscriptionsListRequest:
    CustomerPortalSubscriptionsListRequest,
): string {
  return JSON.stringify(
    CustomerPortalSubscriptionsListRequest$outboundSchema.parse(
      customerPortalSubscriptionsListRequest,
    ),
  );
}

export function customerPortalSubscriptionsListRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalSubscriptionsListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalSubscriptionsListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalSubscriptionsListRequest' from JSON`,
  );
}

/** @internal */
export const CustomerPortalSubscriptionsListResponse$inboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: ListResourceCustomerSubscription$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type CustomerPortalSubscriptionsListResponse$Outbound = {
  Result: ListResourceCustomerSubscription$Outbound;
};

/** @internal */
export const CustomerPortalSubscriptionsListResponse$outboundSchema: z.ZodType<
  CustomerPortalSubscriptionsListResponse$Outbound,
  z.ZodTypeDef,
  CustomerPortalSubscriptionsListResponse
> = z.object({
  result: ListResourceCustomerSubscription$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalSubscriptionsListResponse$ {
  /** @deprecated use `CustomerPortalSubscriptionsListResponse$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalSubscriptionsListResponse$inboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListResponse$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalSubscriptionsListResponse$outboundSchema;
  /** @deprecated use `CustomerPortalSubscriptionsListResponse$Outbound` instead. */
  export type Outbound = CustomerPortalSubscriptionsListResponse$Outbound;
}

export function customerPortalSubscriptionsListResponseToJSON(
  customerPortalSubscriptionsListResponse:
    CustomerPortalSubscriptionsListResponse,
): string {
  return JSON.stringify(
    CustomerPortalSubscriptionsListResponse$outboundSchema.parse(
      customerPortalSubscriptionsListResponse,
    ),
  );
}

export function customerPortalSubscriptionsListResponseFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalSubscriptionsListResponse,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalSubscriptionsListResponse$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalSubscriptionsListResponse' from JSON`,
  );
}
