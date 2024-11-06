/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type CustomFieldCheckboxProperties = {
  formLabel?: string | undefined;
  formHelpText?: string | undefined;
  formPlaceholder?: string | undefined;
};

/** @internal */
export const CustomFieldCheckboxProperties$inboundSchema: z.ZodType<
  CustomFieldCheckboxProperties,
  z.ZodTypeDef,
  unknown
> = z.object({
  form_label: z.string().optional(),
  form_help_text: z.string().optional(),
  form_placeholder: z.string().optional(),
}).transform((v) => {
  return remap$(v, {
    "form_label": "formLabel",
    "form_help_text": "formHelpText",
    "form_placeholder": "formPlaceholder",
  });
});

/** @internal */
export type CustomFieldCheckboxProperties$Outbound = {
  form_label?: string | undefined;
  form_help_text?: string | undefined;
  form_placeholder?: string | undefined;
};

/** @internal */
export const CustomFieldCheckboxProperties$outboundSchema: z.ZodType<
  CustomFieldCheckboxProperties$Outbound,
  z.ZodTypeDef,
  CustomFieldCheckboxProperties
> = z.object({
  formLabel: z.string().optional(),
  formHelpText: z.string().optional(),
  formPlaceholder: z.string().optional(),
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
export namespace CustomFieldCheckboxProperties$ {
  /** @deprecated use `CustomFieldCheckboxProperties$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCheckboxProperties$inboundSchema;
  /** @deprecated use `CustomFieldCheckboxProperties$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCheckboxProperties$outboundSchema;
  /** @deprecated use `CustomFieldCheckboxProperties$Outbound` instead. */
  export type Outbound = CustomFieldCheckboxProperties$Outbound;
}
