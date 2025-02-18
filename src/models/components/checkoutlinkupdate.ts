/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CheckoutLinkUpdateMetadata = string | number | boolean;

/**
 * Schema to update an existing checkout link.
 */
export type CheckoutLinkUpdate = {
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  /**
   * List of products that will be available to select at checkout.
   */
  products?: Array<string> | null | undefined;
  label?: string | null | undefined;
  /**
   * Whether to allow the customer to apply discount codes. If you apply a discount through `discount_id`, it'll still be applied, but the customer won't be able to change it.
   */
  allowDiscountCodes?: boolean | null | undefined;
  /**
   * ID of the discount to apply to the checkout. If the discount is not applicable anymore when opening the checkout link, it'll be ignored.
   */
  discountId?: string | null | undefined;
  /**
   * URL where the customer will be redirected after a successful payment.You can add the `checkout_id={CHECKOUT_ID}` query parameter to retrieve the checkout session id.
   */
  successUrl?: string | null | undefined;
};

/** @internal */
export const CheckoutLinkUpdateMetadata$inboundSchema: z.ZodType<
  CheckoutLinkUpdateMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type CheckoutLinkUpdateMetadata$Outbound = string | number | boolean;

/** @internal */
export const CheckoutLinkUpdateMetadata$outboundSchema: z.ZodType<
  CheckoutLinkUpdateMetadata$Outbound,
  z.ZodTypeDef,
  CheckoutLinkUpdateMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkUpdateMetadata$ {
  /** @deprecated use `CheckoutLinkUpdateMetadata$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinkUpdateMetadata$inboundSchema;
  /** @deprecated use `CheckoutLinkUpdateMetadata$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinkUpdateMetadata$outboundSchema;
  /** @deprecated use `CheckoutLinkUpdateMetadata$Outbound` instead. */
  export type Outbound = CheckoutLinkUpdateMetadata$Outbound;
}

export function checkoutLinkUpdateMetadataToJSON(
  checkoutLinkUpdateMetadata: CheckoutLinkUpdateMetadata,
): string {
  return JSON.stringify(
    CheckoutLinkUpdateMetadata$outboundSchema.parse(checkoutLinkUpdateMetadata),
  );
}

export function checkoutLinkUpdateMetadataFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkUpdateMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLinkUpdateMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkUpdateMetadata' from JSON`,
  );
}

/** @internal */
export const CheckoutLinkUpdate$inboundSchema: z.ZodType<
  CheckoutLinkUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  products: z.nullable(z.array(z.string())).optional(),
  label: z.nullable(z.string()).optional(),
  allow_discount_codes: z.nullable(z.boolean()).optional(),
  discount_id: z.nullable(z.string()).optional(),
  success_url: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "allow_discount_codes": "allowDiscountCodes",
    "discount_id": "discountId",
    "success_url": "successUrl",
  });
});

/** @internal */
export type CheckoutLinkUpdate$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | null | undefined;
  products?: Array<string> | null | undefined;
  label?: string | null | undefined;
  allow_discount_codes?: boolean | null | undefined;
  discount_id?: string | null | undefined;
  success_url?: string | null | undefined;
};

/** @internal */
export const CheckoutLinkUpdate$outboundSchema: z.ZodType<
  CheckoutLinkUpdate$Outbound,
  z.ZodTypeDef,
  CheckoutLinkUpdate
> = z.object({
  metadata: z.nullable(
    z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  ).optional(),
  products: z.nullable(z.array(z.string())).optional(),
  label: z.nullable(z.string()).optional(),
  allowDiscountCodes: z.nullable(z.boolean()).optional(),
  discountId: z.nullable(z.string()).optional(),
  successUrl: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    allowDiscountCodes: "allow_discount_codes",
    discountId: "discount_id",
    successUrl: "success_url",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CheckoutLinkUpdate$ {
  /** @deprecated use `CheckoutLinkUpdate$inboundSchema` instead. */
  export const inboundSchema = CheckoutLinkUpdate$inboundSchema;
  /** @deprecated use `CheckoutLinkUpdate$outboundSchema` instead. */
  export const outboundSchema = CheckoutLinkUpdate$outboundSchema;
  /** @deprecated use `CheckoutLinkUpdate$Outbound` instead. */
  export type Outbound = CheckoutLinkUpdate$Outbound;
}

export function checkoutLinkUpdateToJSON(
  checkoutLinkUpdate: CheckoutLinkUpdate,
): string {
  return JSON.stringify(
    CheckoutLinkUpdate$outboundSchema.parse(checkoutLinkUpdate),
  );
}

export function checkoutLinkUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CheckoutLinkUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CheckoutLinkUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CheckoutLinkUpdate' from JSON`,
  );
}
