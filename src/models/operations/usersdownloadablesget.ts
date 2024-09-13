/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UsersDownloadablesGetRequest = {
  token: string;
};

/** @internal */
export const UsersDownloadablesGetRequest$inboundSchema: z.ZodType<
  UsersDownloadablesGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  token: z.string(),
});

/** @internal */
export type UsersDownloadablesGetRequest$Outbound = {
  token: string;
};

/** @internal */
export const UsersDownloadablesGetRequest$outboundSchema: z.ZodType<
  UsersDownloadablesGetRequest$Outbound,
  z.ZodTypeDef,
  UsersDownloadablesGetRequest
> = z.object({
  token: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersDownloadablesGetRequest$ {
  /** @deprecated use `UsersDownloadablesGetRequest$inboundSchema` instead. */
  export const inboundSchema = UsersDownloadablesGetRequest$inboundSchema;
  /** @deprecated use `UsersDownloadablesGetRequest$outboundSchema` instead. */
  export const outboundSchema = UsersDownloadablesGetRequest$outboundSchema;
  /** @deprecated use `UsersDownloadablesGetRequest$Outbound` instead. */
  export type Outbound = UsersDownloadablesGetRequest$Outbound;
}
