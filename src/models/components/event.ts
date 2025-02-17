/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";
import { safeParse } from "../../lib/schemas.js";
import { Result as SafeParseResult } from "../../types/fp.js";
import { SDKValidationError } from "../errors/sdkvalidationerror.js";
import {
  Customer,
  Customer$inboundSchema,
  Customer$Outbound,
  Customer$outboundSchema,
} from "./customer.js";
import {
  EventSource,
  EventSource$inboundSchema,
  EventSource$outboundSchema,
} from "./eventsource.js";

export type EventMetadata = string | number | boolean;

export type Event = {
  metadata: { [k: string]: string | number | boolean };
  /**
   * The ID of the object.
   */
  id: string;
  /**
   * The timestamp of the event.
   */
  timestamp: Date;
  /**
   * The name of the event.
   */
  name: string;
  source: EventSource;
  /**
   * The ID of the organization owning the event.
   */
  organizationId: string;
  /**
   * ID of the customer in your Polar organization associated with the event.
   */
  customerId: string | null;
  /**
   * The customer associated with the event.
   */
  customer: Customer | null;
  /**
   * ID of the customer in your system associated with the event.
   */
  externalCustomerId: string | null;
};

/** @internal */
export const EventMetadata$inboundSchema: z.ZodType<
  EventMetadata,
  z.ZodTypeDef,
  unknown
> = z.union([z.string(), z.number().int(), z.boolean()]);

/** @internal */
export type EventMetadata$Outbound = string | number | boolean;

/** @internal */
export const EventMetadata$outboundSchema: z.ZodType<
  EventMetadata$Outbound,
  z.ZodTypeDef,
  EventMetadata
> = z.union([z.string(), z.number().int(), z.boolean()]);

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace EventMetadata$ {
  /** @deprecated use `EventMetadata$inboundSchema` instead. */
  export const inboundSchema = EventMetadata$inboundSchema;
  /** @deprecated use `EventMetadata$outboundSchema` instead. */
  export const outboundSchema = EventMetadata$outboundSchema;
  /** @deprecated use `EventMetadata$Outbound` instead. */
  export type Outbound = EventMetadata$Outbound;
}

export function eventMetadataToJSON(eventMetadata: EventMetadata): string {
  return JSON.stringify(EventMetadata$outboundSchema.parse(eventMetadata));
}

export function eventMetadataFromJSON(
  jsonString: string,
): SafeParseResult<EventMetadata, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => EventMetadata$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'EventMetadata' from JSON`,
  );
}

/** @internal */
export const Event$inboundSchema: z.ZodType<Event, z.ZodTypeDef, unknown> = z
  .object({
    metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
    id: z.string(),
    timestamp: z.string().datetime({ offset: true }).transform(v =>
      new Date(v)
    ),
    name: z.string(),
    source: EventSource$inboundSchema,
    organization_id: z.string(),
    customer_id: z.nullable(z.string()),
    customer: z.nullable(Customer$inboundSchema),
    external_customer_id: z.nullable(z.string()),
  }).transform((v) => {
    return remap$(v, {
      "organization_id": "organizationId",
      "customer_id": "customerId",
      "external_customer_id": "externalCustomerId",
    });
  });

/** @internal */
export type Event$Outbound = {
  metadata: { [k: string]: string | number | boolean };
  id: string;
  timestamp: string;
  name: string;
  source: string;
  organization_id: string;
  customer_id: string | null;
  customer: Customer$Outbound | null;
  external_customer_id: string | null;
};

/** @internal */
export const Event$outboundSchema: z.ZodType<
  Event$Outbound,
  z.ZodTypeDef,
  Event
> = z.object({
  metadata: z.record(z.union([z.string(), z.number().int(), z.boolean()])),
  id: z.string(),
  timestamp: z.date().transform(v => v.toISOString()),
  name: z.string(),
  source: EventSource$outboundSchema,
  organizationId: z.string(),
  customerId: z.nullable(z.string()),
  customer: z.nullable(Customer$outboundSchema),
  externalCustomerId: z.nullable(z.string()),
}).transform((v) => {
  return remap$(v, {
    organizationId: "organization_id",
    customerId: "customer_id",
    externalCustomerId: "external_customer_id",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Event$ {
  /** @deprecated use `Event$inboundSchema` instead. */
  export const inboundSchema = Event$inboundSchema;
  /** @deprecated use `Event$outboundSchema` instead. */
  export const outboundSchema = Event$outboundSchema;
  /** @deprecated use `Event$Outbound` instead. */
  export type Outbound = Event$Outbound;
}

export function eventToJSON(event: Event): string {
  return JSON.stringify(Event$outboundSchema.parse(event));
}

export function eventFromJSON(
  jsonString: string,
): SafeParseResult<Event, SDKValidationError> {
  return safeParse(
    jsonString,
    (x) => Event$inboundSchema.parse(JSON.parse(x)),
    `Failed to parse 'Event' from JSON`,
  );
}
