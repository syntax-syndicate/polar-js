/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Filter by organization ID.
 */
export type QueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter by product ID.
 */
export type ProductIDFilter = string | Array<string>;

/**
 * Filter by product price type. `recurring` will return orders corresponding to subscriptions creations or renewals. `one_time` will return orders corresponding to one-time purchases.
 */
export type ProductPriceTypeFilter =
    | components.ProductPriceType
    | Array<components.ProductPriceType>;

/**
 * Filter by subscription ID.
 */
export type QueryParamSubscriptionIDFilter = string | Array<string>;

export type UsersOrdersListRequest = {
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
        | components.ProductPriceType
        | Array<components.ProductPriceType>
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
    sorting?: Array<components.UserOrderSortProperty> | null | undefined;
};

export type UsersOrdersListResponse = {
    result: components.ListResourceUserOrder;
};

/** @internal */
export const QueryParamOrganizationIDFilter$inboundSchema: z.ZodType<
    QueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type QueryParamOrganizationIDFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamOrganizationIDFilter$outboundSchema: z.ZodType<
    QueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    QueryParamOrganizationIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamOrganizationIDFilter$ {
    /** @deprecated use `QueryParamOrganizationIDFilter$inboundSchema` instead. */
    export const inboundSchema = QueryParamOrganizationIDFilter$inboundSchema;
    /** @deprecated use `QueryParamOrganizationIDFilter$outboundSchema` instead. */
    export const outboundSchema = QueryParamOrganizationIDFilter$outboundSchema;
    /** @deprecated use `QueryParamOrganizationIDFilter$Outbound` instead. */
    export type Outbound = QueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const ProductIDFilter$inboundSchema: z.ZodType<ProductIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type ProductIDFilter$Outbound = string | Array<string>;

/** @internal */
export const ProductIDFilter$outboundSchema: z.ZodType<
    ProductIDFilter$Outbound,
    z.ZodTypeDef,
    ProductIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductIDFilter$ {
    /** @deprecated use `ProductIDFilter$inboundSchema` instead. */
    export const inboundSchema = ProductIDFilter$inboundSchema;
    /** @deprecated use `ProductIDFilter$outboundSchema` instead. */
    export const outboundSchema = ProductIDFilter$outboundSchema;
    /** @deprecated use `ProductIDFilter$Outbound` instead. */
    export type Outbound = ProductIDFilter$Outbound;
}

/** @internal */
export const ProductPriceTypeFilter$inboundSchema: z.ZodType<
    ProductPriceTypeFilter,
    z.ZodTypeDef,
    unknown
> = z.union([
    components.ProductPriceType$inboundSchema,
    z.array(components.ProductPriceType$inboundSchema),
]);

/** @internal */
export type ProductPriceTypeFilter$Outbound = string | Array<string>;

/** @internal */
export const ProductPriceTypeFilter$outboundSchema: z.ZodType<
    ProductPriceTypeFilter$Outbound,
    z.ZodTypeDef,
    ProductPriceTypeFilter
> = z.union([
    components.ProductPriceType$outboundSchema,
    z.array(components.ProductPriceType$outboundSchema),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceTypeFilter$ {
    /** @deprecated use `ProductPriceTypeFilter$inboundSchema` instead. */
    export const inboundSchema = ProductPriceTypeFilter$inboundSchema;
    /** @deprecated use `ProductPriceTypeFilter$outboundSchema` instead. */
    export const outboundSchema = ProductPriceTypeFilter$outboundSchema;
    /** @deprecated use `ProductPriceTypeFilter$Outbound` instead. */
    export type Outbound = ProductPriceTypeFilter$Outbound;
}

/** @internal */
export const QueryParamSubscriptionIDFilter$inboundSchema: z.ZodType<
    QueryParamSubscriptionIDFilter,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type QueryParamSubscriptionIDFilter$Outbound = string | Array<string>;

/** @internal */
export const QueryParamSubscriptionIDFilter$outboundSchema: z.ZodType<
    QueryParamSubscriptionIDFilter$Outbound,
    z.ZodTypeDef,
    QueryParamSubscriptionIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace QueryParamSubscriptionIDFilter$ {
    /** @deprecated use `QueryParamSubscriptionIDFilter$inboundSchema` instead. */
    export const inboundSchema = QueryParamSubscriptionIDFilter$inboundSchema;
    /** @deprecated use `QueryParamSubscriptionIDFilter$outboundSchema` instead. */
    export const outboundSchema = QueryParamSubscriptionIDFilter$outboundSchema;
    /** @deprecated use `QueryParamSubscriptionIDFilter$Outbound` instead. */
    export type Outbound = QueryParamSubscriptionIDFilter$Outbound;
}

/** @internal */
export const UsersOrdersListRequest$inboundSchema: z.ZodType<
    UsersOrdersListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        organization_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        product_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        product_price_type: z
            .nullable(
                z.union([
                    components.ProductPriceType$inboundSchema,
                    z.array(components.ProductPriceType$inboundSchema),
                ])
            )
            .optional(),
        subscription_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        query: z.nullable(z.string()).optional(),
        page: z.number().int().default(1),
        limit: z.number().int().default(10),
        sorting: z.nullable(z.array(components.UserOrderSortProperty$inboundSchema)).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
            product_id: "productId",
            product_price_type: "productPriceType",
            subscription_id: "subscriptionId",
        });
    });

