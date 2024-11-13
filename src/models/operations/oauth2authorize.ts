/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import * as components from "../components/index.js";

/**
 * Successful Response
 */
export type Oauth2AuthorizeResponseOauth2Authorize =
  | (components.AuthorizeResponseUser & { subType: "user" })
  | (components.AuthorizeResponseOrganization & { subType: "organization" });

/** @internal */
export const Oauth2AuthorizeResponseOauth2Authorize$inboundSchema: z.ZodType<
  Oauth2AuthorizeResponseOauth2Authorize,
  z.ZodTypeDef,
  unknown
> = z.union([
  components.AuthorizeResponseUser$inboundSchema.and(
    z.object({ sub_type: z.literal("user") }).transform((v) => ({
      subType: v.sub_type,
    })),
  ),
  components.AuthorizeResponseOrganization$inboundSchema.and(
    z.object({ sub_type: z.literal("organization") }).transform((v) => ({
      subType: v.sub_type,
    })),
  ),
]);

/** @internal */
export type Oauth2AuthorizeResponseOauth2Authorize$Outbound =
  | (components.AuthorizeResponseUser$Outbound & { sub_type: "user" })
  | (components.AuthorizeResponseOrganization$Outbound & {
    sub_type: "organization";
  });

/** @internal */
export const Oauth2AuthorizeResponseOauth2Authorize$outboundSchema: z.ZodType<
  Oauth2AuthorizeResponseOauth2Authorize$Outbound,
  z.ZodTypeDef,
  Oauth2AuthorizeResponseOauth2Authorize
> = z.union([
  components.AuthorizeResponseUser$outboundSchema.and(
    z.object({ subType: z.literal("user") }).transform((v) => ({
      sub_type: v.subType,
    })),
  ),
  components.AuthorizeResponseOrganization$outboundSchema.and(
    z.object({ subType: z.literal("organization") }).transform((v) => ({
      sub_type: v.subType,
    })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Oauth2AuthorizeResponseOauth2Authorize$ {
  /** @deprecated use `Oauth2AuthorizeResponseOauth2Authorize$inboundSchema` instead. */
  export const inboundSchema =
    Oauth2AuthorizeResponseOauth2Authorize$inboundSchema;
  /** @deprecated use `Oauth2AuthorizeResponseOauth2Authorize$outboundSchema` instead. */
  export const outboundSchema =
    Oauth2AuthorizeResponseOauth2Authorize$outboundSchema;
  /** @deprecated use `Oauth2AuthorizeResponseOauth2Authorize$Outbound` instead. */
  export type Outbound = Oauth2AuthorizeResponseOauth2Authorize$Outbound;
}
