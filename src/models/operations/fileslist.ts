/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  ListResourceFileRead,
  ListResourceFileRead$inboundSchema,
  ListResourceFileRead$Outbound,
  ListResourceFileRead$outboundSchema,
} from "../components/listresourcefileread.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type FilesListRequest = {
  organizationId?: string | null | undefined;
  /**
   * List of file IDs to get.
   */
  ids?: Array<string> | null | undefined;
  /**
   * Page number, defaults to 1.
   */
  page?: number | undefined;
  /**
   * Size of a page, defaults to 10. Maximum is 100.
   */
  limit?: number | undefined;
};

export type FilesListResponse = {
  result: ListResourceFileRead;
};

/** @internal */
export const FilesListRequest$inboundSchema: z.ZodType<
  FilesListRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  organization_id: z.nullable(z.string()).optional(),
  ids: z.nullable(z.array(z.string())).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type FilesListRequest$Outbound = {
  organization_id?: string | null | undefined;
  ids?: Array<string> | null | undefined;
  page: number;
  limit: number;
};

/** @internal */
export const FilesListRequest$outboundSchema: z.ZodType<
  FilesListRequest$Outbound,
  z.ZodTypeDef,
  FilesListRequest
> = z.object({
  organizationId: z.nullable(z.string()).optional(),
  ids: z.nullable(z.array(z.string())).optional(),
  page: z.number().int().default(1),
  limit: z.number().int().default(10),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesListRequest$ {
  /** @deprecated use `FilesListRequest$inboundSchema` instead. */
  export const inboundSchema = FilesListRequest$inboundSchema;
  /** @deprecated use `FilesListRequest$outboundSchema` instead. */
  export const outboundSchema = FilesListRequest$outboundSchema;
  /** @deprecated use `FilesListRequest$Outbound` instead. */
  export type Outbound = FilesListRequest$Outbound;
}

export function filesListRequestToJSON(
  filesListRequest: FilesListRequest,
): string {
  return JSON.stringify(
    FilesListRequest$outboundSchema.parse(filesListRequest),
  );
}

export function filesListRequestFromJSON(
  jsonString: string,
): SafeParseResult<FilesListRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FilesListRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FilesListRequest' from JSON`,
  );
}

/** @internal */
export const FilesListResponse$inboundSchema: z.ZodType<
  FilesListResponse,
  z.ZodTypeDef,
  unknown
> = z.object({
  Result: ListResourceFileRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "Result": "result",
  });
});

/** @internal */
export type FilesListResponse$Outbound = {
  Result: ListResourceFileRead$Outbound;
};

/** @internal */
export const FilesListResponse$outboundSchema: z.ZodType<
  FilesListResponse$Outbound,
  z.ZodTypeDef,
  FilesListResponse
> = z.object({
  result: ListResourceFileRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    result: "Result",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace FilesListResponse$ {
  /** @deprecated use `FilesListResponse$inboundSchema` instead. */
  export const inboundSchema = FilesListResponse$inboundSchema;
  /** @deprecated use `FilesListResponse$outboundSchema` instead. */
  export const outboundSchema = FilesListResponse$outboundSchema;
  /** @deprecated use `FilesListResponse$Outbound` instead. */
  export type Outbound = FilesListResponse$Outbound;
}

export function filesListResponseToJSON(
  filesListResponse: FilesListResponse,
): string {
  return JSON.stringify(
    FilesListResponse$outboundSchema.parse(filesListResponse),
  );
}

export function filesListResponseFromJSON(
  jsonString: string,
): SafeParseResult<FilesListResponse, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => FilesListResponse$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'FilesListResponse' from JSON`,
  );
}
