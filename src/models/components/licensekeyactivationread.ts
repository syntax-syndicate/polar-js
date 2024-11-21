/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LicenseKeyRead,
  LicenseKeyRead$inboundSchema,
  LicenseKeyRead$Outbound,
  LicenseKeyRead$outboundSchema,
} from "./licensekeyread.js";

export type LicenseKeyActivationReadMeta = {};

export type LicenseKeyActivationRead = {
  id: string;
  licenseKeyId: string;
  label: string;
  meta: LicenseKeyActivationReadMeta;
  createdAt: Date;
  modifiedAt: Date | null;
  licenseKey: LicenseKeyRead;
};

/** @internal */
export const LicenseKeyActivationReadMeta$inboundSchema: z.ZodType<
  LicenseKeyActivationReadMeta,
  z.ZodTypeDef,
  unknown
> = z.object({});

/** @internal */
export type LicenseKeyActivationReadMeta$Outbound = {};

/** @internal */
export const LicenseKeyActivationReadMeta$outboundSchema: z.ZodType<
  LicenseKeyActivationReadMeta$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivationReadMeta
> = z.object({});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivationReadMeta$ {
  /** @deprecated use `LicenseKeyActivationReadMeta$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivationReadMeta$inboundSchema;
  /** @deprecated use `LicenseKeyActivationReadMeta$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivationReadMeta$outboundSchema;
  /** @deprecated use `LicenseKeyActivationReadMeta$Outbound` instead. */
  export type Outbound = LicenseKeyActivationReadMeta$Outbound;
}

export function licenseKeyActivationReadMetaToJSON(
  licenseKeyActivationReadMeta: LicenseKeyActivationReadMeta,
): string {
  return JSON.stringify(
    LicenseKeyActivationReadMeta$outboundSchema.parse(
      licenseKeyActivationReadMeta,
    ),
  );
}

export function licenseKeyActivationReadMetaFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivationReadMeta, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivationReadMeta$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivationReadMeta' from JSON`,
  );
}

/** @internal */
export const LicenseKeyActivationRead$inboundSchema: z.ZodType<
  LicenseKeyActivationRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  license_key_id: z.string(),
  label: z.string(),
  meta: z.lazy(() => LicenseKeyActivationReadMeta$inboundSchema),
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  license_key: LicenseKeyRead$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "license_key_id": "licenseKeyId",
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "license_key": "licenseKey",
  });
});

/** @internal */
export type LicenseKeyActivationRead$Outbound = {
  id: string;
  license_key_id: string;
  label: string;
  meta: LicenseKeyActivationReadMeta$Outbound;
  created_at: string;
  modified_at: string | null;
  license_key: LicenseKeyRead$Outbound;
};

/** @internal */
export const LicenseKeyActivationRead$outboundSchema: z.ZodType<
  LicenseKeyActivationRead$Outbound,
  z.ZodTypeDef,
  LicenseKeyActivationRead
> = z.object({
  id: z.string(),
  licenseKeyId: z.string(),
  label: z.string(),
  meta: z.lazy(() => LicenseKeyActivationReadMeta$outboundSchema),
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  licenseKey: LicenseKeyRead$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    licenseKeyId: "license_key_id",
    createdAt: "created_at",
    modifiedAt: "modified_at",
    licenseKey: "license_key",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyActivationRead$ {
  /** @deprecated use `LicenseKeyActivationRead$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyActivationRead$inboundSchema;
  /** @deprecated use `LicenseKeyActivationRead$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyActivationRead$outboundSchema;
  /** @deprecated use `LicenseKeyActivationRead$Outbound` instead. */
  export type Outbound = LicenseKeyActivationRead$Outbound;
}

export function licenseKeyActivationReadToJSON(
  licenseKeyActivationRead: LicenseKeyActivationRead,
): string {
  return JSON.stringify(
    LicenseKeyActivationRead$outboundSchema.parse(licenseKeyActivationRead),
  );
}

export function licenseKeyActivationReadFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyActivationRead, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyActivationRead$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyActivationRead' from JSON`,
  );
}
