/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ProductPriceOneTime,
  ProductPriceOneTime$inboundSchema,
  ProductPriceOneTime$Outbound,
  ProductPriceOneTime$outboundSchema,
} from "./productpriceonetime.js";
import {
  ProductPriceRecurringInput,
  ProductPriceRecurringInput$inboundSchema,
  ProductPriceRecurringInput$Outbound,
  ProductPriceRecurringInput$outboundSchema,
} from "./productpricerecurringinput.js";

export type ProductPriceInput =
  | ProductPriceRecurringInput
  | ProductPriceOneTime;

/** @internal */
export const ProductPriceInput$inboundSchema: z.ZodType<
  ProductPriceInput,
  z.ZodTypeDef,
  unknown
> = z.union([
  ProductPriceRecurringInput$inboundSchema,
  ProductPriceOneTime$inboundSchema,
]);

/** @internal */
export type ProductPriceInput$Outbound =
  | ProductPriceRecurringInput$Outbound
  | ProductPriceOneTime$Outbound;

/** @internal */
export const ProductPriceInput$outboundSchema: z.ZodType<
  ProductPriceInput$Outbound,
  z.ZodTypeDef,
  ProductPriceInput
> = z.union([
  ProductPriceRecurringInput$outboundSchema,
  ProductPriceOneTime$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ProductPriceInput$ {
  /** @deprecated use `ProductPriceInput$inboundSchema` instead. */
  export const inboundSchema = ProductPriceInput$inboundSchema;
  /** @deprecated use `ProductPriceInput$outboundSchema` instead. */
  export const outboundSchema = ProductPriceInput$outboundSchema;
  /** @deprecated use `ProductPriceInput$Outbound` instead. */
  export type Outbound = ProductPriceInput$Outbound;
}
