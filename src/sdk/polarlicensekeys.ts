/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customerPortalLicenseKeysActivate } from "../funcs/customerPortalLicenseKeysActivate.js";
import { customerPortalLicenseKeysDeactivate } from "../funcs/customerPortalLicenseKeysDeactivate.js";
import { customerPortalLicenseKeysGet } from "../funcs/customerPortalLicenseKeysGet.js";
import { customerPortalLicenseKeysList } from "../funcs/customerPortalLicenseKeysList.js";
import { customerPortalLicenseKeysValidate } from "../funcs/customerPortalLicenseKeysValidate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PolarLicenseKeys extends ClientSDK {
  /**
   * List License Keys
   */
  async list(
    request: operations.CustomerPortalLicenseKeysListRequest,
    options?: RequestOptions,
  ): Promise<
    PageIterator<
      operations.CustomerPortalLicenseKeysListResponse,
      { page: number }
    >
  > {
    return unwrapResultIterator(customerPortalLicenseKeysList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get License Key
   *
   * @remarks
   * Get a license key.
   */
  async get(
    request: operations.CustomerPortalLicenseKeysGetRequest,
    options?: RequestOptions,
  ): Promise<components.LicenseKeyWithActivations> {
    return unwrapAsync(customerPortalLicenseKeysGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Validate License Key
   *
   * @remarks
   * Validate a license key.
   */
  async validate(
    request: components.LicenseKeyValidate,
    options?: RequestOptions,
  ): Promise<components.ValidatedLicenseKey> {
    return unwrapAsync(customerPortalLicenseKeysValidate(
      this,
      request,
      options,
    ));
  }

  /**
   * Activate License Key
   *
   * @remarks
   * Activate a license key instance.
   */
  async activate(
    request: components.LicenseKeyActivate,
    options?: RequestOptions,
  ): Promise<components.LicenseKeyActivationRead> {
    return unwrapAsync(customerPortalLicenseKeysActivate(
      this,
      request,
      options,
    ));
  }

  /**
   * Deactivate License Key
   *
   * @remarks
   * Deactivate a license key instance.
   */
  async deactivate(
    request: components.LicenseKeyDeactivate,
    options?: RequestOptions,
  ): Promise<void> {
    return unwrapAsync(customerPortalLicenseKeysDeactivate(
      this,
      request,
      options,
    ));
  }
}
