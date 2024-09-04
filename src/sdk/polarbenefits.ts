/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { usersBenefitsGet } from "../funcs/usersBenefitsGet.js";
import { usersBenefitsList } from "../funcs/usersBenefitsList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class PolarBenefits extends ClientSDK {
    /**
     * List Benefits
     *
     * @remarks
     * List my granted benefits.
     */
    async list(
        request: operations.UsersBenefitsListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.UsersBenefitsListResponse>> {
        return unwrapResultIterator(usersBenefitsList(this, request, options));
    }

    /**
     * Get Benefit
     *
     * @remarks
     * Get a granted benefit by ID.
     */
    async get(
        request: operations.UsersBenefitsGetRequest,
        options?: RequestOptions
    ): Promise<operations.UsersBenefitsGetResponseUsersBenefitsGet> {
        return unwrapAsync(usersBenefitsGet(this, request, options));
    }
}
