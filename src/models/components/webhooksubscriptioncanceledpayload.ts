/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Subscription,
  Subscription$inboundSchema,
  Subscription$Outbound,
  Subscription$outboundSchema,
} from "./subscription.js";

export const WebhookSubscriptionCanceledPayloadType = {
  SubscriptionCanceled: "subscription.canceled",
} as const;
export type WebhookSubscriptionCanceledPayloadType = ClosedEnum<
  typeof WebhookSubscriptionCanceledPayloadType
>;

/**
 * Sent when a subscription is canceled by the user.
 *
 * @remarks
 * They might still have access until the end of the current period.
 *
 * **Discord & Slack support:** Full
 */
export type WebhookSubscriptionCanceledPayload = {
  type?: "subscription.canceled" | undefined;
  data: Subscription;
};

/** @internal */
export const WebhookSubscriptionCanceledPayloadType$inboundSchema:
  z.ZodNativeEnum<typeof WebhookSubscriptionCanceledPayloadType> = z.nativeEnum(
    WebhookSubscriptionCanceledPayloadType,
  );

/** @internal */
export const WebhookSubscriptionCanceledPayloadType$outboundSchema:
  z.ZodNativeEnum<typeof WebhookSubscriptionCanceledPayloadType> =
    WebhookSubscriptionCanceledPayloadType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSubscriptionCanceledPayloadType$ {
  /** @deprecated use `WebhookSubscriptionCanceledPayloadType$inboundSchema` instead. */
  export const inboundSchema =
    WebhookSubscriptionCanceledPayloadType$inboundSchema;
  /** @deprecated use `WebhookSubscriptionCanceledPayloadType$outboundSchema` instead. */
  export const outboundSchema =
    WebhookSubscriptionCanceledPayloadType$outboundSchema;
}

/** @internal */
export const WebhookSubscriptionCanceledPayload$inboundSchema: z.ZodType<
  WebhookSubscriptionCanceledPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("subscription.canceled").optional(),
  data: Subscription$inboundSchema,
});

/** @internal */
export type WebhookSubscriptionCanceledPayload$Outbound = {
  type: "subscription.canceled";
  data: Subscription$Outbound;
};

/** @internal */
export const WebhookSubscriptionCanceledPayload$outboundSchema: z.ZodType<
  WebhookSubscriptionCanceledPayload$Outbound,
  z.ZodTypeDef,
  WebhookSubscriptionCanceledPayload
> = z.object({
  type: z.literal("subscription.canceled").default("subscription.canceled"),
  data: Subscription$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSubscriptionCanceledPayload$ {
  /** @deprecated use `WebhookSubscriptionCanceledPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookSubscriptionCanceledPayload$inboundSchema;
  /** @deprecated use `WebhookSubscriptionCanceledPayload$outboundSchema` instead. */
  export const outboundSchema =
    WebhookSubscriptionCanceledPayload$outboundSchema;
  /** @deprecated use `WebhookSubscriptionCanceledPayload$Outbound` instead. */
  export type Outbound = WebhookSubscriptionCanceledPayload$Outbound;
}

export function webhookSubscriptionCanceledPayloadToJSON(
  webhookSubscriptionCanceledPayload: WebhookSubscriptionCanceledPayload,
): string {
  return JSON.stringify(
    WebhookSubscriptionCanceledPayload$outboundSchema.parse(
      webhookSubscriptionCanceledPayload,
    ),
  );
}

export function webhookSubscriptionCanceledPayloadFromJSON(
  jsonString: string,
): SafeParseResult<WebhookSubscriptionCanceledPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      WebhookSubscriptionCanceledPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookSubscriptionCanceledPayload' from JSON`,
  );
}
