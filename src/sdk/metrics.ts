/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metricsGet } from "../funcs/metricsGet.js";
import { metricsLimits } from "../funcs/metricsLimits.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { MetricsLimits } from "../models/components/metricslimits.js";
import { MetricsResponse } from "../models/components/metricsresponse.js";
import { MetricsGetRequest } from "../models/operations/metricsget.js";
import { unwrapAsync } from "../types/fp.js";

export class Metrics extends ClientSDK {
  /**
   * Get Metrics
   *
   * @remarks
   * Get metrics about your orders and subscriptions.
   *
   * **Scopes**: `metrics:read`
   */
  async get(
    request: MetricsGetRequest,
    options?: RequestOptions,
  ): Promise<MetricsResponse> {
    return unwrapAsync(metricsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Metrics Limits
   *
   * @remarks
   * Get the interval limits for the metrics endpoint.
   *
   * **Scopes**: `metrics:read`
   */
  async limits(
    options?: RequestOptions,
  ): Promise<MetricsLimits> {
    return unwrapAsync(metricsLimits(
      this,
      options,
    ));
  }
}
