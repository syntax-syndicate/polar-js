/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type UserInfoUser = {
    sub: string;
    name: string | null;
    email: string | null;
    emailVerified: boolean | null;
};

/** @internal */
export const UserInfoUser$inboundSchema: z.ZodType<UserInfoUser, z.ZodTypeDef, unknown> = z
    .object({
        sub: z.string(),
        name: z.nullable(z.string()),
        email: z.nullable(z.string()),
        email_verified: z.nullable(z.boolean()),
    })
    .transform((v) => {
        return remap$(v, {
            email_verified: "emailVerified",
        });
    });

/** @internal */
export type UserInfoUser$Outbound = {
    sub: string;
    name: string | null;
    email: string | null;
    email_verified: boolean | null;
};

/** @internal */
export const UserInfoUser$outboundSchema: z.ZodType<
    UserInfoUser$Outbound,
    z.ZodTypeDef,
    UserInfoUser
> = z
    .object({
        sub: z.string(),
        name: z.nullable(z.string()),
        email: z.nullable(z.string()),
        emailVerified: z.nullable(z.boolean()),
    })
    .transform((v) => {
        return remap$(v, {
            emailVerified: "email_verified",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace UserInfoUser$ {
    /** @deprecated use `UserInfoUser$inboundSchema` instead. */
    export const inboundSchema = UserInfoUser$inboundSchema;
    /** @deprecated use `UserInfoUser$outboundSchema` instead. */
    export const outboundSchema = UserInfoUser$outboundSchema;
    /** @deprecated use `UserInfoUser$Outbound` instead. */
    export type Outbound = UserInfoUser$Outbound;
}
