/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalLicenseKeysGetRequest = {
  id: string;
};

/** @internal */
export const CustomerPortalLicenseKeysGetRequest$inboundSchema: z.ZodType<
  CustomerPortalLicenseKeysGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CustomerPortalLicenseKeysGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const CustomerPortalLicenseKeysGetRequest$outboundSchema: z.ZodType<
  CustomerPortalLicenseKeysGetRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalLicenseKeysGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalLicenseKeysGetRequest$ {
  /** @deprecated use `CustomerPortalLicenseKeysGetRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalLicenseKeysGetRequest$inboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysGetRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalLicenseKeysGetRequest$outboundSchema;
  /** @deprecated use `CustomerPortalLicenseKeysGetRequest$Outbound` instead. */
  export type Outbound = CustomerPortalLicenseKeysGetRequest$Outbound;
}

export function customerPortalLicenseKeysGetRequestToJSON(
  customerPortalLicenseKeysGetRequest: CustomerPortalLicenseKeysGetRequest,
): string {
  return JSON.stringify(
    CustomerPortalLicenseKeysGetRequest$outboundSchema.parse(
      customerPortalLicenseKeysGetRequest,
    ),
  );
}

export function customerPortalLicenseKeysGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalLicenseKeysGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalLicenseKeysGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalLicenseKeysGetRequest' from JSON`,
  );
}
