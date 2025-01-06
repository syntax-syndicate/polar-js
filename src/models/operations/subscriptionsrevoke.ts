/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type SubscriptionsRevokeRequest = {
  /**
   * The subscription ID.
   */
  id: string;
};

/** @internal */
export const SubscriptionsRevokeRequest$inboundSchema: z.ZodType<
  SubscriptionsRevokeRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type SubscriptionsRevokeRequest$Outbound = {
  id: string;
};

/** @internal */
export const SubscriptionsRevokeRequest$outboundSchema: z.ZodType<
  SubscriptionsRevokeRequest$Outbound,
  z.ZodTypeDef,
  SubscriptionsRevokeRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionsRevokeRequest$ {
  /** @deprecated use `SubscriptionsRevokeRequest$inboundSchema` instead. */
  export const inboundSchema = SubscriptionsRevokeRequest$inboundSchema;
  /** @deprecated use `SubscriptionsRevokeRequest$outboundSchema` instead. */
  export const outboundSchema = SubscriptionsRevokeRequest$outboundSchema;
  /** @deprecated use `SubscriptionsRevokeRequest$Outbound` instead. */
  export type Outbound = SubscriptionsRevokeRequest$Outbound;
}

export function subscriptionsRevokeRequestToJSON(
  subscriptionsRevokeRequest: SubscriptionsRevokeRequest,
): string {
  return JSON.stringify(
    SubscriptionsRevokeRequest$outboundSchema.parse(subscriptionsRevokeRequest),
  );
}

export function subscriptionsRevokeRequestFromJSON(
  jsonString: string,
): SafeParseResult<SubscriptionsRevokeRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => SubscriptionsRevokeRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'SubscriptionsRevokeRequest' from JSON`,
  );
}
