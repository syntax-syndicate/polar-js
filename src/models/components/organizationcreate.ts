/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  OrganizationFeatureSettings,
  OrganizationFeatureSettings$inboundSchema,
  OrganizationFeatureSettings$Outbound,
  OrganizationFeatureSettings$outboundSchema,
} from "./organizationfeaturesettings.js";

export type OrganizationCreate = {
  name: string;
  slug: string;
  avatarUrl?: string | null | undefined;
  featureSettings?: OrganizationFeatureSettings | null | undefined;
};

/** @internal */
export const OrganizationCreate$inboundSchema: z.ZodType<
  OrganizationCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.string(),
  slug: z.string(),
  avatar_url: z.nullable(z.string()).optional(),
  feature_settings: z.nullable(OrganizationFeatureSettings$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "avatar_url": "avatarUrl",
    "feature_settings": "featureSettings",
  });
});

/** @internal */
export type OrganizationCreate$Outbound = {
  name: string;
  slug: string;
  avatar_url?: string | null | undefined;
  feature_settings?: OrganizationFeatureSettings$Outbound | null | undefined;
};

/** @internal */
export const OrganizationCreate$outboundSchema: z.ZodType<
  OrganizationCreate$Outbound,
  z.ZodTypeDef,
  OrganizationCreate
> = z.object({
  name: z.string(),
  slug: z.string(),
  avatarUrl: z.nullable(z.string()).optional(),
  featureSettings: z.nullable(OrganizationFeatureSettings$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    avatarUrl: "avatar_url",
    featureSettings: "feature_settings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationCreate$ {
  /** @deprecated use `OrganizationCreate$inboundSchema` instead. */
  export const inboundSchema = OrganizationCreate$inboundSchema;
  /** @deprecated use `OrganizationCreate$outboundSchema` instead. */
  export const outboundSchema = OrganizationCreate$outboundSchema;
  /** @deprecated use `OrganizationCreate$Outbound` instead. */
  export type Outbound = OrganizationCreate$Outbound;
}

export function organizationCreateToJSON(
  organizationCreate: OrganizationCreate,
): string {
  return JSON.stringify(
    OrganizationCreate$outboundSchema.parse(organizationCreate),
  );
}

export function organizationCreateFromJSON(
  jsonString: string,
): SafeParseResult<OrganizationCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrganizationCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrganizationCreate' from JSON`,
  );
}
