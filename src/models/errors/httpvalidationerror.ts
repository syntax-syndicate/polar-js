/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import {
  ValidationError,
  ValidationError$inboundSchema,
  ValidationError$Outbound,
  ValidationError$outboundSchema,
} from "../components/validationerror.js";

export type HTTPValidationErrorData = {
  detail?: Array<ValidationError> | undefined;
};

export class HTTPValidationError extends Error {
  detail?: Array<ValidationError> | undefined;

  /** The original data that was passed to this error instance. */
  data$: HTTPValidationErrorData;

  constructor(err: HTTPValidationErrorData) {
    const message = "message" in err && typeof err.message === "string"
      ? err.message
      : `API error occurred: ${JSON.stringify(err)}`;
    super(message);
    this.data$ = err;

    if (err.detail != null) this.detail = err.detail;

    this.name = "HTTPValidationError";
  }
}

/** @internal */
export const HTTPValidationError$inboundSchema: z.ZodType<
  HTTPValidationError,
  z.ZodTypeDef,
  unknown
> = z.object({
  detail: z.array(ValidationError$inboundSchema).optional(),
})
  .transform((v) => {
    return new HTTPValidationError(v);
  });

/** @internal */
export type HTTPValidationError$Outbound = {
  detail?: Array<ValidationError$Outbound> | undefined;
};

/** @internal */
export const HTTPValidationError$outboundSchema: z.ZodType<
  HTTPValidationError$Outbound,
  z.ZodTypeDef,
  HTTPValidationError
> = z.instanceof(HTTPValidationError)
  .transform(v => v.data$)
  .pipe(z.object({
    detail: z.array(ValidationError$outboundSchema).optional(),
  }));

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace HTTPValidationError$ {
  /** @deprecated use `HTTPValidationError$inboundSchema` instead. */
  export const inboundSchema = HTTPValidationError$inboundSchema;
  /** @deprecated use `HTTPValidationError$outboundSchema` instead. */
  export const outboundSchema = HTTPValidationError$outboundSchema;
  /** @deprecated use `HTTPValidationError$Outbound` instead. */
  export type Outbound = HTTPValidationError$Outbound;
}
