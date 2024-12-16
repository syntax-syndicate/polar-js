/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerBenefitGrantGitHubRepositoryPropertiesUpdate = {
  accountId: string;
};

/** @internal */
export const CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$inboundSchema:
  z.ZodType<
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate,
    z.ZodTypeDef,
    unknown
  > = z.object({
    account_id: z.string(),
  }).transform((v) => {
    return remap$(v, {
      "account_id": "accountId",
    });
  });

/** @internal */
export type CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$Outbound = {
  account_id: string;
};

/** @internal */
export const CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$outboundSchema:
  z.ZodType<
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$Outbound,
    z.ZodTypeDef,
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate
  > = z.object({
    accountId: z.string(),
  }).transform((v) => {
    return remap$(v, {
      accountId: "account_id",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$ {
  /** @deprecated use `CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$inboundSchema` instead. */
  export const inboundSchema =
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$inboundSchema;
  /** @deprecated use `CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$outboundSchema` instead. */
  export const outboundSchema =
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$outboundSchema;
  /** @deprecated use `CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$Outbound` instead. */
  export type Outbound =
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$Outbound;
}

export function customerBenefitGrantGitHubRepositoryPropertiesUpdateToJSON(
  customerBenefitGrantGitHubRepositoryPropertiesUpdate:
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate,
): string {
  return JSON.stringify(
    CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$outboundSchema.parse(
      customerBenefitGrantGitHubRepositoryPropertiesUpdate,
    ),
  );
}

export function customerBenefitGrantGitHubRepositoryPropertiesUpdateFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerBenefitGrantGitHubRepositoryPropertiesUpdate,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerBenefitGrantGitHubRepositoryPropertiesUpdate$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerBenefitGrantGitHubRepositoryPropertiesUpdate' from JSON`,
  );
}
