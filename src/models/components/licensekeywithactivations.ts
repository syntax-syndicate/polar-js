/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import {
  LicenseKeyActivationBase,
  LicenseKeyActivationBase$inboundSchema,
  LicenseKeyActivationBase$Outbound,
  LicenseKeyActivationBase$outboundSchema,
} from "./licensekeyactivationbase.js";
import {
  LicenseKeyStatus,
  LicenseKeyStatus$inboundSchema,
  LicenseKeyStatus$outboundSchema,
} from "./licensekeystatus.js";

export type LicenseKeyWithActivations = {
  id: string;
  organizationId: string;
  userId: string;
  /**
   * The benefit ID.
   */
  benefitId: string;
  key: string;
  displayKey: string;
  status: LicenseKeyStatus;
  limitActivations: number | null;
  usage: number;
  limitUsage: number | null;
  validations: number;
  lastValidatedAt: Date | null;
  expiresAt: Date | null;
  activations: Array<LicenseKeyActivationBase>;
};

/** @internal */
export const LicenseKeyWithActivations$inboundSchema: z.ZodType<
  LicenseKeyWithActivations,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  organization_id: z.string(),
  user_id: z.string(),
  benefit_id: z.string(),
  key: z.string(),
  display_key: z.string(),
  status: LicenseKeyStatus$inboundSchema,
  limit_activations: z.nullable(z.number().int()),
  usage: z.number().int(),
  limit_usage: z.nullable(z.number().int()),
  validations: z.number().int(),
  last_validated_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  expires_at: z.nullable(
    z.string().datetime({ offset: true }).transform(v => new Date(v)),
  ),
  activations: z.array(LicenseKeyActivationBase$inboundSchema),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "user_id": "userId",
    "benefit_id": "benefitId",
    "display_key": "displayKey",
    "limit_activations": "limitActivations",
    "limit_usage": "limitUsage",
    "last_validated_at": "lastValidatedAt",
    "expires_at": "expiresAt",
  });
});

/** @internal */
export type LicenseKeyWithActivations$Outbound = {
  id: string;
  organization_id: string;
  user_id: string;
  benefit_id: string;
  key: string;
  display_key: string;
  status: string;
  limit_activations: number | null;
  usage: number;
  limit_usage: number | null;
  validations: number;
  last_validated_at: string | null;
  expires_at: string | null;
  activations: Array<LicenseKeyActivationBase$Outbound>;
};

/** @internal */
export const LicenseKeyWithActivations$outboundSchema: z.ZodType<
  LicenseKeyWithActivations$Outbound,
  z.ZodTypeDef,
  LicenseKeyWithActivations
> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  benefitId: z.string(),
  key: z.string(),
  displayKey: z.string(),
  status: LicenseKeyStatus$outboundSchema,
  limitActivations: z.nullable(z.number().int()),
  usage: z.number().int(),
  limitUsage: z.nullable(z.number().int()),
  validations: z.number().int(),
  lastValidatedAt: z.nullable(z.date().transform(v => v.toISOString())),
  expiresAt: z.nullable(z.date().transform(v => v.toISOString())),
  activations: z.array(LicenseKeyActivationBase$outboundSchema),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    userId: "user_id",
    benefitId: "benefit_id",
    displayKey: "display_key",
    limitActivations: "limit_activations",
    limitUsage: "limit_usage",
    lastValidatedAt: "last_validated_at",
    expiresAt: "expires_at",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace LicenseKeyWithActivations$ {
  /** @deprecated use `LicenseKeyWithActivations$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyWithActivations$inboundSchema;
  /** @deprecated use `LicenseKeyWithActivations$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyWithActivations$outboundSchema;
  /** @deprecated use `LicenseKeyWithActivations$Outbound` instead. */
  export type Outbound = LicenseKeyWithActivations$Outbound;
}
