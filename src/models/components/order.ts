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
import {
  DiscountFixedOnceForeverDurationBase,
  DiscountFixedOnceForeverDurationBase$inboundSchema,
  DiscountFixedOnceForeverDurationBase$Outbound,
  DiscountFixedOnceForeverDurationBase$outboundSchema,
} from "./discountfixedonceforeverdurationbase.js";
import {
  DiscountFixedRepeatDurationBase,
  DiscountFixedRepeatDurationBase$inboundSchema,
  DiscountFixedRepeatDurationBase$Outbound,
  DiscountFixedRepeatDurationBase$outboundSchema,
} from "./discountfixedrepeatdurationbase.js";
import {
  DiscountPercentageOnceForeverDurationBase,
  DiscountPercentageOnceForeverDurationBase$inboundSchema,
  DiscountPercentageOnceForeverDurationBase$Outbound,
  DiscountPercentageOnceForeverDurationBase$outboundSchema,
} from "./discountpercentageonceforeverdurationbase.js";
import {
  DiscountPercentageRepeatDurationBase,
  DiscountPercentageRepeatDurationBase$inboundSchema,
  DiscountPercentageRepeatDurationBase$Outbound,
  DiscountPercentageRepeatDurationBase$outboundSchema,
} from "./discountpercentagerepeatdurationbase.js";
import {
  LegacyRecurringProductPrice,
  LegacyRecurringProductPrice$inboundSchema,
  LegacyRecurringProductPrice$Outbound,
  LegacyRecurringProductPrice$outboundSchema,
} from "./legacyrecurringproductprice.js";
import {
  OrderBillingReason,
  OrderBillingReason$inboundSchema,
  OrderBillingReason$outboundSchema,
} from "./orderbillingreason.js";
import {
  OrderCustomer,
  OrderCustomer$inboundSchema,
  OrderCustomer$Outbound,
  OrderCustomer$outboundSchema,
} from "./ordercustomer.js";
import {
  OrderProduct,
  OrderProduct$inboundSchema,
  OrderProduct$Outbound,
  OrderProduct$outboundSchema,
} from "./orderproduct.js";
import {
  OrderSubscription,
  OrderSubscription$inboundSchema,
  OrderSubscription$Outbound,
  OrderSubscription$outboundSchema,
} from "./ordersubscription.js";
import {
  OrderUser,
  OrderUser$inboundSchema,
  OrderUser$Outbound,
  OrderUser$outboundSchema,
} from "./orderuser.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";

export type OrderMetadata = string | number | boolean;

export type OrderCustomFieldData = string | number | boolean | Date;

export type OrderProductPrice = LegacyRecurringProductPrice | ProductPrice;

export type OrderDiscount =
  | DiscountPercentageOnceForeverDurationBase
  | DiscountFixedOnceForeverDurationBase
  | DiscountPercentageRepeatDurationBase
  | DiscountFixedRepeatDurationBase;

export type Order = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the object.
   */
  id: string;
  metadata: { [k: string]: string | number | boolean };
  /**
   * Key-value object storing custom field values.
   */
  customFieldData?:
    | { [k: string]: string | number | boolean | Date | null }
    | undefined;
  status: string;
  amount: number;
  taxAmount: number;
  /**
   * Amount refunded
   */
  refundedAmount: number;
  /**
   * Sales tax refunded
   */
  refundedTaxAmount: number;
  currency: string;
  billingReason: OrderBillingReason;
  billingAddress: Address | null;
  customerId: string;
  productId: string;
  productPriceId: string;
  discountId: string | null;
  subscriptionId: string | null;
  checkoutId: string | null;
  customer: OrderCustomer;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  userId: string;
  user: OrderUser;
  product: OrderProduct;
  productPrice: LegacyRecurringProductPrice | ProductPrice;
  discount:
    | DiscountPercentageOnceForeverDurationBase
    | DiscountFixedOnceForeverDurationBase
    | DiscountPercentageRepeatDurationBase
    | DiscountFixedRepeatDurationBase
    | null;
  subscription: OrderSubscription | null;
};

/** @internal */
export const OrderMetadata$inboundSchema: z.ZodType<
  OrderMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type OrderMetadata$Outbound = string | number | boolean;

