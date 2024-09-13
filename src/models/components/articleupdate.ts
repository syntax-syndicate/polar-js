/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  ArticleByline,
  ArticleByline$inboundSchema,
  ArticleByline$outboundSchema,
} from "./articlebyline.js";
import {
  ArticleVisibility,
  ArticleVisibility$inboundSchema,
  ArticleVisibility$outboundSchema,
} from "./articlevisibility.js";

export type ArticleUpdate = {
  title?: string | null | undefined;
  /**
   * Body in string format. body and body_base64 are mutually exclusive.
   */
  body?: string | null | undefined;
  /**
   * Body in base64-encoded format. Can be helpful to bypass Web Application Firewalls (WAF). body and body_base64 are mutually exclusive.
   */
  bodyBase64?: string | null | undefined;
  slug?: string | null | undefined;
  /**
   * If the user or organization should be credited in the byline.
   */
  byline?: ArticleByline | null | undefined;
  visibility?: ArticleVisibility | null | undefined;
  /**
   * Set to true to only make this article available for subscribers to a paid subscription tier in the organization.
   */
  paidSubscribersOnly?: boolean | null | undefined;
  /**
   * If specified, time at which the article should no longer be restricted to paid subscribers. Only relevant if `paid_subscribers_only` is true.
   */
  paidSubscribersOnlyEndsAt?: Date | null | undefined;
  /**
   * Time of publishing. If this date is in the future, the post will be scheduled to publish at this time.
   */
  publishedAt?: Date | null | undefined;
  /**
   * Set to true to deliver this article via email and/or notifications to subscribers.
   */
  notifySubscribers?: boolean | null | undefined;
  /**
   * If the article should be pinned
   */
  isPinned?: boolean | null | undefined;
  /**
   * Custom og:image URL value
   */
  ogImageUrl?: string | null | undefined;
  /**
   * Custom og:description value
   */
  ogDescription?: string | null | undefined;
};

/** @internal */
export const ArticleUpdate$inboundSchema: z.ZodType<
  ArticleUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  title: z.nullable(z.string()).optional(),
  body: z.nullable(z.string()).optional(),
  body_base64: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  byline: z.nullable(ArticleByline$inboundSchema).optional(),
  visibility: z.nullable(ArticleVisibility$inboundSchema).optional(),
  paid_subscribers_only: z.nullable(z.boolean()).optional(),
  paid_subscribers_only_ends_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  published_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  notify_subscribers: z.nullable(z.boolean()).optional(),
  is_pinned: z.nullable(z.boolean()).optional(),
  og_image_url: z.nullable(z.string()).optional(),
  og_description: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "body_base64": "bodyBase64",
    "paid_subscribers_only": "paidSubscribersOnly",
    "paid_subscribers_only_ends_at": "paidSubscribersOnlyEndsAt",
    "published_at": "publishedAt",
    "notify_subscribers": "notifySubscribers",
    "is_pinned": "isPinned",
    "og_image_url": "ogImageUrl",
    "og_description": "ogDescription",
  });
});

/** @internal */
export type ArticleUpdate$Outbound = {
  title?: string | null | undefined;
  body?: string | null | undefined;
  body_base64?: string | null | undefined;
  slug?: string | null | undefined;
  byline?: string | null | undefined;
  visibility?: string | null | undefined;
  paid_subscribers_only?: boolean | null | undefined;
  paid_subscribers_only_ends_at?: string | null | undefined;
  published_at?: string | null | undefined;
  notify_subscribers?: boolean | null | undefined;
  is_pinned?: boolean | null | undefined;
  og_image_url?: string | null | undefined;
  og_description?: string | null | undefined;
};

/** @internal */
export const ArticleUpdate$outboundSchema: z.ZodType<
  ArticleUpdate$Outbound,
  z.ZodTypeDef,
  ArticleUpdate
> = z.object({
  title: z.nullable(z.string()).optional(),
  body: z.nullable(z.string()).optional(),
  bodyBase64: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  byline: z.nullable(ArticleByline$outboundSchema).optional(),
  visibility: z.nullable(ArticleVisibility$outboundSchema).optional(),
  paidSubscribersOnly: z.nullable(z.boolean()).optional(),
  paidSubscribersOnlyEndsAt: z.nullable(
    z.date().transform(v => v.toISOString()),
  ).optional(),
  publishedAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  notifySubscribers: z.nullable(z.boolean()).optional(),
  isPinned: z.nullable(z.boolean()).optional(),
  ogImageUrl: z.nullable(z.string()).optional(),
  ogDescription: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    bodyBase64: "body_base64",
    paidSubscribersOnly: "paid_subscribers_only",
    paidSubscribersOnlyEndsAt: "paid_subscribers_only_ends_at",
    publishedAt: "published_at",
    notifySubscribers: "notify_subscribers",
    isPinned: "is_pinned",
    ogImageUrl: "og_image_url",
    ogDescription: "og_description",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticleUpdate$ {
  /** @deprecated use `ArticleUpdate$inboundSchema` instead. */
  export const inboundSchema = ArticleUpdate$inboundSchema;
  /** @deprecated use `ArticleUpdate$outboundSchema` instead. */
  export const outboundSchema = ArticleUpdate$outboundSchema;
  /** @deprecated use `ArticleUpdate$Outbound` instead. */
  export type Outbound = ArticleUpdate$Outbound;
}
