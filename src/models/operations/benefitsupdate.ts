/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import * as components from "../components/index.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type BenefitsUpdateBenefitUpdate =
  | components.BenefitAdsUpdate
  | components.BenefitCustomUpdate
  | components.BenefitDiscordUpdate
  | components.BenefitGitHubRepositoryUpdate
  | components.BenefitDownloadablesUpdate
  | components.BenefitLicenseKeysUpdate;

export type BenefitsUpdateRequest = {
  id: string;
  requestBody:
    | components.BenefitAdsUpdate
    | components.BenefitCustomUpdate
    | components.BenefitDiscordUpdate
    | components.BenefitGitHubRepositoryUpdate
    | components.BenefitDownloadablesUpdate
    | components.BenefitLicenseKeysUpdate;
};

/** @internal */
export const BenefitsUpdateBenefitUpdate$inboundSchema: z.ZodType<
  BenefitsUpdateBenefitUpdate,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.BenefitAdsUpdate$inboundSchema,
  components.BenefitCustomUpdate$inboundSchema,
  components.BenefitDiscordUpdate$inboundSchema,
  components.BenefitGitHubRepositoryUpdate$inboundSchema,
  components.BenefitDownloadablesUpdate$inboundSchema,
  components.BenefitLicenseKeysUpdate$inboundSchema,
]);

/** @internal */
export type BenefitsUpdateBenefitUpdate$Outbound =
  | components.BenefitAdsUpdate$Outbound
  | components.BenefitCustomUpdate$Outbound
  | components.BenefitDiscordUpdate$Outbound
  | components.BenefitGitHubRepositoryUpdate$Outbound
  | components.BenefitDownloadablesUpdate$Outbound
  | components.BenefitLicenseKeysUpdate$Outbound;

/** @internal */
export const BenefitsUpdateBenefitUpdate$outboundSchema: z.ZodType<
  BenefitsUpdateBenefitUpdate$Outbound,
  z.ZodTypeDef,
  BenefitsUpdateBenefitUpdate
> = z.union([
  components.BenefitAdsUpdate$outboundSchema,
  components.BenefitCustomUpdate$outboundSchema,
  components.BenefitDiscordUpdate$outboundSchema,
  components.BenefitGitHubRepositoryUpdate$outboundSchema,
  components.BenefitDownloadablesUpdate$outboundSchema,
  components.BenefitLicenseKeysUpdate$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsUpdateBenefitUpdate$ {
  /** @deprecated use `BenefitsUpdateBenefitUpdate$inboundSchema` instead. */
  export const inboundSchema = BenefitsUpdateBenefitUpdate$inboundSchema;
  /** @deprecated use `BenefitsUpdateBenefitUpdate$outboundSchema` instead. */
  export const outboundSchema = BenefitsUpdateBenefitUpdate$outboundSchema;
  /** @deprecated use `BenefitsUpdateBenefitUpdate$Outbound` instead. */
  export type Outbound = BenefitsUpdateBenefitUpdate$Outbound;
}

export function benefitsUpdateBenefitUpdateToJSON(
  benefitsUpdateBenefitUpdate: BenefitsUpdateBenefitUpdate,
): string {
  return JSON.stringify(
    BenefitsUpdateBenefitUpdate$outboundSchema.parse(
      benefitsUpdateBenefitUpdate,
    ),
  );
}

export function benefitsUpdateBenefitUpdateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitsUpdateBenefitUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitsUpdateBenefitUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitsUpdateBenefitUpdate' from JSON`,
  );
}

/** @internal */
export const BenefitsUpdateRequest$inboundSchema: z.ZodType<
  BenefitsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  RequestBody: z.union([
    components.BenefitAdsUpdate$inboundSchema,
    components.BenefitCustomUpdate$inboundSchema,
    components.BenefitDiscordUpdate$inboundSchema,
    components.BenefitGitHubRepositoryUpdate$inboundSchema,
    components.BenefitDownloadablesUpdate$inboundSchema,
    components.BenefitLicenseKeysUpdate$inboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    "RequestBody": "requestBody",
  });
});

/** @internal */
export type BenefitsUpdateRequest$Outbound = {
  id: string;
  RequestBody:
    | components.BenefitAdsUpdate$Outbound
    | components.BenefitCustomUpdate$Outbound
    | components.BenefitDiscordUpdate$Outbound
    | components.BenefitGitHubRepositoryUpdate$Outbound
    | components.BenefitDownloadablesUpdate$Outbound
    | components.BenefitLicenseKeysUpdate$Outbound;
};

/** @internal */
export const BenefitsUpdateRequest$outboundSchema: z.ZodType<
  BenefitsUpdateRequest$Outbound,
  z.ZodTypeDef,
  BenefitsUpdateRequest
> = z.object({
  id: z.string(),
  requestBody: z.union([
    components.BenefitAdsUpdate$outboundSchema,
    components.BenefitCustomUpdate$outboundSchema,
    components.BenefitDiscordUpdate$outboundSchema,
    components.BenefitGitHubRepositoryUpdate$outboundSchema,
    components.BenefitDownloadablesUpdate$outboundSchema,
    components.BenefitLicenseKeysUpdate$outboundSchema,
  ]),
}).transform((v) => {
  return remap$(v, {
    requestBody: "RequestBody",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitsUpdateRequest$ {
  /** @deprecated use `BenefitsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = BenefitsUpdateRequest$inboundSchema;
  /** @deprecated use `BenefitsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = BenefitsUpdateRequest$outboundSchema;
  /** @deprecated use `BenefitsUpdateRequest$Outbound` instead. */
  export type Outbound = BenefitsUpdateRequest$Outbound;
}

export function benefitsUpdateRequestToJSON(
  benefitsUpdateRequest: BenefitsUpdateRequest,
): string {
  return JSON.stringify(
    BenefitsUpdateRequest$outboundSchema.parse(benefitsUpdateRequest),
  );
}

export function benefitsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<BenefitsUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitsUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitsUpdateRequest' from JSON`,
  );
}
