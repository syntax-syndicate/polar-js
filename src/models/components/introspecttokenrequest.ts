/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const IntrospectTokenRequestTokenTypeHint = {
  AccessToken: "access_token",
  RefreshToken: "refresh_token",
} as const;
export type IntrospectTokenRequestTokenTypeHint = ClosedEnum<
  typeof IntrospectTokenRequestTokenTypeHint
>;

export type IntrospectTokenRequest = {
  token: string;
  tokenTypeHint?: IntrospectTokenRequestTokenTypeHint | null | undefined;
  clientId: string;
  clientSecret: string;
};

/** @internal */
export const IntrospectTokenRequestTokenTypeHint$inboundSchema: z.ZodNativeEnum<
  typeof IntrospectTokenRequestTokenTypeHint
> = z.nativeEnum(IntrospectTokenRequestTokenTypeHint);

/** @internal */
export const IntrospectTokenRequestTokenTypeHint$outboundSchema:
  z.ZodNativeEnum<typeof IntrospectTokenRequestTokenTypeHint> =
    IntrospectTokenRequestTokenTypeHint$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntrospectTokenRequestTokenTypeHint$ {
  /** @deprecated use `IntrospectTokenRequestTokenTypeHint$inboundSchema` instead. */
  export const inboundSchema =
    IntrospectTokenRequestTokenTypeHint$inboundSchema;
  /** @deprecated use `IntrospectTokenRequestTokenTypeHint$outboundSchema` instead. */
  export const outboundSchema =
    IntrospectTokenRequestTokenTypeHint$outboundSchema;
}

/** @internal */
export const IntrospectTokenRequest$inboundSchema: z.ZodType<
  IntrospectTokenRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
  token_type_hint: z.nullable(IntrospectTokenRequestTokenTypeHint$inboundSchema)
    .optional(),
  client_id: z.string(),
  client_secret: z.string(),
}).transform((v) => {
  return remap$(v, {
    "token_type_hint": "tokenTypeHint",
    "client_id": "clientId",
    "client_secret": "clientSecret",
  });
});

/** @internal */
export type IntrospectTokenRequest$Outbound = {
  token: string;
  token_type_hint?: string | null | undefined;
  client_id: string;
  client_secret: string;
};

/** @internal */
export const IntrospectTokenRequest$outboundSchema: z.ZodType<
  IntrospectTokenRequest$Outbound,
  z.ZodTypeDef,
  IntrospectTokenRequest
> = z.object({
  token: z.string(),
  tokenTypeHint: z.nullable(IntrospectTokenRequestTokenTypeHint$outboundSchema)
    .optional(),
  clientId: z.string(),
  clientSecret: z.string(),
}).transform((v) => {
  return remap$(v, {
    tokenTypeHint: "token_type_hint",
    clientId: "client_id",
    clientSecret: "client_secret",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace IntrospectTokenRequest$ {
  /** @deprecated use `IntrospectTokenRequest$inboundSchema` instead. */
  export const inboundSchema = IntrospectTokenRequest$inboundSchema;
  /** @deprecated use `IntrospectTokenRequest$outboundSchema` instead. */
  export const outboundSchema = IntrospectTokenRequest$outboundSchema;
  /** @deprecated use `IntrospectTokenRequest$Outbound` instead. */
  export type Outbound = IntrospectTokenRequest$Outbound;
}

export function introspectTokenRequestToJSON(
  introspectTokenRequest: IntrospectTokenRequest,
): string {
  return JSON.stringify(
    IntrospectTokenRequest$outboundSchema.parse(introspectTokenRequest),
  );
}

export function introspectTokenRequestFromJSON(
  jsonString: string,
): SafeParseResult<IntrospectTokenRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => IntrospectTokenRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'IntrospectTokenRequest' from JSON`,
  );
}
