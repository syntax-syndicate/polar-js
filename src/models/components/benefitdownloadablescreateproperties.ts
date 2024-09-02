/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BenefitDownloadablesCreateProperties = {
    archived?: { [k: string]: boolean } | undefined;
    files: Array<string>;
};

/** @internal */
export const BenefitDownloadablesCreateProperties$inboundSchema: z.ZodType<
    BenefitDownloadablesCreateProperties,
    z.ZodTypeDef,
    unknown
> = z.object({
    archived: z.record(z.boolean()).optional(),
    files: z.array(z.string()),
});

/** @internal */
export type BenefitDownloadablesCreateProperties$Outbound = {
    archived?: { [k: string]: boolean } | undefined;
    files: Array<string>;
};

/** @internal */
export const BenefitDownloadablesCreateProperties$outboundSchema: z.ZodType<
    BenefitDownloadablesCreateProperties$Outbound,
    z.ZodTypeDef,
    BenefitDownloadablesCreateProperties
> = z.object({
    archived: z.record(z.boolean()).optional(),
    files: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadablesCreateProperties$ {
    /** @deprecated use `BenefitDownloadablesCreateProperties$inboundSchema` instead. */
    export const inboundSchema = BenefitDownloadablesCreateProperties$inboundSchema;
    /** @deprecated use `BenefitDownloadablesCreateProperties$outboundSchema` instead. */
    export const outboundSchema = BenefitDownloadablesCreateProperties$outboundSchema;
    /** @deprecated use `BenefitDownloadablesCreateProperties$Outbound` instead. */
    export type Outbound = BenefitDownloadablesCreateProperties$Outbound;
}
