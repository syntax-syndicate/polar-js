/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomFieldDateProperties = {
  formLabel?: string | undefined;
  formHelpText?: string | undefined;
  formPlaceholder?: string | undefined;
  ge?: number | undefined;
  le?: number | undefined;
};

/** @internal */
export const CustomFieldDateProperties$inboundSchema: z.ZodType<
  CustomFieldDateProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  form_label: z.string().optional(),
  form_help_text: z.string().optional(),
  form_placeholder: z.string().optional(),
  ge: z.number().int().optional(),
  le: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    "form_label": "formLabel",
    "form_help_text": "formHelpText",
    "form_placeholder": "formPlaceholder",
  });
});

/** @internal */
export type CustomFieldDateProperties$Outbound = {
  form_label?: string | undefined;
  form_help_text?: string | undefined;
  form_placeholder?: string | undefined;
  ge?: number | undefined;
  le?: number | undefined;
};

/** @internal */
export const CustomFieldDateProperties$outboundSchema: z.ZodType<
  CustomFieldDateProperties$Outbound,
  z.ZodTypeDef,
  CustomFieldDateProperties
> = z.object({
  formLabel: z.string().optional(),
  formHelpText: z.string().optional(),
  formPlaceholder: z.string().optional(),
  ge: z.number().int().optional(),
  le: z.number().int().optional(),
}).transform((v) => {
  return remap$(v, {
    formLabel: "form_label",
    formHelpText: "form_help_text",
    formPlaceholder: "form_placeholder",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldDateProperties$ {
  /** @deprecated use `CustomFieldDateProperties$inboundSchema` instead. */
  export const inboundSchema = CustomFieldDateProperties$inboundSchema;
  /** @deprecated use `CustomFieldDateProperties$outboundSchema` instead. */
  export const outboundSchema = CustomFieldDateProperties$outboundSchema;
  /** @deprecated use `CustomFieldDateProperties$Outbound` instead. */
  export type Outbound = CustomFieldDateProperties$Outbound;
}

export function customFieldDatePropertiesToJSON(
  customFieldDateProperties: CustomFieldDateProperties,
): string {
  return JSON.stringify(
    CustomFieldDateProperties$outboundSchema.parse(customFieldDateProperties),
  );
}

export function customFieldDatePropertiesFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldDateProperties, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldDateProperties$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldDateProperties' from JSON`,
  );
}
