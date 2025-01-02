/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  BenefitAdsSubscriber,
  BenefitAdsSubscriber$inboundSchema,
  BenefitAdsSubscriber$Outbound,
  BenefitAdsSubscriber$outboundSchema,
} from "./benefitadssubscriber.js";
import {
  BenefitGrantAdsProperties,
  BenefitGrantAdsProperties$inboundSchema,
  BenefitGrantAdsProperties$Outbound,
  BenefitGrantAdsProperties$outboundSchema,
} from "./benefitgrantadsproperties.js";
import {
  CustomerPortalCustomer,
  CustomerPortalCustomer$inboundSchema,
  CustomerPortalCustomer$Outbound,
  CustomerPortalCustomer$outboundSchema,
} from "./customerportalcustomer.js";

export type CustomerBenefitGrantAds = {
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
  grantedAt: Date | null;
  revokedAt: Date | null;
  customerId: string;
  benefitId: string;
  subscriptionId: string | null;
  orderId: string | null;
  isGranted: boolean;
  isRevoked: boolean;
  customer: CustomerPortalCustomer;
  benefit: BenefitAdsSubscriber;
  properties: BenefitGrantAdsProperties;
};

/** @internal */
export const CustomerBenefitGrantAds$inboundSchema: z.ZodType<
  CustomerBenefitGrantAds,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  granted_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  revoked_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  customer_id: z.string(),
  benefit_id: z.string(),
  subscription_id: z.nullable(z.string()),
  order_id: z.nullable(z.string()),
  is_granted: z.boolean(),
  is_revoked: z.boolean(),
  customer: CustomerPortalCustomer$inboundSchema,
  benefit: BenefitAdsSubscriber$inboundSchema,
  properties: BenefitGrantAdsProperties$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "granted_at": "grantedAt",
    "revoked_at": "revokedAt",
    "customer_id": "customerId",
    "benefit_id": "benefitId",
    "subscription_id": "subscriptionId",
    "order_id": "orderId",
    "is_granted": "isGranted",
    "is_revoked": "isRevoked",
  });
});

/** @internal */
export type CustomerBenefitGrantAds$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  granted_at: string | null;
  revoked_at: string | null;
  customer_id: string;
  benefit_id: string;
  subscription_id: string | null;
  order_id: string | null;
  is_granted: boolean;
  is_revoked: boolean;
  customer: CustomerPortalCustomer$Outbound;
  benefit: BenefitAdsSubscriber$Outbound;
  properties: BenefitGrantAdsProperties$Outbound;
};

/** @internal */
export const CustomerBenefitGrantAds$outboundSchema: z.ZodType<
  CustomerBenefitGrantAds$Outbound,
  z.ZodTypeDef,
  CustomerBenefitGrantAds
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  grantedAt: z.nullable(z.date().transform(v => v.toISOString())),
  revokedAt: z.nullable(z.date().transform(v => v.toISOString())),
  customerId: z.string(),
  benefitId: z.string(),
  subscriptionId: z.nullable(z.string()),
  orderId: z.nullable(z.string()),
  isGranted: z.boolean(),
  isRevoked: z.boolean(),
  customer: CustomerPortalCustomer$outboundSchema,
  benefit: BenefitAdsSubscriber$outboundSchema,
  properties: BenefitGrantAdsProperties$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    grantedAt: "granted_at",
    revokedAt: "revoked_at",
    customerId: "customer_id",
    benefitId: "benefit_id",
    subscriptionId: "subscription_id",
    orderId: "order_id",
    isGranted: "is_granted",
    isRevoked: "is_revoked",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerBenefitGrantAds$ {
  /** @deprecated use `CustomerBenefitGrantAds$inboundSchema` instead. */
  export const inboundSchema = CustomerBenefitGrantAds$inboundSchema;
  /** @deprecated use `CustomerBenefitGrantAds$outboundSchema` instead. */
  export const outboundSchema = CustomerBenefitGrantAds$outboundSchema;
  /** @deprecated use `CustomerBenefitGrantAds$Outbound` instead. */
  export type Outbound = CustomerBenefitGrantAds$Outbound;
}

export function customerBenefitGrantAdsToJSON(
  customerBenefitGrantAds: CustomerBenefitGrantAds,
): string {
  return JSON.stringify(
    CustomerBenefitGrantAds$outboundSchema.parse(customerBenefitGrantAds),
  );
}

export function customerBenefitGrantAdsFromJSON(
  jsonString: string,
): SafeParseResult<CustomerBenefitGrantAds, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => CustomerBenefitGrantAds$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'CustomerBenefitGrantAds' from JSON`,
  );
}
