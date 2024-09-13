/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { oauth2ClientsCreate } from "../funcs/oauth2ClientsCreate.js";
import { oauth2ClientsDelete } from "../funcs/oauth2ClientsDelete.js";
import { oauth2ClientsGet } from "../funcs/oauth2ClientsGet.js";
import { oauth2ClientsList } from "../funcs/oauth2ClientsList.js";
import { oauth2ClientsUpdate } from "../funcs/oauth2ClientsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Clients extends ClientSDK {
  /**
   * List Clients
   *
   * @remarks
   * List OAuth2 clients.
   */
  async list(
    request: operations.Oauth2ClientsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.Oauth2ClientsListResponse>> {
    return unwrapResultIterator(oauth2ClientsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Client
   *
   * @remarks
   * Create an OAuth2 client.
   */
  async create(
    request: components.OAuth2ClientConfiguration,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(oauth2ClientsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Client
   *
   * @remarks
   * Get an OAuth2 client by Client ID.
   */
  async get(
    request: operations.Oauth2ClientsOauth2GetClientRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(oauth2ClientsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Client
   *
   * @remarks
   * Update an OAuth2 client.
   */
  async update(
    request: operations.Oauth2ClientsOauth2UpdateClientRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(oauth2ClientsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Client
   *
   * @remarks
   * Delete an OAuth2 client.
   */
  async delete(
    request: operations.Oauth2ClientsOauth2DeleteClientRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(oauth2ClientsDelete(
      this,
      request,
      options,
    ));
  }
}
