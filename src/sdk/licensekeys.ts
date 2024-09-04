/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { licenseKeysGet } from "../funcs/licenseKeysGet.js";
import { licenseKeysGetActivation } from "../funcs/licenseKeysGetActivation.js";
import { licenseKeysList } from "../funcs/licenseKeysList.js";
import { licenseKeysUpdate } from "../funcs/licenseKeysUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class LicenseKeys extends ClientSDK {
    /**
     * List License Keys
     *
     * @remarks
     * Get license keys connected to the given organization & filters.
     */
    async list(
        request: operations.LicenseKeysListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.LicenseKeysListResponse>> {
        return unwrapResultIterator(licenseKeysList(this, request, options));
    }

    /**
     * Get License Key
     *
     * @remarks
     * Get a license key.
     */
    async get(
        request: operations.LicenseKeysGetRequest,
        options?: RequestOptions
    ): Promise<components.LicenseKeyWithActivations> {
        return unwrapAsync(licenseKeysGet(this, request, options));
    }

    /**
     * Update License Key
     *
     * @remarks
     * Update a license key.
     */
    async update(
        request: operations.LicenseKeysUpdateRequest,
        options?: RequestOptions
    ): Promise<components.LicenseKeyRead> {
        return unwrapAsync(licenseKeysUpdate(this, request, options));
    }

    /**
     * Get Activation
     *
     * @remarks
     * Get a license key activation.
     */
    async getActivation(
        request: operations.LicenseKeysGetActivationRequest,
        options?: RequestOptions
    ): Promise<components.LicenseKeyActivationRead> {
        return unwrapAsync(licenseKeysGetActivation(this, request, options));
    }
}
