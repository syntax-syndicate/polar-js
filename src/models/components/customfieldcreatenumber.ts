/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldNumberProperties,
  CustomFieldNumberProperties$inboundSchema,
  CustomFieldNumberProperties$Outbound,
  CustomFieldNumberProperties$outboundSchema,
} from "./customfieldnumberproperties.js";

export type CustomFieldCreateNumberMetadata = string | number | boolean;

export const CustomFieldCreateNumberType = {
  Number: "number",
} as const;
export type CustomFieldCreateNumberType = ClosedEnum<
  typeof CustomFieldCreateNumberType
>;

/**
 * Schema to create a custom field of type number.
 */
export type CustomFieldCreateNumber = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string | number | boolean } | undefined;
  type?: "number" | undefined;
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.It can only contain ASCII letters, numbers and hyphens.
   */
  slug: string;
  /**
   * Name of the custom field.
   */
  name: string;
  /**
   * The ID of the organization owning the custom field. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  properties: CustomFieldNumberProperties;
};

/** @internal */
export const CustomFieldCreateNumberMetadata$inboundSchema: z.ZodType<
  CustomFieldCreateNumberMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CustomFieldCreateNumberMetadata$Outbound =
  | string
  | number
  | boolean;

/** @internal */
export const CustomFieldCreateNumberMetadata$outboundSchema: z.ZodType<
  CustomFieldCreateNumberMetadata$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateNumberMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateNumberMetadata$ {
  /** @deprecated use `CustomFieldCreateNumberMetadata$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateNumberMetadata$inboundSchema;
  /** @deprecated use `CustomFieldCreateNumberMetadata$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateNumberMetadata$outboundSchema;
  /** @deprecated use `CustomFieldCreateNumberMetadata$Outbound` instead. */
  export type Outbound = CustomFieldCreateNumberMetadata$Outbound;
}

export function customFieldCreateNumberMetadataToJSON(
  customFieldCreateNumberMetadata: CustomFieldCreateNumberMetadata,
): string {
  return JSON.stringify(
    CustomFieldCreateNumberMetadata$outboundSchema.parse(
      customFieldCreateNumberMetadata,
    ),
  );
}

export function customFieldCreateNumberMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldCreateNumberMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldCreateNumberMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldCreateNumberMetadata' from JSON`,
  );
}

/** @internal */
export const CustomFieldCreateNumberType$inboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateNumberType
> = z.nativeEnum(CustomFieldCreateNumberType);

/** @internal */
export const CustomFieldCreateNumberType$outboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateNumberType
> = CustomFieldCreateNumberType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateNumberType$ {
  /** @deprecated use `CustomFieldCreateNumberType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateNumberType$inboundSchema;
  /** @deprecated use `CustomFieldCreateNumberType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateNumberType$outboundSchema;
}

/** @internal */
export const CustomFieldCreateNumber$inboundSchema: z.ZodType<
  CustomFieldCreateNumber,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  type: z.literal("number").optional(),
  slug: z.string(),
  name: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: CustomFieldNumberProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomFieldCreateNumber$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | undefined;
  type: "number";
  slug: string;
  name: string;
  organization_id?: string | null | undefined;
  properties: CustomFieldNumberProperties$Outbound;
};

/** @internal */
export const CustomFieldCreateNumber$outboundSchema: z.ZodType<
  CustomFieldCreateNumber$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateNumber
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  type: z.literal("number").default("number"),
  slug: z.string(),
  name: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: CustomFieldNumberProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateNumber$ {
  /** @deprecated use `CustomFieldCreateNumber$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateNumber$inboundSchema;
  /** @deprecated use `CustomFieldCreateNumber$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateNumber$outboundSchema;
  /** @deprecated use `CustomFieldCreateNumber$Outbound` instead. */
  export type Outbound = CustomFieldCreateNumber$Outbound;
}

export function customFieldCreateNumberToJSON(
  customFieldCreateNumber: CustomFieldCreateNumber,
): string {
  return JSON.stringify(
    CustomFieldCreateNumber$outboundSchema.parse(customFieldCreateNumber),
  );
}

export function customFieldCreateNumberFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldCreateNumber, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldCreateNumber$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldCreateNumber' from JSON`,
  );
}
