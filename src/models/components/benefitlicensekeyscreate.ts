/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    BenefitLicenseKeysCreateProperties,
    BenefitLicenseKeysCreateProperties$inboundSchema,
    BenefitLicenseKeysCreateProperties$Outbound,
    BenefitLicenseKeysCreateProperties$outboundSchema,
} from "./benefitlicensekeyscreateproperties.js";
import * as z from "zod";

export const BenefitLicenseKeysCreateType = {
    LicenseKeys: "license_keys",
} as const;
export type BenefitLicenseKeysCreateType = ClosedEnum<typeof BenefitLicenseKeysCreateType>;

export type BenefitLicenseKeysCreate = {
    type?: "license_keys" | undefined;
    /**
     * The description of the benefit. Will be displayed on products having this benefit.
     */
    description: string;
    /**
     * The ID of the organization owning the benefit. **Required unless you use an organization token.**
     */
    organizationId?: string | null | undefined;
    properties: BenefitLicenseKeysCreateProperties;
};

/** @internal */
export const BenefitLicenseKeysCreateType$inboundSchema: z.ZodNativeEnum<
    typeof BenefitLicenseKeysCreateType
> = z.nativeEnum(BenefitLicenseKeysCreateType);

/** @internal */
export const BenefitLicenseKeysCreateType$outboundSchema: z.ZodNativeEnum<
    typeof BenefitLicenseKeysCreateType
> = BenefitLicenseKeysCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysCreateType$ {
    /** @deprecated use `BenefitLicenseKeysCreateType$inboundSchema` instead. */
    export const inboundSchema = BenefitLicenseKeysCreateType$inboundSchema;
    /** @deprecated use `BenefitLicenseKeysCreateType$outboundSchema` instead. */
    export const outboundSchema = BenefitLicenseKeysCreateType$outboundSchema;
}

/** @internal */
export const BenefitLicenseKeysCreate$inboundSchema: z.ZodType<
    BenefitLicenseKeysCreate,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        type: z.literal("license_keys").optional(),
        description: z.string(),
        organization_id: z.nullable(z.string()).optional(),
        properties: BenefitLicenseKeysCreateProperties$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
        });
    });

/** @internal */
export type BenefitLicenseKeysCreate$Outbound = {
    type: "license_keys";
    description: string;
    organization_id?: string | null | undefined;
    properties: BenefitLicenseKeysCreateProperties$Outbound;
};

/** @internal */
export const BenefitLicenseKeysCreate$outboundSchema: z.ZodType<
    BenefitLicenseKeysCreate$Outbound,
    z.ZodTypeDef,
    BenefitLicenseKeysCreate
> = z
    .object({
        type: z.literal("license_keys").default("license_keys"),
        description: z.string(),
        organizationId: z.nullable(z.string()).optional(),
        properties: BenefitLicenseKeysCreateProperties$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            organizationId: "organization_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysCreate$ {
    /** @deprecated use `BenefitLicenseKeysCreate$inboundSchema` instead. */
    export const inboundSchema = BenefitLicenseKeysCreate$inboundSchema;
    /** @deprecated use `BenefitLicenseKeysCreate$outboundSchema` instead. */
    export const outboundSchema = BenefitLicenseKeysCreate$outboundSchema;
    /** @deprecated use `BenefitLicenseKeysCreate$Outbound` instead. */
    export type Outbound = BenefitLicenseKeysCreate$Outbound;
}
