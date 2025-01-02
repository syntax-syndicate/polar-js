/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitDiscordProperties,
  BenefitDiscordProperties$inboundSchema,
  BenefitDiscordProperties$Outbound,
  BenefitDiscordProperties$outboundSchema,
} from "./benefitdiscordproperties.js";

/**
 * A benefit of type `discord`.
 *
 * @remarks
 *
 * Use it to automatically invite your backers to a Discord server.
 */
export type BenefitDiscord = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the benefit.
   */
  id: string;
  type?: "discord" | undefined;
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organizationId: string;
  /**
   * Properties for a benefit of type `discord`.
   */
  properties: BenefitDiscordProperties;
};

/** @internal */
export const BenefitDiscord$inboundSchema: z.ZodType<
  BenefitDiscord,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  type: z.literal("discord").optional(),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  properties: BenefitDiscordProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type BenefitDiscord$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  type: "discord";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  properties: BenefitDiscordProperties$Outbound;
};

/** @internal */
export const BenefitDiscord$outboundSchema: z.ZodType<
  BenefitDiscord$Outbound,
  z.ZodTypeDef,
  BenefitDiscord
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  type: z.literal("discord").default("discord" as const),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  properties: BenefitDiscordProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscord$ {
  /** @deprecated use `BenefitDiscord$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscord$inboundSchema;
  /** @deprecated use `BenefitDiscord$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscord$outboundSchema;
  /** @deprecated use `BenefitDiscord$Outbound` instead. */
  export type Outbound = BenefitDiscord$Outbound;
}

export function benefitDiscordToJSON(benefitDiscord: BenefitDiscord): string {
  return JSON.stringify(BenefitDiscord$outboundSchema.parse(benefitDiscord));
}

export function benefitDiscordFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscord, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscord$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscord' from JSON`,
  );
}
