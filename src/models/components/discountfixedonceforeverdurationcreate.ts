/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  DiscountDuration,
  DiscountDuration$inboundSchema,
  DiscountDuration$outboundSchema,
} from "./discountduration.js";
import {
  DiscountType,
  DiscountType$inboundSchema,
  DiscountType$outboundSchema,
} from "./discounttype.js";

export type DiscountFixedOnceForeverDurationCreateMetadata =
  | string
  | number
  | boolean;

/**
 * Schema to create a fixed amount discount that is applied once or forever.
 */
export type DiscountFixedOnceForeverDurationCreate = {
  duration: DiscountDuration;
  type: DiscountType;
  /**
   * Fixed amount to discount from the invoice total.
   */
  amount: number;
  /**
   * The currency. Currently, only `usd` is supported.
   */
  currency?: string | undefined;
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
  /**
   * Name of the discount. Will be displayed to the customer when the discount is applied.
   */
  name: string;
  /**
   * Code customers can use to apply the discount during checkout. Must be between 3 and 256 characters long and contain only alphanumeric characters.If not provided, the discount can only be applied via the API.
   */
  code?: string | null | undefined;
  /**
   * Optional timestamp after which the discount is redeemable.
   */
  startsAt?: Date | null | undefined;
  /**
   * Optional timestamp after which the discount is no longer redeemable.
   */
  endsAt?: Date | null | undefined;
  /**
   * Optional maximum number of times the discount can be redeemed.
   */
  maxRedemptions?: number | null | undefined;
  products?: Array<string> | null | undefined;
  /**
   * The ID of the organization owning the discount. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
};

/** @internal */
export const DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema:
  z.ZodType<
    DiscountFixedOnceForeverDurationCreateMetadata,
    z.ZodTypeDef,
    unknown
  > = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type DiscountFixedOnceForeverDurationCreateMetadata$Outbound =
  | string
  | number
  | boolean;

/** @internal */
export const DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema:
  z.ZodType<
    DiscountFixedOnceForeverDurationCreateMetadata$Outbound,
    z.ZodTypeDef,
    DiscountFixedOnceForeverDurationCreateMetadata
  > = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountFixedOnceForeverDurationCreateMetadata$ {
  /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema` instead. */
  export const inboundSchema =
    DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema;
  /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema` instead. */
  export const outboundSchema =
    DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema;
  /** @deprecated use `DiscountFixedOnceForeverDurationCreateMetadata$Outbound` instead. */
  export type Outbound =
    DiscountFixedOnceForeverDurationCreateMetadata$Outbound;
}

export function discountFixedOnceForeverDurationCreateMetadataToJSON(
  discountFixedOnceForeverDurationCreateMetadata:
    DiscountFixedOnceForeverDurationCreateMetadata,
): string {
  return JSON.stringify(
    DiscountFixedOnceForeverDurationCreateMetadata$outboundSchema.parse(
      discountFixedOnceForeverDurationCreateMetadata,
    ),
  );
}

export function discountFixedOnceForeverDurationCreateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<
  DiscountFixedOnceForeverDurationCreateMetadata,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      DiscountFixedOnceForeverDurationCreateMetadata$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'DiscountFixedOnceForeverDurationCreateMetadata' from JSON`,
  );
}

/** @internal */
export const DiscountFixedOnceForeverDurationCreate$inboundSchema: z.ZodType<
  DiscountFixedOnceForeverDurationCreate,
  z.ZodTypeDef,
  unknown
> = z.object({
  duration: DiscountDuration$inboundSchema,
  type: DiscountType$inboundSchema,
  amount: z.number().int(),
  currency: z.string().default("usd"),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  name: z.string(),
  code: z.nullable(z.string()).optional(),
  starts_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  ends_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ).optional(),
  max_redemptions: z.nullable(z.number().int()).optional(),
  products: z.nullable(z.array(z.string())).optional(),
  organization_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "starts_at": "startsAt",
    "ends_at": "endsAt",
    "max_redemptions": "maxRedemptions",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type DiscountFixedOnceForeverDurationCreate$Outbound = {
  duration: string;
  type: string;
  amount: number;
  currency: string;
  metadata?: { [k: string]: string | number | boolean } | undefined;
  name: string;
  code?: string | null | undefined;
  starts_at?: string | null | undefined;
  ends_at?: string | null | undefined;
  max_redemptions?: number | null | undefined;
  products?: Array<string> | null | undefined;
  organization_id?: string | null | undefined;
};

/** @internal */
export const DiscountFixedOnceForeverDurationCreate$outboundSchema: z.ZodType<
  DiscountFixedOnceForeverDurationCreate$Outbound,
  z.ZodTypeDef,
  DiscountFixedOnceForeverDurationCreate
> = z.object({
  duration: DiscountDuration$outboundSchema,
  type: DiscountType$outboundSchema,
  amount: z.number().int(),
  currency: z.string().default("usd"),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  name: z.string(),
  code: z.nullable(z.string()).optional(),
  startsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  endsAt: z.nullable(z.date().transform(v => v.toISOString())).optional(),
  maxRedemptions: z.nullable(z.number().int()).optional(),
  products: z.nullable(z.array(z.string())).optional(),
  organizationId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    startsAt: "starts_at",
    endsAt: "ends_at",
    maxRedemptions: "max_redemptions",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace DiscountFixedOnceForeverDurationCreate$ {
  /** @deprecated use `DiscountFixedOnceForeverDurationCreate$inboundSchema` instead. */
  export const inboundSchema =
    DiscountFixedOnceForeverDurationCreate$inboundSchema;
  /** @deprecated use `DiscountFixedOnceForeverDurationCreate$outboundSchema` instead. */
  export const outboundSchema =
    DiscountFixedOnceForeverDurationCreate$outboundSchema;
  /** @deprecated use `DiscountFixedOnceForeverDurationCreate$Outbound` instead. */
  export type Outbound = DiscountFixedOnceForeverDurationCreate$Outbound;
}

export function discountFixedOnceForeverDurationCreateToJSON(
  discountFixedOnceForeverDurationCreate:
    DiscountFixedOnceForeverDurationCreate,
): string {
  return JSON.stringify(
    DiscountFixedOnceForeverDurationCreate$outboundSchema.parse(
      discountFixedOnceForeverDurationCreate,
    ),
  );
}

export function discountFixedOnceForeverDurationCreateFromJSON(
  jsonString: string,
): SafeParseResult<DiscountFixedOnceForeverDurationCreate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      DiscountFixedOnceForeverDurationCreate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'DiscountFixedOnceForeverDurationCreate' from JSON`,
  );
}
