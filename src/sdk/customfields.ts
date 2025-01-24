/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customFieldsCreate } from "../funcs/customFieldsCreate.js";
import { customFieldsDelete } from "../funcs/customFieldsDelete.js";
import { customFieldsGet } from "../funcs/customFieldsGet.js";
import { customFieldsList } from "../funcs/customFieldsList.js";
import { customFieldsUpdate } from "../funcs/customFieldsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CustomField } from "../models/components/customfield.js";
import { CustomFieldCreate } from "../models/components/customfieldcreate.js";
import { CustomFieldsDeleteRequest } from "../models/operations/customfieldsdelete.js";
import { CustomFieldsGetRequest } from "../models/operations/customfieldsget.js";
import {
  CustomFieldsListRequest,
  CustomFieldsListResponse,
} from "../models/operations/customfieldslist.js";
import { CustomFieldsUpdateRequest } from "../models/operations/customfieldsupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class CustomFields extends ClientSDK {
  /**
   * List Custom Fields
   *
   * @remarks
   * List custom fields.
   */
  async list(
    request: CustomFieldsListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<CustomFieldsListResponse, { page: number }>> {
    return unwrapResultIterator(customFieldsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Create Custom Field
   *
   * @remarks
   * Create a custom field.
   */
  async create(
    request: CustomFieldCreate,
    options?: RequestOptions,
  ): Promise<CustomField> {
    return unwrapAsync(customFieldsCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Custom Field
   *
   * @remarks
   * Get a custom field by ID.
   */
  async get(
    request: CustomFieldsGetRequest,
    options?: RequestOptions,
  ): Promise<CustomField> {
    return unwrapAsync(customFieldsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Custom Field
   *
   * @remarks
   * Update a custom field.
   */
  async update(
    request: CustomFieldsUpdateRequest,
    options?: RequestOptions,
  ): Promise<CustomField> {
    return unwrapAsync(customFieldsUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete Custom Field
   *
   * @remarks
   * Delete a custom field.
   */
  async delete(
    request: CustomFieldsDeleteRequest,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customFieldsDelete(
      this,
      request,
      options,
    ));
  }
}
