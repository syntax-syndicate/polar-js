/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { discountsCreate } from "../funcs/discountsCreate.js";
import { discountsDelete } from "../funcs/discountsDelete.js";
import { discountsGet } from "../funcs/discountsGet.js";
import { discountsList } from "../funcs/discountsList.js";
import { discountsUpdate } from "../funcs/discountsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Discount } from "../models/components/discount.js";
import { DiscountCreate } from "../models/components/discountcreate.js";
import { DiscountsDeleteRequest } from "../models/operations/discountsdelete.js";
import { DiscountsGetRequest } from "../models/operations/discountsget.js";
import {
  DiscountsListRequest,
  DiscountsListResponse,
} from "../models/operations/discountslist.js";
import { DiscountsUpdateRequest } from "../models/operations/discountsupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Discounts extends ClientSDK {
  /**
   * List Discounts
   *
   * @remarks
   * List discounts.
   *
   * **Scopes**: `discounts:read` `discounts:write`
   */
  async list(
    request: DiscountsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<DiscountsListResponse, { page: number }>> {
    return unwrapResultIterator(discountsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Discount
   *
   * @remarks
   * Create a discount.
   *
   * **Scopes**: `discounts:write`
   */
  async create(
    request: DiscountCreate,
    options?: RequestOptions,
  ): Promise<Discount> {
    return unwrapAsync(discountsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Discount
   *
   * @remarks
   * Get a discount by ID.
   *
   * **Scopes**: `discounts:read` `discounts:write`
   */
  async get(
    request: DiscountsGetRequest,
    options?: RequestOptions,
  ): Promise<Discount> {
    return unwrapAsync(discountsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Discount
   *
   * @remarks
   * Update a discount.
   *
   * **Scopes**: `discounts:write`
   */
  async update(
    request: DiscountsUpdateRequest,
    options?: RequestOptions,
  ): Promise<Discount> {
    return unwrapAsync(discountsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Discount
   *
   * @remarks
   * Delete a discount.
   *
   * **Scopes**: `discounts:write`
   */
  async delete(
    request: DiscountsDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(discountsDelete(
      this,
      request,
      options,
    ));
  }
}
