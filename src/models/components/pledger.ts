/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type Pledger = {
  name: string;
  githubUsername: string | null;
  avatarUrl: string | null;
};

/** @internal */
export const Pledger$inboundSchema: z.ZodType<Pledger, z.ZodTypeDef, unknown> =
  z.object({
    name: z.string(),
    github_username: z.nullable(z.string()),
    avatar_url: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      "github_username": "githubUsername",
      "avatar_url": "avatarUrl",
    });
  });

/** @internal */
export type Pledger$Outbound = {
  name: string;
  github_username: string | null;
  avatar_url: string | null;
};

/** @internal */
export const Pledger$outboundSchema: z.ZodType<
  Pledger$Outbound,
  z.ZodTypeDef,
  Pledger
> = z.object({
  name: z.string(),
  githubUsername: z.nullable(z.string()),
  avatarUrl: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    githubUsername: "github_username",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Pledger$ {
  /** @deprecated use `Pledger$inboundSchema` instead. */
  export const inboundSchema = Pledger$inboundSchema;
  /** @deprecated use `Pledger$outboundSchema` instead. */
  export const outboundSchema = Pledger$outboundSchema;
  /** @deprecated use `Pledger$Outbound` instead. */
  export type Outbound = Pledger$Outbound;
}

export function pledgerToJSON(pledger: Pledger): string {
  return JSON.stringify(Pledger$outboundSchema.parse(pledger));
}

export function pledgerFromJSON(
  jsonString: string,
): SafeParseResult<Pledger, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Pledger$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Pledger' from JSON`,
  );
}
