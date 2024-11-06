/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const CustomFieldType = {
  Text: "text",
  Number: "number",
  Date: "date",
  Checkbox: "checkbox",
  Select: "select",
} as const;
export type CustomFieldType = ClosedEnum<typeof CustomFieldType>;

/** @internal */
export const CustomFieldType$inboundSchema: z.ZodNativeEnum<
  typeof CustomFieldType
> = z.nativeEnum(CustomFieldType);

/** @internal */
export const CustomFieldType$outboundSchema: z.ZodNativeEnum<
  typeof CustomFieldType
> = CustomFieldType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldType$ {
  /** @deprecated use `CustomFieldType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldType$inboundSchema;
  /** @deprecated use `CustomFieldType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldType$outboundSchema;
}
