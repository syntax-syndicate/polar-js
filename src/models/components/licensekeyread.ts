/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  LicenseKeyCustomer,
  LicenseKeyCustomer$inboundSchema,
  LicenseKeyCustomer$Outbound,
  LicenseKeyCustomer$outboundSchema,
} from "./licensekeycustomer.js";
import {
  LicenseKeyStatus,
  LicenseKeyStatus$inboundSchema,
  LicenseKeyStatus$outboundSchema,
} from "./licensekeystatus.js";
import {
  LicenseKeyUser,
  LicenseKeyUser$inboundSchema,
  LicenseKeyUser$Outbound,
  LicenseKeyUser$outboundSchema,
} from "./licensekeyuser.js";

export type LicenseKeyRead = {
  id: string;
  organizationId: string;
  /**
   * @deprecated field: This will be removed in a future release, please migrate away from it as soon as possible.
   */
  userId: string;
  customerId: string;
  user: LicenseKeyUser;
  customer: LicenseKeyCustomer;
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
};

/** @internal */
export const LicenseKeyRead$inboundSchema: z.ZodType<
  LicenseKeyRead,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  organization_id: z.string(),
  user_id: z.string(),
  customer_id: z.string(),
  user: LicenseKeyUser$inboundSchema,
  customer: LicenseKeyCustomer$inboundSchema,
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
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "user_id": "userId",
    "customer_id": "customerId",
    "benefit_id": "benefitId",
    "display_key": "displayKey",
    "limit_activations": "limitActivations",
    "limit_usage": "limitUsage",
    "last_validated_at": "lastValidatedAt",
    "expires_at": "expiresAt",
  });
});

/** @internal */
export type LicenseKeyRead$Outbound = {
  id: string;
  organization_id: string;
  user_id: string;
  customer_id: string;
  user: LicenseKeyUser$Outbound;
  customer: LicenseKeyCustomer$Outbound;
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
};

/** @internal */
export const LicenseKeyRead$outboundSchema: z.ZodType<
  LicenseKeyRead$Outbound,
  z.ZodTypeDef,
  LicenseKeyRead
> = z.object({
  id: z.string(),
  organizationId: z.string(),
  userId: z.string(),
  customerId: z.string(),
  user: LicenseKeyUser$outboundSchema,
  customer: LicenseKeyCustomer$outboundSchema,
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
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    userId: "user_id",
    customerId: "customer_id",
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
export namespace LicenseKeyRead$ {
  /** @deprecated use `LicenseKeyRead$inboundSchema` instead. */
  export const inboundSchema = LicenseKeyRead$inboundSchema;
  /** @deprecated use `LicenseKeyRead$outboundSchema` instead. */
  export const outboundSchema = LicenseKeyRead$outboundSchema;
  /** @deprecated use `LicenseKeyRead$Outbound` instead. */
  export type Outbound = LicenseKeyRead$Outbound;
}

export function licenseKeyReadToJSON(licenseKeyRead: LicenseKeyRead): string {
  return JSON.stringify(LicenseKeyRead$outboundSchema.parse(licenseKeyRead));
}

export function licenseKeyReadFromJSON(
  jsonString: string,
): SafeParseResult<LicenseKeyRead, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => LicenseKeyRead$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'LicenseKeyRead' from JSON`,
  );
}
