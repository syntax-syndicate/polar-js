/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Subscription,
  Subscription$inboundSchema,
  Subscription$Outbound,
  Subscription$outboundSchema,
} from "./subscription.js";

/**
 * Sent when a subscription is uncanceled.
 *
 * @remarks
 *
 * **Discord & Slack support:** Full
 */
export type WebhookSubscriptionUncanceledPayload = {
  type?: "subscription.uncanceled" | undefined;
  data: Subscription;
};

/** @internal */
export const WebhookSubscriptionUncanceledPayload$inboundSchema: z.ZodType<
  WebhookSubscriptionUncanceledPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("subscription.uncanceled").optional(),
  data: Subscription$inboundSchema,
});

/** @internal */
export type WebhookSubscriptionUncanceledPayload$Outbound = {
  type: "subscription.uncanceled";
  data: Subscription$Outbound;
};

/** @internal */
export const WebhookSubscriptionUncanceledPayload$outboundSchema: z.ZodType<
  WebhookSubscriptionUncanceledPayload$Outbound,
  z.ZodTypeDef,
  WebhookSubscriptionUncanceledPayload
> = z.object({
  type: z.literal("subscription.uncanceled").default(
    "subscription.uncanceled" as const,
  ),
  data: Subscription$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSubscriptionUncanceledPayload$ {
  /** @deprecated use `WebhookSubscriptionUncanceledPayload$inboundSchema` instead. */
  export const inboundSchema =
    WebhookSubscriptionUncanceledPayload$inboundSchema;
  /** @deprecated use `WebhookSubscriptionUncanceledPayload$outboundSchema` instead. */
  export const outboundSchema =
    WebhookSubscriptionUncanceledPayload$outboundSchema;
  /** @deprecated use `WebhookSubscriptionUncanceledPayload$Outbound` instead. */
  export type Outbound = WebhookSubscriptionUncanceledPayload$Outbound;
}

export function webhookSubscriptionUncanceledPayloadToJSON(
  webhookSubscriptionUncanceledPayload: WebhookSubscriptionUncanceledPayload,
): string {
  return JSON.stringify(
    WebhookSubscriptionUncanceledPayload$outboundSchema.parse(
      webhookSubscriptionUncanceledPayload,
    ),
  );
}

export function webhookSubscriptionUncanceledPayloadFromJSON(
  jsonString: string,
): SafeParseResult<WebhookSubscriptionUncanceledPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      WebhookSubscriptionUncanceledPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookSubscriptionUncanceledPayload' from JSON`,
  );
}
