/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PolarCore } from "../core.js";
import { dlv } from "../lib/dlv.js";
import { encodeFormQuery } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
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
 * List External Organizations
 *
 * @remarks
 * List external organizations.
 */
export async function externalOrganizationsList(
  client: PolarCore,
  request: operations.ExternalOrganizationsListRequest,
  options?: RequestOptions,
): Promise<
  PageIterator<
    Result<
      operations.ExternalOrganizationsListResponse,
      | errors.HTTPValidationError
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
  const parsed = safeParse(
    request,
    (value) =>
      operations.ExternalOrganizationsListRequest$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return haltIterator(parsed);
  }
  const payload = parsed.value;
  const body = null;

  const path = pathToFunc("/v1/external_organizations/")();

  const query = encodeFormQuery({
    "limit": payload.limit,
    "name": payload.name,
    "organization_id": payload.organization_id,
    "page": payload.page,
    "platform": payload.platform,
    "sorting": payload.sorting,
  });

  const headers = new Headers({
    Accept: "application/json",
  });

  const secConfig = await extractSecurity(client._options.accessToken);
  const securityInput = secConfig == null ? {} : { accessToken: secConfig };
  const requestSecurity = resolveGlobalSecurity(securityInput);

  const context = {
    operationID: "external_organizations:list",
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
    return haltIterator(requestRes);
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return haltIterator(doResult);
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result, raw] = await M.match<
    operations.ExternalOrganizationsListResponse,
    | errors.HTTPValidationError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(200, operations.ExternalOrganizationsListResponse$inboundSchema, {
      key: "Result",
    }),
    M.jsonErr(422, errors.HTTPValidationError$inboundSchema),
    M.fail(["4XX", "5XX"]),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return haltIterator(result);
  }

  const nextFunc = (
    responseData: unknown,
  ): {
    next: Paginator<
      Result<
        operations.ExternalOrganizationsListResponse,
        | errors.HTTPValidationError
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
    const page = request?.page || 0;
    const nextPage = page + 1;
    const numPages = dlv(responseData, "pagination.max_page");
    if (numPages == null || numPages <= page) {
      return { next: () => null };
    }

    if (!responseData) {
      return { next: () => null };
    }
    const results = dlv(responseData, "items");
    if (!Array.isArray(results) || !results.length) {
      return { next: () => null };
    }
    const limit = request?.limit || 0;
    if (results.length < limit) {
      return { next: () => null };
    }

    const nextVal = () =>
      externalOrganizationsList(
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
  return { ...page, ...createPageIterator(page, (v) => !v.ok) };
}
