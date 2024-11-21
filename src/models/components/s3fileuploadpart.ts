/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type S3FileUploadPart = {
  number: number;
  chunkStart: number;
  chunkEnd: number;
  checksumSha256Base64?: string | null | undefined;
  url: string;
  expiresAt: Date;
  headers?: { [k: string]: string } | undefined;
};

/** @internal */
export const S3FileUploadPart$inboundSchema: z.ZodType<
  S3FileUploadPart,
  z.ZodTypeDef,
  unknown
> = z.object({
  number: z.number().int(),
  chunk_start: z.number().int(),
  chunk_end: z.number().int(),
  checksum_sha256_base64: z.nullable(z.string()).optional(),
  url: z.string(),
  expires_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  headers: z.record(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "chunk_start": "chunkStart",
    "chunk_end": "chunkEnd",
    "checksum_sha256_base64": "checksumSha256Base64",
    "expires_at": "expiresAt",
  });
});

/** @internal */
export type S3FileUploadPart$Outbound = {
  number: number;
  chunk_start: number;
  chunk_end: number;
  checksum_sha256_base64?: string | null | undefined;
  url: string;
  expires_at: string;
  headers?: { [k: string]: string } | undefined;
};

/** @internal */
export const S3FileUploadPart$outboundSchema: z.ZodType<
  S3FileUploadPart$Outbound,
  z.ZodTypeDef,
  S3FileUploadPart
> = z.object({
  number: z.number().int(),
  chunkStart: z.number().int(),
  chunkEnd: z.number().int(),
  checksumSha256Base64: z.nullable(z.string()).optional(),
  url: z.string(),
  expiresAt: z.date().transform(v => v.toISOString()),
  headers: z.record(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    chunkStart: "chunk_start",
    chunkEnd: "chunk_end",
    checksumSha256Base64: "checksum_sha256_base64",
    expiresAt: "expires_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace S3FileUploadPart$ {
  /** @deprecated use `S3FileUploadPart$inboundSchema` instead. */
  export const inboundSchema = S3FileUploadPart$inboundSchema;
  /** @deprecated use `S3FileUploadPart$outboundSchema` instead. */
  export const outboundSchema = S3FileUploadPart$outboundSchema;
  /** @deprecated use `S3FileUploadPart$Outbound` instead. */
  export type Outbound = S3FileUploadPart$Outbound;
}

export function s3FileUploadPartToJSON(
  s3FileUploadPart: S3FileUploadPart,
): string {
  return JSON.stringify(
    S3FileUploadPart$outboundSchema.parse(s3FileUploadPart),
  );
}

export function s3FileUploadPartFromJSON(
  jsonString: string,
): SafeParseResult<S3FileUploadPart, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => S3FileUploadPart$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'S3FileUploadPart' from JSON`,
  );
}
