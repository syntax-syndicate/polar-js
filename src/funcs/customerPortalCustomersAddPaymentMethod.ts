/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { PolarCore } from "../core.js";
import { encodeJSON } from "../lib/encodings.js";
import * as M from "../lib/matchers.js";
import { compactMap } from "../lib/primitives.js";
import { safeParse } from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { resolveSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  CustomerPaymentMethodCreate,
  CustomerPaymentMethodCreate$outboundSchema,
} from "../models/components/customerpaymentmethodcreate.js";
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
  CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod,
  CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod$inboundSchema,
  CustomerPortalCustomersAddPaymentMethodSecurity,
} from "../models/operations/customerportalcustomersaddpaymentmethod.js";
import { APICall, APIPromise } from "../types/async.js";
import { Result } from "../types/fp.js";

/**
 * Add Customer Payment Method
 *
 * @remarks
 * Add a payment method to the authenticated customer.
 *
 * **Scopes**: `customer_portal:read` `customer_portal:write`
 */
export function customerPortalCustomersAddPaymentMethod(
  client: PolarCore,
  security: CustomerPortalCustomersAddPaymentMethodSecurity,
  request: CustomerPaymentMethodCreate,
  options?: RequestOptions,
): APIPromise<
  Result<
    CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod,
    | HTTPValidationError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  return new APIPromise($do(
    client,
    security,
    request,
    options,
  ));
}

async function $do(
  client: PolarCore,
  security: CustomerPortalCustomersAddPaymentMethodSecurity,
  request: CustomerPaymentMethodCreate,
  options?: RequestOptions,
): Promise<
  [
    Result<
      CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod,
      | HTTPValidationError
      | SDKError
      | SDKValidationError
      | UnexpectedClientError
      | InvalidRequestError
      | RequestAbortedError
      | RequestTimeoutError
      | ConnectionError
    >,
    APICall,
  ]
> {
  const parsed = safeParse(
    request,
    (value) => CustomerPaymentMethodCreate$outboundSchema.parse(value),
    "Input validation failed",
  );
  if (!parsed.ok) {
    return [parsed, { status: "invalid" }];
  }
  const payload = parsed.value;
  const body = encodeJSON("body", payload, { explode: true });

  const path = pathToFunc("/v1/customer-portal/customers/me/payment-methods")();

  const headers = new Headers(compactMap({
    "Content-Type": "application/json",
    Accept: "application/json",
  }));

  const requestSecurity = resolveSecurity(
    [
      {
        fieldName: "Authorization",
        type: "http:bearer",
        value: security?.customerSession,
      },
    ],
  );

  const context = {
    baseURL: options?.serverURL ?? client._baseURL ?? "",
    operationID: "customer_portal:customers:add_payment_method",
    oAuth2Scopes: [],

    resolvedSecurity: requestSecurity,

    securitySource: security,
    retryConfig: options?.retries
      || client._options.retryConfig
      || { strategy: "none" },
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  };

  const requestRes = client._createRequest(context, {
    security: requestSecurity,
    method: "POST",
    baseURL: options?.serverURL,
    path: path,
    headers: headers,
    body: body,
    timeoutMs: options?.timeoutMs || client._options.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return [requestRes, { status: "invalid" }];
  }
  const req = requestRes.value;

  const doResult = await client._do(req, {
    context,
    errorCodes: ["422", "4XX", "5XX"],
    retryConfig: context.retryConfig,
    retryCodes: context.retryCodes,
  });
  if (!doResult.ok) {
    return [doResult, { status: "request-error", request: req }];
  }
  const response = doResult.value;

  const responseFields = {
    HttpMeta: { Response: response, Request: req },
  };

  const [result] = await M.match<
    CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod,
    | HTTPValidationError
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    M.json(
      201,
      CustomerPortalCustomersAddPaymentMethodResponseCustomerPortalCustomersAddPaymentMethod$inboundSchema,
    ),
    M.jsonErr(422, HTTPValidationError$inboundSchema),
    M.fail("4XX"),
    M.fail("5XX"),
  )(response, { extraFields: responseFields });
  if (!result.ok) {
    return [result, { status: "complete", request: req, response }];
  }

  return [result, { status: "complete", request: req, response }];
}
