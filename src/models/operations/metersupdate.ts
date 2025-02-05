/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  MeterUpdate,
  MeterUpdate$inboundSchema,
  MeterUpdate$Outbound,
  MeterUpdate$outboundSchema,
} from "../components/meterupdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type MetersUpdateRequest = {
  /**
   * The meter ID.
   */
  id: string;
  meterUpdate: MeterUpdate;
};

/** @internal */
export const MetersUpdateRequest$inboundSchema: z.ZodType<
  MetersUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  MeterUpdate: MeterUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "MeterUpdate": "meterUpdate",
  });
});

/** @internal */
export type MetersUpdateRequest$Outbound = {
  id: string;
  MeterUpdate: MeterUpdate$Outbound;
};

/** @internal */
export const MetersUpdateRequest$outboundSchema: z.ZodType<
  MetersUpdateRequest$Outbound,
  z.ZodTypeDef,
  MetersUpdateRequest
> = z.object({
  id: z.string(),
  meterUpdate: MeterUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    meterUpdate: "MeterUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace MetersUpdateRequest$ {
  /** @deprecated use `MetersUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = MetersUpdateRequest$inboundSchema;
  /** @deprecated use `MetersUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = MetersUpdateRequest$outboundSchema;
  /** @deprecated use `MetersUpdateRequest$Outbound` instead. */
  export type Outbound = MetersUpdateRequest$Outbound;
}

export function metersUpdateRequestToJSON(
  metersUpdateRequest: MetersUpdateRequest,
): string {
  return JSON.stringify(
    MetersUpdateRequest$outboundSchema.parse(metersUpdateRequest),
  );
}

export function metersUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<MetersUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => MetersUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'MetersUpdateRequest' from JSON`,
  );
}
