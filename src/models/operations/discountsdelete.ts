/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type DiscountsDeleteRequest = {
  /**
   * The discount ID.
   */
  id: string;
};

/** @internal */
export const DiscountsDeleteRequest$inboundSchema: z.ZodType<
  DiscountsDeleteRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type DiscountsDeleteRequest$Outbound = {
  id: string;
};

/** @internal */
export const DiscountsDeleteRequest$outboundSchema: z.ZodType<
  DiscountsDeleteRequest$Outbound,
  z.ZodTypeDef,
  DiscountsDeleteRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountsDeleteRequest$ {
  /** @deprecated use `DiscountsDeleteRequest$inboundSchema` instead. */
  export const inboundSchema = DiscountsDeleteRequest$inboundSchema;
  /** @deprecated use `DiscountsDeleteRequest$outboundSchema` instead. */
  export const outboundSchema = DiscountsDeleteRequest$outboundSchema;
  /** @deprecated use `DiscountsDeleteRequest$Outbound` instead. */
  export type Outbound = DiscountsDeleteRequest$Outbound;
}

export function discountsDeleteRequestToJSON(
  discountsDeleteRequest: DiscountsDeleteRequest,
): string {
  return JSON.stringify(
    DiscountsDeleteRequest$outboundSchema.parse(discountsDeleteRequest),
  );
}

export function discountsDeleteRequestFromJSON(
  jsonString: string,
): SafeParseResult<DiscountsDeleteRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => DiscountsDeleteRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountsDeleteRequest' from JSON`,
  );
}
