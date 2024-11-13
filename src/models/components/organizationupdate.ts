/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  OrganizationFeatureSettings,
  OrganizationFeatureSettings$inboundSchema,
  OrganizationFeatureSettings$Outbound,
  OrganizationFeatureSettings$outboundSchema,
} from "./organizationfeaturesettings.js";
import {
  OrganizationProfileSettings,
  OrganizationProfileSettings$inboundSchema,
  OrganizationProfileSettings$Outbound,
  OrganizationProfileSettings$outboundSchema,
} from "./organizationprofilesettings.js";

export type OrganizationUpdate = {
  name?: string | null | undefined;
  avatarUrl?: string | null | undefined;
  defaultUpfrontSplitToContributors?: number | null | undefined;
  pledgeBadgeShowAmount?: boolean | undefined;
  billingEmail?: string | null | undefined;
  defaultBadgeCustomContent?: string | null | undefined;
  pledgeMinimumAmount?: number | undefined;
  totalMonthlySpendingLimit?: number | null | undefined;
  perUserMonthlySpendingLimit?: number | null | undefined;
  profileSettings?: OrganizationProfileSettings | null | undefined;
  featureSettings?: OrganizationFeatureSettings | null | undefined;
};

/** @internal */
export const OrganizationUpdate$inboundSchema: z.ZodType<
  OrganizationUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  name: z.nullable(z.string()).optional(),
  avatar_url: z.nullable(z.string()).optional(),
  default_upfront_split_to_contributors: z.nullable(z.number().int())
    .optional(),
  pledge_badge_show_amount: z.boolean().default(false),
  billing_email: z.nullable(z.string()).optional(),
  default_badge_custom_content: z.nullable(z.string()).optional(),
  pledge_minimum_amount: z.number().int().default(2000),
  total_monthly_spending_limit: z.nullable(z.number().int()).optional(),
  per_user_monthly_spending_limit: z.nullable(z.number().int()).optional(),
  profile_settings: z.nullable(OrganizationProfileSettings$inboundSchema)
    .optional(),
  feature_settings: z.nullable(OrganizationFeatureSettings$inboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    "avatar_url": "avatarUrl",
    "default_upfront_split_to_contributors":
      "defaultUpfrontSplitToContributors",
    "pledge_badge_show_amount": "pledgeBadgeShowAmount",
    "billing_email": "billingEmail",
    "default_badge_custom_content": "defaultBadgeCustomContent",
    "pledge_minimum_amount": "pledgeMinimumAmount",
    "total_monthly_spending_limit": "totalMonthlySpendingLimit",
    "per_user_monthly_spending_limit": "perUserMonthlySpendingLimit",
    "profile_settings": "profileSettings",
    "feature_settings": "featureSettings",
  });
});

/** @internal */
export type OrganizationUpdate$Outbound = {
  name?: string | null | undefined;
  avatar_url?: string | null | undefined;
  default_upfront_split_to_contributors?: number | null | undefined;
  pledge_badge_show_amount: boolean;
  billing_email?: string | null | undefined;
  default_badge_custom_content?: string | null | undefined;
  pledge_minimum_amount: number;
  total_monthly_spending_limit?: number | null | undefined;
  per_user_monthly_spending_limit?: number | null | undefined;
  profile_settings?: OrganizationProfileSettings$Outbound | null | undefined;
  feature_settings?: OrganizationFeatureSettings$Outbound | null | undefined;
};

/** @internal */
export const OrganizationUpdate$outboundSchema: z.ZodType<
  OrganizationUpdate$Outbound,
  z.ZodTypeDef,
  OrganizationUpdate
> = z.object({
  name: z.nullable(z.string()).optional(),
  avatarUrl: z.nullable(z.string()).optional(),
  defaultUpfrontSplitToContributors: z.nullable(z.number().int()).optional(),
  pledgeBadgeShowAmount: z.boolean().default(false),
  billingEmail: z.nullable(z.string()).optional(),
  defaultBadgeCustomContent: z.nullable(z.string()).optional(),
  pledgeMinimumAmount: z.number().int().default(2000),
  totalMonthlySpendingLimit: z.nullable(z.number().int()).optional(),
  perUserMonthlySpendingLimit: z.nullable(z.number().int()).optional(),
  profileSettings: z.nullable(OrganizationProfileSettings$outboundSchema)
    .optional(),
  featureSettings: z.nullable(OrganizationFeatureSettings$outboundSchema)
    .optional(),
}).transform((v) => {
  return remap$(v, {
    avatarUrl: "avatar_url",
    defaultUpfrontSplitToContributors: "default_upfront_split_to_contributors",
    pledgeBadgeShowAmount: "pledge_badge_show_amount",
    billingEmail: "billing_email",
    defaultBadgeCustomContent: "default_badge_custom_content",
    pledgeMinimumAmount: "pledge_minimum_amount",
    totalMonthlySpendingLimit: "total_monthly_spending_limit",
    perUserMonthlySpendingLimit: "per_user_monthly_spending_limit",
    profileSettings: "profile_settings",
    featureSettings: "feature_settings",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrganizationUpdate$ {
  /** @deprecated use `OrganizationUpdate$inboundSchema` instead. */
  export const inboundSchema = OrganizationUpdate$inboundSchema;
  /** @deprecated use `OrganizationUpdate$outboundSchema` instead. */
  export const outboundSchema = OrganizationUpdate$outboundSchema;
  /** @deprecated use `OrganizationUpdate$Outbound` instead. */
  export type Outbound = OrganizationUpdate$Outbound;
}
