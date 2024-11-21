/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type UsersLicenseKeysGetRequest = {
  id: string;
};

/** @internal */
export const UsersLicenseKeysGetRequest$inboundSchema: z.ZodType<
  UsersLicenseKeysGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UsersLicenseKeysGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const UsersLicenseKeysGetRequest$outboundSchema: z.ZodType<
  UsersLicenseKeysGetRequest$Outbound,
  z.ZodTypeDef,
  UsersLicenseKeysGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersLicenseKeysGetRequest$ {
  /** @deprecated use `UsersLicenseKeysGetRequest$inboundSchema` instead. */
  export const inboundSchema = UsersLicenseKeysGetRequest$inboundSchema;
  /** @deprecated use `UsersLicenseKeysGetRequest$outboundSchema` instead. */
  export const outboundSchema = UsersLicenseKeysGetRequest$outboundSchema;
  /** @deprecated use `UsersLicenseKeysGetRequest$Outbound` instead. */
  export type Outbound = UsersLicenseKeysGetRequest$Outbound;
}

export function usersLicenseKeysGetRequestToJSON(
  usersLicenseKeysGetRequest: UsersLicenseKeysGetRequest,
): string {
  return JSON.stringify(
    UsersLicenseKeysGetRequest$outboundSchema.parse(usersLicenseKeysGetRequest),
  );
}

export function usersLicenseKeysGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<UsersLicenseKeysGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => UsersLicenseKeysGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'UsersLicenseKeysGetRequest' from JSON`,
  );
}
