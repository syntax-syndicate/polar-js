/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

/**
 * Properties for a benefit of type `discord`.
 */
export type BenefitDiscordProperties = {
  /**
   * The ID of the Discord server.
   */
  guildId: string;
  /**
   * The ID of the Discord role to grant.
   */
  roleId: string;
  guildToken: string;
};

/** @internal */
export const BenefitDiscordProperties$inboundSchema: z.ZodType<
  BenefitDiscordProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  guild_id: z.string(),
  role_id: z.string(),
  guild_token: z.string(),
}).transform((v) => {
  return remap$(v, {
    "guild_id": "guildId",
    "role_id": "roleId",
    "guild_token": "guildToken",
  });
});

/** @internal */
export type BenefitDiscordProperties$Outbound = {
  guild_id: string;
  role_id: string;
  guild_token: string;
};

/** @internal */
export const BenefitDiscordProperties$outboundSchema: z.ZodType<
  BenefitDiscordProperties$Outbound,
  z.ZodTypeDef,
  BenefitDiscordProperties
> = z.object({
  guildId: z.string(),
  roleId: z.string(),
  guildToken: z.string(),
}).transform((v) => {
  return remap$(v, {
    guildId: "guild_id",
    roleId: "role_id",
    guildToken: "guild_token",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscordProperties$ {
  /** @deprecated use `BenefitDiscordProperties$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscordProperties$inboundSchema;
  /** @deprecated use `BenefitDiscordProperties$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscordProperties$outboundSchema;
  /** @deprecated use `BenefitDiscordProperties$Outbound` instead. */
  export type Outbound = BenefitDiscordProperties$Outbound;
}

export function benefitDiscordPropertiesToJSON(
  benefitDiscordProperties: BenefitDiscordProperties,
): string {
  return JSON.stringify(
    BenefitDiscordProperties$outboundSchema.parse(benefitDiscordProperties),
  );
}

export function benefitDiscordPropertiesFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscordProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscordProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscordProperties' from JSON`,
  );
}
