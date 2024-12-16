/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const CustomerBenefitGrantLicenseKeysUpdateBenefitType = {
  LicenseKeys: "license_keys",
} as const;
export type CustomerBenefitGrantLicenseKeysUpdateBenefitType = ClosedEnum<
  typeof CustomerBenefitGrantLicenseKeysUpdateBenefitType
>;

export type CustomerBenefitGrantLicenseKeysUpdate = {
  benefitType?: "license_keys" | undefined;
};

/** @internal */
export const CustomerBenefitGrantLicenseKeysUpdateBenefitType$inboundSchema:
  z.ZodNativeEnum<typeof CustomerBenefitGrantLicenseKeysUpdateBenefitType> = z
    .nativeEnum(CustomerBenefitGrantLicenseKeysUpdateBenefitType);

/** @internal */
export const CustomerBenefitGrantLicenseKeysUpdateBenefitType$outboundSchema:
  z.ZodNativeEnum<typeof CustomerBenefitGrantLicenseKeysUpdateBenefitType> =
    CustomerBenefitGrantLicenseKeysUpdateBenefitType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerBenefitGrantLicenseKeysUpdateBenefitType$ {
  /** @deprecated use `CustomerBenefitGrantLicenseKeysUpdateBenefitType$inboundSchema` instead. */
  export const inboundSchema =
    CustomerBenefitGrantLicenseKeysUpdateBenefitType$inboundSchema;
  /** @deprecated use `CustomerBenefitGrantLicenseKeysUpdateBenefitType$outboundSchema` instead. */
  export const outboundSchema =
    CustomerBenefitGrantLicenseKeysUpdateBenefitType$outboundSchema;
}

/** @internal */
export const CustomerBenefitGrantLicenseKeysUpdate$inboundSchema: z.ZodType<
  CustomerBenefitGrantLicenseKeysUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  benefit_type: z.literal("license_keys").optional(),
}).transform((v) => {
  return remap$(v, {
    "benefit_type": "benefitType",
  });
});

/** @internal */
export type CustomerBenefitGrantLicenseKeysUpdate$Outbound = {
  benefit_type: "license_keys";
};

/** @internal */
export const CustomerBenefitGrantLicenseKeysUpdate$outboundSchema: z.ZodType<
  CustomerBenefitGrantLicenseKeysUpdate$Outbound,
  z.ZodTypeDef,
  CustomerBenefitGrantLicenseKeysUpdate
> = z.object({
  benefitType: z.literal("license_keys").default("license_keys"),
}).transform((v) => {
  return remap$(v, {
    benefitType: "benefit_type",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerBenefitGrantLicenseKeysUpdate$ {
  /** @deprecated use `CustomerBenefitGrantLicenseKeysUpdate$inboundSchema` instead. */
  export const inboundSchema =
    CustomerBenefitGrantLicenseKeysUpdate$inboundSchema;
  /** @deprecated use `CustomerBenefitGrantLicenseKeysUpdate$outboundSchema` instead. */
  export const outboundSchema =
    CustomerBenefitGrantLicenseKeysUpdate$outboundSchema;
  /** @deprecated use `CustomerBenefitGrantLicenseKeysUpdate$Outbound` instead. */
  export type Outbound = CustomerBenefitGrantLicenseKeysUpdate$Outbound;
}

export function customerBenefitGrantLicenseKeysUpdateToJSON(
  customerBenefitGrantLicenseKeysUpdate: CustomerBenefitGrantLicenseKeysUpdate,
): string {
  return JSON.stringify(
    CustomerBenefitGrantLicenseKeysUpdate$outboundSchema.parse(
      customerBenefitGrantLicenseKeysUpdate,
    ),
  );
}

export function customerBenefitGrantLicenseKeysUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CustomerBenefitGrantLicenseKeysUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerBenefitGrantLicenseKeysUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerBenefitGrantLicenseKeysUpdate' from JSON`,
  );
}
