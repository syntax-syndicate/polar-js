/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PolarCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
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
import {
  HTTPValidationError,
  HTTPValidationError$inboundSchema,
} from "../models/errors/httpvalidationerror.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import {
  OrdersListRequest,
  OrdersListRequest$outboundSchema,
  OrdersListResponse,
  OrdersListResponse$inboundSchema,
} from "../models/operations/orderslist.js";
import { APICall, APIPromise } from "../types/async.js";
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
 *
 * **Scopes**: `orders:read`
 */
export function ordersList(
  client: PolarCore,
  request: OrdersListRequest,
  options?: RequestOptions,
): APIPromise<
  PageIterator<
    Result<
      OrdersListResponse,
      | HTTPValidationError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    { page: number }
  >
> {
  return new APIPromise($do(
    client,
    request,
    options,
  ));
}

async function $do(
  client: PolarCore,
  request: OrdersListRequest,
  options?: RequestOptions,
): Promise<
  [
    PageIterator<
      Result<
        OrdersListResponse,
        | HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >,
      { page: number }
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => OrdersListRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [haltIterator(parsed), { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v1/orders/")();

  const query = encodeFormQuery({
    "checkout_id": payload.checkout_id,
    "customer_id": payload.customer_id,
    "discount_id": payload.discount_id,
    "limit": payload.limit,
    "organization_id": payload.organization_id,
    "page": payload.page,
    "product_id": payload.product_id,
    "product_price_type": payload.product_price_type,
    "sorting": payload.sorting,
  });

  const headers = new Headers(compactMap({
    Accept: "application/json",
  }));

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "orders:list",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: client._options.accessToken,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "GET",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    query: query,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [haltIterator(requestRes), { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [haltIterator(doResult), { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    OrdersListResponse,
    | HTTPValidationError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, OrdersListResponse$inboundSchema, { key: "Result" }),
    M.jsonErr(422, HTTPValidationError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [haltIterator(result), {
      status: "complete",
      request: req,
      response,
    }];
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        OrdersListResponse,
        | HTTPValidationError
        | SDKError
        | SDKValidationError
        | UnexpectedClientError
        | InvalidRequestError
        | RequestAbortedError
        | RequestTimeoutError
        | ConnectionError
      >
    >;
    "~next"?: { page: number };
  } => {
    const page = request?.page ?? 1;
    const nextPage = page + 1;
    const numPages = dlv(responseData, "pagination.max_page");
    if (typeof numPages !== "number" || numPages <= page) {
      return { next: () => null };
    }

    if (!responseData) {
      return { next: () => null };
    }
    const results = dlv(responseData, "items");
    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = request?.limit ?? 10;
    if (results.length < limit) {
      return { next: () => null };
    }

    const nextVal = () =>
      ordersList(
        client,
        {
          ...request,
          page: nextPage,
        },
        options,
      );

    return { next: nextVal, "~next": { page: nextPage } };
  };

  const page = { ...result, ...nextFunc(raw) };
  return [{ ...page, ...createPageIterator(page, (v) => !v.ok) }, {
    status: "complete",
    request: req,
    response,
  }];
}
