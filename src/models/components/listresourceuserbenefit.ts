/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  BenefitAdsSubscriber,
  BenefitAdsSubscriber$inboundSchema,
  BenefitAdsSubscriber$Outbound,
  BenefitAdsSubscriber$outboundSchema,
} from "./benefitadssubscriber.js";
import {
  BenefitArticlesSubscriber,
  BenefitArticlesSubscriber$inboundSchema,
  BenefitArticlesSubscriber$Outbound,
  BenefitArticlesSubscriber$outboundSchema,
} from "./benefitarticlessubscriber.js";
import {
  BenefitCustomSubscriber,
  BenefitCustomSubscriber$inboundSchema,
  BenefitCustomSubscriber$Outbound,
  BenefitCustomSubscriber$outboundSchema,
} from "./benefitcustomsubscriber.js";
import {
  BenefitDiscordSubscriber,
  BenefitDiscordSubscriber$inboundSchema,
  BenefitDiscordSubscriber$Outbound,
  BenefitDiscordSubscriber$outboundSchema,
} from "./benefitdiscordsubscriber.js";
import {
  BenefitDownloadablesSubscriber,
  BenefitDownloadablesSubscriber$inboundSchema,
  BenefitDownloadablesSubscriber$Outbound,
  BenefitDownloadablesSubscriber$outboundSchema,
} from "./benefitdownloadablessubscriber.js";
import {
  BenefitGitHubRepositorySubscriber,
  BenefitGitHubRepositorySubscriber$inboundSchema,
  BenefitGitHubRepositorySubscriber$Outbound,
  BenefitGitHubRepositorySubscriber$outboundSchema,
} from "./benefitgithubrepositorysubscriber.js";
import {
  BenefitLicenseKeysSubscriber,
  BenefitLicenseKeysSubscriber$inboundSchema,
  BenefitLicenseKeysSubscriber$Outbound,
  BenefitLicenseKeysSubscriber$outboundSchema,
} from "./benefitlicensekeyssubscriber.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type UserBenefit =
  | (BenefitAdsSubscriber & { type: "ads" })
  | (BenefitArticlesSubscriber & { type: "articles" })
  | (BenefitCustomSubscriber & { type: "custom" })
  | (BenefitDiscordSubscriber & { type: "discord" })
  | (BenefitDownloadablesSubscriber & { type: "downloadables" })
  | (BenefitGitHubRepositorySubscriber & { type: "github_repository" })
  | (BenefitLicenseKeysSubscriber & { type: "license_keys" });

export type ListResourceUserBenefit = {
  items: Array<
    | (BenefitAdsSubscriber & { type: "ads" })
    | (BenefitArticlesSubscriber & { type: "articles" })
    | (BenefitCustomSubscriber & { type: "custom" })
    | (BenefitDiscordSubscriber & { type: "discord" })
    | (BenefitDownloadablesSubscriber & { type: "downloadables" })
    | (BenefitGitHubRepositorySubscriber & { type: "github_repository" })
    | (BenefitLicenseKeysSubscriber & { type: "license_keys" })
  >;
  pagination: Pagination;
};

/** @internal */
export const UserBenefit$inboundSchema: z.ZodType<
  UserBenefit,
  z.ZodTypeDef,
  unknown
