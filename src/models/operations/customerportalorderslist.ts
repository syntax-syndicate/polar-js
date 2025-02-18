/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CustomerOrderSortProperty,
  CustomerOrderSortProperty$inboundSchema,
  CustomerOrderSortProperty$outboundSchema,
} from "../components/customerordersortproperty.js";
import {
  ListResourceCustomerOrder,
  ListResourceCustomerOrder$inboundSchema,
  ListResourceCustomerOrder$Outbound,
  ListResourceCustomerOrder$outboundSchema,
} from "../components/listresourcecustomerorder.js";
import {
  ProductPriceType,
  ProductPriceType$inboundSchema,
  ProductPriceType$outboundSchema,
} from "../components/productpricetype.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Filter by organization ID.
 */
export type CustomerPortalOrdersListQueryParamOrganizationIDFilter =
  | string
  | Array<string>;

/**
 * Filter by product ID.
 */
export type CustomerPortalOrdersListQueryParamProductIDFilter =
  | string
  | Array<string>;

/**
 * Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.
 */
export type QueryParamProductPriceTypeFilter =
  | ProductPriceType
  | Array<ProductPriceType>;

/**
 * Filter by subscription ID.
 */
export type CustomerPortalOrdersListQueryParamSubscriptionIDFilter =
  | string
  | Array<string>;

export type CustomerPortalOrdersListRequest = {
  /**
   * Filter by organization ID.
   */
  organizationId?: string | Array<string> | null | undefined;
  /**
   * Filter by product ID.
   */
  productId?: string | Array<string> | null | undefined;
  /**
   * Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.
   */
  productPriceType?:
    | ProductPriceType
    | Array<ProductPriceType>
    | null
    | undefined;
  /**
   * Filter by subscription ID.
   */
  subscriptionId?: string | Array<string> | null | undefined;
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
  sorting?: Array<CustomerOrderSortProperty> | null | undefined;
};

export type CustomerPortalOrdersListResponse = {
  result: ListResourceCustomerOrder;
};

/** @internal */
export const CustomerPortalOrdersListQueryParamOrganizationIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalOrdersListQueryParamOrganizationIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalOrdersListQueryParamOrganizationIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalOrdersListQueryParamOrganizationIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersListQueryParamOrganizationIDFilter$ {
  /** @deprecated use `CustomerPortalOrdersListQueryParamOrganizationIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalOrdersListQueryParamOrganizationIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamOrganizationIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrdersListQueryParamOrganizationIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamOrganizationIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalOrdersListQueryParamOrganizationIDFilter$Outbound;
}

export function customerPortalOrdersListQueryParamOrganizationIDFilterToJSON(
  customerPortalOrdersListQueryParamOrganizationIDFilter:
    CustomerPortalOrdersListQueryParamOrganizationIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalOrdersListQueryParamOrganizationIDFilter$outboundSchema.parse(
      customerPortalOrdersListQueryParamOrganizationIDFilter,
    ),
  );
}

export function customerPortalOrdersListQueryParamOrganizationIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalOrdersListQueryParamOrganizationIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrdersListQueryParamOrganizationIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersListQueryParamOrganizationIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalOrdersListQueryParamProductIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamProductIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalOrdersListQueryParamProductIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalOrdersListQueryParamProductIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamProductIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalOrdersListQueryParamProductIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersListQueryParamProductIDFilter$ {
  /** @deprecated use `CustomerPortalOrdersListQueryParamProductIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalOrdersListQueryParamProductIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamProductIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrdersListQueryParamProductIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamProductIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalOrdersListQueryParamProductIDFilter$Outbound;
}

export function customerPortalOrdersListQueryParamProductIDFilterToJSON(
  customerPortalOrdersListQueryParamProductIDFilter:
    CustomerPortalOrdersListQueryParamProductIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalOrdersListQueryParamProductIDFilter$outboundSchema.parse(
      customerPortalOrdersListQueryParamProductIDFilter,
    ),
  );
}

export function customerPortalOrdersListQueryParamProductIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalOrdersListQueryParamProductIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrdersListQueryParamProductIDFilter$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalOrdersListQueryParamProductIDFilter' from JSON`,
  );
}

/** @internal */
export const QueryParamProductPriceTypeFilter$inboundSchema: z.ZodType<
  QueryParamProductPriceTypeFilter,
  z.ZodTypeDef,
  unknown
> = z.union([
  ProductPriceType$inboundSchema,
  z.array(ProductPriceType$inboundSchema),
]);

/** @internal */
export type QueryParamProductPriceTypeFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamProductPriceTypeFilter$outboundSchema: z.ZodType<
  QueryParamProductPriceTypeFilter$Outbound,
  z.ZodTypeDef,
  QueryParamProductPriceTypeFilter
> = z.union([
  ProductPriceType$outboundSchema,
  z.array(ProductPriceType$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamProductPriceTypeFilter$ {
  /** @deprecated use `QueryParamProductPriceTypeFilter$inboundSchema` instead. */
  export const inboundSchema = QueryParamProductPriceTypeFilter$inboundSchema;
  /** @deprecated use `QueryParamProductPriceTypeFilter$outboundSchema` instead. */
  export const outboundSchema = QueryParamProductPriceTypeFilter$outboundSchema;
  /** @deprecated use `QueryParamProductPriceTypeFilter$Outbound` instead. */
  export type Outbound = QueryParamProductPriceTypeFilter$Outbound;
}

export function queryParamProductPriceTypeFilterToJSON(
  queryParamProductPriceTypeFilter: QueryParamProductPriceTypeFilter,
): string {
  return JSON.stringify(
    QueryParamProductPriceTypeFilter$outboundSchema.parse(
      queryParamProductPriceTypeFilter,
    ),
  );
}

export function queryParamProductPriceTypeFilterFromJSON(
  jsonString: string,
): SafeParseResult<QueryParamProductPriceTypeFilter, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => QueryParamProductPriceTypeFilter$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'QueryParamProductPriceTypeFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalOrdersListQueryParamSubscriptionIDFilter$inboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type CustomerPortalOrdersListQueryParamSubscriptionIDFilter$Outbound =
  | string
  | Array<string>;

/** @internal */
export const CustomerPortalOrdersListQueryParamSubscriptionIDFilter$outboundSchema:
  z.ZodType<
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter$Outbound,
    z.ZodTypeDef,
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter
  > = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersListQueryParamSubscriptionIDFilter$ {
  /** @deprecated use `CustomerPortalOrdersListQueryParamSubscriptionIDFilter$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamSubscriptionIDFilter$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersListQueryParamSubscriptionIDFilter$Outbound` instead. */
  export type Outbound =
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter$Outbound;
}

export function customerPortalOrdersListQueryParamSubscriptionIDFilterToJSON(
  customerPortalOrdersListQueryParamSubscriptionIDFilter:
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter,
): string {
  return JSON.stringify(
    CustomerPortalOrdersListQueryParamSubscriptionIDFilter$outboundSchema.parse(
      customerPortalOrdersListQueryParamSubscriptionIDFilter,
    ),
  );
}

export function customerPortalOrdersListQueryParamSubscriptionIDFilterFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalOrdersListQueryParamSubscriptionIDFilter,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrdersListQueryParamSubscriptionIDFilter$inboundSchema
        .parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersListQueryParamSubscriptionIDFilter' from JSON`,
  );
}

/** @internal */
export const CustomerPortalOrdersListRequest$inboundSchema: z.ZodType<
  CustomerPortalOrdersListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  product_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  product_price_type: z.nullable(
    z.union([
      ProductPriceType$inboundSchema,
      z.array(ProductPriceType$inboundSchema),
    ]),
  ).optional(),
  subscription_id: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(CustomerOrderSortProperty$inboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "product_id": "productId",
    "product_price_type": "productPriceType",
    "subscription_id": "subscriptionId",
  });
});

