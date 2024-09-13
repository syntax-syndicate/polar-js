/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PolarCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery as encodeFormQuery$ } from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import * as errors from "../models/errors/index.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";
import {
  createPageIterator,
  haltIterator,
  PageIterator,
  Paginator,
} from "../types/operations.js";

/**
 * List Orders
 *
 * @remarks
 * List orders.
 */
export async function ordersList(
  client$: PolarCore,
  request: operations.OrdersListRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.OrdersListResponse,
      | errors.HTTPValidationError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) => operations.OrdersListRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return haltIterator(parsed$);
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const path$ = pathToFunc("/v1/orders/")();

  const query$ = encodeFormQuery$({
    "limit": payload$.limit,
    "organization_id": payload$.organization_id,
    "page": payload$.page,
    "product_id": payload$.product_id,
    "product_price_type": payload$.product_price_type,
    "sorting": payload$.sorting,
    "user_id": payload$.user_id,
  });

  const headers$ = new Headers({
    Accept: "application/json",
  });

  const accessToken$ = await extractSecurity(client$.options$.accessToken);
  const security$ = accessToken$ == null ? {} : { accessToken: accessToken$ };
  const context = {
    operationID: "orders:list",
    oAuth2Scopes: [],
    securitySource: client$.options$.accessToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return haltIterator(requestRes);
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields$ = {
    HttpMeta: { Response: response, Request: request$ },
  };

  const [result$, raw$] = await m$.match<
    operations.OrdersListResponse,
    | errors.HTTPValidationError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.OrdersListResponse$inboundSchema, {
      key: "Result",
    }),
    m$.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    m$.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields$ });
  if (!result$.ok) {
    return haltIterator(result$);
  }

  const nextFunc = (
    responseData: unknown,
  ): Paginator<
    Result<
      operations.OrdersListResponse,
      | errors.HTTPValidationError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >
  > => {
    const page = input$.page || 0;
    const nextPage = page + 1;
    const numPages = dlv(responseData, "pagination.max_page");
    if (numPages == null || numPages <= page) {
      return () => null;
    }

    if (!responseData) {
      return () => null;
    }
    const results = dlv(responseData, "items");
    if (!Array.isArray(results) || !results.length) {
      return () => null;
    }
    const limit = input$.limit || 0;
    if (results.length < limit) {
      return () => null;
    }

    return () =>
      ordersList(
        client$,
        {
          ...input$,
          page: nextPage,
        },
        options,
      );
  };

  const page$ = { ...result$, next: nextFunc(raw$) };
  return { ...page$, ...createPageIterator(page$, (v) => !v.ok) };
}
