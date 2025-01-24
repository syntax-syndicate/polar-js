/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customerPortalBenefitGrantsGet } from "../funcs/customerPortalBenefitGrantsGet.js";
import { customerPortalBenefitGrantsList } from "../funcs/customerPortalBenefitGrantsList.js";
import { customerPortalBenefitGrantsUpdate } from "../funcs/customerPortalBenefitGrantsUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { CustomerBenefitGrant } from "../models/components/customerbenefitgrant.js";
import { CustomerPortalBenefitGrantsGetRequest } from "../models/operations/customerportalbenefitgrantsget.js";
import {
  CustomerPortalBenefitGrantsListRequest,
  CustomerPortalBenefitGrantsListResponse,
} from "../models/operations/customerportalbenefitgrantslist.js";
import { CustomerPortalBenefitGrantsUpdateRequest } from "../models/operations/customerportalbenefitgrantsupdate.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class BenefitGrants extends ClientSDK {
  /**
   * List Benefit Grants
   *
   * @remarks
   * List benefits grants of the authenticated customer or user.
   */
  async list(
    request: CustomerPortalBenefitGrantsListRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<CustomerPortalBenefitGrantsListResponse, { page: number }>
  > {
    return unwrapResultIterator(customerPortalBenefitGrantsList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Benefit Grant
   *
   * @remarks
   * Get a benefit grant by ID for the authenticated customer or user.
   */
  async get(
    request: CustomerPortalBenefitGrantsGetRequest,
    options?: RequestOptions,
  ): Promise<CustomerBenefitGrant> {
    return unwrapAsync(customerPortalBenefitGrantsGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update Benefit Grant
   *
   * @remarks
   * Update a benefit grant for the authenticated customer or user.
   */
  async update(
    request: CustomerPortalBenefitGrantsUpdateRequest,
    options?: RequestOptions,
  ): Promise<CustomerBenefitGrant> {
    return unwrapAsync(customerPortalBenefitGrantsUpdate(
      this,
      request,
      options,
    ));
  }
}
