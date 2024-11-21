/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type AdvertisementsGetRequest = {
  /**
   * The advertisement campaign ID.
   */
  id: string;
};

/** @internal */
export const AdvertisementsGetRequest$inboundSchema: z.ZodType<
  AdvertisementsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type AdvertisementsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const AdvertisementsGetRequest$outboundSchema: z.ZodType<
  AdvertisementsGetRequest$Outbound,
  z.ZodTypeDef,
  AdvertisementsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdvertisementsGetRequest$ {
  /** @deprecated use `AdvertisementsGetRequest$inboundSchema` instead. */
  export const inboundSchema = AdvertisementsGetRequest$inboundSchema;
  /** @deprecated use `AdvertisementsGetRequest$outboundSchema` instead. */
  export const outboundSchema = AdvertisementsGetRequest$outboundSchema;
  /** @deprecated use `AdvertisementsGetRequest$Outbound` instead. */
  export type Outbound = AdvertisementsGetRequest$Outbound;
}

export function advertisementsGetRequestToJSON(
  advertisementsGetRequest: AdvertisementsGetRequest,
): string {
  return JSON.stringify(
    AdvertisementsGetRequest$outboundSchema.parse(advertisementsGetRequest),
  );
}

export function advertisementsGetRequestFromJSON(
  jsonString: string,
): SafeParseResult<AdvertisementsGetRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AdvertisementsGetRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AdvertisementsGetRequest' from JSON`,
  );
}
