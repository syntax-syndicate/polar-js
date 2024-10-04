/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  Order,
  Order$inboundSchema,
  Order$Outbound,
  Order$outboundSchema,
} from "./order.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type ListResourceOrder = {
  items: Array<Order>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceOrder$inboundSchema: z.ZodType<
  ListResourceOrder,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Order$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceOrder$Outbound = {
  items: Array<Order$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceOrder$outboundSchema: z.ZodType<
  ListResourceOrder$Outbound,
  z.ZodTypeDef,
  ListResourceOrder
> = z.object({
  items: z.array(Order$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceOrder$ {
  /** @deprecated use `ListResourceOrder$inboundSchema` instead. */
  export const inboundSchema = ListResourceOrder$inboundSchema;
  /** @deprecated use `ListResourceOrder$outboundSchema` instead. */
  export const outboundSchema = ListResourceOrder$outboundSchema;
  /** @deprecated use `ListResourceOrder$Outbound` instead. */
  export type Outbound = ListResourceOrder$Outbound;
}
