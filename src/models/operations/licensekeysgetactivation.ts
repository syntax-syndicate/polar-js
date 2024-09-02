/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { remap as remap$ } from "../../lib/primitives.js";
import * as z from "zod";

export type LicenseKeysGetActivationRequest = {
    id: string;
    activationId: string;
};

/** @internal */
export const LicenseKeysGetActivationRequest$inboundSchema: z.ZodType<
    LicenseKeysGetActivationRequest,
    z.ZodTypeDef,
    unknown
> = z
    .object({
        id: z.string(),
        activation_id: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            activation_id: "activationId",
        });
    });

/** @internal */
export type LicenseKeysGetActivationRequest$Outbound = {
    id: string;
    activation_id: string;
};

/** @internal */
export const LicenseKeysGetActivationRequest$outboundSchema: z.ZodType<
    LicenseKeysGetActivationRequest$Outbound,
    z.ZodTypeDef,
    LicenseKeysGetActivationRequest
> = z
    .object({
        id: z.string(),
        activationId: z.string(),
    })
    .transform((v) => {
        return remap$(v, {
            activationId: "activation_id",
        });
    });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeysGetActivationRequest$ {
    /** @deprecated use `LicenseKeysGetActivationRequest$inboundSchema` instead. */
    export const inboundSchema = LicenseKeysGetActivationRequest$inboundSchema;
    /** @deprecated use `LicenseKeysGetActivationRequest$outboundSchema` instead. */
    export const outboundSchema = LicenseKeysGetActivationRequest$outboundSchema;
    /** @deprecated use `LicenseKeysGetActivationRequest$Outbound` instead. */
    export type Outbound = LicenseKeysGetActivationRequest$Outbound;
}
