/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { remap as remap$ } from "../../lib/primitives.js";

export type Reactions = {
  totalCount: number;
  plusOne: number;
  minusOne: number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

/** @internal */
export const Reactions$inboundSchema: z.ZodType<
  Reactions,
  z.ZodTypeDef,
  unknown
> = z.object({
  total_count: z.number().int(),
  plus_one: z.number().int(),
  minus_one: z.number().int(),
  laugh: z.number().int(),
  hooray: z.number().int(),
  confused: z.number().int(),
  heart: z.number().int(),
  rocket: z.number().int(),
  eyes: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    "total_count": "totalCount",
    "plus_one": "plusOne",
    "minus_one": "minusOne",
  });
});

/** @internal */
export type Reactions$Outbound = {
  total_count: number;
  plus_one: number;
  minus_one: number;
  laugh: number;
  hooray: number;
  confused: number;
  heart: number;
  rocket: number;
  eyes: number;
};

/** @internal */
export const Reactions$outboundSchema: z.ZodType<
  Reactions$Outbound,
  z.ZodTypeDef,
  Reactions
> = z.object({
  totalCount: z.number().int(),
  plusOne: z.number().int(),
  minusOne: z.number().int(),
  laugh: z.number().int(),
  hooray: z.number().int(),
  confused: z.number().int(),
  heart: z.number().int(),
  rocket: z.number().int(),
  eyes: z.number().int(),
}).transform((v) => {
  return remap$(v, {
    totalCount: "total_count",
    plusOne: "plus_one",
    minusOne: "minus_one",
  });
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Reactions$ {
  /** @deprecated use `Reactions$inboundSchema` instead. */
  export const inboundSchema = Reactions$inboundSchema;
  /** @deprecated use `Reactions$outboundSchema` instead. */
  export const outboundSchema = Reactions$outboundSchema;
  /** @deprecated use `Reactions$Outbound` instead. */
  export type Outbound = Reactions$Outbound;
}
