/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  BenefitGitHubRepositoryCreateProperties,
  BenefitGitHubRepositoryCreateProperties$inboundSchema,
  BenefitGitHubRepositoryCreateProperties$Outbound,
  BenefitGitHubRepositoryCreateProperties$outboundSchema,
} from "./benefitgithubrepositorycreateproperties.js";

export const BenefitGitHubRepositoryCreateType = {
  GithubRepository: "github_repository",
} as const;
export type BenefitGitHubRepositoryCreateType = ClosedEnum<
  typeof BenefitGitHubRepositoryCreateType
>;

export type BenefitGitHubRepositoryCreate = {
  type?: "github_repository" | undefined;
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description: string;
  /**
   * The ID of the organization owning the benefit. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  /**
   * Properties to create a benefit of type `github_repository`.
   */
  properties: BenefitGitHubRepositoryCreateProperties;
};

/** @internal */
export const BenefitGitHubRepositoryCreateType$inboundSchema: z.ZodNativeEnum<
  typeof BenefitGitHubRepositoryCreateType
> = z.nativeEnum(BenefitGitHubRepositoryCreateType);

/** @internal */
export const BenefitGitHubRepositoryCreateType$outboundSchema: z.ZodNativeEnum<
  typeof BenefitGitHubRepositoryCreateType
> = BenefitGitHubRepositoryCreateType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositoryCreateType$ {
  /** @deprecated use `BenefitGitHubRepositoryCreateType$inboundSchema` instead. */
  export const inboundSchema = BenefitGitHubRepositoryCreateType$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreateType$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositoryCreateType$outboundSchema;
}

/** @internal */
export const BenefitGitHubRepositoryCreate$inboundSchema: z.ZodType<
  BenefitGitHubRepositoryCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("github_repository").optional(),
  description: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: BenefitGitHubRepositoryCreateProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitGitHubRepositoryCreate$Outbound = {
  type: "github_repository";
  description: string;
  organization_id?: string | null | undefined;
  properties: BenefitGitHubRepositoryCreateProperties$Outbound;
};

/** @internal */
export const BenefitGitHubRepositoryCreate$outboundSchema: z.ZodType<
  BenefitGitHubRepositoryCreate$Outbound,
  z.ZodTypeDef,
  BenefitGitHubRepositoryCreate
> = z.object({
  type: z.literal("github_repository").default("github_repository"),
  description: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: BenefitGitHubRepositoryCreateProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositoryCreate$ {
  /** @deprecated use `BenefitGitHubRepositoryCreate$inboundSchema` instead. */
  export const inboundSchema = BenefitGitHubRepositoryCreate$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreate$outboundSchema` instead. */
  export const outboundSchema = BenefitGitHubRepositoryCreate$outboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryCreate$Outbound` instead. */
  export type Outbound = BenefitGitHubRepositoryCreate$Outbound;
}
