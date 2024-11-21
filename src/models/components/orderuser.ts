/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type OrderUser = {
  id: string;
  email: string;
  publicName: string;
  githubUsername: string | null;
  avatarUrl: string | null;
};

/** @internal */
export const OrderUser$inboundSchema: z.ZodType<
  OrderUser,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  email: z.string(),
  public_name: z.string(),
  github_username: z.nullable(z.string()),
  avatar_url: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    "public_name": "publicName",
    "github_username": "githubUsername",
    "avatar_url": "avatarUrl",
  });
});

/** @internal */
export type OrderUser$Outbound = {
  id: string;
  email: string;
  public_name: string;
  github_username: string | null;
  avatar_url: string | null;
};

/** @internal */
export const OrderUser$outboundSchema: z.ZodType<
  OrderUser$Outbound,
  z.ZodTypeDef,
  OrderUser
> = z.object({
  id: z.string(),
  email: z.string(),
  publicName: z.string(),
  githubUsername: z.nullable(z.string()),
  avatarUrl: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    publicName: "public_name",
    githubUsername: "github_username",
    avatarUrl: "avatar_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderUser$ {
  /** @deprecated use `OrderUser$inboundSchema` instead. */
  export const inboundSchema = OrderUser$inboundSchema;
  /** @deprecated use `OrderUser$outboundSchema` instead. */
  export const outboundSchema = OrderUser$outboundSchema;
  /** @deprecated use `OrderUser$Outbound` instead. */
  export type Outbound = OrderUser$Outbound;
}

export function orderUserToJSON(orderUser: OrderUser): string {
  return JSON.stringify(OrderUser$outboundSchema.parse(orderUser));
}

export function orderUserFromJSON(
  jsonString: string,
): SafeParseResult<OrderUser, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderUser$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderUser' from JSON`,
  );
}
