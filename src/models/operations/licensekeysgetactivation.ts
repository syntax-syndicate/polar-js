/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type LicenseKeysGetActivationRequest = {
  id: string;
  activationId: string;
};

/** @internal */
export const LicenseKeysGetActivationRequest$inboundSchema: z.ZodType<
  LicenseKeysGetActivationRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  activation_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "activation_id": "activationId",
  });
});

/** @internal */
export type LicenseKeysGetActivationRequest$Outbound = {
  id: string;
  activation_id: string;
};

/** @internal */
export const LicenseKeysGetActivationRequest$outboundSchema: z.ZodType<
  LicenseKeysGetActivationRequest$Outbound,
  z.ZodTypeDef,
  LicenseKeysGetActivationRequest
> = z.object({
  id: z.string(),
  activationId: z.string(),
}).transform((v) => {
  return remap$(v, {
    activationId: "activation_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysGetActivationRequest$ {
  /** @deprecated use `LicenseKeysGetActivationRequest$inboundSchema` instead. */
  export const inboundSchema = LicenseKeysGetActivationRequest$inboundSchema;
  /** @deprecated use `LicenseKeysGetActivationRequest$outboundSchema` instead. */
  export const outboundSchema = LicenseKeysGetActivationRequest$outboundSchema;
  /** @deprecated use `LicenseKeysGetActivationRequest$Outbound` instead. */
  export type Outbound = LicenseKeysGetActivationRequest$Outbound;
}

export function licenseKeysGetActivationRequestToJSON(
  licenseKeysGetActivationRequest: LicenseKeysGetActivationRequest,
): string {
  return JSON.stringify(
    LicenseKeysGetActivationRequest$outboundSchema.parse(
      licenseKeysGetActivationRequest,
    ),
  );
}

export function licenseKeysGetActivationRequestFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeysGetActivationRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeysGetActivationRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeysGetActivationRequest' from JSON`,
  );
}
