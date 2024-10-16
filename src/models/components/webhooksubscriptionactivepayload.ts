/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  SubscriptionInput,
  SubscriptionInput$inboundSchema,
  SubscriptionInput$Outbound,
  SubscriptionInput$outboundSchema,
} from "./subscriptioninput.js";

export const WebhookSubscriptionActivePayloadType = {
  SubscriptionActive: "subscription.active",
} as const;
export type WebhookSubscriptionActivePayloadType = ClosedEnum<
  typeof WebhookSubscriptionActivePayloadType
>;

/**
 * Sent when a subscription becomes active,
 *
 * @remarks
 * whether because it's a new paid subscription or because payment was recovered.
 *
 * **Discord & Slack support:** Full
 */
export type WebhookSubscriptionActivePayload = {
  type?: "subscription.active" | undefined;
  data: SubscriptionInput;
};

/** @internal */
export const WebhookSubscriptionActivePayloadType$inboundSchema:
  z.ZodNativeEnum<typeof WebhookSubscriptionActivePayloadType> = z.nativeEnum(
    WebhookSubscriptionActivePayloadType,
  );

/** @internal */
export const WebhookSubscriptionActivePayloadType$outboundSchema:
  z.ZodNativeEnum<typeof WebhookSubscriptionActivePayloadType> =
    WebhookSubscriptionActivePayloadType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSubscriptionActivePayloadType$ {
  /** @deprecated use `WebhookSubscriptionActivePayloadType$inboundSchema` instead. */
  export const inboundSchema =
    WebhookSubscriptionActivePayloadType$inboundSchema;
  /** @deprecated use `WebhookSubscriptionActivePayloadType$outboundSchema` instead. */
  export const outboundSchema =
    WebhookSubscriptionActivePayloadType$outboundSchema;
}

/** @internal */
export const WebhookSubscriptionActivePayload$inboundSchema: z.ZodType<
  WebhookSubscriptionActivePayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("subscription.active").optional(),
  data: SubscriptionInput$inboundSchema,
});

/** @internal */
export type WebhookSubscriptionActivePayload$Outbound = {
  type: "subscription.active";
  data: SubscriptionInput$Outbound;
};

/** @internal */
export const WebhookSubscriptionActivePayload$outboundSchema: z.ZodType<
  WebhookSubscriptionActivePayload$Outbound,
  z.ZodTypeDef,
  WebhookSubscriptionActivePayload
> = z.object({
  type: z.literal("subscription.active").default("subscription.active"),
  data: SubscriptionInput$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookSubscriptionActivePayload$ {
  /** @deprecated use `WebhookSubscriptionActivePayload$inboundSchema` instead. */
  export const inboundSchema = WebhookSubscriptionActivePayload$inboundSchema;
  /** @deprecated use `WebhookSubscriptionActivePayload$outboundSchema` instead. */
  export const outboundSchema = WebhookSubscriptionActivePayload$outboundSchema;
  /** @deprecated use `WebhookSubscriptionActivePayload$Outbound` instead. */
  export type Outbound = WebhookSubscriptionActivePayload$Outbound;
}
