/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Properties to create a benefit of type `discord`.
 */
export type BenefitDiscordCreateProperties = {
  guildToken: string;
  /**
   * The ID of the Discord role to grant.
   */
  roleId: string;
};

/** @internal */
export const BenefitDiscordCreateProperties$inboundSchema: z.ZodType<
  BenefitDiscordCreateProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_token: z.string(),
  role_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_token": "guildToken",
    "role_id": "roleId",
  });
});

/** @internal */
export type BenefitDiscordCreateProperties$Outbound = {
  guild_token: string;
  role_id: string;
};

/** @internal */
export const BenefitDiscordCreateProperties$outboundSchema: z.ZodType<
  BenefitDiscordCreateProperties$Outbound,
  z.ZodTypeDef,
  BenefitDiscordCreateProperties
> = z.object({
  guildToken: z.string(),
  roleId: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildToken: "guild_token",
    roleId: "role_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscordCreateProperties$ {
  /** @deprecated use `BenefitDiscordCreateProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscordCreateProperties$inboundSchema;
  /** @deprecated use `BenefitDiscordCreateProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscordCreateProperties$outboundSchema;
  /** @deprecated use `BenefitDiscordCreateProperties$Outbound` instead. */
  export type Outbound = BenefitDiscordCreateProperties$Outbound;
}

export function benefitDiscordCreatePropertiesToJSON(
  benefitDiscordCreateProperties: BenefitDiscordCreateProperties,
): string {
  return JSON.stringify(
    BenefitDiscordCreateProperties$outboundSchema.parse(
      benefitDiscordCreateProperties,
    ),
  );
}

export function benefitDiscordCreatePropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscordCreateProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscordCreateProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscordCreateProperties' from JSON`,
  );
}
