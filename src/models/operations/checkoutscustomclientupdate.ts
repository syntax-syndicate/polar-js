/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutsCustomClientUpdateRequest = {
  /**
   * The checkout session client secret.
   */
  clientSecret: string;
  checkoutUpdatePublic: components.CheckoutUpdatePublic;
};

/** @internal */
export const CheckoutsCustomClientUpdateRequest$inboundSchema: z.ZodType<
  CheckoutsCustomClientUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  client_secret: z.string(),
  CheckoutUpdatePublic: components.CheckoutUpdatePublic$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "client_secret": "clientSecret",
    "CheckoutUpdatePublic": "checkoutUpdatePublic",
  });
});

/** @internal */
export type CheckoutsCustomClientUpdateRequest$Outbound = {
  client_secret: string;
  CheckoutUpdatePublic: components.CheckoutUpdatePublic$Outbound;
};

/** @internal */
export const CheckoutsCustomClientUpdateRequest$outboundSchema: z.ZodType<
  CheckoutsCustomClientUpdateRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsCustomClientUpdateRequest
> = z.object({
  clientSecret: z.string(),
  checkoutUpdatePublic: components.CheckoutUpdatePublic$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    clientSecret: "client_secret",
    checkoutUpdatePublic: "CheckoutUpdatePublic",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsCustomClientUpdateRequest$ {
  /** @deprecated use `CheckoutsCustomClientUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutsCustomClientUpdateRequest$inboundSchema;
  /** @deprecated use `CheckoutsCustomClientUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutsCustomClientUpdateRequest$outboundSchema;
  /** @deprecated use `CheckoutsCustomClientUpdateRequest$Outbound` instead. */
  export type Outbound = CheckoutsCustomClientUpdateRequest$Outbound;
}

export function checkoutsCustomClientUpdateRequestToJSON(
  checkoutsCustomClientUpdateRequest: CheckoutsCustomClientUpdateRequest,
): string {
  return JSON.stringify(
    CheckoutsCustomClientUpdateRequest$outboundSchema.parse(
      checkoutsCustomClientUpdateRequest,
    ),
  );
}

export function checkoutsCustomClientUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsCustomClientUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutsCustomClientUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsCustomClientUpdateRequest' from JSON`,
  );
}
