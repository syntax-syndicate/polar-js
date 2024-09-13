/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type OrdersGetRequest = {
  /**
   * The order ID.
   */
  id: string;
};

/** @internal */
export const OrdersGetRequest$inboundSchema: z.ZodType<
  OrdersGetRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
});

/** @internal */
export type OrdersGetRequest$Outbound = {
  id: string;
};

/** @internal */
export const OrdersGetRequest$outboundSchema: z.ZodType<
  OrdersGetRequest$Outbound,
  z.ZodTypeDef,
  OrdersGetRequest
> = z.object({
  id: z.string(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrdersGetRequest$ {
  /** @deprecated use `OrdersGetRequest$inboundSchema` instead. */
  export const inboundSchema = OrdersGetRequest$inboundSchema;
  /** @deprecated use `OrdersGetRequest$outboundSchema` instead. */
  export const outboundSchema = OrdersGetRequest$outboundSchema;
  /** @deprecated use `OrdersGetRequest$Outbound` instead. */
  export type Outbound = OrdersGetRequest$Outbound;
}
