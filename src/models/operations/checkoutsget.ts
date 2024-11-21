/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutsGetRequest = {
  id: string;
};

/** @internal */
export const CheckoutsGetRequest$inboundSchema: z.ZodType<
  CheckoutsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CheckoutsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const CheckoutsGetRequest$outboundSchema: z.ZodType<
  CheckoutsGetRequest$Outbound,
  z.ZodTypeDef,
  CheckoutsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutsGetRequest$ {
  /** @deprecated use `CheckoutsGetRequest$inboundSchema` instead. */
  export const inboundSchema = CheckoutsGetRequest$inboundSchema;
  /** @deprecated use `CheckoutsGetRequest$outboundSchema` instead. */
  export const outboundSchema = CheckoutsGetRequest$outboundSchema;
  /** @deprecated use `CheckoutsGetRequest$Outbound` instead. */
  export type Outbound = CheckoutsGetRequest$Outbound;
}

export function checkoutsGetRequestToJSON(
  checkoutsGetRequest: CheckoutsGetRequest,
): string {
  return JSON.stringify(
    CheckoutsGetRequest$outboundSchema.parse(checkoutsGetRequest),
  );
}

export function checkoutsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutsGetRequest' from JSON`,
  );
}
