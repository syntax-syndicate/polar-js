/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const TokenEndpointAuthMethod = {
  ClientSecretBasic: "client_secret_basic",
  ClientSecretPost: "client_secret_post",
  None: "none",
} as const;
export type TokenEndpointAuthMethod = ClosedEnum<
  typeof TokenEndpointAuthMethod
>;

export const GrantTypes = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type GrantTypes = ClosedEnum<typeof GrantTypes>;

export type OAuth2Client = {
  redirectUris: Array<string>;
  tokenEndpointAuthMethod?: TokenEndpointAuthMethod | undefined;
  grantTypes?: Array<GrantTypes> | undefined;
  responseTypes?: Array<string> | undefined;
  scope?: string | undefined;
  clientName: string;
  clientUri?: string | null | undefined;
  logoUri?: string | null | undefined;
  tosUri?: string | null | undefined;
  policyUri?: string | null | undefined;
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  clientId: string;
  clientSecret: string;
  clientIdIssuedAt: number;
  clientSecretExpiresAt: number;
};

/** @internal */
export const TokenEndpointAuthMethod$inboundSchema: z.ZodNativeEnum<
  typeof TokenEndpointAuthMethod
> = z.nativeEnum(TokenEndpointAuthMethod);

/** @internal */
export const TokenEndpointAuthMethod$outboundSchema: z.ZodNativeEnum<
  typeof TokenEndpointAuthMethod
> = TokenEndpointAuthMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace TokenEndpointAuthMethod$ {
  /** @deprecated use `TokenEndpointAuthMethod$inboundSchema` instead. */
  export const inboundSchema = TokenEndpointAuthMethod$inboundSchema;
  /** @deprecated use `TokenEndpointAuthMethod$outboundSchema` instead. */
  export const outboundSchema = TokenEndpointAuthMethod$outboundSchema;
}

/** @internal */
export const GrantTypes$inboundSchema: z.ZodNativeEnum<typeof GrantTypes> = z
  .nativeEnum(GrantTypes);

/** @internal */
export const GrantTypes$outboundSchema: z.ZodNativeEnum<typeof GrantTypes> =
  GrantTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace GrantTypes$ {
  /** @deprecated use `GrantTypes$inboundSchema` instead. */
  export const inboundSchema = GrantTypes$inboundSchema;
  /** @deprecated use `GrantTypes$outboundSchema` instead. */
  export const outboundSchema = GrantTypes$outboundSchema;
}

/** @internal */
export const OAuth2Client$inboundSchema: z.ZodType<
  OAuth2Client,
  z.ZodTypeDef,
  unknown
> = z.object({
  redirect_uris: z.array(z.string()),
  token_endpoint_auth_method: TokenEndpointAuthMethod$inboundSchema.default(
    "client_secret_post",
  ),
  grant_types: z.array(GrantTypes$inboundSchema).optional(),
  response_types: z.array(z.string()).optional(),
  scope: z.string().default(
    "openid profile email user:read organizations:read organizations:write custom_fields:read custom_fields:write discounts:read discounts:write checkout_links:read checkout_links:write checkouts:read checkouts:write products:read products:write benefits:read benefits:write events:read events:write files:read files:write subscriptions:read subscriptions:write customers:read customers:write customer_sessions:write orders:read refunds:read refunds:write metrics:read webhooks:read webhooks:write external_organizations:read license_keys:read license_keys:write repositories:read repositories:write issues:read issues:write customer_portal:read customer_portal:write",
  ),
  client_name: z.string(),
  client_uri: z.nullable(z.string()).optional(),
  logo_uri: z.nullable(z.string()).optional(),
  tos_uri: z.nullable(z.string()).optional(),
  policy_uri: z.nullable(z.string()).optional(),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  client_id: z.string(),
  client_secret: z.string(),
  client_id_issued_at: z.number().int(),
  client_secret_expires_at: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "redirect_uris": "redirectUris",
    "token_endpoint_auth_method": "tokenEndpointAuthMethod",
    "grant_types": "grantTypes",
    "response_types": "responseTypes",
    "client_name": "clientName",
    "client_uri": "clientUri",
    "logo_uri": "logoUri",
    "tos_uri": "tosUri",
    "policy_uri": "policyUri",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "client_id": "clientId",
    "client_secret": "clientSecret",
    "client_id_issued_at": "clientIdIssuedAt",
    "client_secret_expires_at": "clientSecretExpiresAt",
  });
});

