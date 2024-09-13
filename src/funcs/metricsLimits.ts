/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PolarCore } from "../core.js";
import * as m$ from "../lib/matchers.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import * as components from "../models/components/index.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import { Result } from "../types/fp.js";

/**
 * Get Metrics Limits
 *
 * @remarks
 * Get the interval limits for the metrics endpoint.
 */
export async function metricsLimits(
  client$: PolarCore,
  options?: RequestOptions,
): Promise<
  Result<
    components.MetricsLimits,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const path$ = pathToFunc("/v1/metrics/limits")();

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const accessToken$ = await extractSecurity(client$.options$.accessToken);
  const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
  const context = {
    operationID: "metrics:limits",
    oAuth2Scopes: [],
    securitySource: client$.options$.accessToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    components.MetricsLimits,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, components.MetricsLimits$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
