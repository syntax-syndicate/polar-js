/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Discount,
  Discount$inboundSchema,
  Discount$Outbound,
  Discount$outboundSchema,
} from "./discount.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type ListResourceDiscount = {
  items: Array<Discount>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceDiscount$inboundSchema: z.ZodType<
  ListResourceDiscount,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(Discount$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceDiscount$Outbound = {
  items: Array<Discount$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceDiscount$outboundSchema: z.ZodType<
  ListResourceDiscount$Outbound,
  z.ZodTypeDef,
  ListResourceDiscount
> = z.object({
  items: z.array(Discount$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceDiscount$ {
  /** @deprecated use `ListResourceDiscount$inboundSchema` instead. */
  export const inboundSchema = ListResourceDiscount$inboundSchema;
  /** @deprecated use `ListResourceDiscount$outboundSchema` instead. */
  export const outboundSchema = ListResourceDiscount$outboundSchema;
  /** @deprecated use `ListResourceDiscount$Outbound` instead. */
  export type Outbound = ListResourceDiscount$Outbound;
}

export function listResourceDiscountToJSON(
  listResourceDiscount: ListResourceDiscount,
): string {
  return JSON.stringify(
    ListResourceDiscount$outboundSchema.parse(listResourceDiscount),
  );
}

export function listResourceDiscountFromJSON(
  jsonString: string,
): SafeParseResult<ListResourceDiscount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResourceDiscount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResourceDiscount' from JSON`,
  );
}
