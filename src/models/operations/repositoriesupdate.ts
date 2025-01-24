/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  RepositoryUpdate,
  RepositoryUpdate$inboundSchema,
  RepositoryUpdate$Outbound,
  RepositoryUpdate$outboundSchema,
} from "../components/repositoryupdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type RepositoriesUpdateRequest = {
  id: string;
  repositoryUpdate: RepositoryUpdate;
};

/** @internal */
export const RepositoriesUpdateRequest$inboundSchema: z.ZodType<
  RepositoriesUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  RepositoryUpdate: RepositoryUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "RepositoryUpdate": "repositoryUpdate",
  });
});

/** @internal */
export type RepositoriesUpdateRequest$Outbound = {
  id: string;
  RepositoryUpdate: RepositoryUpdate$Outbound;
};

/** @internal */
export const RepositoriesUpdateRequest$outboundSchema: z.ZodType<
  RepositoriesUpdateRequest$Outbound,
  z.ZodTypeDef,
  RepositoriesUpdateRequest
> = z.object({
  id: z.string(),
  repositoryUpdate: RepositoryUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    repositoryUpdate: "RepositoryUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace RepositoriesUpdateRequest$ {
  /** @deprecated use `RepositoriesUpdateRequest$inboundSchema` instead. */
  export const inboundSchema = RepositoriesUpdateRequest$inboundSchema;
  /** @deprecated use `RepositoriesUpdateRequest$outboundSchema` instead. */
  export const outboundSchema = RepositoriesUpdateRequest$outboundSchema;
  /** @deprecated use `RepositoriesUpdateRequest$Outbound` instead. */
  export type Outbound = RepositoriesUpdateRequest$Outbound;
}

export function repositoriesUpdateRequestToJSON(
  repositoriesUpdateRequest: RepositoriesUpdateRequest,
): string {
  return JSON.stringify(
    RepositoriesUpdateRequest$outboundSchema.parse(repositoriesUpdateRequest),
  );
}

export function repositoriesUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<RepositoriesUpdateRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => RepositoriesUpdateRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'RepositoriesUpdateRequest' from JSON`,
  );
}
