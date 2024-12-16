/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersDelete } from "../funcs/customersDelete.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Customers extends ClientSDK {
  /**
   * List Customers
   *
   * @remarks
   * List customers.
   */
  async list(
    request: operations.CustomersListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<operations.CustomersListResponse, { page: number }>> {
    return unwrapResultIterator(customersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Customer
   *
   * @remarks
   * Create a customer.
   */
  async create(
    request: components.CustomerCreate,
    options?: RequestOptions,
  ): Promise<components.Customer> {
    return unwrapAsync(customersCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Customer
   *
   * @remarks
   * Get a customer by ID.
   */
  async get(
    request: operations.CustomersGetRequest,
    options?: RequestOptions,
  ): Promise<components.Customer> {
    return unwrapAsync(customersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Customer
   *
   * @remarks
   * Update a customer.
   */
  async update(
    request: operations.CustomersUpdateRequest,
    options?: RequestOptions,
  ): Promise<components.Customer> {
    return unwrapAsync(customersUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Customer
   *
   * @remarks
   * Delete a customer.
   *
   * Immediately cancels any active subscriptions and revokes any active benefits.
   */
  async delete(
    request: operations.CustomersDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customersDelete(
      this,
      request,
      options,
    ));
  }
}
