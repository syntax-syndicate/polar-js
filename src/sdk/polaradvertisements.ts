/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersAdvertisementsCreate } from "../funcs/usersAdvertisementsCreate.js";
import { usersAdvertisementsDelete } from "../funcs/usersAdvertisementsDelete.js";
import { usersAdvertisementsEnable } from "../funcs/usersAdvertisementsEnable.js";
import { usersAdvertisementsGet } from "../funcs/usersAdvertisementsGet.js";
import { usersAdvertisementsList } from "../funcs/usersAdvertisementsList.js";
import { usersAdvertisementsUpdate } from "../funcs/usersAdvertisementsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PolarAdvertisements extends ClientSDK {
  /**
   * List Advertisements
   *
   * @remarks
   * List advertisement campaigns.
   */
  async list(
    request: operations.UsersAdvertisementsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.UsersAdvertisementsListResponse>> {
    return unwrapResultIterator(usersAdvertisementsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Advertisement
   *
   * @remarks
   * Create an advertisement campaign.
   */
  async create(
    request: components.UserAdvertisementCampaignCreate,
    options?: RequestOptions,
  ): Promise<components.UserAdvertisementCampaign> {
    return unwrapAsync(usersAdvertisementsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Advertisement
   *
   * @remarks
   * Get an advertisement campaign by ID.
   */
  async get(
    request: operations.UsersAdvertisementsGetRequest,
    options?: RequestOptions,
  ): Promise<components.UserAdvertisementCampaign> {
    return unwrapAsync(usersAdvertisementsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Advertisement
   *
   * @remarks
   * Update an advertisement campaign.
   */
  async update(
    request: operations.UsersAdvertisementsUpdateRequest,
    options?: RequestOptions,
  ): Promise<components.UserAdvertisementCampaign> {
    return unwrapAsync(usersAdvertisementsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Advertisement
   *
   * @remarks
   * Delete an advertisement campaign.
   *
   * It'll be automatically disabled on all granted benefits.
   */
  async delete(
    request: operations.UsersAdvertisementsDeleteRequest,
    options?: RequestOptions,
  ): Promise<any | undefined> {
    return unwrapAsync(usersAdvertisementsDelete(
      this,
      request,
      options,
    ));
  }

  /**
   * Enable Advertisement
   *
   * @remarks
   * Enable an advertisement campaign on a granted benefit.
   */
  async enable(
    request: operations.UsersAdvertisementsEnableRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(usersAdvertisementsEnable(
      this,
      request,
      options,
    ));
  }
}
