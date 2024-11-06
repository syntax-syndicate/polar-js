/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { ClosedEnum } from "../../types/enums.js";
import {
  CustomFieldSelectProperties,
  CustomFieldSelectProperties$inboundSchema,
  CustomFieldSelectProperties$Outbound,
  CustomFieldSelectProperties$outboundSchema,
} from "./customfieldselectproperties.js";

export const CustomFieldCreateSelectType = {
  Select: "select",
} as const;
export type CustomFieldCreateSelectType = ClosedEnum<
  typeof CustomFieldCreateSelectType
>;

/**
 * Schema to create a custom field of type select.
 */
export type CustomFieldCreateSelect = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be a string with a maximum length of **500 characters**.
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string } | undefined;
  type?: "select" | undefined;
  /**
   * Identifier of the custom field. It'll be used as key when storing the value. Must be unique across the organization.
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
  properties: CustomFieldSelectProperties;
};

/** @internal */
export const CustomFieldCreateSelectType$inboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateSelectType
> = z.nativeEnum(CustomFieldCreateSelectType);

/** @internal */
export const CustomFieldCreateSelectType$outboundSchema: z.ZodNativeEnum<
  typeof CustomFieldCreateSelectType
> = CustomFieldCreateSelectType$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateSelectType$ {
  /** @deprecated use `CustomFieldCreateSelectType$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateSelectType$inboundSchema;
  /** @deprecated use `CustomFieldCreateSelectType$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateSelectType$outboundSchema;
}

/** @internal */
export const CustomFieldCreateSelect$inboundSchema: z.ZodType<
  CustomFieldCreateSelect,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.string()).optional(),
  type: z.literal("select").optional(),
  slug: z.string(),
  name: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  properties: CustomFieldSelectProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
  });
});

/** @internal */
export type CustomFieldCreateSelect$Outbound = {
  metadata?: { [k: string]: string } | undefined;
  type: "select";
  slug: string;
  name: string;
  organization_id?: string | null | undefined;
  properties: CustomFieldSelectProperties$Outbound;
};

/** @internal */
export const CustomFieldCreateSelect$outboundSchema: z.ZodType<
  CustomFieldCreateSelect$Outbound,
  z.ZodTypeDef,
  CustomFieldCreateSelect
> = z.object({
  metadata: z.record(z.string()).optional(),
  type: z.literal("select").default("select"),
  slug: z.string(),
  name: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  properties: CustomFieldSelectProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomFieldCreateSelect$ {
  /** @deprecated use `CustomFieldCreateSelect$inboundSchema` instead. */
  export const inboundSchema = CustomFieldCreateSelect$inboundSchema;
  /** @deprecated use `CustomFieldCreateSelect$outboundSchema` instead. */
  export const outboundSchema = CustomFieldCreateSelect$outboundSchema;
  /** @deprecated use `CustomFieldCreateSelect$Outbound` instead. */
  export type Outbound = CustomFieldCreateSelect$Outbound;
}
