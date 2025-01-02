/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Benefit,
  Benefit$inboundSchema,
  Benefit$Outbound,
  Benefit$outboundSchema,
} from "./benefit.js";

/**
 * Sent when a new benefit is created.
 *
 * @remarks
 *
 * **Discord & Slack support:** Basic
 */
export type WebhookBenefitCreatedPayload = {
  type?: "benefit.created" | undefined;
  data: Benefit;
};

/** @internal */
export const WebhookBenefitCreatedPayload$inboundSchema: z.ZodType<
  WebhookBenefitCreatedPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("benefit.created").optional(),
  data: Benefit$inboundSchema,
});

/** @internal */
export type WebhookBenefitCreatedPayload$Outbound = {
  type: "benefit.created";
  data: Benefit$Outbound;
};

/** @internal */
export const WebhookBenefitCreatedPayload$outboundSchema: z.ZodType<
  WebhookBenefitCreatedPayload$Outbound,
  z.ZodTypeDef,
  WebhookBenefitCreatedPayload
> = z.object({
  type: z.literal("benefit.created").default("benefit.created" as const),
  data: Benefit$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookBenefitCreatedPayload$ {
  /** @deprecated use `WebhookBenefitCreatedPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookBenefitCreatedPayload$inboundSchema;
  /** @deprecated use `WebhookBenefitCreatedPayload$outboundSchema` instead. */
  export const outboundSchema = WebhookBenefitCreatedPayload$outboundSchema;
  /** @deprecated use `WebhookBenefitCreatedPayload$Outbound` instead. */
  export type Outbound = WebhookBenefitCreatedPayload$Outbound;
}

export function webhookBenefitCreatedPayloadToJSON(
  webhookBenefitCreatedPayload: WebhookBenefitCreatedPayload,
): string {
  return JSON.stringify(
    WebhookBenefitCreatedPayload$outboundSchema.parse(
      webhookBenefitCreatedPayload,
    ),
  );
}

export function webhookBenefitCreatedPayloadFromJSON(
  jsonString: string,
): SafeParseResult<WebhookBenefitCreatedPayload, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => WebhookBenefitCreatedPayload$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'WebhookBenefitCreatedPayload' from JSON`,
  );
}