/** @internal */
export const OrderMetadata$outboundSchema: z.ZodType<
  OrderMetadata$Outbound,
  z.ZodTypeDef,
  OrderMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderMetadata$ {
  /** @deprecated use `OrderMetadata$inboundSchema` instead. */
  export const inboundSchema = OrderMetadata$inboundSchema;
  /** @deprecated use `OrderMetadata$outboundSchema` instead. */
  export const outboundSchema = OrderMetadata$outboundSchema;
  /** @deprecated use `OrderMetadata$Outbound` instead. */
  export type Outbound = OrderMetadata$Outbound;
}

export function orderMetadataToJSON(orderMetadata: OrderMetadata): string {
  return JSON.stringify(OrderMetadata$outboundSchema.parse(orderMetadata));
}

export function orderMetadataFromJSON(
  jsonString: string,
): SafeParseResult<OrderMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderMetadata' from JSON`,
  );
}

/** @internal */
export const OrderCustomFieldData$inboundSchema: z.ZodType<
  OrderCustomFieldData,
  z.ZodTypeDef,
  unknown
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.string().datetime({ offset: true }).transform(v => new Date(v)),
]);

/** @internal */
export type OrderCustomFieldData$Outbound = string | number | boolean | string;

/** @internal */
export const OrderCustomFieldData$outboundSchema: z.ZodType<
  OrderCustomFieldData$Outbound,
  z.ZodTypeDef,
  OrderCustomFieldData
> = z.union([
  z.string(),
  z.number().int(),
  z.boolean(),
  z.date().transform(v => v.toISOString()),
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderCustomFieldData$ {
  /** @deprecated use `OrderCustomFieldData$inboundSchema` instead. */
  export const inboundSchema = OrderCustomFieldData$inboundSchema;
  /** @deprecated use `OrderCustomFieldData$outboundSchema` instead. */
  export const outboundSchema = OrderCustomFieldData$outboundSchema;
  /** @deprecated use `OrderCustomFieldData$Outbound` instead. */
  export type Outbound = OrderCustomFieldData$Outbound;
}

export function orderCustomFieldDataToJSON(
  orderCustomFieldData: OrderCustomFieldData,
): string {
  return JSON.stringify(
    OrderCustomFieldData$outboundSchema.parse(orderCustomFieldData),
  );
}

export function orderCustomFieldDataFromJSON(
  jsonString: string,
): SafeParseResult<OrderCustomFieldData, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderCustomFieldData$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderCustomFieldData' from JSON`,
  );
}

/** @internal */
export const OrderProductPrice$inboundSchema: z.ZodType<
  OrderProductPrice,
  z.ZodTypeDef,
  unknown
> = z.union([
  LegacyRecurringProductPrice$inboundSchema,
  ProductPrice$inboundSchema,
]);

/** @internal */
export type OrderProductPrice$Outbound =
  | LegacyRecurringProductPrice$Outbound
  | ProductPrice$Outbound;

/** @internal */
export const OrderProductPrice$outboundSchema: z.ZodType<
  OrderProductPrice$Outbound,
  z.ZodTypeDef,
  OrderProductPrice
> = z.union([
  LegacyRecurringProductPrice$outboundSchema,
  ProductPrice$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderProductPrice$ {
  /** @deprecated use `OrderProductPrice$inboundSchema` instead. */
  export const inboundSchema = OrderProductPrice$inboundSchema;
  /** @deprecated use `OrderProductPrice$outboundSchema` instead. */
  export const outboundSchema = OrderProductPrice$outboundSchema;
  /** @deprecated use `OrderProductPrice$Outbound` instead. */
  export type Outbound = OrderProductPrice$Outbound;
}

export function orderProductPriceToJSON(
  orderProductPrice: OrderProductPrice,
): string {
  return JSON.stringify(
    OrderProductPrice$outboundSchema.parse(orderProductPrice),
  );
}

export function orderProductPriceFromJSON(
  jsonString: string,
): SafeParseResult<OrderProductPrice, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderProductPrice$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderProductPrice' from JSON`,
  );
}

