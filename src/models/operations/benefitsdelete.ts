/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type BenefitsDeleteRequest = {
  id: string;
};

/** @internal */
export const BenefitsDeleteRequest$inboundSchema: z.ZodType<
  BenefitsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type BenefitsDeleteRequest$Outbound = {
  id: string;
};

/** @internal */
export const BenefitsDeleteRequest$outboundSchema: z.ZodType<
  BenefitsDeleteRequest$Outbound,
  z.ZodTypeDef,
  BenefitsDeleteRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsDeleteRequest$ {
  /** @deprecated use `BenefitsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = BenefitsDeleteRequest$inboundSchema;
  /** @deprecated use `BenefitsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = BenefitsDeleteRequest$outboundSchema;
  /** @deprecated use `BenefitsDeleteRequest$Outbound` instead. */
  export type Outbound = BenefitsDeleteRequest$Outbound;
}
