/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type UsersSubscriptionsGetRequest = {
  /**
   * The subscription ID.
   */
  id: string;
};

/** @internal */
export const UsersSubscriptionsGetRequest$inboundSchema: z.ZodType<
  UsersSubscriptionsGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type UsersSubscriptionsGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const UsersSubscriptionsGetRequest$outboundSchema: z.ZodType<
  UsersSubscriptionsGetRequest$Outbound,
  z.ZodTypeDef,
  UsersSubscriptionsGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersSubscriptionsGetRequest$ {
  /** @deprecated use `UsersSubscriptionsGetRequest$inboundSchema` instead. */
  export const inboundSchema = UsersSubscriptionsGetRequest$inboundSchema;
  /** @deprecated use `UsersSubscriptionsGetRequest$outboundSchema` instead. */
  export const outboundSchema = UsersSubscriptionsGetRequest$outboundSchema;
  /** @deprecated use `UsersSubscriptionsGetRequest$Outbound` instead. */
  export type Outbound = UsersSubscriptionsGetRequest$Outbound;
}
