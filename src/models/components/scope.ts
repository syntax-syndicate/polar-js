/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";
import { ClosedEnum } from "../../types/enums.js";

export const Scope = {
  Openid: "openid",
  Profile: "profile",
  Email: "email",
  UserRead: "user:read",
  Admin: "admin",
  WebDefault: "web_default",
  OrganizationsRead: "organizations:read",
  OrganizationsWrite: "organizations:write",
  CustomFieldsRead: "custom_fields:read",
  CustomFieldsWrite: "custom_fields:write",
  DiscountsRead: "discounts:read",
  DiscountsWrite: "discounts:write",
  CheckoutLinksRead: "checkout_links:read",
  CheckoutLinksWrite: "checkout_links:write",
  CheckoutsRead: "checkouts:read",
  CheckoutsWrite: "checkouts:write",
  ProductsRead: "products:read",
  ProductsWrite: "products:write",
  BenefitsRead: "benefits:read",
  BenefitsWrite: "benefits:write",
  FilesRead: "files:read",
  FilesWrite: "files:write",
  SubscriptionsRead: "subscriptions:read",
  SubscriptionsWrite: "subscriptions:write",
  OrdersRead: "orders:read",
  MetricsRead: "metrics:read",
  WebhooksRead: "webhooks:read",
  WebhooksWrite: "webhooks:write",
  ExternalOrganizationsRead: "external_organizations:read",
  LicenseKeysRead: "license_keys:read",
  LicenseKeysWrite: "license_keys:write",
  RepositoriesRead: "repositories:read",
  RepositoriesWrite: "repositories:write",
  IssuesRead: "issues:read",
  IssuesWrite: "issues:write",
  UserBenefitsRead: "user:benefits:read",
  UserOrdersRead: "user:orders:read",
  UserSubscriptionsRead: "user:subscriptions:read",
  UserSubscriptionsWrite: "user:subscriptions:write",
  UserDownloadablesRead: "user:downloadables:read",
  UserLicenseKeysRead: "user:license_keys:read",
  UserAdvertisementCampaignsRead: "user:advertisement_campaigns:read",
  UserAdvertisementCampaignsWrite: "user:advertisement_campaigns:write",
} as const;
export type Scope = ClosedEnum<typeof Scope>;

/** @internal */
export const Scope$inboundSchema: z.ZodNativeEnum<typeof Scope> = z.nativeEnum(
  Scope,
);

/** @internal */
export const Scope$outboundSchema: z.ZodNativeEnum<typeof Scope> =
  Scope$inboundSchema;

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace Scope$ {
  /** @deprecated use `Scope$inboundSchema` instead. */
  export const inboundSchema = Scope$inboundSchema;
  /** @deprecated use `Scope$outboundSchema` instead. */
  export const outboundSchema = Scope$outboundSchema;
}
