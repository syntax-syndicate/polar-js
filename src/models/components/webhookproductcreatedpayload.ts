/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";
import {
  Product,
  Product$inboundSchema,
  Product$Outbound,
  Product$outboundSchema,
} from "./product.js";

export const WebhookProductCreatedPayloadType = {
  ProductCreated: "product.created",
} as const;
export type WebhookProductCreatedPayloadType = ClosedEnum<
  typeof WebhookProductCreatedPayloadType
>;

/**
 * Sent when a new product is created.
 *
 * @remarks
 *
 * **Discord & Slack support:** Basic
 */
export type WebhookProductCreatedPayload = {
  type?: "product.created" | undefined;
  /**
   * A product.
   */
  data: Product;
};

/** @internal */
export const WebhookProductCreatedPayloadType$inboundSchema: z.ZodNativeEnum<
  typeof WebhookProductCreatedPayloadType
> = z.nativeEnum(WebhookProductCreatedPayloadType);

/** @internal */
export const WebhookProductCreatedPayloadType$outboundSchema: z.ZodNativeEnum<
  typeof WebhookProductCreatedPayloadType
> = WebhookProductCreatedPayloadType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookProductCreatedPayloadType$ {
  /** @deprecated use `WebhookProductCreatedPayloadType$inboundSchema` instead. */
  export const inboundSchema = WebhookProductCreatedPayloadType$inboundSchema;
  /** @deprecated use `WebhookProductCreatedPayloadType$outboundSchema` instead. */
  export const outboundSchema = WebhookProductCreatedPayloadType$outboundSchema;
}

/** @internal */
export const WebhookProductCreatedPayload$inboundSchema: z.ZodType<
  WebhookProductCreatedPayload,
  z.ZodTypeDef,
  unknown
> = z.object({
  type: z.literal("product.created").optional(),
  data: Product$inboundSchema,
});

/** @internal */
export type WebhookProductCreatedPayload$Outbound = {
  type: "product.created";
  data: Product$Outbound;
};

/** @internal */
export const WebhookProductCreatedPayload$outboundSchema: z.ZodType<
  WebhookProductCreatedPayload$Outbound,
  z.ZodTypeDef,
  WebhookProductCreatedPayload
> = z.object({
  type: z.literal("product.created").default("product.created"),
  data: Product$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace WebhookProductCreatedPayload$ {
  /** @deprecated use `WebhookProductCreatedPayload$inboundSchema` instead. */
  export const inboundSchema = WebhookProductCreatedPayload$inboundSchema;
  /** @deprecated use `WebhookProductCreatedPayload$outboundSchema` instead. */
  export const outboundSchema = WebhookProductCreatedPayload$outboundSchema;
  /** @deprecated use `WebhookProductCreatedPayload$Outbound` instead. */
  export type Outbound = WebhookProductCreatedPayload$Outbound;
}
