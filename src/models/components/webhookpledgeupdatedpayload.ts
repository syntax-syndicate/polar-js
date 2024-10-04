/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Pledge,
  Pledge$inboundSchema,
  Pledge$Outbound,
  Pledge$outboundSchema,
} from "./pledge.js";

export const WebhookPledgeUpdatedPayloadType = {
  PledgeUpdated: "pledge.updated",
} as const;
export type WebhookPledgeUpdatedPayloadType = ClosedEnum<
  typeof WebhookPledgeUpdatedPayloadType
>;

/**
 * Sent when a pledge is updated.
 *
 * @remarks
 *
 * **Discord & Slack support:** Basic
 */
export type WebhookPledgeUpdatedPayload = {
  type?: "pledge.updated" | undefined;
  data: Pledge;
};

/** @internal */
export const WebhookPledgeUpdatedPayloadType$inboundSchema: z.ZodNativeEnum<
  typeof WebhookPledgeUpdatedPayloadType
> = z.nativeEnum(WebhookPledgeUpdatedPayloadType);

/** @internal */
export const WebhookPledgeUpdatedPayloadType$outboundSchema: z.ZodNativeEnum<
  typeof WebhookPledgeUpdatedPayloadType
> = WebhookPledgeUpdatedPayloadType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookPledgeUpdatedPayloadType$ {
  /** @deprecated use `WebhookPledgeUpdatedPayloadType$inboundSchema` instead. */
  export const inboundSchema = WebhookPledgeUpdatedPayloadType$inboundSchema;
  /** @deprecated use `WebhookPledgeUpdatedPayloadType$outboundSchema` instead. */
  export const outboundSchema = WebhookPledgeUpdatedPayloadType$outboundSchema;
}

/** @internal */
export const WebhookPledgeUpdatedPayload$inboundSchema: z.ZodType<
  WebhookPledgeUpdatedPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("pledge.updated").optional(),
  data: Pledge$inboundSchema,
});

/** @internal */
export type WebhookPledgeUpdatedPayload$Outbound = {
  type: "pledge.updated";
  data: Pledge$Outbound;
};

/** @internal */
export const WebhookPledgeUpdatedPayload$outboundSchema: z.ZodType<
  WebhookPledgeUpdatedPayload$Outbound,
  z.ZodTypeDef,
  WebhookPledgeUpdatedPayload
> = z.object({
  type: z.literal("pledge.updated").default("pledge.updated"),
  data: Pledge$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookPledgeUpdatedPayload$ {
  /** @deprecated use `WebhookPledgeUpdatedPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookPledgeUpdatedPayload$inboundSchema;
  /** @deprecated use `WebhookPledgeUpdatedPayload$outboundSchema` instead. */
  export const outboundSchema = WebhookPledgeUpdatedPayload$outboundSchema;
  /** @deprecated use `WebhookPledgeUpdatedPayload$Outbound` instead. */
  export type Outbound = WebhookPledgeUpdatedPayload$Outbound;
}
