/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitLicenseKeyActivationProperties,
  BenefitLicenseKeyActivationProperties$inboundSchema,
  BenefitLicenseKeyActivationProperties$Outbound,
  BenefitLicenseKeyActivationProperties$outboundSchema,
} from "./benefitlicensekeyactivationproperties.js";
import {
  BenefitLicenseKeyExpirationProperties,
  BenefitLicenseKeyExpirationProperties$inboundSchema,
  BenefitLicenseKeyExpirationProperties$Outbound,
  BenefitLicenseKeyExpirationProperties$outboundSchema,
} from "./benefitlicensekeyexpirationproperties.js";

export type BenefitLicenseKeysSubscriberProperties = {
  prefix: string | null;
  expires: BenefitLicenseKeyExpirationProperties | null;
  activations: BenefitLicenseKeyActivationProperties | null;
  limitUsage: number | null;
};

/** @internal */
export const BenefitLicenseKeysSubscriberProperties$inboundSchema: z.ZodType<
  BenefitLicenseKeysSubscriberProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  prefix: z.nullable(z.string()),
  expires: z.nullable(BenefitLicenseKeyExpirationProperties$inboundSchema),
  activations: z.nullable(BenefitLicenseKeyActivationProperties$inboundSchema),
  limit_usage: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    "limit_usage": "limitUsage",
  });
});

/** @internal */
export type BenefitLicenseKeysSubscriberProperties$Outbound = {
  prefix: string | null;
  expires: BenefitLicenseKeyExpirationProperties$Outbound | null;
  activations: BenefitLicenseKeyActivationProperties$Outbound | null;
  limit_usage: number | null;
};

/** @internal */
export const BenefitLicenseKeysSubscriberProperties$outboundSchema: z.ZodType<
  BenefitLicenseKeysSubscriberProperties$Outbound,
  z.ZodTypeDef,
  BenefitLicenseKeysSubscriberProperties
> = z.object({
  prefix: z.nullable(z.string()),
  expires: z.nullable(BenefitLicenseKeyExpirationProperties$outboundSchema),
  activations: z.nullable(BenefitLicenseKeyActivationProperties$outboundSchema),
  limitUsage: z.nullable(z.number().int()),
}).transform((v) => {
  return remap$(v, {
    limitUsage: "limit_usage",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitLicenseKeysSubscriberProperties$ {
  /** @deprecated use `BenefitLicenseKeysSubscriberProperties$inboundSchema` instead. */
  export const inboundSchema =
    BenefitLicenseKeysSubscriberProperties$inboundSchema;
  /** @deprecated use `BenefitLicenseKeysSubscriberProperties$outboundSchema` instead. */
  export const outboundSchema =
    BenefitLicenseKeysSubscriberProperties$outboundSchema;
  /** @deprecated use `BenefitLicenseKeysSubscriberProperties$Outbound` instead. */
  export type Outbound = BenefitLicenseKeysSubscriberProperties$Outbound;
}

export function benefitLicenseKeysSubscriberPropertiesToJSON(
  benefitLicenseKeysSubscriberProperties:
    BenefitLicenseKeysSubscriberProperties,
): string {
  return JSON.stringify(
    BenefitLicenseKeysSubscriberProperties$outboundSchema.parse(
      benefitLicenseKeysSubscriberProperties,
    ),
  );
}

export function benefitLicenseKeysSubscriberPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitLicenseKeysSubscriberProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      BenefitLicenseKeysSubscriberProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitLicenseKeysSubscriberProperties' from JSON`,
  );
}
