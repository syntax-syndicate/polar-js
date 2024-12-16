/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalOrdersInvoiceRequest = {
  /**
   * The order ID.
   */
  id: string;
};

/** @internal */
export const CustomerPortalOrdersInvoiceRequest$inboundSchema: z.ZodType<
  CustomerPortalOrdersInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type CustomerPortalOrdersInvoiceRequest$Outbound = {
  id: string;
};

/** @internal */
export const CustomerPortalOrdersInvoiceRequest$outboundSchema: z.ZodType<
  CustomerPortalOrdersInvoiceRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalOrdersInvoiceRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalOrdersInvoiceRequest$ {
  /** @deprecated use `CustomerPortalOrdersInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = CustomerPortalOrdersInvoiceRequest$inboundSchema;
  /** @deprecated use `CustomerPortalOrdersInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalOrdersInvoiceRequest$outboundSchema;
  /** @deprecated use `CustomerPortalOrdersInvoiceRequest$Outbound` instead. */
  export type Outbound = CustomerPortalOrdersInvoiceRequest$Outbound;
}

export function customerPortalOrdersInvoiceRequestToJSON(
  customerPortalOrdersInvoiceRequest: CustomerPortalOrdersInvoiceRequest,
): string {
  return JSON.stringify(
    CustomerPortalOrdersInvoiceRequest$outboundSchema.parse(
      customerPortalOrdersInvoiceRequest,
    ),
  );
}

export function customerPortalOrdersInvoiceRequestFromJSON(
  jsonString: string,
): SafeParseResult<CustomerPortalOrdersInvoiceRequest, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalOrdersInvoiceRequest$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerPortalOrdersInvoiceRequest' from JSON`,
  );
}
