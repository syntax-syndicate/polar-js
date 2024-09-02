/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ArticlesSendRequest = {
    id: string;
};

/** @internal */
export const ArticlesSendRequest$inboundSchema: z.ZodType<
    ArticlesSendRequest,
    z.ZodTypeDef,
    unknown
> = z.object({
    id: z.string(),
});

/** @internal */
export type ArticlesSendRequest$Outbound = {
    id: string;
};

/** @internal */
export const ArticlesSendRequest$outboundSchema: z.ZodType<
    ArticlesSendRequest$Outbound,
    z.ZodTypeDef,
    ArticlesSendRequest
> = z.object({
    id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ArticlesSendRequest$ {
    /** @deprecated use `ArticlesSendRequest$inboundSchema` instead. */
    export const inboundSchema = ArticlesSendRequest$inboundSchema;
    /** @deprecated use `ArticlesSendRequest$outboundSchema` instead. */
    export const outboundSchema = ArticlesSendRequest$outboundSchema;
    /** @deprecated use `ArticlesSendRequest$Outbound` instead. */
    export type Outbound = ArticlesSendRequest$Outbound;
}
