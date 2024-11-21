/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutsCustomClientConfirmRequest = {
  /**
   * The checkout session client secret.
   */
  clientSecret: string;
  checkoutConfirmStripe: components.CheckoutConfirmStripe;
};

/** @internal */
export const CheckoutsCustomClientConfirmRequest$inboundSchema: z.ZodType<
  CheckoutsCustomClientConfirmRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  client_secret: z.string(),
  CheckoutConfirmStripe: components.CheckoutConfirmStripe$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "client_secret": "clientSecret",
    "CheckoutConfirmStripe": "checkoutConfirmStripe",
  });
});

/** @internal */
export type CheckoutsCustomClientConfirmRequest$Outbound = {
  client_secret: string;
  CheckoutConfirmStripe: components.CheckoutConfirmStripe$Outbound;
};

/** @internal */
export const CheckoutsCustomClientConfirmRequest$outboundSchema: z.ZodType<
  CheckoutsCustomClientConfirmRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsCustomClientConfirmRequest
> = z.object({
  clientSecret: z.string(),
  checkoutConfirmStripe: components.CheckoutConfirmStripe$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    clientSecret: "client_secret",
    checkoutConfirmStripe: "CheckoutConfirmStripe",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsCustomClientConfirmRequest$ {
  /** @deprecated use `CheckoutsCustomClientConfirmRequest$inboundSchema` instead. */
  export const inboundSchema =
    CheckoutsCustomClientConfirmRequest$inboundSchema;
  /** @deprecated use `CheckoutsCustomClientConfirmRequest$outboundSchema` instead. */
  export const outboundSchema =
    CheckoutsCustomClientConfirmRequest$outboundSchema;
  /** @deprecated use `CheckoutsCustomClientConfirmRequest$Outbound` instead. */
  export type Outbound = CheckoutsCustomClientConfirmRequest$Outbound;
}

export function checkoutsCustomClientConfirmRequestToJSON(
  checkoutsCustomClientConfirmRequest: CheckoutsCustomClientConfirmRequest,
): string {
  return JSON.stringify(
    CheckoutsCustomClientConfirmRequest$outboundSchema.parse(
      checkoutsCustomClientConfirmRequest,
    ),
  );
}

export function checkoutsCustomClientConfirmRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsCustomClientConfirmRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CheckoutsCustomClientConfirmRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsCustomClientConfirmRequest' from JSON`,
  );
}
