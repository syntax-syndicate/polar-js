/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Properties for creating a benefit of type `custom`.
 */
export type BenefitCustomCreateProperties = {
  note?: string | null | undefined;
};

/** @internal */
export const BenefitCustomCreateProperties$inboundSchema: z.ZodType<
  BenefitCustomCreateProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  note: z.nullable(z.string()).optional(),
});

/** @internal */
export type BenefitCustomCreateProperties$Outbound = {
  note?: string | null | undefined;
};

/** @internal */
export const BenefitCustomCreateProperties$outboundSchema: z.ZodType<
  BenefitCustomCreateProperties$Outbound,
  z.ZodTypeDef,
  BenefitCustomCreateProperties
> = z.object({
  note: z.nullable(z.string()).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustomCreateProperties$ {
  /** @deprecated use `BenefitCustomCreateProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitCustomCreateProperties$inboundSchema;
  /** @deprecated use `BenefitCustomCreateProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitCustomCreateProperties$outboundSchema;
  /** @deprecated use `BenefitCustomCreateProperties$Outbound` instead. */
  export type Outbound = BenefitCustomCreateProperties$Outbound;
}

export function benefitCustomCreatePropertiesToJSON(
  benefitCustomCreateProperties: BenefitCustomCreateProperties,
): string {
  return JSON.stringify(
    BenefitCustomCreateProperties$outboundSchema.parse(
      benefitCustomCreateProperties,
    ),
  );
}

export function benefitCustomCreatePropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustomCreateProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustomCreateProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustomCreateProperties' from JSON`,
  );
}
