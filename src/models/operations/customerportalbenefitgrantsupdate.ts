/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import {
  CustomerBenefitGrantUpdate,
  CustomerBenefitGrantUpdate$inboundSchema,
  CustomerBenefitGrantUpdate$Outbound,
  CustomerBenefitGrantUpdate$outboundSchema,
} from "../components/customerbenefitgrantupdate.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type CustomerPortalBenefitGrantsUpdateSecurity = {
  customerSession: string;
};

export type CustomerPortalBenefitGrantsUpdateRequest = {
  /**
   * The benefit grant ID.
   */
  id: string;
  customerBenefitGrantUpdate: CustomerBenefitGrantUpdate;
};

/** @internal */
export const CustomerPortalBenefitGrantsUpdateSecurity$inboundSchema: z.ZodType<
  CustomerPortalBenefitGrantsUpdateSecurity,
  z.ZodTypeDef,
  unknown
> = z.object({
  customer_session: z.string(),
}).transform((v) => {
  return remap$(v, {
    "customer_session": "customerSession",
  });
});

/** @internal */
export type CustomerPortalBenefitGrantsUpdateSecurity$Outbound = {
  customer_session: string;
};

/** @internal */
export const CustomerPortalBenefitGrantsUpdateSecurity$outboundSchema:
  z.ZodType<
    CustomerPortalBenefitGrantsUpdateSecurity$Outbound,
    z.ZodTypeDef,
    CustomerPortalBenefitGrantsUpdateSecurity
  > = z.object({
    customerSession: z.string(),
  }).transform((v) => {
    return remap$(v, {
      customerSession: "customer_session",
    });
  });

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalBenefitGrantsUpdateSecurity$ {
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateSecurity$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalBenefitGrantsUpdateSecurity$inboundSchema;
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateSecurity$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalBenefitGrantsUpdateSecurity$outboundSchema;
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateSecurity$Outbound` instead. */
  export type Outbound = CustomerPortalBenefitGrantsUpdateSecurity$Outbound;
}

export function customerPortalBenefitGrantsUpdateSecurityToJSON(
  customerPortalBenefitGrantsUpdateSecurity:
    CustomerPortalBenefitGrantsUpdateSecurity,
): string {
  return JSON.stringify(
    CustomerPortalBenefitGrantsUpdateSecurity$outboundSchema.parse(
      customerPortalBenefitGrantsUpdateSecurity,
    ),
  );
}

export function customerPortalBenefitGrantsUpdateSecurityFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalBenefitGrantsUpdateSecurity,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalBenefitGrantsUpdateSecurity$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalBenefitGrantsUpdateSecurity' from JSON`,
  );
}

/** @internal */
export const CustomerPortalBenefitGrantsUpdateRequest$inboundSchema: z.ZodType<
  CustomerPortalBenefitGrantsUpdateRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  CustomerBenefitGrantUpdate: CustomerBenefitGrantUpdate$inboundSchema,
}).transform((v) => {
  return remap$(v, {
    "CustomerBenefitGrantUpdate": "customerBenefitGrantUpdate",
  });
});

/** @internal */
export type CustomerPortalBenefitGrantsUpdateRequest$Outbound = {
  id: string;
  CustomerBenefitGrantUpdate: CustomerBenefitGrantUpdate$Outbound;
};

/** @internal */
export const CustomerPortalBenefitGrantsUpdateRequest$outboundSchema: z.ZodType<
  CustomerPortalBenefitGrantsUpdateRequest$Outbound,
  z.ZodTypeDef,
  CustomerPortalBenefitGrantsUpdateRequest
> = z.object({
  id: z.string(),
  customerBenefitGrantUpdate: CustomerBenefitGrantUpdate$outboundSchema,
}).transform((v) => {
  return remap$(v, {
    customerBenefitGrantUpdate: "CustomerBenefitGrantUpdate",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace CustomerPortalBenefitGrantsUpdateRequest$ {
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateRequest$inboundSchema` instead. */
  export const inboundSchema =
    CustomerPortalBenefitGrantsUpdateRequest$inboundSchema;
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateRequest$outboundSchema` instead. */
  export const outboundSchema =
    CustomerPortalBenefitGrantsUpdateRequest$outboundSchema;
  /** @deprecated use `CustomerPortalBenefitGrantsUpdateRequest$Outbound` instead. */
  export type Outbound = CustomerPortalBenefitGrantsUpdateRequest$Outbound;
}

export function customerPortalBenefitGrantsUpdateRequestToJSON(
  customerPortalBenefitGrantsUpdateRequest:
    CustomerPortalBenefitGrantsUpdateRequest,
): string {
  return JSON.stringify(
    CustomerPortalBenefitGrantsUpdateRequest$outboundSchema.parse(
      customerPortalBenefitGrantsUpdateRequest,
    ),
  );
}

export function customerPortalBenefitGrantsUpdateRequestFromJSON(
  jsonString: string,
): SafeParseResult<
  CustomerPortalBenefitGrantsUpdateRequest,
  SDKValidationError
> {
  return safeParse(
    jsonString,
    (x) =>
      CustomerPortalBenefitGrantsUpdateRequest$inboundSchema.parse(
        JSON.parse(x),
      ),
    `Failed to parse 'CustomerPortalBenefitGrantsUpdateRequest' from JSON`,
  );
}
