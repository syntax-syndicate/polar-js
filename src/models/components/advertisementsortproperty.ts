/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClosedEnum } from "../../types/enums.js";
import * as z from "zod";

export const AdvertisementSortProperty = {
    CreatedAt: "created_at",
    MinusCreatedAt: "-created_at",
    GrantedAt: "granted_at",
    MinusGrantedAt: "-granted_at",
    Views: "views",
    MinusViews: "-views",
    Clicks: "clicks",
    MinusClicks: "-clicks",
} as const;
export type AdvertisementSortProperty = ClosedEnum<typeof AdvertisementSortProperty>;

/** @internal */
export const AdvertisementSortProperty$inboundSchema: z.ZodNativeEnum<
    typeof AdvertisementSortProperty
> = z.nativeEnum(AdvertisementSortProperty);

/** @internal */
export const AdvertisementSortProperty$outboundSchema: z.ZodNativeEnum<
    typeof AdvertisementSortProperty
> = AdvertisementSortProperty$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace AdvertisementSortProperty$ {
    /** @deprecated use `AdvertisementSortProperty$inboundSchema` instead. */
    export const inboundSchema = AdvertisementSortProperty$inboundSchema;
    /** @deprecated use `AdvertisementSortProperty$outboundSchema` instead. */
    export const outboundSchema = AdvertisementSortProperty$outboundSchema;
}
