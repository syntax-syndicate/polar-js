/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { ClosedEnum } from "../../types/enums.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldSelectProperties,
  CustomFieldSelectProperties$inboundSchema,
  CustomFieldSelectProperties$Outbound,
  CustomFieldSelectProperties$outboundSchema,
} from "./customfieldselectproperties.js";

export type CustomFieldUpdateSelectMetadata = string | number | boolean;

export const CustomFieldUpdateSelectType = {
  Select: "select",
} as const;
export type CustomFieldUpdateSelectType = ClosedEnum<
  typeof CustomFieldUpdateSelectType
>;

/**
 * Schema to update a custom field of type select.
 */
export type CustomFieldUpdateSelect = {
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
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  name?: string | null | undefined;
  slug?: string | null | undefined;
  type?: "select" | undefined;
  properties?: CustomFieldSelectProperties | null | undefined;
};

/** @internal */
export const CustomFieldUpdateSelectMetadata$inboundSchema: z.ZodType<
  CustomFieldUpdateSelectMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CustomFieldUpdateSelectMetadata$Outbound =
  | string
  | number
  | boolean;

/** @internal */
export const CustomFieldUpdateSelectMetadata$outboundSchema: z.ZodType<
  CustomFieldUpdateSelectMetadata$Outbound,
  z.ZodTypeDef,
  CustomFieldUpdateSelectMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldUpdateSelectMetadata$ {
  /** @deprecated use `CustomFieldUpdateSelectMetadata$inboundSchema` instead. */
  export const inboundSchema = CustomFieldUpdateSelectMetadata$inboundSchema;
  /** @deprecated use `CustomFieldUpdateSelectMetadata$outboundSchema` instead. */
  export const outboundSchema = CustomFieldUpdateSelectMetadata$outboundSchema;
  /** @deprecated use `CustomFieldUpdateSelectMetadata$Outbound` instead. */
  export type Outbound = CustomFieldUpdateSelectMetadata$Outbound;
}

export function customFieldUpdateSelectMetadataToJSON(
  customFieldUpdateSelectMetadata: CustomFieldUpdateSelectMetadata,
): string {
  return JSON.stringify(
    CustomFieldUpdateSelectMetadata$outboundSchema.parse(
      customFieldUpdateSelectMetadata,
    ),
  );
}

export function customFieldUpdateSelectMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldUpdateSelectMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldUpdateSelectMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldUpdateSelectMetadata' from JSON`,
  );
}

/** @internal */
export const CustomFieldUpdateSelectType$inboundSchema: z.ZodNativeEnum<
  typeof CustomFieldUpdateSelectType
> = z.nativeEnum(CustomFieldUpdateSelectType);

/** @internal */
export const CustomFieldUpdateSelectType$outboundSchema: z.ZodNativeEnum<
  typeof CustomFieldUpdateSelectType
> = CustomFieldUpdateSelectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldUpdateSelectType$ {
  /** @deprecated use `CustomFieldUpdateSelectType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldUpdateSelectType$inboundSchema;
  /** @deprecated use `CustomFieldUpdateSelectType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldUpdateSelectType$outboundSchema;
}

/** @internal */
export const CustomFieldUpdateSelect$inboundSchema: z.ZodType<
  CustomFieldUpdateSelect,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  type: z.literal("select").optional(),
  properties: z.nullable(CustomFieldSelectProperties$inboundSchema).optional(),
});

/** @internal */
export type CustomFieldUpdateSelect$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  name?: string | null | undefined;
  slug?: string | null | undefined;
  type: "select";
  properties?: CustomFieldSelectProperties$Outbound | null | undefined;
};

/** @internal */
export const CustomFieldUpdateSelect$outboundSchema: z.ZodType<
  CustomFieldUpdateSelect$Outbound,
  z.ZodTypeDef,
  CustomFieldUpdateSelect
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  name: z.nullable(z.string()).optional(),
  slug: z.nullable(z.string()).optional(),
  type: z.literal("select").default("select"),
  properties: z.nullable(CustomFieldSelectProperties$outboundSchema).optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldUpdateSelect$ {
  /** @deprecated use `CustomFieldUpdateSelect$inboundSchema` instead. */
  export const inboundSchema = CustomFieldUpdateSelect$inboundSchema;
  /** @deprecated use `CustomFieldUpdateSelect$outboundSchema` instead. */
  export const outboundSchema = CustomFieldUpdateSelect$outboundSchema;
  /** @deprecated use `CustomFieldUpdateSelect$Outbound` instead. */
  export type Outbound = CustomFieldUpdateSelect$Outbound;
}

export function customFieldUpdateSelectToJSON(
  customFieldUpdateSelect: CustomFieldUpdateSelect,
): string {
  return JSON.stringify(
    CustomFieldUpdateSelect$outboundSchema.parse(customFieldUpdateSelect),
  );
}

export function customFieldUpdateSelectFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldUpdateSelect, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldUpdateSelect$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldUpdateSelect' from JSON`,
  );
}
