/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";

export type EventCreateExternalCustomerMetadata = string | number | boolean;

export type EventCreateExternalCustomer = {
  /**
   * Key-value object allowing you to store additional information.
   *
   * @remarks
   *
   * The key must be a string with a maximum length of **40 characters**.
   * The value must be either:
   *
   * * A string with a maximum length of **500 characters**
   * * An integer
   * * A boolean
   *
   * You can store up to **50 key-value pairs**.
   */
  metadata?: { [k: string]: string | number | boolean } | undefined;
  /**
   * The timestamp of the event.
   */
  timestamp?: Date | undefined;
  /**
   * The name of the event.
   */
  name: string;
  /**
   * The ID of the organization owning the event. **Required unless you use an organization token.**
   */
  organizationId?: string | null | undefined;
  /**
   * ID of the customer in your system associated with the event.
   */
  externalCustomerId: string;
};

/** @internal */
export const EventCreateExternalCustomerMetadata$inboundSchema: z.ZodType<
  EventCreateExternalCustomerMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type EventCreateExternalCustomerMetadata$Outbound =
  | string
  | number
  | boolean;

/** @internal */
export const EventCreateExternalCustomerMetadata$outboundSchema: z.ZodType<
  EventCreateExternalCustomerMetadata$Outbound,
  z.ZodTypeDef,
  EventCreateExternalCustomerMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventCreateExternalCustomerMetadata$ {
  /** @deprecated use `EventCreateExternalCustomerMetadata$inboundSchema` instead. */
  export const inboundSchema =
    EventCreateExternalCustomerMetadata$inboundSchema;
  /** @deprecated use `EventCreateExternalCustomerMetadata$outboundSchema` instead. */
  export const outboundSchema =
    EventCreateExternalCustomerMetadata$outboundSchema;
  /** @deprecated use `EventCreateExternalCustomerMetadata$Outbound` instead. */
  export type Outbound = EventCreateExternalCustomerMetadata$Outbound;
}

export function eventCreateExternalCustomerMetadataToJSON(
  eventCreateExternalCustomerMetadata: EventCreateExternalCustomerMetadata,
): string {
  return JSON.stringify(
    EventCreateExternalCustomerMetadata$outboundSchema.parse(
      eventCreateExternalCustomerMetadata,
    ),
  );
}

export function eventCreateExternalCustomerMetadataFromJSON(
  jsonString: string,
): SafeParseResult<EventCreateExternalCustomerMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) =>
      EventCreateExternalCustomerMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventCreateExternalCustomerMetadata' from JSON`,
  );
}

/** @internal */
export const EventCreateExternalCustomer$inboundSchema: z.ZodType<
  EventCreateExternalCustomer,
  z.ZodTypeDef,
  unknown
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  timestamp: z.string().datetime({ offset: true }).transform(v => new Date(v))
    .optional(),
  name: z.string(),
  organization_id: z.nullable(z.string()).optional(),
  external_customer_id: z.string(),
}).transform((v) => {
  return remap$(v, {
    "organization_id": "organizationId",
    "external_customer_id": "externalCustomerId",
  });
});

/** @internal */
export type EventCreateExternalCustomer$Outbound = {
  metadata?: { [k: string]: string | number | boolean } | undefined;
  timestamp?: string | undefined;
  name: string;
  organization_id?: string | null | undefined;
  external_customer_id: string;
};

/** @internal */
export const EventCreateExternalCustomer$outboundSchema: z.ZodType<
  EventCreateExternalCustomer$Outbound,
  z.ZodTypeDef,
  EventCreateExternalCustomer
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()]))
    .optional(),
  timestamp: z.date().transform(v => v.toISOString()).optional(),
  name: z.string(),
  organizationId: z.nullable(z.string()).optional(),
  externalCustomerId: z.string(),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    externalCustomerId: "external_customer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventCreateExternalCustomer$ {
  /** @deprecated use `EventCreateExternalCustomer$inboundSchema` instead. */
  export const inboundSchema = EventCreateExternalCustomer$inboundSchema;
  /** @deprecated use `EventCreateExternalCustomer$outboundSchema` instead. */
  export const outboundSchema = EventCreateExternalCustomer$outboundSchema;
  /** @deprecated use `EventCreateExternalCustomer$Outbound` instead. */
  export type Outbound = EventCreateExternalCustomer$Outbound;
}

export function eventCreateExternalCustomerToJSON(
  eventCreateExternalCustomer: EventCreateExternalCustomer,
): string {
  return JSON.stringify(
    EventCreateExternalCustomer$outboundSchema.parse(
      eventCreateExternalCustomer,
    ),
  );
}

export function eventCreateExternalCustomerFromJSON(
  jsonString: string,
): SafeParseResult<EventCreateExternalCustomer, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventCreateExternalCustomer$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventCreateExternalCustomer' from JSON`,
  );
}
