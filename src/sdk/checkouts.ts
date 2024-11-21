/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutsCreate } from "../funcs/checkoutsCreate.js";
import { checkoutsGet } from "../funcs/checkoutsGet.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { Custom } from "./custom.js";

export class Checkouts extends ClientSDK {
  private _custom?: Custom;
  get custom(): Custom {
    return (this._custom ??= new Custom(this._options));
  }

  /**
   * Create Checkout
   *
   * @remarks
   * Create a checkout session.
   *
   * @deprecated method: This API is deprecated. We recommend you to use the new custom checkout API, which is more flexible and powerful. Please refer to the documentation for more information.. Use create instead.
   */
  async create(
    request: components.CheckoutLegacyCreate,
    options?: RequestOptions,
  ): Promise<components.CheckoutLegacy> {
    return unwrapAsync(checkoutsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Checkout
   *
   * @remarks
   * Get an active checkout session by ID.
   *
   * @deprecated method: This API is deprecated. We recommend you to use the new custom checkout API, which is more flexible and powerful. Please refer to the documentation for more information..
   */
  async get(
    request: operations.CheckoutsGetRequest,
    options?: RequestOptions,
  ): Promise<components.CheckoutLegacy> {
    return unwrapAsync(checkoutsGet(
      this,
      request,
      options,
    ));
  }
}