/** @internal */
export const OrderDiscount$inboundSchema: z.ZodType<
  OrderDiscount,
  z.ZodTypeDef,
  unknown
> = z.union([
  DiscountPercentageOnceForeverDurationBase$inboundSchema,
  DiscountFixedOnceForeverDurationBase$inboundSchema,
  DiscountPercentageRepeatDurationBase$inboundSchema,
  DiscountFixedRepeatDurationBase$inboundSchema,
]);

/** @internal */
export type OrderDiscount$Outbound =
  | DiscountPercentageOnceForeverDurationBase$Outbound
  | DiscountFixedOnceForeverDurationBase$Outbound
  | DiscountPercentageRepeatDurationBase$Outbound
  | DiscountFixedRepeatDurationBase$Outbound;

/** @internal */
export const OrderDiscount$outboundSchema: z.ZodType<
  OrderDiscount$Outbound,
  z.ZodTypeDef,
  OrderDiscount
> = z.union([
  DiscountPercentageOnceForeverDurationBase$outboundSchema,
  DiscountFixedOnceForeverDurationBase$outboundSchema,
  DiscountPercentageRepeatDurationBase$outboundSchema,
  DiscountFixedRepeatDurationBase$outboundSchema,
]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace OrderDiscount$ {
  /** @deprecated use `OrderDiscount$inboundSchema` instead. */
  export const inboundSchema = OrderDiscount$inboundSchema;
  /** @deprecated use `OrderDiscount$outboundSchema` instead. */
  export const outboundSchema = OrderDiscount$outboundSchema;
  /** @deprecated use `OrderDiscount$Outbound` instead. */
  export type Outbound = OrderDiscount$Outbound;
}

export function orderDiscountToJSON(orderDiscount: OrderDiscount): string {
  return JSON.stringify(OrderDiscount$outboundSchema.parse(orderDiscount));
}

export function orderDiscountFromJSON(
  jsonString: string,
): SafeParseResult<OrderDiscount, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => OrderDiscount$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'OrderDiscount' from JSON`,
  );
}

/** @internal */
export const Order$inboundSchema: z.ZodType<Order, z.ZodTypeDef, unknown> = z
  .object({
    created_at: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    modified_at: z.nullable(
      z.string().datetime({ offset: true }).transform(v => new Date(v)),
    ),
    id: z.string(),
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
    custom_field_data: z.record(
      z.nullable(
        z.union([
          z.string(),
          z.number().int(),
          z.boolean(),
          z.string().datetime({ offset: true }).transform(v => new Date(v)),
        ]),
      ),
    ).optional(),
    status: z.string(),
    amount: z.number().int(),
    tax_amount: z.number().int(),
    refunded_amount: z.number().int(),
    refunded_tax_amount: z.number().int(),
    currency: z.string(),
    billing_reason: OrderBillingReason$inboundSchema,
    billing_address: z.nullable(Address$inboundSchema),
    customer_id: z.string(),
    product_id: z.string(),
    product_price_id: z.string(),
    discount_id: z.nullable(z.string()),
    subscription_id: z.nullable(z.string()),
    checkout_id: z.nullable(z.string()),
    customer: OrderCustomer$inboundSchema,
    user_id: z.string(),
    user: OrderUser$inboundSchema,
    product: OrderProduct$inboundSchema,
    product_price: z.union([
      LegacyRecurringProductPrice$inboundSchema,
      ProductPrice$inboundSchema,
    ]),
    discount: z.nullable(
      z.union([
        DiscountPercentageOnceForeverDurationBase$inboundSchema,
        DiscountFixedOnceForeverDurationBase$inboundSchema,
        DiscountPercentageRepeatDurationBase$inboundSchema,
        DiscountFixedRepeatDurationBase$inboundSchema,
      ]),
    ),
    subscription: z.nullable(OrderSubscription$inboundSchema),
  }).transform((v) => {
    return remap$(v, {
      "created_at": "createdAt",
      "modified_at": "modifiedAt",
      "custom_field_data": "customFieldData",
      "tax_amount": "taxAmount",
      "refunded_amount": "refundedAmount",
      "refunded_tax_amount": "refundedTaxAmount",
      "billing_reason": "billingReason",
      "billing_address": "billingAddress",
      "customer_id": "customerId",
      "product_id": "productId",
      "product_price_id": "productPriceId",
      "discount_id": "discountId",
      "subscription_id": "subscriptionId",
      "checkout_id": "checkoutId",
      "user_id": "userId",
      "product_price": "productPrice",
    });
  });

/** @internal */
export type Order$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  metadata: { [k: string]: string | number | boolean };
  custom_field_data?:
    | { [k: string]: string | number | boolean | string | null }
    | undefined;
  status: string;
  amount: number;
  tax_amount: number;
  refunded_amount: number;
  refunded_tax_amount: number;
  currency: string;
  billing_reason: string;
  billing_address: Address$Outbound | null;
  customer_id: string;
  product_id: string;
  product_price_id: string;
  discount_id: string | null;
  subscription_id: string | null;
  checkout_id: string | null;
  customer: OrderCustomer$Outbound;
  user_id: string;
  user: OrderUser$Outbound;
  product: OrderProduct$Outbound;
  product_price: LegacyRecurringProductPrice$Outbound | ProductPrice$Outbound;
  discount:
    | DiscountPercentageOnceForeverDurationBase$Outbound
    | DiscountFixedOnceForeverDurationBase$Outbound
    | DiscountPercentageRepeatDurationBase$Outbound
    | DiscountFixedRepeatDurationBase$Outbound
    | null;
  subscription: OrderSubscription$Outbound | null;
};

/** @internal */
export const Order$outboundSchema: z.ZodType<
  Order$Outbound,
  z.ZodTypeDef,
  Order
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  customFieldData: z.record(
    z.nullable(
      z.union([
        z.string(),
        z.number().int(),
        z.boolean(),
        z.date().transform(v => v.toISOString()),
      ]),
    ),
  ).optional(),
  status: z.string(),
  amount: z.number().int(),
  taxAmount: z.number().int(),
  refundedAmount: z.number().int(),
  refundedTaxAmount: z.number().int(),
  currency: z.string(),
  billingReason: OrderBillingReason$outboundSchema,
  billingAddress: z.nullable(Address$outboundSchema),
  customerId: z.string(),
  productId: z.string(),
  productPriceId: z.string(),
  discountId: z.nullable(z.string()),
  subscriptionId: z.nullable(z.string()),
  checkoutId: z.nullable(z.string()),
  customer: OrderCustomer$outboundSchema,
  userId: z.string(),
  user: OrderUser$outboundSchema,
  product: OrderProduct$outboundSchema,
  productPrice: z.union([
    LegacyRecurringProductPrice$outboundSchema,
    ProductPrice$outboundSchema,
  ]),
  discount: z.nullable(
    z.union([
      DiscountPercentageOnceForeverDurationBase$outboundSchema,
      DiscountFixedOnceForeverDurationBase$outboundSchema,
      DiscountPercentageRepeatDurationBase$outboundSchema,
      DiscountFixedRepeatDurationBase$outboundSchema,
    ]),
  ),
  subscription: z.nullable(OrderSubscription$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    customFieldData: "custom_field_data",
    taxAmount: "tax_amount",
    refundedAmount: "refunded_amount",
    refundedTaxAmount: "refunded_tax_amount",
    billingReason: "billing_reason",
    billingAddress: "billing_address",
    customerId: "customer_id",
    productId: "product_id",
    productPriceId: "product_price_id",
    discountId: "discount_id",
    subscriptionId: "subscription_id",
    checkoutId: "checkout_id",
    userId: "user_id",
    productPrice: "product_price",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Order$ {
  /** @deprecated use `Order$inboundSchema` instead. */
  export const inboundSchema = Order$inboundSchema;
  /** @deprecated use `Order$outboundSchema` instead. */
  export const outboundSchema = Order$outboundSchema;
  /** @deprecated use `Order$Outbound` instead. */
  export type Outbound = Order$Outbound;
}

export function orderToJSON(order: Order): string {
  return JSON.stringify(Order$outboundSchema.parse(order));
}

export function orderFromJSON(
  jsonString: string,
): SafeParseResult<Order, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Order$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Order' from JSON`,
  );
}
