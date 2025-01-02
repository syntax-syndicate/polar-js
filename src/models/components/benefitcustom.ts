/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitCustomProperties,
  BenefitCustomProperties$inboundSchema,
  BenefitCustomProperties$Outbound,
  BenefitCustomProperties$outboundSchema,
} from "./benefitcustomproperties.js";

/**
 * A benefit of type `custom`.
 *
 * @remarks
 *
 * Use it to grant any kind of benefit that doesn't fit in the other types.
 */
export type BenefitCustom = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the benefit.
   */
  id: string;
  type?: "custom" | undefined;
  /**
   * The description of the benefit.
   */
  description: string;
  /**
   * Whether the benefit is selectable when creating a product.
   */
  selectable: boolean;
  /**
   * Whether the benefit is deletable.
   */
  deletable: boolean;
  /**
   * The ID of the organization owning the benefit.
   */
  organizationId: string;
  /**
   * Properties for a benefit of type `custom`.
   */
  properties: BenefitCustomProperties;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  isTaxApplicable: boolean;
};

/** @internal */
export const BenefitCustom$inboundSchema: z.ZodType<
  BenefitCustom,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  type: z.literal("custom").optional(),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organization_id: z.string(),
  properties: BenefitCustomProperties$inboundSchema,
  is_tax_applicable: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "organization_id": "organizationId",
    "is_tax_applicable": "isTaxApplicable",
  });
});

/** @internal */
export type BenefitCustom$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  type: "custom";
  description: string;
  selectable: boolean;
  deletable: boolean;
  organization_id: string;
  properties: BenefitCustomProperties$Outbound;
  is_tax_applicable: boolean;
};

/** @internal */
export const BenefitCustom$outboundSchema: z.ZodType<
  BenefitCustom$Outbound,
  z.ZodTypeDef,
  BenefitCustom
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  type: z.literal("custom").default("custom" as const),
  description: z.string(),
  selectable: z.boolean(),
  deletable: z.boolean(),
  organizationId: z.string(),
  properties: BenefitCustomProperties$outboundSchema,
  isTaxApplicable: z.boolean(),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    organizationId: "organization_id",
    isTaxApplicable: "is_tax_applicable",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace BenefitCustom$ {
  /** @deprecated use `BenefitCustom$inboundSchema` instead. */
  export const inboundSchema = BenefitCustom$inboundSchema;
  /** @deprecated use `BenefitCustom$outboundSchema` instead. */
  export const outboundSchema = BenefitCustom$outboundSchema;
  /** @deprecated use `BenefitCustom$Outbound` instead. */
  export type Outbound = BenefitCustom$Outbound;
}

export function benefitCustomToJSON(benefitCustom: BenefitCustom): string {
  return JSON.stringify(BenefitCustom$outboundSchema.parse(benefitCustom));
}

export function benefitCustomFromJSON(
  jsonString: string,
): SafeParseResult<BenefitCustom, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => BenefitCustom$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'BenefitCustom' from JSON`,
  );
}
