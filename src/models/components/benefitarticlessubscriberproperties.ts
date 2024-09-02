/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

/**
 * Properties available to subscribers for a benefit of type `articles`.
 */
export type BenefitArticlesSubscriberProperties = {
    /**
     * Whether the user can access paid articles.
     */
    paidArticles: boolean;
};

/** @internal */
export const BenefitArticlesSubscriberProperties$inboundSchema: z.ZodType<
    BenefitArticlesSubscriberProperties,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        paid_articles: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            paid_articles: "paidArticles",
        });
    });

/** @internal */
export type BenefitArticlesSubscriberProperties$Outbound = {
    paid_articles: boolean;
};

/** @internal */
export const BenefitArticlesSubscriberProperties$outboundSchema: z.ZodType<
    BenefitArticlesSubscriberProperties$Outbound,
    z.ZodTypeDef,
    BenefitArticlesSubscriberProperties
> = z
    .object({
        paidArticles: z.boolean(),
    })
    .transform((v) => {
        return remap$(v, {
            paidArticles: "paid_articles",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitArticlesSubscriberProperties$ {
    /** @deprecated use `BenefitArticlesSubscriberProperties$inboundSchema` instead. */
    export const inboundSchema = BenefitArticlesSubscriberProperties$inboundSchema;
    /** @deprecated use `BenefitArticlesSubscriberProperties$outboundSchema` instead. */
    export const outboundSchema = BenefitArticlesSubscriberProperties$outboundSchema;
    /** @deprecated use `BenefitArticlesSubscriberProperties$Outbound` instead. */
    export type Outbound = BenefitArticlesSubscriberProperties$Outbound;
}
