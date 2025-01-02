/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitCustomProperties,
  BenefitCustomProperties$inboundSchema,
  BenefitCustomProperties$Outbound,
  BenefitCustomProperties$outboundSchema,
} from "./benefitcustomproperties.js";

export type BenefitCustomUpdate = {
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null | undefined;
  type?: "custom" | undefined;
  properties?: BenefitCustomProperties | null | undefined;
};

/** @internal */
export const BenefitCustomUpdate$inboundSchema: z.ZodType<
  BenefitCustomUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("custom").optional(),
  properties: z.nullable(BenefitCustomProperties$inboundSchema).optional(),
});

/** @internal */
export type BenefitCustomUpdate$Outbound = {
  description?: string | null | undefined;
  type: "custom";
  properties?: BenefitCustomProperties$Outbound | null | undefined;
};

/** @internal */
export const BenefitCustomUpdate$outboundSchema: z.ZodType<
  BenefitCustomUpdate$Outbound,
  z.ZodTypeDef,
  BenefitCustomUpdate
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("custom").default("custom" as const),
  properties: z.nullable(BenefitCustomProperties$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustomUpdate$ {
  /** @deprecated use `BenefitCustomUpdate$inboundSchema` instead. */
  export const inboundSchema = BenefitCustomUpdate$inboundSchema;
  /** @deprecated use `BenefitCustomUpdate$outboundSchema` instead. */
  export const outboundSchema = BenefitCustomUpdate$outboundSchema;
  /** @deprecated use `BenefitCustomUpdate$Outbound` instead. */
  export type Outbound = BenefitCustomUpdate$Outbound;
}

export function benefitCustomUpdateToJSON(
  benefitCustomUpdate: BenefitCustomUpdate,
): string {
  return JSON.stringify(
    BenefitCustomUpdate$outboundSchema.parse(benefitCustomUpdate),
  );
}

export function benefitCustomUpdateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustomUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustomUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustomUpdate' from JSON`,
  );
}
