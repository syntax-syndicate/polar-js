/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { oauth2ClientsCreate } from "../funcs/oauth2ClientsCreate.js";
import { oauth2ClientsDelete } from "../funcs/oauth2ClientsDelete.js";
import { oauth2ClientsGet } from "../funcs/oauth2ClientsGet.js";
import { oauth2ClientsList } from "../funcs/oauth2ClientsList.js";
import { oauth2ClientsUpdate } from "../funcs/oauth2ClientsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { OAuth2ClientConfiguration } from "../models/components/oauth2clientconfiguration.js";
import {
  Oauth2ClientsListRequest,
  Oauth2ClientsListResponse,
} from "../models/operations/oauth2clientslist.js";
import { Oauth2ClientsOauth2DeleteClientRequest } from "../models/operations/oauth2clientsoauth2deleteclient.js";
import { Oauth2ClientsOauth2GetClientRequest } from "../models/operations/oauth2clientsoauth2getclient.js";
import { Oauth2ClientsOauth2UpdateClientRequest } from "../models/operations/oauth2clientsoauth2updateclient.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Clients extends ClientSDK {
  /**
   * List Clients
   *
   * @remarks
   * List OAuth2 clients.
   *
   * **Scopes**:
   */
  async list(
    request: Oauth2ClientsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<Oauth2ClientsListResponse, { page: number }>> {
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
   *
   * **Scopes**:
   */
  async create(
    request: OAuth2ClientConfiguration,
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
   *
   * **Scopes**:
   */
  async get(
    request: Oauth2ClientsOauth2GetClientRequest,
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
   *
   * **Scopes**:
   */
  async update(
    request: Oauth2ClientsOauth2UpdateClientRequest,
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
   *
   * **Scopes**:
   */
  async delete(
    request: Oauth2ClientsOauth2DeleteClientRequest,
    options?: RequestOptions,
  ): Promise<any> {
    return unwrapAsync(oauth2ClientsDelete(
      this,
      request,
      options,
    ));
  }
}
