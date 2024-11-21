/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomFieldCreateCheckbox,
  CustomFieldCreateCheckbox$inboundSchema,
  CustomFieldCreateCheckbox$Outbound,
  CustomFieldCreateCheckbox$outboundSchema,
} from "./customfieldcreatecheckbox.js";
import {
  CustomFieldCreateDate,
  CustomFieldCreateDate$inboundSchema,
  CustomFieldCreateDate$Outbound,
  CustomFieldCreateDate$outboundSchema,
} from "./customfieldcreatedate.js";
import {
  CustomFieldCreateNumber,
  CustomFieldCreateNumber$inboundSchema,
  CustomFieldCreateNumber$Outbound,
  CustomFieldCreateNumber$outboundSchema,
} from "./customfieldcreatenumber.js";
import {
  CustomFieldCreateSelect,
  CustomFieldCreateSelect$inboundSchema,
  CustomFieldCreateSelect$Outbound,
  CustomFieldCreateSelect$outboundSchema,
} from "./customfieldcreateselect.js";
import {
  CustomFieldCreateText,
  CustomFieldCreateText$inboundSchema,
  CustomFieldCreateText$Outbound,
  CustomFieldCreateText$outboundSchema,
} from "./customfieldcreatetext.js";

export type CustomFieldCreate =
  | (CustomFieldCreateCheckbox & { type: "checkbox" })
  | (CustomFieldCreateDate & { type: "date" })
  | (CustomFieldCreateNumber & { type: "number" })
  | (CustomFieldCreateSelect & { type: "select" })
  | (CustomFieldCreateText & { type: "text" });

/** @internal */
export const CustomFieldCreate$inboundSchema: z.ZodType<
  CustomFieldCreate,
  z.ZodTypeDef,
  unknown
> = z.union([
  CustomFieldCreateCheckbox$inboundSchema.and(
    z.object({ type: z.literal("checkbox") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateDate$inboundSchema.and(
    z.object({ type: z.literal("date") }).transform((v) => ({ type: v.type })),
  ),
  CustomFieldCreateNumber$inboundSchema.and(
    z.object({ type: z.literal("number") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateSelect$inboundSchema.and(
    z.object({ type: z.literal("select") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateText$inboundSchema.and(
    z.object({ type: z.literal("text") }).transform((v) => ({ type: v.type })),
  ),
]);

/** @internal */
export type CustomFieldCreate$Outbound =
  | (CustomFieldCreateCheckbox$Outbound & { type: "checkbox" })
  | (CustomFieldCreateDate$Outbound & { type: "date" })
  | (CustomFieldCreateNumber$Outbound & { type: "number" })
  | (CustomFieldCreateSelect$Outbound & { type: "select" })
  | (CustomFieldCreateText$Outbound & { type: "text" });

/** @internal */
export const CustomFieldCreate$outboundSchema: z.ZodType<
  CustomFieldCreate$Outbound,
  z.ZodTypeDef,
  CustomFieldCreate
> = z.union([
  CustomFieldCreateCheckbox$outboundSchema.and(
    z.object({ type: z.literal("checkbox") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateDate$outboundSchema.and(
    z.object({ type: z.literal("date") }).transform((v) => ({ type: v.type })),
  ),
  CustomFieldCreateNumber$outboundSchema.and(
    z.object({ type: z.literal("number") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateSelect$outboundSchema.and(
    z.object({ type: z.literal("select") }).transform((v) => ({
      type: v.type,
    })),
  ),
  CustomFieldCreateText$outboundSchema.and(
    z.object({ type: z.literal("text") }).transform((v) => ({ type: v.type })),
  ),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreate$ {
  /** @deprecated use `CustomFieldCreate$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreate$inboundSchema;
  /** @deprecated use `CustomFieldCreate$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreate$outboundSchema;
  /** @deprecated use `CustomFieldCreate$Outbound` instead. */
  export type Outbound = CustomFieldCreate$Outbound;
}

export function customFieldCreateToJSON(
  customFieldCreate: CustomFieldCreate,
): string {
  return JSON.stringify(
    CustomFieldCreate$outboundSchema.parse(customFieldCreate),
  );
}

export function customFieldCreateFromJSON(
  jsonString: string,
): SafeParseResult<CustomFieldCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomFieldCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomFieldCreate' from JSON`,
  );
}