/** @internal */
export type UsersOrdersListRequest$Outbound = {
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
export const UsersOrdersListRequest$outboundSchema: z.ZodType<
    UsersOrdersListRequest$Outbound,
    z.ZodTypeDef,
    UsersOrdersListRequest
> = z
    .object({
        organizationId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        productId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        productPriceType: z
            .nullable(
                z.union([
                    components.ProductPriceType$outboundSchema,
                    z.array(components.ProductPriceType$outboundSchema),
                ])
            )
            .optional(),
        subscriptionId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        query: z.nullable(z.string()).optional(),
        page: z.number().int().default(1),
        limit: z.number().int().default(10),
        sorting: z.nullable(z.array(components.UserOrderSortProperty$outboundSchema)).optional(),
    })
    .transform((v) => {
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
export namespace UsersOrdersListRequest$ {
    /** @deprecated use `UsersOrdersListRequest$inboundSchema` instead. */
    export const inboundSchema = UsersOrdersListRequest$inboundSchema;
    /** @deprecated use `UsersOrdersListRequest$outboundSchema` instead. */
    export const outboundSchema = UsersOrdersListRequest$outboundSchema;
    /** @deprecated use `UsersOrdersListRequest$Outbound` instead. */
    export type Outbound = UsersOrdersListRequest$Outbound;
}

/** @internal */
export const UsersOrdersListResponse$inboundSchema: z.ZodType<
    UsersOrdersListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListResourceUserOrder$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type UsersOrdersListResponse$Outbound = {
    Result: components.ListResourceUserOrder$Outbound;
};

/** @internal */
export const UsersOrdersListResponse$outboundSchema: z.ZodType<
    UsersOrdersListResponse$Outbound,
    z.ZodTypeDef,
    UsersOrdersListResponse
> = z
    .object({
        result: components.ListResourceUserOrder$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            result: "Result",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersOrdersListResponse$ {
    /** @deprecated use `UsersOrdersListResponse$inboundSchema` instead. */
    export const inboundSchema = UsersOrdersListResponse$inboundSchema;
    /** @deprecated use `UsersOrdersListResponse$outboundSchema` instead. */
    export const outboundSchema = UsersOrdersListResponse$outboundSchema;
    /** @deprecated use `UsersOrdersListResponse$Outbound` instead. */
    export type Outbound = UsersOrdersListResponse$Outbound;
}
