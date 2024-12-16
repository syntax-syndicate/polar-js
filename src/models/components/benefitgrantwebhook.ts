/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Benefit,
  Benefit$inboundSchema,
  Benefit$Outbound,
  Benefit$outboundSchema,
} from "./benefit.js";
import {
  BenefitGrantAdsProperties,
  BenefitGrantAdsProperties$inboundSchema,
  BenefitGrantAdsProperties$Outbound,
  BenefitGrantAdsProperties$outboundSchema,
} from "./benefitgrantadsproperties.js";
import {
  BenefitGrantCustomProperties,
  BenefitGrantCustomProperties$inboundSchema,
  BenefitGrantCustomProperties$Outbound,
  BenefitGrantCustomProperties$outboundSchema,
} from "./benefitgrantcustomproperties.js";
import {
  BenefitGrantDiscordProperties,
  BenefitGrantDiscordProperties$inboundSchema,
  BenefitGrantDiscordProperties$Outbound,
  BenefitGrantDiscordProperties$outboundSchema,
} from "./benefitgrantdiscordproperties.js";
import {
  BenefitGrantDownloadablesProperties,
  BenefitGrantDownloadablesProperties$inboundSchema,
  BenefitGrantDownloadablesProperties$Outbound,
  BenefitGrantDownloadablesProperties$outboundSchema,
} from "./benefitgrantdownloadablesproperties.js";
import {
  BenefitGrantGitHubRepositoryProperties,
  BenefitGrantGitHubRepositoryProperties$inboundSchema,
  BenefitGrantGitHubRepositoryProperties$Outbound,
  BenefitGrantGitHubRepositoryProperties$outboundSchema,
} from "./benefitgrantgithubrepositoryproperties.js";
import {
  BenefitGrantLicenseKeysProperties,
  BenefitGrantLicenseKeysProperties$inboundSchema,
  BenefitGrantLicenseKeysProperties$Outbound,
  BenefitGrantLicenseKeysProperties$outboundSchema,
} from "./benefitgrantlicensekeysproperties.js";

export type BenefitGrantWebhookProperties =
  | BenefitGrantCustomProperties
  | BenefitGrantDownloadablesProperties
  | BenefitGrantAdsProperties
  | BenefitGrantLicenseKeysProperties
  | BenefitGrantDiscordProperties
  | BenefitGrantGitHubRepositoryProperties;

export type PreviousProperties =
  | BenefitGrantCustomProperties
  | BenefitGrantDownloadablesProperties
  | BenefitGrantAdsProperties
  | BenefitGrantLicenseKeysProperties
  | BenefitGrantDiscordProperties
  | BenefitGrantGitHubRepositoryProperties;

export type BenefitGrantWebhook = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the grant.
   */
  id: string;
  /**
   * The timestamp when the benefit was granted. If `None`, the benefit is not granted.
   */
  grantedAt?: Date | null | undefined;
  /**
   * Whether the benefit is granted.
   */
  isGranted: boolean;
  /**
   * The timestamp when the benefit was revoked. If `None`, the benefit is not revoked.
   */
  revokedAt?: Date | null | undefined;
  /**
   * Whether the benefit is revoked.
   */
  isRevoked: boolean;
  /**
   * The ID of the subscription that granted this benefit.
   */
  subscriptionId: string | null;
  /**
   * The ID of the order that granted this benefit.
   */
  orderId: string | null;
  /**
   * The ID of the customer concerned by this grant.
   */
  customerId: string;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  userId: string;
  /**
   * The ID of the benefit concerned by this grant.
   */
  benefitId: string;
  properties:
    | BenefitGrantCustomProperties
    | BenefitGrantDownloadablesProperties
    | BenefitGrantAdsProperties
    | BenefitGrantLicenseKeysProperties
    | BenefitGrantDiscordProperties
    | BenefitGrantGitHubRepositoryProperties;
  benefit: Benefit;
  previousProperties?:
    | BenefitGrantCustomProperties
    | BenefitGrantDownloadablesProperties
    | BenefitGrantAdsProperties
    | BenefitGrantLicenseKeysProperties
    | BenefitGrantDiscordProperties
    | BenefitGrantGitHubRepositoryProperties
    | null
    | undefined;
};

/** @internal */
export const BenefitGrantWebhookProperties$inboundSchema: z.ZodType<
  BenefitGrantWebhookProperties,
  z.ZodTypeDef,
  unknown
> = z.union([
  BenefitGrantCustomProperties$inboundSchema,
  BenefitGrantDownloadablesProperties$inboundSchema,
  BenefitGrantAdsProperties$inboundSchema,
  BenefitGrantLicenseKeysProperties$inboundSchema,
  BenefitGrantDiscordProperties$inboundSchema,
  BenefitGrantGitHubRepositoryProperties$inboundSchema,
]);

