/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Address,
  Address$inboundSchema,
  Address$Outbound,
  Address$outboundSchema,
} from "./address.js";

export type CustomerPortalCustomerUpdate = {
  email?: string | null | undefined;
  name?: string | null | undefined;
  billingAddress?: Address | null | undefined;
  taxId?: string | null | undefined;
};

/** @internal */
export const CustomerPortalCustomerUpdate$inboundSchema: z.ZodType<
  CustomerPortalCustomerUpdate,
  z.ZodTypeDef,
  unknown
> = z.object({
  email: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  billing_address: z.nullable(Address$inboundSchema).optional(),
  tax_id: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    "billing_address": "billingAddress",
    "tax_id": "taxId",
  });
});

/** @internal */
export type CustomerPortalCustomerUpdate$Outbound = {
  email?: string | null | undefined;
  name?: string | null | undefined;
  billing_address?: Address$Outbound | null | undefined;
  tax_id?: string | null | undefined;
};

/** @internal */
export const CustomerPortalCustomerUpdate$outboundSchema: z.ZodType<
  CustomerPortalCustomerUpdate$Outbound,
  z.ZodTypeDef,
  CustomerPortalCustomerUpdate
> = z.object({
  email: z.nullable(z.string()).optional(),
  name: z.nullable(z.string()).optional(),
  billingAddress: z.nullable(Address$outboundSchema).optional(),
  taxId: z.nullable(z.string()).optional(),
}).transform((v) => {
  return remap$(v, {
    billingAddress: "billing_address",
    taxId: "tax_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalCustomerUpdate$ {
  /** @deprecated use `CustomerPortalCustomerUpdate$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalCustomerUpdate$inboundSchema;
  /** @deprecated use `CustomerPortalCustomerUpdate$outboundSchema` instead. */
  export const outboundSchema = CustomerPortalCustomerUpdate$outboundSchema;
  /** @deprecated use `CustomerPortalCustomerUpdate$Outbound` instead. */
  export type Outbound = CustomerPortalCustomerUpdate$Outbound;
}

export function customerPortalCustomerUpdateToJSON(
  customerPortalCustomerUpdate: CustomerPortalCustomerUpdate,
): string {
  return JSON.stringify(
    CustomerPortalCustomerUpdate$outboundSchema.parse(
      customerPortalCustomerUpdate,
    ),
  );
}

export function customerPortalCustomerUpdateFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalCustomerUpdate, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerPortalCustomerUpdate$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalCustomerUpdate' from JSON`,
  );
}
