/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ordersGet } from "../funcs/ordersGet.js";
import { ordersInvoice } from "../funcs/ordersInvoice.js";
import { ordersList } from "../funcs/ordersList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { Order } from "../models/components/order.js";
import { OrderInvoice } from "../models/components/orderinvoice.js";
import { OrdersGetRequest } from "../models/operations/ordersget.js";
import { OrdersInvoiceRequest } from "../models/operations/ordersinvoice.js";
import {
  OrdersListRequest,
  OrdersListResponse,
} from "../models/operations/orderslist.js";
import { unwrapAsync } from "../types/fp.js";
import { PageIterator, unwrapResultIterator } from "../types/operations.js";

export class Orders extends ClientSDK {
  /**
   * List Orders
   *
   * @remarks
   * List orders.
   *
   * **Scopes**: `orders:read`
   */
  async list(
    request: OrdersListRequest,
    options?: RequestOptions,
  ): Promise<PageIterator<OrdersListResponse, { page: number }>> {
    return unwrapResultIterator(ordersList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order
   *
   * @remarks
   * Get an order by ID.
   *
   * **Scopes**: `orders:read`
   */
  async get(
    request: OrdersGetRequest,
    options?: RequestOptions,
  ): Promise<Order> {
    return unwrapAsync(ordersGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Order Invoice
   *
   * @remarks
   * Get an order's invoice data.
   *
   * **Scopes**: `orders:read`
   */
  async invoice(
    request: OrdersInvoiceRequest,
    options?: RequestOptions,
  ): Promise<OrderInvoice> {
    return unwrapAsync(ordersInvoice(
      this,
      request,
      options,
    ));
  }
}
