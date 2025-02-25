/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersCreate } from "../funcs/customersCreate.js";
import { customersDelete } from "../funcs/customersDelete.js";
import { customersGet } from "../funcs/customersGet.js";
import { customersList } from "../funcs/customersList.js";
import { customersUpdate } from "../funcs/customersUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Customer } from "../models/components/customer.js";
import { CustomerCreate } from "../models/components/customercreate.js";
import { CustomersDeleteRequest } from "../models/operations/customersdelete.js";
import { CustomersGetRequest } from "../models/operations/customersget.js";
import {
  CustomersListRequest,
  CustomersListResponse,
} from "../models/operations/customerslist.js";
import { CustomersUpdateRequest } from "../models/operations/customersupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Customers extends ClientSDK {
  /**
   * List Customers
   *
   * @remarks
   * List customers.
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async list(
    request: CustomersListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<CustomersListResponse, { page: number }>> {
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
   *
   * **Scopes**: `customers:write`
   */
  async create(
    request: CustomerCreate,
    options?: RequestOptions,
  ): Promise<Customer> {
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
   *
   * **Scopes**: `customers:read` `customers:write`
   */
  async get(
    request: CustomersGetRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
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
   *
   * **Scopes**: `customers:write`
   */
  async update(
    request: CustomersUpdateRequest,
    options?: RequestOptions,
  ): Promise<Customer> {
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
   *
   * **Scopes**: `customers:write`
   */
  async delete(
    request: CustomersDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customersDelete(
      this,
      request,
      options,
    ));
  }
}
