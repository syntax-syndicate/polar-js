/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Order,
  Order$inboundSchema,
  Order$Outbound,
  Order$outboundSchema,
} from "./order.js";

/**
 * Sent when a new order is created.
 *
 * @remarks
 *
 * **Discord & Slack support:** Full
 */
export type WebhookOrderCreatedPayload = {
  type?: "order.created" | undefined;
  data: Order;
};

/** @internal */
export const WebhookOrderCreatedPayload$inboundSchema: z.ZodType<
  WebhookOrderCreatedPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("order.created").optional(),
  data: Order$inboundSchema,
});

/** @internal */
export type WebhookOrderCreatedPayload$Outbound = {
  type: "order.created";
  data: Order$Outbound;
};

/** @internal */
export const WebhookOrderCreatedPayload$outboundSchema: z.ZodType<
  WebhookOrderCreatedPayload$Outbound,
  z.ZodTypeDef,
  WebhookOrderCreatedPayload
> = z.object({
  type: z.literal("order.created").default("order.created" as const),
  data: Order$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookOrderCreatedPayload$ {
  /** @deprecated use `WebhookOrderCreatedPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookOrderCreatedPayload$inboundSchema;
  /** @deprecated use `WebhookOrderCreatedPayload$outboundSchema` instead. */
  export const outboundSchema = WebhookOrderCreatedPayload$outboundSchema;
  /** @deprecated use `WebhookOrderCreatedPayload$Outbound` instead. */
  export type Outbound = WebhookOrderCreatedPayload$Outbound;
}

export function webhookOrderCreatedPayloadToJSON(
  webhookOrderCreatedPayload: WebhookOrderCreatedPayload,
): string {
  return JSON.stringify(
    WebhookOrderCreatedPayload$outboundSchema.parse(webhookOrderCreatedPayload),
  );
}

export function webhookOrderCreatedPayloadFromJSON(
  jsonString: string,
): SafeParseResult<WebhookOrderCreatedPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookOrderCreatedPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookOrderCreatedPayload' from JSON`,
  );
}
