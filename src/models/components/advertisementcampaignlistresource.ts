/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  AdvertisementCampaign,
  AdvertisementCampaign$inboundSchema,
  AdvertisementCampaign$Outbound,
  AdvertisementCampaign$outboundSchema,
} from "./advertisementcampaign.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type AdvertisementCampaignListResource = {
  items: Array<AdvertisementCampaign>;
  pagination: Pagination;
  /**
   * The dimensions (width, height) in pixels of the advertisement images.
   */
  dimensions: Array<number>;
};

/** @internal */
export const AdvertisementCampaignListResource$inboundSchema: z.ZodType<
  AdvertisementCampaignListResource,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(AdvertisementCampaign$inboundSchema),
  pagination: Pagination$inboundSchema,
  dimensions: z.array(z.number().int()),
});

/** @internal */
export type AdvertisementCampaignListResource$Outbound = {
  items: Array<AdvertisementCampaign$Outbound>;
  pagination: Pagination$Outbound;
  dimensions: Array<number>;
};

/** @internal */
export const AdvertisementCampaignListResource$outboundSchema: z.ZodType<
  AdvertisementCampaignListResource$Outbound,
  z.ZodTypeDef,
  AdvertisementCampaignListResource
> = z.object({
  items: z.array(AdvertisementCampaign$outboundSchema),
  pagination: Pagination$outboundSchema,
  dimensions: z.array(z.number().int()),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdvertisementCampaignListResource$ {
  /** @deprecated use `AdvertisementCampaignListResource$inboundSchema` instead. */
  export const inboundSchema = AdvertisementCampaignListResource$inboundSchema;
  /** @deprecated use `AdvertisementCampaignListResource$outboundSchema` instead. */
  export const outboundSchema =
    AdvertisementCampaignListResource$outboundSchema;
  /** @deprecated use `AdvertisementCampaignListResource$Outbound` instead. */
  export type Outbound = AdvertisementCampaignListResource$Outbound;
}

export function advertisementCampaignListResourceToJSON(
  advertisementCampaignListResource: AdvertisementCampaignListResource,
): string {
  return JSON.stringify(
    AdvertisementCampaignListResource$outboundSchema.parse(
      advertisementCampaignListResource,
    ),
  );
}

export function advertisementCampaignListResourceFromJSON(
  jsonString: string,
): SafeParseResult<AdvertisementCampaignListResource, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => AdvertisementCampaignListResource$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'AdvertisementCampaignListResource' from JSON`,
  );
}
