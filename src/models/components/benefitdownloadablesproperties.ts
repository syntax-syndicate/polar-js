/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BenefitDownloadablesProperties = {
  archived: { [k: string]: boolean };
  files: Array<string>;
};

/** @internal */
export const BenefitDownloadablesProperties$inboundSchema: z.ZodType<
  BenefitDownloadablesProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  archived: z.record(z.boolean()),
  files: z.array(z.string()),
});

/** @internal */
export type BenefitDownloadablesProperties$Outbound = {
  archived: { [k: string]: boolean };
  files: Array<string>;
};

/** @internal */
export const BenefitDownloadablesProperties$outboundSchema: z.ZodType<
  BenefitDownloadablesProperties$Outbound,
  z.ZodTypeDef,
  BenefitDownloadablesProperties
> = z.object({
  archived: z.record(z.boolean()),
  files: z.array(z.string()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDownloadablesProperties$ {
  /** @deprecated use `BenefitDownloadablesProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitDownloadablesProperties$inboundSchema;
  /** @deprecated use `BenefitDownloadablesProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitDownloadablesProperties$outboundSchema;
  /** @deprecated use `BenefitDownloadablesProperties$Outbound` instead. */
  export type Outbound = BenefitDownloadablesProperties$Outbound;
}
