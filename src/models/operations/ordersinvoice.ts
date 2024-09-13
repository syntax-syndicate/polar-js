/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type OrdersInvoiceRequest = {
  /**
   * The order ID.
   */
  id: string;
};

/** @internal */
export const OrdersInvoiceRequest$inboundSchema: z.ZodType<
  OrdersInvoiceRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type OrdersInvoiceRequest$Outbound = {
  id: string;
};

/** @internal */
export const OrdersInvoiceRequest$outboundSchema: z.ZodType<
  OrdersInvoiceRequest$Outbound,
  z.ZodTypeDef,
  OrdersInvoiceRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersInvoiceRequest$ {
  /** @deprecated use `OrdersInvoiceRequest$inboundSchema` instead. */
  export const inboundSchema = OrdersInvoiceRequest$inboundSchema;
  /** @deprecated use `OrdersInvoiceRequest$outboundSchema` instead. */
  export const outboundSchema = OrdersInvoiceRequest$outboundSchema;
  /** @deprecated use `OrdersInvoiceRequest$Outbound` instead. */
  export type Outbound = OrdersInvoiceRequest$Outbound;
}
