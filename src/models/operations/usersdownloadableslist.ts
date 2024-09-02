/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

/**
 * Filter by organization ID.
 */
export type UsersDownloadablesListQueryParamOrganizationIDFilter = string | Array<string>;

/**
 * Filter by given benefit ID.
 */
export type BenefitIDFilter = string | Array<string>;

export type UsersDownloadablesListRequest = {
    /**
     * Filter by organization ID.
     */
    organizationId?: string | Array<string> | null | undefined;
    /**
     * Filter by given benefit ID.
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

export type UsersDownloadablesListResponse = {
    result: components.ListResourceDownloadableRead;
};

/** @internal */
export const UsersDownloadablesListQueryParamOrganizationIDFilter$inboundSchema: z.ZodType<
    UsersDownloadablesListQueryParamOrganizationIDFilter,
    z.ZodTypeDef,
    unknown
> = z.union([z.string(), z.array(z.string())]);

/** @internal */
export type UsersDownloadablesListQueryParamOrganizationIDFilter$Outbound = string | Array<string>;

/** @internal */
export const UsersDownloadablesListQueryParamOrganizationIDFilter$outboundSchema: z.ZodType<
    UsersDownloadablesListQueryParamOrganizationIDFilter$Outbound,
    z.ZodTypeDef,
    UsersDownloadablesListQueryParamOrganizationIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersDownloadablesListQueryParamOrganizationIDFilter$ {
    /** @deprecated use `UsersDownloadablesListQueryParamOrganizationIDFilter$inboundSchema` instead. */
    export const inboundSchema = UsersDownloadablesListQueryParamOrganizationIDFilter$inboundSchema;
    /** @deprecated use `UsersDownloadablesListQueryParamOrganizationIDFilter$outboundSchema` instead. */
    export const outboundSchema =
        UsersDownloadablesListQueryParamOrganizationIDFilter$outboundSchema;
    /** @deprecated use `UsersDownloadablesListQueryParamOrganizationIDFilter$Outbound` instead. */
    export type Outbound = UsersDownloadablesListQueryParamOrganizationIDFilter$Outbound;
}

/** @internal */
export const BenefitIDFilter$inboundSchema: z.ZodType<BenefitIDFilter, z.ZodTypeDef, unknown> =
    z.union([z.string(), z.array(z.string())]);

/** @internal */
export type BenefitIDFilter$Outbound = string | Array<string>;

/** @internal */
export const BenefitIDFilter$outboundSchema: z.ZodType<
    BenefitIDFilter$Outbound,
    z.ZodTypeDef,
    BenefitIDFilter
> = z.union([z.string(), z.array(z.string())]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitIDFilter$ {
    /** @deprecated use `BenefitIDFilter$inboundSchema` instead. */
    export const inboundSchema = BenefitIDFilter$inboundSchema;
    /** @deprecated use `BenefitIDFilter$outboundSchema` instead. */
    export const outboundSchema = BenefitIDFilter$outboundSchema;
    /** @deprecated use `BenefitIDFilter$Outbound` instead. */
    export type Outbound = BenefitIDFilter$Outbound;
}

/** @internal */
export const UsersDownloadablesListRequest$inboundSchema: z.ZodType<
    UsersDownloadablesListRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        organization_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        benefit_id: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        page: z.number().int().default(1),
        limit: z.number().int().default(10),
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
            benefit_id: "benefitId",
        });
    });

/** @internal */
export type UsersDownloadablesListRequest$Outbound = {
    organization_id?: string | Array<string> | null | undefined;
    benefit_id?: string | Array<string> | null | undefined;
    page: number;
    limit: number;
};

/** @internal */
export const UsersDownloadablesListRequest$outboundSchema: z.ZodType<
    UsersDownloadablesListRequest$Outbound,
    z.ZodTypeDef,
    UsersDownloadablesListRequest
> = z
    .object({
        organizationId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        benefitId: z.nullable(z.union([z.string(), z.array(z.string())])).optional(),
        page: z.number().int().default(1),
        limit: z.number().int().default(10),
    })
    .transform((v) => {
        return remap$(v, {
            organizationId: "organization_id",
            benefitId: "benefit_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersDownloadablesListRequest$ {
    /** @deprecated use `UsersDownloadablesListRequest$inboundSchema` instead. */
    export const inboundSchema = UsersDownloadablesListRequest$inboundSchema;
    /** @deprecated use `UsersDownloadablesListRequest$outboundSchema` instead. */
    export const outboundSchema = UsersDownloadablesListRequest$outboundSchema;
    /** @deprecated use `UsersDownloadablesListRequest$Outbound` instead. */
    export type Outbound = UsersDownloadablesListRequest$Outbound;
}

/** @internal */
export const UsersDownloadablesListResponse$inboundSchema: z.ZodType<
    UsersDownloadablesListResponse,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        Result: components.ListResourceDownloadableRead$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            Result: "result",
        });
    });

/** @internal */
export type UsersDownloadablesListResponse$Outbound = {
    Result: components.ListResourceDownloadableRead$Outbound;
};

/** @internal */
export const UsersDownloadablesListResponse$outboundSchema: z.ZodType<
    UsersDownloadablesListResponse$Outbound,
    z.ZodTypeDef,
    UsersDownloadablesListResponse
> = z
    .object({
        result: components.ListResourceDownloadableRead$outboundSchema,
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
export namespace UsersDownloadablesListResponse$ {
    /** @deprecated use `UsersDownloadablesListResponse$inboundSchema` instead. */
    export const inboundSchema = UsersDownloadablesListResponse$inboundSchema;
    /** @deprecated use `UsersDownloadablesListResponse$outboundSchema` instead. */
    export const outboundSchema = UsersDownloadablesListResponse$outboundSchema;
    /** @deprecated use `UsersDownloadablesListResponse$Outbound` instead. */
    export type Outbound = UsersDownloadablesListResponse$Outbound;
}
