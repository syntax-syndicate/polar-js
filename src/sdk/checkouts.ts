/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutsClientConfirm } from "../funcs/checkoutsClientConfirm.js";
import { checkoutsClientGet } from "../funcs/checkoutsClientGet.js";
import { checkoutsClientUpdate } from "../funcs/checkoutsClientUpdate.js";
import { checkoutsCreate } from "../funcs/checkoutsCreate.js";
import { checkoutsGet } from "../funcs/checkoutsGet.js";
import { checkoutsList } from "../funcs/checkoutsList.js";
import { checkoutsUpdate } from "../funcs/checkoutsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Checkout } from "../models/components/checkout.js";
import { CheckoutCreate } from "../models/components/checkoutcreate.js";
import { CheckoutPublic } from "../models/components/checkoutpublic.js";
import { CheckoutPublicConfirmed } from "../models/components/checkoutpublicconfirmed.js";
import { CheckoutsClientConfirmRequest } from "../models/operations/checkoutsclientconfirm.js";
import { CheckoutsClientGetRequest } from "../models/operations/checkoutsclientget.js";
import { CheckoutsClientUpdateRequest } from "../models/operations/checkoutsclientupdate.js";
import { CheckoutsGetRequest } from "../models/operations/checkoutsget.js";
import {
  CheckoutsListRequest,
  CheckoutsListResponse,
} from "../models/operations/checkoutslist.js";
import { CheckoutsUpdateRequest } from "../models/operations/checkoutsupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Checkouts extends ClientSDK {
  /**
   * List Checkout Sessions
   *
   * @remarks
   * List checkout sessions.
   *
   * **Scopes**: `checkouts:read` `checkouts:write`
   */
  async list(
    request: CheckoutsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<CheckoutsListResponse, { page: number }>> {
    return unwrapResultIterator(checkoutsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Checkout Session
   *
   * @remarks
   * Create a checkout session.
   *
   * **Scopes**: `checkouts:write`
   */
  async create(
    request: CheckoutCreate,
    options?: RequestOptions,
  ): Promise<Checkout> {
    return unwrapAsync(checkoutsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Checkout Session
   *
   * @remarks
   * Get a checkout session by ID.
   *
   * **Scopes**: `checkouts:read` `checkouts:write`
   */
  async get(
    request: CheckoutsGetRequest,
    options?: RequestOptions,
  ): Promise<Checkout> {
    return unwrapAsync(checkoutsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Checkout Session
   *
   * @remarks
   * Update a checkout session.
   *
   * **Scopes**: `checkouts:write`
   */
  async update(
    request: CheckoutsUpdateRequest,
    options?: RequestOptions,
  ): Promise<Checkout> {
    return unwrapAsync(checkoutsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Checkout Session from Client
   *
   * @remarks
   * Get a checkout session by client secret.
   */
  async clientGet(
    request: CheckoutsClientGetRequest,
    options?: RequestOptions,
  ): Promise<CheckoutPublic> {
    return unwrapAsync(checkoutsClientGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Checkout Session from Client
   *
   * @remarks
   * Update a checkout session by client secret.
   */
  async clientUpdate(
    request: CheckoutsClientUpdateRequest,
    options?: RequestOptions,
  ): Promise<CheckoutPublic> {
    return unwrapAsync(checkoutsClientUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Confirm Checkout Session from Client
   *
   * @remarks
   * Confirm a checkout session by client secret.
   *
   * Orders and subscriptions will be processed.
   */
  async clientConfirm(
    request: CheckoutsClientConfirmRequest,
    options?: RequestOptions,
  ): Promise<CheckoutPublicConfirmed> {
    return unwrapAsync(checkoutsClientConfirm(
      this,
      request,
      options,
    ));
  }
}
