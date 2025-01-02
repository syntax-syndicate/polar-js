/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitDiscordCreateProperties,
  BenefitDiscordCreateProperties$inboundSchema,
  BenefitDiscordCreateProperties$Outbound,
  BenefitDiscordCreateProperties$outboundSchema,
} from "./benefitdiscordcreateproperties.js";

export type BenefitDiscordUpdate = {
  /**
   * The description of the benefit. Will be displayed on products having this benefit.
   */
  description?: string | null | undefined;
  type?: "discord" | undefined;
  properties?: BenefitDiscordCreateProperties | null | undefined;
};

/** @internal */
export const BenefitDiscordUpdate$inboundSchema: z.ZodType<
  BenefitDiscordUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("discord").optional(),
  properties: z.nullable(BenefitDiscordCreateProperties$inboundSchema)
    .optional(),
});

/** @internal */
export type BenefitDiscordUpdate$Outbound = {
  description?: string | null | undefined;
  type: "discord";
  properties?: BenefitDiscordCreateProperties$Outbound | null | undefined;
};

/** @internal */
export const BenefitDiscordUpdate$outboundSchema: z.ZodType<
  BenefitDiscordUpdate$Outbound,
  z.ZodTypeDef,
  BenefitDiscordUpdate
> = z.object({
  description: z.nullable(z.string()).optional(),
  type: z.literal("discord").default("discord" as const),
  properties: z.nullable(BenefitDiscordCreateProperties$outboundSchema)
    .optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitDiscordUpdate$ {
  /** @deprecated use `BenefitDiscordUpdate$inboundSchema` instead. */
  export const inboundSchema = BenefitDiscordUpdate$inboundSchema;
  /** @deprecated use `BenefitDiscordUpdate$outboundSchema` instead. */
  export const outboundSchema = BenefitDiscordUpdate$outboundSchema;
  /** @deprecated use `BenefitDiscordUpdate$Outbound` instead. */
  export type Outbound = BenefitDiscordUpdate$Outbound;
}

export function benefitDiscordUpdateToJSON(
  benefitDiscordUpdate: BenefitDiscordUpdate,
): string {
  return JSON.stringify(
    BenefitDiscordUpdate$outboundSchema.parse(benefitDiscordUpdate),
  );
}

export function benefitDiscordUpdateFromJSON(
  jsonString: string,
): SafeParseResult<BenefitDiscordUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitDiscordUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitDiscordUpdate' from JSON`,
  );
}
