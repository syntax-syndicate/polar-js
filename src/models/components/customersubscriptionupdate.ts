/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerSubscriptionUpdate = {
  productPriceId: string;
};

/** @internal */
export const CustomerSubscriptionUpdate$inboundSchema: z.ZodType<
  CustomerSubscriptionUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  product_price_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "product_price_id": "productPriceId",
  });
});

/** @internal */
export type CustomerSubscriptionUpdate$Outbound = {
  product_price_id: string;
};

/** @internal */
export const CustomerSubscriptionUpdate$outboundSchema: z.ZodType<
  CustomerSubscriptionUpdate$Outbound,
  z.ZodTypeDef,
  CustomerSubscriptionUpdate
> = z.object({
  productPriceId: z.string(),
}).transform((v) => {
  return remap$(v, {
    productPriceId: "product_price_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerSubscriptionUpdate$ {
  /** @deprecated use `CustomerSubscriptionUpdate$inboundSchema` instead. */
  export const inboundSchema = CustomerSubscriptionUpdate$inboundSchema;
  /** @deprecated use `CustomerSubscriptionUpdate$outboundSchema` instead. */
  export const outboundSchema = CustomerSubscriptionUpdate$outboundSchema;
  /** @deprecated use `CustomerSubscriptionUpdate$Outbound` instead. */
  export type Outbound = CustomerSubscriptionUpdate$Outbound;
}

export function customerSubscriptionUpdateToJSON(
  customerSubscriptionUpdate: CustomerSubscriptionUpdate,
): string {
  return JSON.stringify(
    CustomerSubscriptionUpdate$outboundSchema.parse(customerSubscriptionUpdate),
  );
}

export function customerSubscriptionUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CustomerSubscriptionUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerSubscriptionUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerSubscriptionUpdate' from JSON`,
  );
}
