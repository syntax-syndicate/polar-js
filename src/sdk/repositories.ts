/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { repositoriesGet } from "../funcs/repositoriesGet.js";
import { repositoriesList } from "../funcs/repositoriesList.js";
import { repositoriesUpdate } from "../funcs/repositoriesUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Repository } from "../models/components/repository.js";
import { RepositoriesGetRequest } from "../models/operations/repositoriesget.js";
import {
  RepositoriesListRequest,
  RepositoriesListResponse,
} from "../models/operations/repositorieslist.js";
import { RepositoriesUpdateRequest } from "../models/operations/repositoriesupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Repositories extends ClientSDK {
  /**
   * List Repositories
   *
   * @remarks
   * List repositories.
   */
  async list(
    request: RepositoriesListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<RepositoriesListResponse, { page: number }>> {
    return unwrapResultIterator(repositoriesList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Repository
   *
   * @remarks
   * Get a repository by ID.
   */
  async get(
    request: RepositoriesGetRequest,
    options?: RequestOptions,
  ): Promise<Repository> {
    return unwrapAsync(repositoriesGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Repository
   *
   * @remarks
   * Update a repository.
   */
  async update(
    request: RepositoriesUpdateRequest,
    options?: RequestOptions,
  ): Promise<Repository> {
    return unwrapAsync(repositoriesUpdate(
      this,
      request,
      options,
    ));
  }
}
