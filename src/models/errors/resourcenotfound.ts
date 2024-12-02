/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const ErrorT = {
  ResourceNotFound: "ResourceNotFound",
} as const;
export type ErrorT = ClosedEnum<typeof ErrorT>;

export type ResourceNotFoundData = {
  error: "ResourceNotFound";
  detail: string;
};

export class ResourceNotFound extends Error {
  error: "ResourceNotFound";
  detail: string;

  /** The original data that was passed to this error instance. */
  data$: ResourceNotFoundData;

  constructor(err: ResourceNotFoundData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    this.error = err.error;
    this.detail = err.detail;

    this.name = "ResourceNotFound";
  }
}

/** @internal */
export const ErrorT$inboundSchema: z.ZodNativeEnum<typeof ErrorT> = z
  .nativeEnum(ErrorT);

/** @internal */
export const ErrorT$outboundSchema: z.ZodNativeEnum<typeof ErrorT> =
  ErrorT$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ErrorT$ {
  /** @deprecated use `ErrorT$inboundSchema` instead. */
  export const inboundSchema = ErrorT$inboundSchema;
  /** @deprecated use `ErrorT$outboundSchema` instead. */
  export const outboundSchema = ErrorT$outboundSchema;
}

/** @internal */
export const ResourceNotFound$inboundSchema: z.ZodType<
  ResourceNotFound,
  z.ZodTypeDef,
  unknown
> = z.object({
  error: z.literal("ResourceNotFound"),
  detail: z.string(),
})
  .transform((v) => {
    return new ResourceNotFound(v);
  });

/** @internal */
export type ResourceNotFound$Outbound = {
  error: "ResourceNotFound";
  detail: string;
};

/** @internal */
export const ResourceNotFound$outboundSchema: z.ZodType<
  ResourceNotFound$Outbound,
  z.ZodTypeDef,
  ResourceNotFound
> = z.instanceof(ResourceNotFound)
  .transform(v => v.data$)
  .pipe(z.object({
    error: z.literal("ResourceNotFound").default("ResourceNotFound"),
    detail: z.string(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ResourceNotFound$ {
  /** @deprecated use `ResourceNotFound$inboundSchema` instead. */
  export const inboundSchema = ResourceNotFound$inboundSchema;
  /** @deprecated use `ResourceNotFound$outboundSchema` instead. */
  export const outboundSchema = ResourceNotFound$outboundSchema;
  /** @deprecated use `ResourceNotFound$Outbound` instead. */
  export type Outbound = ResourceNotFound$Outbound;
}
