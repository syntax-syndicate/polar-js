/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    BenefitDownloadablesCreateProperties,
    BenefitDownloadablesCreateProperties$inboundSchema,
    BenefitDownloadablesCreateProperties$Outbound,
    BenefitDownloadablesCreateProperties$outboundSchema,
} from "./benefitdownloadablescreateproperties.js";
import * as z from "zod";

export const BenefitDownloadablesCreateType = {
    Downloadables: "downloadables",
} as const;
export type BenefitDownloadablesCreateType = ClosedEnum<typeof BenefitDownloadablesCreateType>;

export type BenefitDownloadablesCreate = {
    type?: "downloadables" | undefined;
    /**
     * The description of the benefit. Will be displayed on products having this benefit.
     */
    description: string;
    /**
     * The ID of the organization owning the benefit. **Required unless you use an organization token.**
     */
    organizationId?: string | null | undefined;
    properties: BenefitDownloadablesCreateProperties;
};

/** @internal */
export const BenefitDownloadablesCreateType$inboundSchema: z.ZodNativeEnum<
    typeof BenefitDownloadablesCreateType
> = z.nativeEnum(BenefitDownloadablesCreateType);

/** @internal */
export const BenefitDownloadablesCreateType$outboundSchema: z.ZodNativeEnum<
    typeof BenefitDownloadablesCreateType
> = BenefitDownloadablesCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadablesCreateType$ {
    /** @deprecated use `BenefitDownloadablesCreateType$inboundSchema` instead. */
    export const inboundSchema = BenefitDownloadablesCreateType$inboundSchema;
    /** @deprecated use `BenefitDownloadablesCreateType$outboundSchema` instead. */
    export const outboundSchema = BenefitDownloadablesCreateType$outboundSchema;
}

/** @internal */
export const BenefitDownloadablesCreate$inboundSchema: z.ZodType<
    BenefitDownloadablesCreate,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        type: z.literal("downloadables").optional(),
        description: z.string(),
        organization_id: z.nullable(z.string()).optional(),
        properties: BenefitDownloadablesCreateProperties$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
        });
    });

/** @internal */
export type BenefitDownloadablesCreate$Outbound = {
    type: "downloadables";
    description: string;
    organization_id?: string | null | undefined;
    properties: BenefitDownloadablesCreateProperties$Outbound;
};

/** @internal */
export const BenefitDownloadablesCreate$outboundSchema: z.ZodType<
    BenefitDownloadablesCreate$Outbound,
    z.ZodTypeDef,
    BenefitDownloadablesCreate
> = z
    .object({
        type: z.literal("downloadables").default("downloadables"),
        description: z.string(),
        organizationId: z.nullable(z.string()).optional(),
        properties: BenefitDownloadablesCreateProperties$outboundSchema,
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
export namespace BenefitDownloadablesCreate$ {
    /** @deprecated use `BenefitDownloadablesCreate$inboundSchema` instead. */
    export const inboundSchema = BenefitDownloadablesCreate$inboundSchema;
    /** @deprecated use `BenefitDownloadablesCreate$outboundSchema` instead. */
    export const outboundSchema = BenefitDownloadablesCreate$outboundSchema;
    /** @deprecated use `BenefitDownloadablesCreate$Outbound` instead. */
    export type Outbound = BenefitDownloadablesCreate$Outbound;
}
