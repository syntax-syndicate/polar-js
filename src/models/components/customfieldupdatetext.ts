/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldTextProperties,
  CustomFieldTextProperties$inboundSchema,
  CustomFieldTextProperties$Outbound,
  CustomFieldTextProperties$outboundSchema,
} from "./customfieldtextproperties.js";

export type CustomFieldUpdateTextMetadata = string | number | boolean;

/**
 * Schema to update a custom field of type text.
 */
export type CustomFieldUpdateText = {
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  name?: string | null | undefined;
  slug?: string | null | undefined;
  type?: "text" | undefined;
  properties?: CustomFieldTextProperties | null | undefined;
};

/** @internal */
export const CustomFieldUpdateTextMetadata$inboundSchema: z.ZodType<
  CustomFieldUpdateTextMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CustomFieldUpdateTextMetadata$Outbound = string | number | boolean;

/** @internal */
export const CustomFieldUpdateTextMetadata$outboundSchema: z.ZodType<
  CustomFieldUpdateTextMetadata$Outbound,
  z.ZodTypeDef,
  CustomFieldUpdateTextMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldUpdateTextMetadata$ {
  /** @deprecated use `CustomFieldUpdateTextMetadata$inboundSchema` instead. */
  export const inboundSchema = CustomFieldUpdateTextMetadata$inboundSchema;
  /** @deprecated use `CustomFieldUpdateTextMetadata$outboundSchema` instead. */
  export const outboundSchema = CustomFieldUpdateTextMetadata$outboundSchema;
  /** @deprecated use `CustomFieldUpdateTextMetadata$Outbound` instead. */
  export type Outbound = CustomFieldUpdateTextMetadata$Outbound;
}

export function customFieldUpdateTextMetadataToJSON(
  customFieldUpdateTextMetadata: CustomFieldUpdateTextMetadata,
): string {
  return JSON.stringify(
    CustomFieldUpdateTextMetadata$outboundSchema.parse(
      customFieldUpdateTextMetadata,
    ),
  );
}

export function customFieldUpdateTextMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldUpdateTextMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldUpdateTextMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldUpdateTextMetadata' from JSON`,
  );
}

/** @internal */
export const CustomFieldUpdateText$inboundSchema: z.ZodType<
  CustomFieldUpdateText,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  type: z.literal("text").optional(),
  properties: z.nullable(CustomFieldTextProperties$inboundSchema).optional(),
});

/** @internal */
export type CustomFieldUpdateText$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  name?: string | null | undefined;
  slug?: string | null | undefined;
  type: "text";
  properties?: CustomFieldTextProperties$Outbound | null | undefined;
};

/** @internal */
export const CustomFieldUpdateText$outboundSchema: z.ZodType<
  CustomFieldUpdateText$Outbound,
  z.ZodTypeDef,
  CustomFieldUpdateText
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  type: z.literal("text").default("text" as const),
  properties: z.nullable(CustomFieldTextProperties$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldUpdateText$ {
  /** @deprecated use `CustomFieldUpdateText$inboundSchema` instead. */
  export const inboundSchema = CustomFieldUpdateText$inboundSchema;
  /** @deprecated use `CustomFieldUpdateText$outboundSchema` instead. */
  export const outboundSchema = CustomFieldUpdateText$outboundSchema;
  /** @deprecated use `CustomFieldUpdateText$Outbound` instead. */
  export type Outbound = CustomFieldUpdateText$Outbound;
}

export function customFieldUpdateTextToJSON(
  customFieldUpdateText: CustomFieldUpdateText,
): string {
  return JSON.stringify(
    CustomFieldUpdateText$outboundSchema.parse(customFieldUpdateText),
  );
}

export function customFieldUpdateTextFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldUpdateText, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldUpdateText$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldUpdateText' from JSON`,
  );
}
