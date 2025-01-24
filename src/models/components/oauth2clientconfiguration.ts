/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export const OAuth2ClientConfigurationTokenEndpointAuthMethod = {
  ClientSecretBasic: "client_secret_basic",
  ClientSecretPost: "client_secret_post",
  None: "none",
} as const;
export type OAuth2ClientConfigurationTokenEndpointAuthMethod = ClosedEnum<
  typeof OAuth2ClientConfigurationTokenEndpointAuthMethod
>;

export const OAuth2ClientConfigurationGrantTypes = {
  AuthorizationCode: "authorization_code",
  RefreshToken: "refresh_token",
} as const;
export type OAuth2ClientConfigurationGrantTypes = ClosedEnum<
  typeof OAuth2ClientConfigurationGrantTypes
>;

export type OAuth2ClientConfiguration = {
  redirectUris: Array<string>;
  tokenEndpointAuthMethod?:
    | OAuth2ClientConfigurationTokenEndpointAuthMethod
    | undefined;
  grantTypes?: Array<OAuth2ClientConfigurationGrantTypes> | undefined;
  responseTypes?: Array<string> | undefined;
  scope?: string | undefined;
  clientName: string;
  clientUri?: string | null | undefined;
  logoUri?: string | null | undefined;
  tosUri?: string | null | undefined;
  policyUri?: string | null | undefined;
};

/** @internal */
export const OAuth2ClientConfigurationTokenEndpointAuthMethod$inboundSchema:
  z.ZodNativeEnum<typeof OAuth2ClientConfigurationTokenEndpointAuthMethod> = z
    .nativeEnum(OAuth2ClientConfigurationTokenEndpointAuthMethod);

/** @internal */
export const OAuth2ClientConfigurationTokenEndpointAuthMethod$outboundSchema:
  z.ZodNativeEnum<typeof OAuth2ClientConfigurationTokenEndpointAuthMethod> =
    OAuth2ClientConfigurationTokenEndpointAuthMethod$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2ClientConfigurationTokenEndpointAuthMethod$ {
  /** @deprecated use `OAuth2ClientConfigurationTokenEndpointAuthMethod$inboundSchema` instead. */
  export const inboundSchema =
    OAuth2ClientConfigurationTokenEndpointAuthMethod$inboundSchema;
  /** @deprecated use `OAuth2ClientConfigurationTokenEndpointAuthMethod$outboundSchema` instead. */
  export const outboundSchema =
    OAuth2ClientConfigurationTokenEndpointAuthMethod$outboundSchema;
}

/** @internal */
export const OAuth2ClientConfigurationGrantTypes$inboundSchema: z.ZodNativeEnum<
  typeof OAuth2ClientConfigurationGrantTypes
> = z.nativeEnum(OAuth2ClientConfigurationGrantTypes);

/** @internal */
export const OAuth2ClientConfigurationGrantTypes$outboundSchema:
  z.ZodNativeEnum<typeof OAuth2ClientConfigurationGrantTypes> =
    OAuth2ClientConfigurationGrantTypes$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2ClientConfigurationGrantTypes$ {
  /** @deprecated use `OAuth2ClientConfigurationGrantTypes$inboundSchema` instead. */
  export const inboundSchema =
    OAuth2ClientConfigurationGrantTypes$inboundSchema;
  /** @deprecated use `OAuth2ClientConfigurationGrantTypes$outboundSchema` instead. */
  export const outboundSchema =
    OAuth2ClientConfigurationGrantTypes$outboundSchema;
}

/** @internal */
export const OAuth2ClientConfiguration$inboundSchema: z.ZodType<
  OAuth2ClientConfiguration,
  z.ZodTypeDef,
  unknown
> = z.object({
  redirect_uris: z.array(z.string()),
  token_endpoint_auth_method:
    OAuth2ClientConfigurationTokenEndpointAuthMethod$inboundSchema.default(
      "client_secret_post",
    ),
  grant_types: z.array(OAuth2ClientConfigurationGrantTypes$inboundSchema)
    .optional(),
  response_types: z.array(z.string()).optional(),
  scope: z.string().default(
    "openid profile email user:read organizations:read organizations:write custom_fields:read custom_fields:write discounts:read discounts:write checkout_links:read checkout_links:write checkouts:read checkouts:write products:read products:write benefits:read benefits:write files:read files:write subscriptions:read subscriptions:write customers:read customers:write customer_sessions:write orders:read refunds:read refunds:write metrics:read webhooks:read webhooks:write external_organizations:read license_keys:read license_keys:write repositories:read repositories:write issues:read issues:write customer_portal:read customer_portal:write",
  ),
  client_name: z.string(),
  client_uri: z.nullable(z.string()).optional(),
  logo_uri: z.nullable(z.string()).optional(),
  tos_uri: z.nullable(z.string()).optional(),
  policy_uri: z.nullable(z.string()).optional(),
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
  });
});

/** @internal */
export type OAuth2ClientConfiguration$Outbound = {
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
};

/** @internal */
export const OAuth2ClientConfiguration$outboundSchema: z.ZodType<
  OAuth2ClientConfiguration$Outbound,
  z.ZodTypeDef,
  OAuth2ClientConfiguration
> = z.object({
  redirectUris: z.array(z.string()),
  tokenEndpointAuthMethod:
    OAuth2ClientConfigurationTokenEndpointAuthMethod$outboundSchema.default(
      "client_secret_post",
    ),
  grantTypes: z.array(OAuth2ClientConfigurationGrantTypes$outboundSchema)
    .optional(),
  responseTypes: z.array(z.string()).optional(),
  scope: z.string().default(
    "openid profile email user:read organizations:read organizations:write custom_fields:read custom_fields:write discounts:read discounts:write checkout_links:read checkout_links:write checkouts:read checkouts:write products:read products:write benefits:read benefits:write files:read files:write subscriptions:read subscriptions:write customers:read customers:write customer_sessions:write orders:read refunds:read refunds:write metrics:read webhooks:read webhooks:write external_organizations:read license_keys:read license_keys:write repositories:read repositories:write issues:read issues:write customer_portal:read customer_portal:write",
  ),
  clientName: z.string(),
  clientUri: z.nullable(z.string()).optional(),
  logoUri: z.nullable(z.string()).optional(),
  tosUri: z.nullable(z.string()).optional(),
  policyUri: z.nullable(z.string()).optional(),
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
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OAuth2ClientConfiguration$ {
  /** @deprecated use `OAuth2ClientConfiguration$inboundSchema` instead. */
  export const inboundSchema = OAuth2ClientConfiguration$inboundSchema;
  /** @deprecated use `OAuth2ClientConfiguration$outboundSchema` instead. */
  export const outboundSchema = OAuth2ClientConfiguration$outboundSchema;
  /** @deprecated use `OAuth2ClientConfiguration$Outbound` instead. */
  export type Outbound = OAuth2ClientConfiguration$Outbound;
}

export function oAuth2ClientConfigurationToJSON(
  oAuth2ClientConfiguration: OAuth2ClientConfiguration,
): string {
  return JSON.stringify(
    OAuth2ClientConfiguration$outboundSchema.parse(oAuth2ClientConfiguration),
  );
}

export function oAuth2ClientConfigurationFromJSON(
  jsonString: string,
): SafeParseResult<OAuth2ClientConfiguration, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OAuth2ClientConfiguration$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OAuth2ClientConfiguration' from JSON`,
  );
}
