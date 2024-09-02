/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UserFreeSubscriptionCreate = {
    /**
     * ID of the free tier to subscribe to.
     */
    productId: string;
    /**
     * Email of the customer. This field is required if the API is called outside the Polar app.
     */
    customerEmail?: string | null | undefined;
};

/** @internal */
export const UserFreeSubscriptionCreate$inboundSchema: z.ZodType<
    UserFreeSubscriptionCreate,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        product_id: z.string(),
        customer_email: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            product_id: "productId",
            customer_email: "customerEmail",
        });
    });

/** @internal */
export type UserFreeSubscriptionCreate$Outbound = {
    product_id: string;
    customer_email?: string | null | undefined;
};

/** @internal */
export const UserFreeSubscriptionCreate$outboundSchema: z.ZodType<
    UserFreeSubscriptionCreate$Outbound,
    z.ZodTypeDef,
    UserFreeSubscriptionCreate
> = z
    .object({
        productId: z.string(),
        customerEmail: z.nullable(z.string()).optional(),
    })
    .transform((v) => {
        return remap$(v, {
            productId: "product_id",
            customerEmail: "customer_email",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserFreeSubscriptionCreate$ {
    /** @deprecated use `UserFreeSubscriptionCreate$inboundSchema` instead. */
    export const inboundSchema = UserFreeSubscriptionCreate$inboundSchema;
    /** @deprecated use `UserFreeSubscriptionCreate$outboundSchema` instead. */
    export const outboundSchema = UserFreeSubscriptionCreate$outboundSchema;
    /** @deprecated use `UserFreeSubscriptionCreate$Outbound` instead. */
    export type Outbound = UserFreeSubscriptionCreate$Outbound;
}
