/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as components from "../components/index.js";
import * as z from "zod";

export type UsersSubscriptionsUpdateRequest = {
    /**
     * The subscription ID.
     */
    id: string;
    userSubscriptionUpdate: components.UserSubscriptionUpdate;
};

/** @internal */
export const UsersSubscriptionsUpdateRequest$inboundSchema: z.ZodType<
    UsersSubscriptionsUpdateRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        UserSubscriptionUpdate: components.UserSubscriptionUpdate$inboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            UserSubscriptionUpdate: "userSubscriptionUpdate",
        });
    });

/** @internal */
export type UsersSubscriptionsUpdateRequest$Outbound = {
    id: string;
    UserSubscriptionUpdate: components.UserSubscriptionUpdate$Outbound;
};

/** @internal */
export const UsersSubscriptionsUpdateRequest$outboundSchema: z.ZodType<
    UsersSubscriptionsUpdateRequest$Outbound,
    z.ZodTypeDef,
    UsersSubscriptionsUpdateRequest
> = z
    .object({
        id: z.string(),
        userSubscriptionUpdate: components.UserSubscriptionUpdate$outboundSchema,
    })
    .transform((v) => {
        return remap$(v, {
            userSubscriptionUpdate: "UserSubscriptionUpdate",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UsersSubscriptionsUpdateRequest$ {
    /** @deprecated use `UsersSubscriptionsUpdateRequest$inboundSchema` instead. */
    export const inboundSchema = UsersSubscriptionsUpdateRequest$inboundSchema;
    /** @deprecated use `UsersSubscriptionsUpdateRequest$outboundSchema` instead. */
    export const outboundSchema = UsersSubscriptionsUpdateRequest$outboundSchema;
    /** @deprecated use `UsersSubscriptionsUpdateRequest$Outbound` instead. */
    export type Outbound = UsersSubscriptionsUpdateRequest$Outbound;
}