/** @internal */
export type BenefitGrantWebhookProperties$Outbound =
  | BenefitGrantCustomProperties$Outbound
  | BenefitGrantDownloadablesProperties$Outbound
  | BenefitGrantAdsProperties$Outbound
  | BenefitGrantLicenseKeysProperties$Outbound
  | BenefitGrantDiscordProperties$Outbound
  | BenefitGrantGitHubRepositoryProperties$Outbound;

/** @internal */
export const BenefitGrantWebhookProperties$outboundSchema: z.ZodType<
  BenefitGrantWebhookProperties$Outbound,
  z.ZodTypeDef,
  BenefitGrantWebhookProperties
> = z.union([
  BenefitGrantCustomProperties$outboundSchema,
  BenefitGrantDownloadablesProperties$outboundSchema,
  BenefitGrantAdsProperties$outboundSchema,
  BenefitGrantLicenseKeysProperties$outboundSchema,
  BenefitGrantDiscordProperties$outboundSchema,
  BenefitGrantGitHubRepositoryProperties$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantWebhookProperties$ {
  /** @deprecated use `BenefitGrantWebhookProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantWebhookProperties$inboundSchema;
  /** @deprecated use `BenefitGrantWebhookProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantWebhookProperties$outboundSchema;
  /** @deprecated use `BenefitGrantWebhookProperties$Outbound` instead. */
  export type Outbound = BenefitGrantWebhookProperties$Outbound;
}

export function benefitGrantWebhookPropertiesToJSON(
  benefitGrantWebhookProperties: BenefitGrantWebhookProperties,
): string {
  return JSON.stringify(
    BenefitGrantWebhookProperties$outboundSchema.parse(
      benefitGrantWebhookProperties,
    ),
  );
}

export function benefitGrantWebhookPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGrantWebhookProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGrantWebhookProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGrantWebhookProperties' from JSON`,
  );
}

/** @internal */
export const PreviousProperties$inboundSchema: z.ZodType<
  PreviousProperties,
  z.ZodTypeDef,
  unknown
> = z.union([
  BenefitGrantCustomProperties$inboundSchema,
  BenefitGrantDownloadablesProperties$inboundSchema,
  BenefitGrantAdsProperties$inboundSchema,
  BenefitGrantLicenseKeysProperties$inboundSchema,
  BenefitGrantDiscordProperties$inboundSchema,
  BenefitGrantGitHubRepositoryProperties$inboundSchema,
]);

/** @internal */
export type PreviousProperties$Outbound =
  | BenefitGrantCustomProperties$Outbound
  | BenefitGrantDownloadablesProperties$Outbound
  | BenefitGrantAdsProperties$Outbound
  | BenefitGrantLicenseKeysProperties$Outbound
  | BenefitGrantDiscordProperties$Outbound
  | BenefitGrantGitHubRepositoryProperties$Outbound;

/** @internal */
export const PreviousProperties$outboundSchema: z.ZodType<
  PreviousProperties$Outbound,
  z.ZodTypeDef,
  PreviousProperties
