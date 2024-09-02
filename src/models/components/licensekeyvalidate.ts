/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type Conditions = {};

export type LicenseKeyValidate = {
    key: string;
    organizationId: string;
    activationId?: string | null | undefined;
    benefitId?: string | null | undefined;
    userId?: string | null | undefined;
    incrementUsage?: number | null | undefined;
    conditions?: Conditions | undefined;
};

/** @internal */
export const Conditions$inboundSchema: z.ZodType<Conditions, z.ZodTypeDef, unknown> = z.object({});

/** @internal */
export type Conditions$Outbound = {};

/** @internal */
export const Conditions$outboundSchema: z.ZodType<Conditions$Outbound, z.ZodTypeDef, Conditions> =
    z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Conditions$ {
    /** @deprecated use `Conditions$inboundSchema` instead. */
    export const inboundSchema = Conditions$inboundSchema;
    /** @deprecated use `Conditions$outboundSchema` instead. */
    export const outboundSchema = Conditions$outboundSchema;
    /** @deprecated use `Conditions$Outbound` instead. */
    export type Outbound = Conditions$Outbound;
}

/** @internal */
export const LicenseKeyValidate$inboundSchema: z.ZodType<
    LicenseKeyValidate,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        key: z.string(),
        organization_id: z.string(),
        activation_id: z.nullable(z.string()).optional(),
        benefit_id: z.nullable(z.string()).optional(),
        user_id: z.nullable(z.string()).optional(),
        increment_usage: z.nullable(z.number().int()).optional(),
        conditions: z.lazy(() => Conditions$inboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
            activation_id: "activationId",
            benefit_id: "benefitId",
            user_id: "userId",
            increment_usage: "incrementUsage",
        });
    });

/** @internal */
export type LicenseKeyValidate$Outbound = {
    key: string;
    organization_id: string;
    activation_id?: string | null | undefined;
    benefit_id?: string | null | undefined;
    user_id?: string | null | undefined;
    increment_usage?: number | null | undefined;
    conditions?: Conditions$Outbound | undefined;
};

/** @internal */
export const LicenseKeyValidate$outboundSchema: z.ZodType<
    LicenseKeyValidate$Outbound,
    z.ZodTypeDef,
    LicenseKeyValidate
> = z
    .object({
        key: z.string(),
        organizationId: z.string(),
        activationId: z.nullable(z.string()).optional(),
        benefitId: z.nullable(z.string()).optional(),
        userId: z.nullable(z.string()).optional(),
        incrementUsage: z.nullable(z.number().int()).optional(),
        conditions: z.lazy(() => Conditions$outboundSchema).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            organizationId: "organization_id",
            activationId: "activation_id",
            benefitId: "benefit_id",
            userId: "user_id",
            incrementUsage: "increment_usage",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyValidate$ {
    /** @deprecated use `LicenseKeyValidate$inboundSchema` instead. */
    export const inboundSchema = LicenseKeyValidate$inboundSchema;
    /** @deprecated use `LicenseKeyValidate$outboundSchema` instead. */
    export const outboundSchema = LicenseKeyValidate$outboundSchema;
    /** @deprecated use `LicenseKeyValidate$Outbound` instead. */
    export type Outbound = LicenseKeyValidate$Outbound;
}
