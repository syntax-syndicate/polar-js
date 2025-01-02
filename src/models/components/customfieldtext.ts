/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldTextProperties,
  CustomFieldTextProperties$inboundSchema,
  CustomFieldTextProperties$Outbound,
  CustomFieldTextProperties$outboundSchema,
} from "./customfieldtextproperties.js";

export type CustomFieldTextMetadata = string | number | boolean;

/**
 * Schema for a custom field of type text.
 */
export type CustomFieldText = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  metadata: { [k: string]: string | number | boolean };
  type?: "text" | undefined;
  /**
   * Identifier of the custom field. It'll be used as key when storing the value.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field.
   */
  organizationId: string;
  properties: CustomFieldTextProperties;
};

/** @internal */
export const CustomFieldTextMetadata$inboundSchema: z.ZodType<
  CustomFieldTextMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CustomFieldTextMetadata$Outbound = string | number | boolean;

/** @internal */
export const CustomFieldTextMetadata$outboundSchema: z.ZodType<
  CustomFieldTextMetadata$Outbound,
  z.ZodTypeDef,
  CustomFieldTextMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldTextMetadata$ {
  /** @deprecated use `CustomFieldTextMetadata$inboundSchema` instead. */
  export const inboundSchema = CustomFieldTextMetadata$inboundSchema;
  /** @deprecated use `CustomFieldTextMetadata$outboundSchema` instead. */
  export const outboundSchema = CustomFieldTextMetadata$outboundSchema;
  /** @deprecated use `CustomFieldTextMetadata$Outbound` instead. */
  export type Outbound = CustomFieldTextMetadata$Outbound;
}

export function customFieldTextMetadataToJSON(
  customFieldTextMetadata: CustomFieldTextMetadata,
): string {
  return JSON.stringify(
    CustomFieldTextMetadata$outboundSchema.parse(customFieldTextMetadata),
  );
}

export function customFieldTextMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldTextMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldTextMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldTextMetadata' from JSON`,
  );
}

/** @internal */
export const CustomFieldText$inboundSchema: z.ZodType<
  CustomFieldText,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  type: z.literal("text").optional(),
  slug: z.string(),
  name: z.string(),
  organization_id: z.string(),
  properties: CustomFieldTextProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomFieldText$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  metadata: { [k: string]: string | number | boolean };
  type: "text";
  slug: string;
  name: string;
  organization_id: string;
  properties: CustomFieldTextProperties$Outbound;
};

/** @internal */
export const CustomFieldText$outboundSchema: z.ZodType<
  CustomFieldText$Outbound,
  z.ZodTypeDef,
  CustomFieldText
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  type: z.literal("text").default("text" as const),
  slug: z.string(),
  name: z.string(),
  organizationId: z.string(),
  properties: CustomFieldTextProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldText$ {
  /** @deprecated use `CustomFieldText$inboundSchema` instead. */
  export const inboundSchema = CustomFieldText$inboundSchema;
  /** @deprecated use `CustomFieldText$outboundSchema` instead. */
  export const outboundSchema = CustomFieldText$outboundSchema;
  /** @deprecated use `CustomFieldText$Outbound` instead. */
  export type Outbound = CustomFieldText$Outbound;
}

export function customFieldTextToJSON(
  customFieldText: CustomFieldText,
): string {
  return JSON.stringify(CustomFieldText$outboundSchema.parse(customFieldText));
}

export function customFieldTextFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldText, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldText$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldText' from JSON`,
  );
}