> = z.union([
  BenefitGrantCustomProperties$outboundSchema,
  BenefitGrantDownloadablesProperties$outboundSchema,
  BenefitGrantAdsProperties$outboundSchema,
  BenefitGrantLicenseKeysProperties$outboundSchema,
  BenefitGrantDiscordProperties$outboundSchema,
  BenefitGrantGitHubRepositoryProperties$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace PreviousProperties$ {
  /** @deprecated use `PreviousProperties$inboundSchema` instead. */
  export const inboundSchema = PreviousProperties$inboundSchema;
  /** @deprecated use `PreviousProperties$outboundSchema` instead. */
  export const outboundSchema = PreviousProperties$outboundSchema;
  /** @deprecated use `PreviousProperties$Outbound` instead. */
  export type Outbound = PreviousProperties$Outbound;
}

export function previousPropertiesToJSON(
  previousProperties: PreviousProperties,
): string {
  return JSON.stringify(
    PreviousProperties$outboundSchema.parse(previousProperties),
  );
}

export function previousPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<PreviousProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => PreviousProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'PreviousProperties' from JSON`,
  );
}

/** @internal */
export const BenefitGrantWebhook$inboundSchema: z.ZodType<
  BenefitGrantWebhook,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  granted_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  is_granted: z.boolean(),
  revoked_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  is_revoked: z.boolean(),
  subscription_id: z.nullable(z.string()),
  order_id: z.nullable(z.string()),
  customer_id: z.string(),
  user_id: z.string(),
  benefit_id: z.string(),
  properties: z.union([
    BenefitGrantCustomProperties$inboundSchema,
    BenefitGrantDownloadablesProperties$inboundSchema,
    BenefitGrantAdsProperties$inboundSchema,
    BenefitGrantLicenseKeysProperties$inboundSchema,
    BenefitGrantDiscordProperties$inboundSchema,
    BenefitGrantGitHubRepositoryProperties$inboundSchema,
  ]),
  benefit: Benefit$inboundSchema,
  previous_properties: z.nullable(
    z.union([
      BenefitGrantCustomProperties$inboundSchema,
      BenefitGrantDownloadablesProperties$inboundSchema,
      BenefitGrantAdsProperties$inboundSchema,
      BenefitGrantLicenseKeysProperties$inboundSchema,
      BenefitGrantDiscordProperties$inboundSchema,
      BenefitGrantGitHubRepositoryProperties$inboundSchema,
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "granted_at": "grantedAt",
    "is_granted": "isGranted",
    "revoked_at": "revokedAt",
    "is_revoked": "isRevoked",
    "subscription_id": "subscriptionId",
    "order_id": "orderId",
    "customer_id": "customerId",
    "user_id": "userId",
    "benefit_id": "benefitId",
    "previous_properties": "previousProperties",
  });
});

/** @internal */
export type BenefitGrantWebhook$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  granted_at?: string | null | undefined;
  is_granted: boolean;
  revoked_at?: string | null | undefined;
  is_revoked: boolean;
  subscription_id: string | null;
  order_id: string | null;
  customer_id: string;
  user_id: string;
  benefit_id: string;
  properties:
    | BenefitGrantCustomProperties$Outbound
    | BenefitGrantDownloadablesProperties$Outbound
    | BenefitGrantAdsProperties$Outbound
    | BenefitGrantLicenseKeysProperties$Outbound
    | BenefitGrantDiscordProperties$Outbound
    | BenefitGrantGitHubRepositoryProperties$Outbound;
  benefit: Benefit$Outbound;
  previous_properties?:
    | BenefitGrantCustomProperties$Outbound
    | BenefitGrantDownloadablesProperties$Outbound
    | BenefitGrantAdsProperties$Outbound
    | BenefitGrantLicenseKeysProperties$Outbound
    | BenefitGrantDiscordProperties$Outbound
    | BenefitGrantGitHubRepositoryProperties$Outbound
    | null
    | undefined;
};

/** @internal */
export const BenefitGrantWebhook$outboundSchema: z.ZodType<
  BenefitGrantWebhook$Outbound,
  z.ZodTypeDef,
  BenefitGrantWebhook
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  grantedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  isGranted: z.boolean(),
  revokedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  isRevoked: z.boolean(),
  subscriptionId: z.nullable(z.string()),
  orderId: z.nullable(z.string()),
  customerId: z.string(),
  userId: z.string(),
  benefitId: z.string(),
  properties: z.union([
    BenefitGrantCustomProperties$outboundSchema,
    BenefitGrantDownloadablesProperties$outboundSchema,
    BenefitGrantAdsProperties$outboundSchema,
    BenefitGrantLicenseKeysProperties$outboundSchema,
    BenefitGrantDiscordProperties$outboundSchema,
    BenefitGrantGitHubRepositoryProperties$outboundSchema,
  ]),
  benefit: Benefit$outboundSchema,
  previousProperties: z.nullable(
    z.union([
      BenefitGrantCustomProperties$outboundSchema,
      BenefitGrantDownloadablesProperties$outboundSchema,
      BenefitGrantAdsProperties$outboundSchema,
      BenefitGrantLicenseKeysProperties$outboundSchema,
      BenefitGrantDiscordProperties$outboundSchema,
      BenefitGrantGitHubRepositoryProperties$outboundSchema,
    ]),
  ).optional(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    grantedAt: "granted_at",
    isGranted: "is_granted",
    revokedAt: "revoked_at",
    isRevoked: "is_revoked",
    subscriptionId: "subscription_id",
    orderId: "order_id",
    customerId: "customer_id",
    userId: "user_id",
    benefitId: "benefit_id",
    previousProperties: "previous_properties",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrantWebhook$ {
  /** @deprecated use `BenefitGrantWebhook$inboundSchema` instead. */
  export const inboundSchema = BenefitGrantWebhook$inboundSchema;
  /** @deprecated use `BenefitGrantWebhook$outboundSchema` instead. */
  export const outboundSchema = BenefitGrantWebhook$outboundSchema;
  /** @deprecated use `BenefitGrantWebhook$Outbound` instead. */
  export type Outbound = BenefitGrantWebhook$Outbound;
}

export function benefitGrantWebhookToJSON(
  benefitGrantWebhook: BenefitGrantWebhook,
): string {
  return JSON.stringify(
    BenefitGrantWebhook$outboundSchema.parse(benefitGrantWebhook),
  );
}

export function benefitGrantWebhookFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGrantWebhook, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGrantWebhook$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGrantWebhook' from JSON`,
  );
}
