/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type S3FileUploadCompletedPart = {
    number: number;
    checksumEtag: string;
    checksumSha256Base64: string | null;
};

/** @internal */
export const S3FileUploadCompletedPart$inboundSchema: z.ZodType<
    S3FileUploadCompletedPart,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        number: z.number().int(),
        checksum_etag: z.string(),
        checksum_sha256_base64: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            checksum_etag: "checksumEtag",
            checksum_sha256_base64: "checksumSha256Base64",
        });
    });

/** @internal */
export type S3FileUploadCompletedPart$Outbound = {
    number: number;
    checksum_etag: string;
    checksum_sha256_base64: string | null;
};

/** @internal */
export const S3FileUploadCompletedPart$outboundSchema: z.ZodType<
    S3FileUploadCompletedPart$Outbound,
    z.ZodTypeDef,
    S3FileUploadCompletedPart
> = z
    .object({
        number: z.number().int(),
        checksumEtag: z.string(),
        checksumSha256Base64: z.nullable(z.string()),
    })
    .transform((v) => {
        return remap$(v, {
            checksumEtag: "checksum_etag",
            checksumSha256Base64: "checksum_sha256_base64",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace S3FileUploadCompletedPart$ {
    /** @deprecated use `S3FileUploadCompletedPart$inboundSchema` instead. */
    export const inboundSchema = S3FileUploadCompletedPart$inboundSchema;
    /** @deprecated use `S3FileUploadCompletedPart$outboundSchema` instead. */
    export const outboundSchema = S3FileUploadCompletedPart$outboundSchema;
    /** @deprecated use `S3FileUploadCompletedPart$Outbound` instead. */
    export type Outbound = S3FileUploadCompletedPart$Outbound;
}
