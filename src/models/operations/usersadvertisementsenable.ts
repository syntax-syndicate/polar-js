/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";

export type UsersAdvertisementsEnableRequest = {
  /**
   * The advertisement campaign ID.
   */
  id: string;
  userAdvertisementCampaignEnable: components.UserAdvertisementCampaignEnable;
};

/** @internal */
export const UsersAdvertisementsEnableRequest$inboundSchema: z.ZodType<
  UsersAdvertisementsEnableRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  UserAdvertisementCampaignEnable:
    components.UserAdvertisementCampaignEnable$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "UserAdvertisementCampaignEnable": "userAdvertisementCampaignEnable",
  });
});

/** @internal */
export type UsersAdvertisementsEnableRequest$Outbound = {
  id: string;
  UserAdvertisementCampaignEnable:
    components.UserAdvertisementCampaignEnable$Outbound;
};

/** @internal */
export const UsersAdvertisementsEnableRequest$outboundSchema: z.ZodType<
  UsersAdvertisementsEnableRequest$Outbound,
  z.ZodTypeDef,
  UsersAdvertisementsEnableRequest
> = z.object({
  id: z.string(),
  userAdvertisementCampaignEnable:
    components.UserAdvertisementCampaignEnable$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    userAdvertisementCampaignEnable: "UserAdvertisementCampaignEnable",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersAdvertisementsEnableRequest$ {
  /** @deprecated use `UsersAdvertisementsEnableRequest$inboundSchema` instead. */
  export const inboundSchema = UsersAdvertisementsEnableRequest$inboundSchema;
  /** @deprecated use `UsersAdvertisementsEnableRequest$outboundSchema` instead. */
  export const outboundSchema = UsersAdvertisementsEnableRequest$outboundSchema;
  /** @deprecated use `UsersAdvertisementsEnableRequest$Outbound` instead. */
  export type Outbound = UsersAdvertisementsEnableRequest$Outbound;
}