/** @internal */
export type OAuth2Client$Outbound = {
  redirect_uris: Array<string>;
  token_endpoint_auth_method: string;
  grant_types?: Array<string> | undefined;
  response_types?: Array<string> | undefined;
  scope: string;
  client_name: string;
  client_uri?: string | null | undefined;
  logo_uri?: string | null | undefined;
  tos_uri?: string | null | undefined;
  policy_uri?: string | null | undefined;
  created_at: string;
  modified_at: string | null;
  client_id: string;
  client_secret: string;
  client_id_issued_at: number;
  client_secret_expires_at: number;
};

/** @internal */
export const OAuth2Client$outboundSchema: z.ZodType<
  OAuth2Client$Outbound,
  z.ZodTypeDef,
  OAuth2Client
> = z.object({
  redirectUris: z.array(z.string()),
  tokenEndpointAuthMethod: TokenEndpointAuthMethod$outboundSchema.default(
    "client_secret_post",
  ),
  grantTypes: z.array(GrantTypes$outboundSchema).optional(),
  responseTypes: z.array(z.string()).optional(),
  scope: z.string().default(
    "openid profile email user:read organizations:read organizations:write custom_fields:read custom_fields:write discounts:read discounts:write checkout_links:read checkout_links:write checkouts:read checkouts:write products:read products:write benefits:read benefits:write events:read events:write files:read files:write subscriptions:read subscriptions:write customers:read customers:write customer_sessions:write orders:read refunds:read refunds:write metrics:read webhooks:read webhooks:write external_organizations:read license_keys:read license_keys:write repositories:read repositories:write issues:read issues:write customer_portal:read customer_portal:write",
  ),
  clientName: z.string(),
  clientUri: z.nullable(z.string()).optional(),
  logoUri: z.nullable(z.string()).optional(),
  tosUri: z.nullable(z.string()).optional(),
  policyUri: z.nullable(z.string()).optional(),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  clientId: z.string(),
  clientSecret: z.string(),
  clientIdIssuedAt: z.number().int(),
  clientSecretExpiresAt: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    redirectUris: "redirect_uris",
    tokenEndpointAuthMethod: "token_endpoint_auth_method",
    grantTypes: "grant_types",
    responseTypes: "response_types",
    clientName: "client_name",
    clientUri: "client_uri",
    logoUri: "logo_uri",
    tosUri: "tos_uri",
    policyUri: "policy_uri",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    clientId: "client_id",
    clientSecret: "client_secret",
    clientIdIssuedAt: "client_id_issued_at",
    clientSecretExpiresAt: "client_secret_expires_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2Client$ {
  /** @deprecated use `OAuth2Client$inboundSchema` instead. */
  export const inboundSchema = OAuth2Client$inboundSchema;
  /** @deprecated use `OAuth2Client$outboundSchema` instead. */
  export const outboundSchema = OAuth2Client$outboundSchema;
  /** @deprecated use `OAuth2Client$Outbound` instead. */
  export type Outbound = OAuth2Client$Outbound;
}

export function oAuth2ClientToJSON(oAuth2Client: OAuth2Client): string {
  return JSON.stringify(OAuth2Client$outboundSchema.parse(oAuth2Client));
}

export function oAuth2ClientFromJSON(
  jsonString: string,
): SafeParseResult<OAuth2Client, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuth2Client$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuth2Client' from JSON`,
  );
}
