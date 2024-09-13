/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type UserAdvertisementCampaign = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  id: string;
  userId: string;
  views: number;
  clicks: number;
  imageUrl: string;
  imageUrlDark: string | null;
  text: string;
  linkUrl: string;
};

/** @internal */
export const UserAdvertisementCampaign$inboundSchema: z.ZodType<
  UserAdvertisementCampaign,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  user_id: z.string(),
  views: z.number().int(),
  clicks: z.number().int(),
  image_url: z.string(),
  image_url_dark: z.nullable(z.string()),
  text: z.string(),
  link_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "user_id": "userId",
    "image_url": "imageUrl",
    "image_url_dark": "imageUrlDark",
    "link_url": "linkUrl",
  });
});

/** @internal */
export type UserAdvertisementCampaign$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  user_id: string;
  views: number;
  clicks: number;
  image_url: string;
  image_url_dark: string | null;
  text: string;
  link_url: string;
};

/** @internal */
export const UserAdvertisementCampaign$outboundSchema: z.ZodType<
  UserAdvertisementCampaign$Outbound,
  z.ZodTypeDef,
  UserAdvertisementCampaign
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  userId: z.string(),
  views: z.number().int(),
  clicks: z.number().int(),
  imageUrl: z.string(),
  imageUrlDark: z.nullable(z.string()),
  text: z.string(),
  linkUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    userId: "user_id",
    imageUrl: "image_url",
    imageUrlDark: "image_url_dark",
    linkUrl: "link_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserAdvertisementCampaign$ {
  /** @deprecated use `UserAdvertisementCampaign$inboundSchema` instead. */
  export const inboundSchema = UserAdvertisementCampaign$inboundSchema;
  /** @deprecated use `UserAdvertisementCampaign$outboundSchema` instead. */
  export const outboundSchema = UserAdvertisementCampaign$outboundSchema;
  /** @deprecated use `UserAdvertisementCampaign$Outbound` instead. */
  export type Outbound = UserAdvertisementCampaign$Outbound;
}
