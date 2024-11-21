/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
 */
export const Permission = {
  Pull: "pull",
  Triage: "triage",
  Push: "push",
  Maintain: "maintain",
  Admin: "admin",
} as const;
/**
 * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
 */
export type Permission = ClosedEnum<typeof Permission>;

/**
 * Properties for a benefit of type `github_repository`.
 */
export type BenefitGitHubRepositoryProperties = {
  repositoryId: string | null;
  /**
   * The owner of the repository.
   */
  repositoryOwner: string;
  /**
   * The name of the repository.
   */
  repositoryName: string;
  /**
   * The permission level to grant. Read more about roles and their permissions on [GitHub documentation](https://docs.github.com/en/organizations/managing-user-access-to-your-organizations-repositories/managing-repository-roles/repository-roles-for-an-organization#permissions-for-each-role).
   */
  permission: Permission;
};

/** @internal */
export const Permission$inboundSchema: z.ZodNativeEnum<typeof Permission> = z
  .nativeEnum(Permission);

/** @internal */
export const Permission$outboundSchema: z.ZodNativeEnum<typeof Permission> =
  Permission$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Permission$ {
  /** @deprecated use `Permission$inboundSchema` instead. */
  export const inboundSchema = Permission$inboundSchema;
  /** @deprecated use `Permission$outboundSchema` instead. */
  export const outboundSchema = Permission$outboundSchema;
}

/** @internal */
export const BenefitGitHubRepositoryProperties$inboundSchema: z.ZodType<
  BenefitGitHubRepositoryProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  repository_id: z.nullable(z.string()),
  repository_owner: z.string(),
  repository_name: z.string(),
  permission: Permission$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "repository_id": "repositoryId",
    "repository_owner": "repositoryOwner",
    "repository_name": "repositoryName",
  });
});

/** @internal */
export type BenefitGitHubRepositoryProperties$Outbound = {
  repository_id: string | null;
  repository_owner: string;
  repository_name: string;
  permission: string;
};

/** @internal */
export const BenefitGitHubRepositoryProperties$outboundSchema: z.ZodType<
  BenefitGitHubRepositoryProperties$Outbound,
  z.ZodTypeDef,
  BenefitGitHubRepositoryProperties
> = z.object({
  repositoryId: z.nullable(z.string()),
  repositoryOwner: z.string(),
  repositoryName: z.string(),
  permission: Permission$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    repositoryId: "repository_id",
    repositoryOwner: "repository_owner",
    repositoryName: "repository_name",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitGitHubRepositoryProperties$ {
  /** @deprecated use `BenefitGitHubRepositoryProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitGitHubRepositoryProperties$inboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryProperties$outboundSchema` instead. */
  export const outboundSchema =
    BenefitGitHubRepositoryProperties$outboundSchema;
  /** @deprecated use `BenefitGitHubRepositoryProperties$Outbound` instead. */
  export type Outbound = BenefitGitHubRepositoryProperties$Outbound;
}

export function benefitGitHubRepositoryPropertiesToJSON(
  benefitGitHubRepositoryProperties: BenefitGitHubRepositoryProperties,
): string {
  return JSON.stringify(
    BenefitGitHubRepositoryProperties$outboundSchema.parse(
      benefitGitHubRepositoryProperties,
    ),
  );
}

export function benefitGitHubRepositoryPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitGitHubRepositoryProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitGitHubRepositoryProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitGitHubRepositoryProperties' from JSON`,
  );
}
