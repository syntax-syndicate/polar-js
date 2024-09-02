/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
    BenefitAdsProperties,
    BenefitAdsProperties$inboundSchema,
    BenefitAdsProperties$Outbound,
    BenefitAdsProperties$outboundSchema,
} from "./benefitadsproperties.js";
import * as z from "zod";

export const BenefitAdsCreateType = {
    Ads: "ads",
} as const;
export type BenefitAdsCreateType = ClosedEnum<typeof BenefitAdsCreateType>;

export type BenefitAdsCreate = {
    type?: "ads" | undefined;
    /**
     * The description of the benefit. Will be displayed on products having this benefit.
     */
    description: string;
    /**
     * The ID of the organization owning the benefit. **Required unless you use an organization token.**
     */
    organizationId?: string | null | undefined;
    /**
     * Properties for a benefit of type `ads`.
     */
    properties: BenefitAdsProperties;
};

/** @internal */
export const BenefitAdsCreateType$inboundSchema: z.ZodNativeEnum<typeof BenefitAdsCreateType> =
    z.nativeEnum(BenefitAdsCreateType);

/** @internal */
export const BenefitAdsCreateType$outboundSchema: z.ZodNativeEnum<typeof BenefitAdsCreateType> =
    BenefitAdsCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitAdsCreateType$ {
    /** @deprecated use `BenefitAdsCreateType$inboundSchema` instead. */
    export const inboundSchema = BenefitAdsCreateType$inboundSchema;
    /** @deprecated use `BenefitAdsCreateType$outboundSchema` instead. */
    export const outboundSchema = BenefitAdsCreateType$outboundSchema;
}

/** @internal */
export const BenefitAdsCreate$inboundSchema: z.ZodType<BenefitAdsCreate, z.ZodTypeDef, unknown> = z
    .object({
        type: z.literal("ads").optional(),
        description: z.string(),
        organization_id: z.nullable(z.string()).optional(),
        properties: BenefitAdsProperties$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            organization_id: "organizationId",
        });
    });

/** @internal */
export type BenefitAdsCreate$Outbound = {
    type: "ads";
    description: string;
    organization_id?: string | null | undefined;
    properties: BenefitAdsProperties$Outbound;
};

/** @internal */
export const BenefitAdsCreate$outboundSchema: z.ZodType<
    BenefitAdsCreate$Outbound,
    z.ZodTypeDef,
    BenefitAdsCreate
> = z
    .object({
        type: z.literal("ads").default("ads"),
        description: z.string(),
        organizationId: z.nullable(z.string()).optional(),
        properties: BenefitAdsProperties$outboundSchema,
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
export namespace BenefitAdsCreate$ {
    /** @deprecated use `BenefitAdsCreate$inboundSchema` instead. */
    export const inboundSchema = BenefitAdsCreate$inboundSchema;
    /** @deprecated use `BenefitAdsCreate$outboundSchema` instead. */
    export const outboundSchema = BenefitAdsCreate$outboundSchema;
    /** @deprecated use `BenefitAdsCreate$Outbound` instead. */
    export type Outbound = BenefitAdsCreate$Outbound;
}
