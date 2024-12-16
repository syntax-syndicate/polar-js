/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  CustomerSubscription,
  CustomerSubscription$inboundSchema,
  CustomerSubscription$Outbound,
  CustomerSubscription$outboundSchema,
} from "./customersubscription.js";
import {
  Pagination,
  Pagination$inboundSchema,
  Pagination$Outbound,
  Pagination$outboundSchema,
} from "./pagination.js";

export type ListResourceCustomerSubscription = {
  items: Array<CustomerSubscription>;
  pagination: Pagination;
};

/** @internal */
export const ListResourceCustomerSubscription$inboundSchema: z.ZodType<
  ListResourceCustomerSubscription,
  z.ZodTypeDef,
  unknown
> = z.object({
  items: z.array(CustomerSubscription$inboundSchema),
  pagination: Pagination$inboundSchema,
});

/** @internal */
export type ListResourceCustomerSubscription$Outbound = {
  items: Array<CustomerSubscription$Outbound>;
  pagination: Pagination$Outbound;
};

/** @internal */
export const ListResourceCustomerSubscription$outboundSchema: z.ZodType<
  ListResourceCustomerSubscription$Outbound,
  z.ZodTypeDef,
  ListResourceCustomerSubscription
> = z.object({
  items: z.array(CustomerSubscription$outboundSchema),
  pagination: Pagination$outboundSchema,
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListResourceCustomerSubscription$ {
  /** @deprecated use `ListResourceCustomerSubscription$inboundSchema` instead. */
  export const inboundSchema = ListResourceCustomerSubscription$inboundSchema;
  /** @deprecated use `ListResourceCustomerSubscription$outboundSchema` instead. */
  export const outboundSchema = ListResourceCustomerSubscription$outboundSchema;
  /** @deprecated use `ListResourceCustomerSubscription$Outbound` instead. */
  export type Outbound = ListResourceCustomerSubscription$Outbound;
}

export function listResourceCustomerSubscriptionToJSON(
  listResourceCustomerSubscription: ListResourceCustomerSubscription,
): string {
  return JSON.stringify(
    ListResourceCustomerSubscription$outboundSchema.parse(
      listResourceCustomerSubscription,
    ),
  );
}

export function listResourceCustomerSubscriptionFromJSON(
  jsonString: string,
): SafeParseResult<ListResourceCustomerSubscription, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => ListResourceCustomerSubscription$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'ListResourceCustomerSubscription' from JSON`,
  );
}