/** @internal */
export type CustomerPortalOrdersListRequest$Outbound = {
  organization_id?: string | Array<string> | null | undefined;
  product_id?: string | Array<string> | null | undefined;
  product_price_type?: string | Array<string> | null | undefined;
  subscription_id?: string | Array<string> | null | undefined;
  query?: string | null | undefined;
  page: number;
  limit: number;
  sorting?: Array<string> | null | undefined;
};

/** @internal */
export const CustomerPortalOrdersListRequest$outboundSchema: z.ZodType<
  CustomerPortalOrdersListRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalOrdersListRequest
> = z.object({
  organizationId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  productId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
  productPriceType: z.nullable(
    z.union([
      ProductPriceType$outboundSchema,
      z.array(ProductPriceType$outboundSchema),
    ]),
  ).optional(),
  subscriptionId: z.nullable(z.union([z.string(), z.array(z.string())]))
    .optional(),
  query: z.nullable(z.string()).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
  sorting: z.nullable(z.array(CustomerOrderSortProperty$outboundSchema))
    .optional(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    productId: "product_id",
    productPriceType: "product_price_type",
    subscriptionId: "subscription_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersListRequest$ {
  /** @deprecated use `CustomerPortalOrdersListRequest$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalOrdersListRequest$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersListRequest$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalOrdersListRequest$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersListRequest$Outbound` instead. */
  export type Outbound = CustomerPortalOrdersListRequest$Outbound;
}

export function customerPortalOrdersListRequestToJSON(
  customerPortalOrdersListRequest: CustomerPortalOrdersListRequest,
): string {
  return JSON.stringify(
    CustomerPortalOrdersListRequest$outboundSchema.parse(
      customerPortalOrdersListRequest,
    ),
  );
}

export function customerPortalOrdersListRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalOrdersListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalOrdersListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersListRequest' from JSON`,
  );
}

/** @internal */
export const CustomerPortalOrdersListResponse$inboundSchema: z.ZodType<
  CustomerPortalOrdersListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: ListResourceCustomerOrder$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type CustomerPortalOrdersListResponse$Outbound = {
  Result: ListResourceCustomerOrder$Outbound;
};

/** @internal */
export const CustomerPortalOrdersListResponse$outboundSchema: z.ZodType<
  CustomerPortalOrdersListResponse$Outbound,
  z.ZodTypeDef,
  CustomerPortalOrdersListResponse
> = z.object({
  result: ListResourceCustomerOrder$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersListResponse$ {
  /** @deprecated use `CustomerPortalOrdersListResponse$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalOrdersListResponse$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersListResponse$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalOrdersListResponse$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersListResponse$Outbound` instead. */
  export type Outbound = CustomerPortalOrdersListResponse$Outbound;
}

export function customerPortalOrdersListResponseToJSON(
  customerPortalOrdersListResponse: CustomerPortalOrdersListResponse,
): string {
  return JSON.stringify(
    CustomerPortalOrdersListResponse$outboundSchema.parse(
      customerPortalOrdersListResponse,
    ),
  );
}

export function customerPortalOrdersListResponseFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalOrdersListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalOrdersListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersListResponse' from JSON`,
  );
}
