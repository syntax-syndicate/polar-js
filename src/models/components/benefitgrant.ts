/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
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
import {
  Customer,
  Customer$inboundSchema,
  Customer$Outbound,
  Customer$outboundSchema,
} from "./customer.js";

export type Properties =
  | BenefitGrantCustomProperties
  | BenefitGrantDownloadablesProperties
  | BenefitGrantAdsProperties
  | BenefitGrantLicenseKeysProperties
  | BenefitGrantDiscordProperties
  | BenefitGrantGitHubRepositoryProperties;

export type BenefitGrant = {
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
  /**
   * A customer in an organization.
   */
  customer: Customer;
  properties:
    | BenefitGrantCustomProperties
    | BenefitGrantDownloadablesProperties
    | BenefitGrantAdsProperties
    | BenefitGrantLicenseKeysProperties
    | BenefitGrantDiscordProperties
    | BenefitGrantGitHubRepositoryProperties;
};

/** @internal */
export const Properties$inboundSchema: z.ZodType<
  Properties,
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
export type Properties$Outbound =
  | BenefitGrantCustomProperties$Outbound
  | BenefitGrantDownloadablesProperties$Outbound
  | BenefitGrantAdsProperties$Outbound
  | BenefitGrantLicenseKeysProperties$Outbound
  | BenefitGrantDiscordProperties$Outbound
  | BenefitGrantGitHubRepositoryProperties$Outbound;

/** @internal */
export const Properties$outboundSchema: z.ZodType<
  Properties$Outbound,
  z.ZodTypeDef,
  Properties
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
export namespace Properties$ {
  /** @deprecated use `Properties$inboundSchema` instead. */
  export const inboundSchema = Properties$inboundSchema;
  /** @deprecated use `Properties$outboundSchema` instead. */
  export const outboundSchema = Properties$outboundSchema;
  /** @deprecated use `Properties$Outbound` instead. */
  export type Outbound = Properties$Outbound;
}

export function propertiesToJSON(properties: Properties): string {
  return JSON.stringify(Properties$outboundSchema.parse(properties));
}

export function propertiesFromJSON(
  jsonString: string,
): SafeParseResult<Properties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Properties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Properties' from JSON`,
  );
}

/** @internal */
export const BenefitGrant$inboundSchema: z.ZodType<
  BenefitGrant,
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
  customer: Customer$inboundSchema,
  properties: z.union([
    BenefitGrantCustomProperties$inboundSchema,
    BenefitGrantDownloadablesProperties$inboundSchema,
    BenefitGrantAdsProperties$inboundSchema,
    BenefitGrantLicenseKeysProperties$inboundSchema,
    BenefitGrantDiscordProperties$inboundSchema,
    BenefitGrantGitHubRepositoryProperties$inboundSchema,
  ]),
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
  });
});

/** @internal */
export type BenefitGrant$Outbound = {
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
  customer: Customer$Outbound;
  properties:
    | BenefitGrantCustomProperties$Outbound
    | BenefitGrantDownloadablesProperties$Outbound
    | BenefitGrantAdsProperties$Outbound
    | BenefitGrantLicenseKeysProperties$Outbound
    | BenefitGrantDiscordProperties$Outbound
    | BenefitGrantGitHubRepositoryProperties$Outbound;
};

/** @internal */
export const BenefitGrant$outboundSchema: z.ZodType<
  BenefitGrant$Outbound,
  z.ZodTypeDef,
  BenefitGrant
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
  customer: Customer$outboundSchema,
  properties: z.union([
    BenefitGrantCustomProperties$outboundSchema,
    BenefitGrantDownloadablesProperties$outboundSchema,
    BenefitGrantAdsProperties$outboundSchema,
    BenefitGrantLicenseKeysProperties$outboundSchema,
    BenefitGrantDiscordProperties$outboundSchema,
    BenefitGrantGitHubRepositoryProperties$outboundSchema,
  ]),
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
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGrant$ {
  /** @deprecated use `BenefitGrant$inboundSchema` instead. */
  export const inboundSchema = BenefitGrant$inboundSchema;
  /** @deprecated use `BenefitGrant$outboundSchema` instead. */
  export const outboundSchema = BenefitGrant$outboundSchema;
  /** @deprecated use `BenefitGrant$Outbound` instead. */
  export type Outbound = BenefitGrant$Outbound;
}

export function benefitGrantToJSON(benefitGrant: BenefitGrant): string {
  return JSON.stringify(BenefitGrant$outboundSchema.parse(benefitGrant));
}

export function benefitGrantFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGrant, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGrant$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGrant' from JSON`,
  );
}