> = z.union([
  BenefitAdsSubscriber$inboundSchema.and(
    z.object({ type: z.literal("ads") }).transform((v) => ({ type: v.type })),
  ),
  BenefitArticlesSubscriber$inboundSchema.and(
    z.object({ type: z.literal("articles") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitCustomSubscriber$inboundSchema.and(
    z.object({ type: z.literal("custom") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitDiscordSubscriber$inboundSchema.and(
    z.object({ type: z.literal("discord") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitDownloadablesSubscriber$inboundSchema.and(
    z.object({ type: z.literal("downloadables") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitGitHubRepositorySubscriber$inboundSchema.and(
    z.object({ type: z.literal("github_repository") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitLicenseKeysSubscriber$inboundSchema.and(
    z.object({ type: z.literal("license_keys") }).transform((v) => ({
      type: v.type,
    })),
  ),
]);

/** @internal */
export type UserBenefit$Outbound =
  | (BenefitAdsSubscriber$Outbound & { type: "ads" })
  | (BenefitArticlesSubscriber$Outbound & { type: "articles" })
  | (BenefitCustomSubscriber$Outbound & { type: "custom" })
  | (BenefitDiscordSubscriber$Outbound & { type: "discord" })
  | (BenefitDownloadablesSubscriber$Outbound & { type: "downloadables" })
  | (BenefitGitHubRepositorySubscriber$Outbound & { type: "github_repository" })
  | (BenefitLicenseKeysSubscriber$Outbound & { type: "license_keys" });

/** @internal */
export const UserBenefit$outboundSchema: z.ZodType<
  UserBenefit$Outbound,
  z.ZodTypeDef,
  UserBenefit
> = z.union([
  BenefitAdsSubscriber$outboundSchema.and(
    z.object({ type: z.literal("ads") }).transform((v) => ({ type: v.type })),
  ),
  BenefitArticlesSubscriber$outboundSchema.and(
    z.object({ type: z.literal("articles") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitCustomSubscriber$outboundSchema.and(
    z.object({ type: z.literal("custom") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitDiscordSubscriber$outboundSchema.and(
    z.object({ type: z.literal("discord") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitDownloadablesSubscriber$outboundSchema.and(
    z.object({ type: z.literal("downloadables") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitGitHubRepositorySubscriber$outboundSchema.and(
    z.object({ type: z.literal("github_repository") }).transform((v) => ({
      type: v.type,
    })),
  ),
  BenefitLicenseKeysSubscriber$outboundSchema.and(
    z.object({ type: z.literal("license_keys") }).transform((v) => ({
      type: v.type,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserBenefit$ {
  /** @deprecated use `UserBenefit$inboundSchema` instead. */
  export const inboundSchema = UserBenefit$inboundSchema;
  /** @deprecated use `UserBenefit$outboundSchema` instead. */
  export const outboundSchema = UserBenefit$outboundSchema;
  /** @deprecated use `UserBenefit$Outbound` instead. */
  export type Outbound = UserBenefit$Outbound;
}

/** @internal */
export const ListResourceUserBenefit$inboundSchema: z.ZodType<
  ListResourceUserBenefit,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(
    z.union([
      BenefitAdsSubscriber$inboundSchema.and(
        z.object({ type: z.literal("ads") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitArticlesSubscriber$inboundSchema.and(
        z.object({ type: z.literal("articles") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitCustomSubscriber$inboundSchema.and(
        z.object({ type: z.literal("custom") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitDiscordSubscriber$inboundSchema.and(
        z.object({ type: z.literal("discord") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitDownloadablesSubscriber$inboundSchema.and(
        z.object({ type: z.literal("downloadables") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitGitHubRepositorySubscriber$inboundSchema.and(
        z.object({ type: z.literal("github_repository") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitLicenseKeysSubscriber$inboundSchema.and(
        z.object({ type: z.literal("license_keys") }).transform((v) => ({
          type: v.type,
        })),
      ),
    ]),
  ),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceUserBenefit$Outbound = {
  items: Array<
    | (BenefitAdsSubscriber$Outbound & { type: "ads" })
    | (BenefitArticlesSubscriber$Outbound & { type: "articles" })
    | (BenefitCustomSubscriber$Outbound & { type: "custom" })
    | (BenefitDiscordSubscriber$Outbound & { type: "discord" })
    | (BenefitDownloadablesSubscriber$Outbound & { type: "downloadables" })
    | (BenefitGitHubRepositorySubscriber$Outbound & {
      type: "github_repository";
    })
    | (BenefitLicenseKeysSubscriber$Outbound & { type: "license_keys" })
  >;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceUserBenefit$outboundSchema: z.ZodType<
  ListResourceUserBenefit$Outbound,
  z.ZodTypeDef,
  ListResourceUserBenefit
> = z.object({
  items: z.array(
    z.union([
      BenefitAdsSubscriber$outboundSchema.and(
        z.object({ type: z.literal("ads") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitArticlesSubscriber$outboundSchema.and(
        z.object({ type: z.literal("articles") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitCustomSubscriber$outboundSchema.and(
        z.object({ type: z.literal("custom") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitDiscordSubscriber$outboundSchema.and(
        z.object({ type: z.literal("discord") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitDownloadablesSubscriber$outboundSchema.and(
        z.object({ type: z.literal("downloadables") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitGitHubRepositorySubscriber$outboundSchema.and(
        z.object({ type: z.literal("github_repository") }).transform((v) => ({
          type: v.type,
        })),
      ),
      BenefitLicenseKeysSubscriber$outboundSchema.and(
        z.object({ type: z.literal("license_keys") }).transform((v) => ({
          type: v.type,
        })),
      ),
    ]),
  ),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceUserBenefit$ {
  /** @deprecated use `ListResourceUserBenefit$inboundSchema` instead. */
  export const inboundSchema = ListResourceUserBenefit$inboundSchema;
  /** @deprecated use `ListResourceUserBenefit$outboundSchema` instead. */
  export const outboundSchema = ListResourceUserBenefit$outboundSchema;
  /** @deprecated use `ListResourceUserBenefit$Outbound` instead. */
  export type Outbound = ListResourceUserBenefit$Outbound;
}
