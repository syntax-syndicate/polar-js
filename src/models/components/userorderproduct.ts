/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  BenefitArticles,
  BenefitArticles$inboundSchema,
  BenefitArticles$Outbound,
  BenefitArticles$outboundSchema,
} from "./benefitarticles.js";
import {
  BenefitBase,
  BenefitBase$inboundSchema,
  BenefitBase$Outbound,
  BenefitBase$outboundSchema,
} from "./benefitbase.js";
import {
  Organization,
  Organization$inboundSchema,
  Organization$Outbound,
  Organization$outboundSchema,
} from "./organization.js";
import {
  ProductMediaFileRead,
  ProductMediaFileRead$inboundSchema,
  ProductMediaFileRead$Outbound,
  ProductMediaFileRead$outboundSchema,
} from "./productmediafileread.js";
import {
  ProductPrice,
  ProductPrice$inboundSchema,
  ProductPrice$Outbound,
  ProductPrice$outboundSchema,
} from "./productprice.js";

export type Benefits = BenefitBase | BenefitArticles;

export type UserOrderProduct = {
  /**
   * Creation timestamp of the object.
   */
  createdAt: Date;
  /**
   * Last modification timestamp of the object.
   */
  modifiedAt: Date | null;
  /**
   * The ID of the product.
   */
  id: string;
  /**
   * The name of the product.
   */
  name: string;
  /**
   * The description of the product.
   */
  description: string | null;
  /**
   * Whether the product is a subscription tier.
   */
  isRecurring: boolean;
  /**
   * Whether the product is archived and no longer available.
   */
  isArchived: boolean;
  /**
   * The ID of the organization owning the product.
   */
  organizationId: string;
  /**
   * List of prices for this product.
   */
  prices: Array<ProductPrice>;
  /**
   * List of benefits granted by the product.
   */
  benefits: Array<BenefitBase | BenefitArticles>;
  /**
   * List of medias associated to the product.
   */
  medias: Array<ProductMediaFileRead>;
  organization: Organization;
};

/** @internal */
export const Benefits$inboundSchema: z.ZodType<
  Benefits,
  z.ZodTypeDef,
  unknown
> = z.union([BenefitBase$inboundSchema, BenefitArticles$inboundSchema]);

/** @internal */
export type Benefits$Outbound = BenefitBase$Outbound | BenefitArticles$Outbound;

/** @internal */
export const Benefits$outboundSchema: z.ZodType<
  Benefits$Outbound,
  z.ZodTypeDef,
  Benefits
> = z.union([BenefitBase$outboundSchema, BenefitArticles$outboundSchema]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Benefits$ {
  /** @deprecated use `Benefits$inboundSchema` instead. */
  export const inboundSchema = Benefits$inboundSchema;
  /** @deprecated use `Benefits$outboundSchema` instead. */
  export const outboundSchema = Benefits$outboundSchema;
  /** @deprecated use `Benefits$Outbound` instead. */
  export type Outbound = Benefits$Outbound;
}

/** @internal */
export const UserOrderProduct$inboundSchema: z.ZodType<
  UserOrderProduct,
  z.ZodTypeDef,
  unknown
> = z.object({
  created_at: z.string().datetime({ offset: true }).transform(v => new Date(v)),
  modified_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  is_recurring: z.boolean(),
  is_archived: z.boolean(),
  organization_id: z.string(),
  prices: z.array(ProductPrice$inboundSchema),
  benefits: z.array(
    z.union([BenefitBase$inboundSchema, BenefitArticles$inboundSchema]),
  ),
  medias: z.array(ProductMediaFileRead$inboundSchema),
  organization: Organization$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "created_at": "createdAt",
    "modified_at": "modifiedAt",
    "is_recurring": "isRecurring",
    "is_archived": "isArchived",
    "organization_id": "organizationId",
  });
});

/** @internal */
export type UserOrderProduct$Outbound = {
  created_at: string;
  modified_at: string | null;
  id: string;
  name: string;
  description: string | null;
  is_recurring: boolean;
  is_archived: boolean;
  organization_id: string;
  prices: Array<ProductPrice$Outbound>;
  benefits: Array<BenefitBase$Outbound | BenefitArticles$Outbound>;
  medias: Array<ProductMediaFileRead$Outbound>;
  organization: Organization$Outbound;
};

/** @internal */
export const UserOrderProduct$outboundSchema: z.ZodType<
  UserOrderProduct$Outbound,
  z.ZodTypeDef,
  UserOrderProduct
> = z.object({
  createdAt: z.date().transform(v => v.toISOString()),
  modifiedAt: z.nullable(z.date().transform(v => v.toISOString())),
  id: z.string(),
  name: z.string(),
  description: z.nullable(z.string()),
  isRecurring: z.boolean(),
  isArchived: z.boolean(),
  organizationId: z.string(),
  prices: z.array(ProductPrice$outboundSchema),
  benefits: z.array(
    z.union([BenefitBase$outboundSchema, BenefitArticles$outboundSchema]),
  ),
  medias: z.array(ProductMediaFileRead$outboundSchema),
  organization: Organization$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    createdAt: "created_at",
    modifiedAt: "modified_at",
    isRecurring: "is_recurring",
    isArchived: "is_archived",
    organizationId: "organization_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserOrderProduct$ {
  /** @deprecated use `UserOrderProduct$inboundSchema` instead. */
  export const inboundSchema = UserOrderProduct$inboundSchema;
  /** @deprecated use `UserOrderProduct$outboundSchema` instead. */
  export const outboundSchema = UserOrderProduct$outboundSchema;
  /** @deprecated use `UserOrderProduct$Outbound` instead. */
  export type Outbound = UserOrderProduct$Outbound;
}
