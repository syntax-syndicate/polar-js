/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type BenefitLicenseKeyActivationProperties = {
    limit: number;
    enableUserAdmin: boolean;
};

/** @internal */
export const BenefitLicenseKeyActivationProperties$inboundSchema: z.ZodType<
    BenefitLicenseKeyActivationProperties,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        limit: z.number().int(),
        enable_user_admin: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            enable_user_admin: "enableUserAdmin",
        });
    });

/** @internal */
export type BenefitLicenseKeyActivationProperties$Outbound = {
    limit: number;
    enable_user_admin: boolean;
};

/** @internal */
export const BenefitLicenseKeyActivationProperties$outboundSchema: z.ZodType<
    BenefitLicenseKeyActivationProperties$Outbound,
    z.ZodTypeDef,
    BenefitLicenseKeyActivationProperties
> = z
    .object({
        limit: z.number().int(),
        enableUserAdmin: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            enableUserAdmin: "enable_user_admin",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeyActivationProperties$ {
    /** @deprecated use `BenefitLicenseKeyActivationProperties$inboundSchema` instead. */
    export const inboundSchema = BenefitLicenseKeyActivationProperties$inboundSchema;
    /** @deprecated use `BenefitLicenseKeyActivationProperties$outboundSchema` instead. */
    export const outboundSchema = BenefitLicenseKeyActivationProperties$outboundSchema;
    /** @deprecated use `BenefitLicenseKeyActivationProperties$Outbound` instead. */
    export type Outbound = BenefitLicenseKeyActivationProperties$Outbound;
}
