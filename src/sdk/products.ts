/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { productsCreate } from "../funcs/productsCreate.js";
import { productsGet } from "../funcs/productsGet.js";
import { productsList } from "../funcs/productsList.js";
import { productsUpdate } from "../funcs/productsUpdate.js";
import { productsUpdateBenefits } from "../funcs/productsUpdateBenefits.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as components from "../models/components/index.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Products extends ClientSDK {
    /**
     * List Products
     *
     * @remarks
     * List products.
     */
    async list(
        request: operations.ProductsListRequest,
        options?: RequestOptions
    ): Promise<PageIterator<operations.ProductsListResponse>> {
        return unwrapResultIterator(productsList(this, request, options));
    }

    /**
     * Create Product
     *
     * @remarks
     * Create a product.
     */
    async create(
        request: operations.ProductsCreateProductCreate,
        options?: RequestOptions
    ): Promise<components.ProductOutput> {
        return unwrapAsync(productsCreate(this, request, options));
    }

    /**
     * Get Product
     *
     * @remarks
     * Get a product by ID.
     */
    async get(
        request: operations.ProductsGetRequest,
        options?: RequestOptions
    ): Promise<components.ProductOutput> {
        return unwrapAsync(productsGet(this, request, options));
    }

    /**
     * Update Product
     *
     * @remarks
     * Update a product.
     */
    async update(
        request: operations.ProductsUpdateRequest,
        options?: RequestOptions
    ): Promise<components.ProductOutput> {
        return unwrapAsync(productsUpdate(this, request, options));
    }

    /**
     * Update Product Benefits
     *
     * @remarks
     * Update benefits granted by a product.
     */
    async updateBenefits(
        request: operations.ProductsUpdateBenefitsRequest,
        options?: RequestOptions
    ): Promise<components.ProductOutput> {
        return unwrapAsync(productsUpdateBenefits(this, request, options));
    }
}
