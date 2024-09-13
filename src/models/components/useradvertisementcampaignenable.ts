/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UserAdvertisementCampaignEnable = {
  /**
   * The benefit ID.
   */
  benefitId: string;
};

/** @internal */
export const UserAdvertisementCampaignEnable$inboundSchema: z.ZodType<
  UserAdvertisementCampaignEnable,
  z.ZodTypeDef,
  unknown
> = z.object({
  benefit_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "benefit_id": "benefitId",
  });
});

/** @internal */
export type UserAdvertisementCampaignEnable$Outbound = {
  benefit_id: string;
};

/** @internal */
export const UserAdvertisementCampaignEnable$outboundSchema: z.ZodType<
  UserAdvertisementCampaignEnable$Outbound,
  z.ZodTypeDef,
  UserAdvertisementCampaignEnable
> = z.object({
  benefitId: z.string(),
}).transform((v) => {
  return remap$(v, {
    benefitId: "benefit_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserAdvertisementCampaignEnable$ {
  /** @deprecated use `UserAdvertisementCampaignEnable$inboundSchema` instead. */
  export const inboundSchema = UserAdvertisementCampaignEnable$inboundSchema;
  /** @deprecated use `UserAdvertisementCampaignEnable$outboundSchema` instead. */
  export const outboundSchema = UserAdvertisementCampaignEnable$outboundSchema;
  /** @deprecated use `UserAdvertisementCampaignEnable$Outbound` instead. */
  export type Outbound = UserAdvertisementCampaignEnable$Outbound;
}
