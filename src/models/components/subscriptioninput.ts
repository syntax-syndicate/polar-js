/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import {
    ProductInput,
    ProductInput$inboundSchema,
    ProductInput$Outbound,
    ProductInput$outboundSchema,
} from "./productinput.js";
import {
    ProductPriceInput,
    ProductPriceInput$inboundSchema,
    ProductPriceInput$Outbound,
    ProductPriceInput$outboundSchema,
} from "./productpriceinput.js";
import {
    SubscriptionStatus,
    SubscriptionStatus$inboundSchema,
    SubscriptionStatus$outboundSchema,
} from "./subscriptionstatus.js";
import {
    SubscriptionUser,
    SubscriptionUser$inboundSchema,
    SubscriptionUser$Outbound,
    SubscriptionUser$outboundSchema,
} from "./subscriptionuser.js";
import * as z from "zod";

export type SubscriptionInput = {
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
    status: SubscriptionStatus;
    currentPeriodStart: Date;
    currentPeriodEnd: Date | null;
    cancelAtPeriodEnd: boolean;
    startedAt: Date | null;
    endedAt: Date | null;
    userId: string;
    productId: string;
    priceId: string | null;
    user: SubscriptionUser;
    /**
     * A product.
     */
    product: ProductInput;
    price: ProductPriceInput | null;
};

/** @internal */
export const SubscriptionInput$inboundSchema: z.ZodType<SubscriptionInput, z.ZodTypeDef, unknown> =
    z
        .object({
            created_at: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            modified_at: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            id: z.string(),
            status: SubscriptionStatus$inboundSchema,
            current_period_start: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
            current_period_end: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            cancel_at_period_end: z.boolean(),
            started_at: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            ended_at: z.nullable(
                z
                    .string()
                    .datetime({ offset: true })
                    .transform((v) => new Date(v))
            ),
            user_id: z.string(),
            product_id: z.string(),
            price_id: z.nullable(z.string()),
            user: SubscriptionUser$inboundSchema,
            product: ProductInput$inboundSchema,
            price: z.nullable(ProductPriceInput$inboundSchema),
        })
        .transform((v) => {
            return remap$(v, {
                created_at: "createdAt",
                modified_at: "modifiedAt",
                current_period_start: "currentPeriodStart",
                current_period_end: "currentPeriodEnd",
                cancel_at_period_end: "cancelAtPeriodEnd",
                started_at: "startedAt",
                ended_at: "endedAt",
                user_id: "userId",
                product_id: "productId",
                price_id: "priceId",
            });
        });

/** @internal */
export type SubscriptionInput$Outbound = {
    created_at: string;
    modified_at: string | null;
    id: string;
    status: string;
    current_period_start: string;
    current_period_end: string | null;
    cancel_at_period_end: boolean;
    started_at: string | null;
    ended_at: string | null;
    user_id: string;
    product_id: string;
    price_id: string | null;
    user: SubscriptionUser$Outbound;
    product: ProductInput$Outbound;
    price: ProductPriceInput$Outbound | null;
};

/** @internal */
export const SubscriptionInput$outboundSchema: z.ZodType<
    SubscriptionInput$Outbound,
    z.ZodTypeDef,
    SubscriptionInput
> = z
    .object({
        createdAt: z.date().transform((v) => v.toISOString()),
        modifiedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        id: z.string(),
        status: SubscriptionStatus$outboundSchema,
        currentPeriodStart: z.date().transform((v) => v.toISOString()),
        currentPeriodEnd: z.nullable(z.date().transform((v) => v.toISOString())),
        cancelAtPeriodEnd: z.boolean(),
        startedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        endedAt: z.nullable(z.date().transform((v) => v.toISOString())),
        userId: z.string(),
        productId: z.string(),
        priceId: z.nullable(z.string()),
        user: SubscriptionUser$outboundSchema,
        product: ProductInput$outboundSchema,
        price: z.nullable(ProductPriceInput$outboundSchema),
    })
    .transform((v) => {
        return remap$(v, {
            createdAt: "created_at",
            modifiedAt: "modified_at",
            currentPeriodStart: "current_period_start",
            currentPeriodEnd: "current_period_end",
            cancelAtPeriodEnd: "cancel_at_period_end",
            startedAt: "started_at",
            endedAt: "ended_at",
            userId: "user_id",
            productId: "product_id",
            priceId: "price_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace SubscriptionInput$ {
    /** @deprecated use `SubscriptionInput$inboundSchema` instead. */
    export const inboundSchema = SubscriptionInput$inboundSchema;
    /** @deprecated use `SubscriptionInput$outboundSchema` instead. */
    export const outboundSchema = SubscriptionInput$outboundSchema;
    /** @deprecated use `SubscriptionInput$Outbound` instead. */
    export type Outbound = SubscriptionInput$Outbound;
}
