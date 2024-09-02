/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { advertisementsList } from "../funcs/advertisementsList.js";
import { advertisementsRetrieve } from "../funcs/advertisementsRetrieve.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Advertisements extends ClientSDK {
    /**
     * List Campaigns
     *
     * @remarks
     * List active advertisement campaigns for a benefit.
     */
    async list(
        request: operations.AdvertisementsListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.AdvertisementsListResponse>> {
        return unwrapResultIterator(advertisementsList(this, request, options));
    }

    /**
     * Get Campaign
     *
     * @remarks
     * Get an advertisement campaign by ID.
     */
    async retrieve(
        request: operations.AdvertisementsGetRequest,
        options?: RequestOptions
    ): Promise<components.AdvertisementCampaign> {
        return unwrapAsync(advertisementsRetrieve(this, request, options));
    }
}
