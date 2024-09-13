/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type AdvertisementCampaign = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  id: string;
  imageUrl: string;
  imageUrlDark: string | null;
  text: string;
  linkUrl: string;
};

/** @internal */
export const AdvertisementCampaign$inboundSchema: z.ZodType<
  AdvertisementCampaign,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  image_url: z.string(),
  image_url_dark: z.nullable(z.string()),
  text: z.string(),
  link_url: z.string(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "image_url": "imageUrl",
    "image_url_dark": "imageUrlDark",
    "link_url": "linkUrl",
  });
});

/** @internal */
export type AdvertisementCampaign$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  image_url: string;
  image_url_dark: string | null;
  text: string;
  link_url: string;
};

/** @internal */
export const AdvertisementCampaign$outboundSchema: z.ZodType<
  AdvertisementCampaign$Outbound,
  z.ZodTypeDef,
  AdvertisementCampaign
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  imageUrl: z.string(),
  imageUrlDark: z.nullable(z.string()),
  text: z.string(),
  linkUrl: z.string(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    imageUrl: "image_url",
    imageUrlDark: "image_url_dark",
    linkUrl: "link_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdvertisementCampaign$ {
  /** @deprecated use `AdvertisementCampaign$inboundSchema` instead. */
  export const inboundSchema = AdvertisementCampaign$inboundSchema;
  /** @deprecated use `AdvertisementCampaign$outboundSchema` instead. */
  export const outboundSchema = AdvertisementCampaign$outboundSchema;
  /** @deprecated use `AdvertisementCampaign$Outbound` instead. */
  export type Outbound = AdvertisementCampaign$Outbound;
}
