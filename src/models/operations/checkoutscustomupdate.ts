/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutsCustomUpdateRequest = {
  /**
   * The checkout session ID.
   */
  id: string;
  checkoutUpdate: components.CheckoutUpdate;
};

/** @internal */
export const CheckoutsCustomUpdateRequest$inboundSchema: z.ZodType<
  CheckoutsCustomUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  CheckoutUpdate: components.CheckoutUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CheckoutUpdate": "checkoutUpdate",
  });
});

/** @internal */
export type CheckoutsCustomUpdateRequest$Outbound = {
  id: string;
  CheckoutUpdate: components.CheckoutUpdate$Outbound;
};

/** @internal */
export const CheckoutsCustomUpdateRequest$outboundSchema: z.ZodType<
  CheckoutsCustomUpdateRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsCustomUpdateRequest
> = z.object({
  id: z.string(),
  checkoutUpdate: components.CheckoutUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    checkoutUpdate: "CheckoutUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsCustomUpdateRequest$ {
  /** @deprecated use `CheckoutsCustomUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutsCustomUpdateRequest$inboundSchema;
  /** @deprecated use `CheckoutsCustomUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = CheckoutsCustomUpdateRequest$outboundSchema;
  /** @deprecated use `CheckoutsCustomUpdateRequest$Outbound` instead. */
  export type Outbound = CheckoutsCustomUpdateRequest$Outbound;
}

export function checkoutsCustomUpdateRequestToJSON(
  checkoutsCustomUpdateRequest: CheckoutsCustomUpdateRequest,
): string {
  return JSON.stringify(
    CheckoutsCustomUpdateRequest$outboundSchema.parse(
      checkoutsCustomUpdateRequest,
    ),
  );
}

export function checkoutsCustomUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsCustomUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutsCustomUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsCustomUpdateRequest' from JSON`,
  );
}
