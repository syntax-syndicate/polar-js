# @polar-sh/sdk

Developer-friendly & type-safe Typescript SDK specifically catered to leverage [Polar](https://polar.sh) API.

<div align="left">
    <a href="https://www.speakeasy.com/?utm_source=@polar-sh/sdk&utm_campaign=typescript"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>

> [!WARNING]
> Starting version `>v0.6.0`, we changed our SDK generator. It's not backward compatible with previous versions.

<!-- Start Summary [summary] -->
## Summary

Polar API: Polar HTTP and Webhooks API

Read the docs at https://docs.polar.sh/api-reference
<!-- End Summary [summary] -->

<!-- Start Table of Contents [toc] -->
## Table of Contents
<!-- $toc-max-depth=2 -->
* [@polar-sh/sdk](#polar-shsdk)
  * [SDK Installation](#sdk-installation)
  * [Requirements](#requirements)
  * [SDK Example Usage](#sdk-example-usage)
  * [Available Resources and Operations](#available-resources-and-operations)
  * [Standalone functions](#standalone-functions)
  * [Pagination](#pagination)
  * [Retries](#retries)
  * [Error Handling](#error-handling)
  * [Server Selection](#server-selection)
  * [Custom HTTP Client](#custom-http-client)
  * [Authentication](#authentication)
  * [Debugging](#debugging)
* [Development](#development)
  * [Maturity](#maturity)
  * [Contributions](#contributions)

<!-- End Table of Contents [toc] -->

<!-- Start SDK Installation [installation] -->
## SDK Installation

The SDK can be installed with either [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [bun](https://bun.sh/) or [yarn](https://classic.yarnpkg.com/en/) package managers.

### NPM

```bash
npm add @polar-sh/sdk
```

### PNPM

```bash
pnpm add @polar-sh/sdk
```

### Bun

```bash
bun add @polar-sh/sdk
```

### Yarn

```bash
yarn add @polar-sh/sdk zod

# Note that Yarn does not install peer dependencies automatically. You will need
# to install zod as shown above.
```

> [!NOTE]
> This package is published with CommonJS and ES Modules (ESM) support.
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar();

async function run() {
  const result = await polar.endpointcheckoutCreatedPost({
    data: {
      createdAt: new Date("2025-11-12T14:26:42.882Z"),
      modifiedAt: new Date("2024-05-27T05:08:06.235Z"),
      id: "<value>",
      paymentProcessor: "stripe",
      status: "failed",
      clientSecret: "<value>",
      url: "https://heavy-beret.com/",
      expiresAt: new Date("2023-02-25T02:26:48.460Z"),
      successUrl: "https://sardonic-final.info/",
      embedOrigin: "<value>",
      amount: 962818,
      taxAmount: 6400,
      currency: "Yen",
      subtotalAmount: 648726,
      totalAmount: 210702,
      productId: "<value>",
      productPriceId: "<value>",
      discountId: "<value>",
      allowDiscountCodes: true,
      isDiscountApplicable: false,
      isFreeProductPrice: false,
      isPaymentRequired: false,
      isPaymentSetupRequired: false,
      isPaymentFormRequired: false,
      customerId: "<value>",
      customerName: "<value>",
      customerEmail: "<value>",
      customerIpAddress: "<value>",
      customerBillingAddress: {
        country: "Solomon Islands",
      },
      customerTaxId: "<id>",
      paymentProcessorMetadata: {
        "key": "<value>",
        "key1": "<value>",
        "key2": "<value>",
      },
      metadata: {
        "key": "<value>",
      },
      product: {
        createdAt: new Date("2024-11-17T19:11:13.132Z"),
        modifiedAt: new Date("2024-02-27T04:46:39.621Z"),
        id: "<value>",
        name: "<value>",
        description: "border opposite overload interior shady",
        isRecurring: false,
        isArchived: true,
        organizationId: "<value>",
        prices: [],
        benefits: [
          {
            createdAt: new Date("2025-08-24T18:28:03.144Z"),
            modifiedAt: new Date("2023-10-21T11:52:11.842Z"),
            id: "<value>",
            type: "ads",
            description:
              "certainly these restfully geez who countess happily gym",
            selectable: false,
            deletable: false,
            organizationId: "<value>",
          },
        ],
        medias: [
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/private/tmp",
            mimeType: "<value>",
            size: 486328,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-26T17:28:00.673Z"),
            version: "<value>",
            isUploaded: true,
            createdAt: new Date("2025-05-06T18:54:29.001Z"),
            sizeReadable: "<value>",
            publicUrl: "https://forsaken-underpants.biz",
          },
          {
            id: "<value>",
            organizationId: "<value>",
            name: "<value>",
            path: "/Users",
            mimeType: "<value>",
            size: 796127,
            storageVersion: "<value>",
            checksumEtag: "<value>",
            checksumSha256Base64: "<value>",
            checksumSha256Hex: "<value>",
            lastModifiedAt: new Date("2023-09-05T18:42:07.313Z"),
            version: "<value>",
            isUploaded: false,
            createdAt: new Date("2025-10-05T11:55:07.194Z"),
            sizeReadable: "<value>",
            publicUrl: "https://quick-witted-markup.org/",
          },
        ],
      },
      productPrice: {
        createdAt: new Date("2025-11-19T15:59:15.588Z"),
        modifiedAt: new Date("2023-11-17T00:11:23.972Z"),
        id: "<value>",
        isArchived: false,
        productId: "<value>",
        priceCurrency: "<value>",
        minimumAmount: 363560,
        maximumAmount: 75876,
        presetAmount: 82334,
      },
      discount: {
        duration: "repeating",
        type: "percentage",
        basisPoints: 416143,
        id: "<value>",
        name: "<value>",
        code: "<value>",
      },
      subscriptionId: "<value>",
      attachedCustomFields: [
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-06-03T08:42:54.736Z"),
            modifiedAt: new Date("2025-02-14T09:22:19.644Z"),
            id: "<value>",
            metadata: {
              "key": "<value>",
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 169862,
          required: true,
        },
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2025-11-21T05:56:48.487Z"),
            modifiedAt: new Date("2023-01-08T00:22:16.025Z"),
            id: "<value>",
            metadata: {
              "key": 648726,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 918364,
          required: true,
        },
        {
          customFieldId: "<value>",
          customField: {
            createdAt: new Date("2024-04-28T23:39:10.699Z"),
            modifiedAt: new Date("2025-04-20T22:18:45.464Z"),
            id: "<value>",
            metadata: {
              "key": 500372,
            },
            slug: "<value>",
            name: "<value>",
            organizationId: "<value>",
            properties: {},
          },
          order: 187532,
          required: true,
        },
      ],
      customerMetadata: {
        "key": "<value>",
        "key1": 790078,
      },
    },
  });

  // Handle the result
  console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

### Webhook support

The SDK has built-in support to validate webhook events. Here is an example with Express.js:

```ts
import express, { Request, Response } from "express";
import { validateEvent, WebhookVerificationError } from "@polar-sh/sdk/webhooks";

const app = express();

app.post("/webhook", express.raw({ type: "application/json" }), (req: Request, res: Response) => {
  try {
    const event = validateEvent(req.body, req.headers, process.env["POLAR_WEBHOOK_SECRET"] ?? "");

    // Process the event

    res.status(202).send('')
  } catch (error) {
    if (error instanceof WebhookVerificationError) {
      res.status(403).send('')
    }
    throw error
  }
});
```

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

<details open>
<summary>Available methods</summary>

### [advertisements](docs/sdks/advertisements/README.md)

* [list](docs/sdks/advertisements/README.md#list) - List Campaigns
* [get](docs/sdks/advertisements/README.md#get) - Get Campaign

### [benefits](docs/sdks/benefits/README.md)

* [list](docs/sdks/benefits/README.md#list) - List Benefits
* [create](docs/sdks/benefits/README.md#create) - Create Benefit
* [get](docs/sdks/benefits/README.md#get) - Get Benefit
* [update](docs/sdks/benefits/README.md#update) - Update Benefit
* [delete](docs/sdks/benefits/README.md#delete) - Delete Benefit
* [grants](docs/sdks/benefits/README.md#grants) - List Benefit Grants

### [checkoutLinks](docs/sdks/checkoutlinks/README.md)

* [list](docs/sdks/checkoutlinks/README.md#list) - List Checkout Links
* [create](docs/sdks/checkoutlinks/README.md#create) - Create Checkout Link
* [get](docs/sdks/checkoutlinks/README.md#get) - Get Checkout Link
* [update](docs/sdks/checkoutlinks/README.md#update) - Update Checkout Link
* [delete](docs/sdks/checkoutlinks/README.md#delete) - Delete Checkout Link

### [checkouts](docs/sdks/checkouts/README.md)

* [~~create~~](docs/sdks/checkouts/README.md#create) - Create Checkout :warning: **Deprecated** Use [create](docs/sdks/custom/README.md#create) instead.
* [~~get~~](docs/sdks/checkouts/README.md#get) - Get Checkout :warning: **Deprecated**

#### [checkouts.custom](docs/sdks/custom/README.md)

* [list](docs/sdks/custom/README.md#list) - List Checkout Sessions
* [create](docs/sdks/custom/README.md#create) - Create Checkout Session
* [get](docs/sdks/custom/README.md#get) - Get Checkout Session
* [update](docs/sdks/custom/README.md#update) - Update Checkout Session
* [clientGet](docs/sdks/custom/README.md#clientget) - Get Checkout Session from Client
* [clientUpdate](docs/sdks/custom/README.md#clientupdate) - Update Checkout Session from Client
* [clientConfirm](docs/sdks/custom/README.md#clientconfirm) - Confirm Checkout Session from Client

### [customerPortal](docs/sdks/customerportal/README.md)


#### [customerPortal.benefitGrants](docs/sdks/benefitgrants/README.md)

* [list](docs/sdks/benefitgrants/README.md#list) - List Benefit Grants
* [get](docs/sdks/benefitgrants/README.md#get) - Get Benefit Grant
* [update](docs/sdks/benefitgrants/README.md#update) - Update Benefit Grant

#### [customerPortal.customers](docs/sdks/polarcustomers/README.md)

* [get](docs/sdks/polarcustomers/README.md#get) - Get Customer

#### [customerPortal.downloadables](docs/sdks/downloadables/README.md)

* [list](docs/sdks/downloadables/README.md#list) - List Downloadables
* [get](docs/sdks/downloadables/README.md#get) - Get Downloadable

#### [customerPortal.licenseKeys](docs/sdks/polarlicensekeys/README.md)

* [list](docs/sdks/polarlicensekeys/README.md#list) - List License Keys
* [get](docs/sdks/polarlicensekeys/README.md#get) - Get License Key
* [validate](docs/sdks/polarlicensekeys/README.md#validate) - Validate License Key
* [activate](docs/sdks/polarlicensekeys/README.md#activate) - Activate License Key
* [deactivate](docs/sdks/polarlicensekeys/README.md#deactivate) - Deactivate License Key

#### [customerPortal.orders](docs/sdks/polarorders/README.md)

* [list](docs/sdks/polarorders/README.md#list) - List Orders
* [get](docs/sdks/polarorders/README.md#get) - Get Order
* [invoice](docs/sdks/polarorders/README.md#invoice) - Get Order Invoice

#### [customerPortal.organizations](docs/sdks/polarorganizations/README.md)

* [get](docs/sdks/polarorganizations/README.md#get) - Get Organization

#### [customerPortal.subscriptions](docs/sdks/polarsubscriptions/README.md)

* [list](docs/sdks/polarsubscriptions/README.md#list) - List Subscriptions
* [get](docs/sdks/polarsubscriptions/README.md#get) - Get Subscription
* [update](docs/sdks/polarsubscriptions/README.md#update) - Update Subscription
* [cancel](docs/sdks/polarsubscriptions/README.md#cancel) - Cancel Subscription

### [customers](docs/sdks/customers/README.md)

* [list](docs/sdks/customers/README.md#list) - List Customers
* [create](docs/sdks/customers/README.md#create) - Create Customer
* [get](docs/sdks/customers/README.md#get) - Get Customer
* [update](docs/sdks/customers/README.md#update) - Update Customer
* [delete](docs/sdks/customers/README.md#delete) - Delete Customer

### [customerSessions](docs/sdks/customersessions/README.md)

* [create](docs/sdks/customersessions/README.md#create) - Create Customer Session

### [customFields](docs/sdks/customfields/README.md)

* [list](docs/sdks/customfields/README.md#list) - List Custom Fields
* [create](docs/sdks/customfields/README.md#create) - Create Custom Field
* [get](docs/sdks/customfields/README.md#get) - Get Custom Field
* [update](docs/sdks/customfields/README.md#update) - Update Custom Field
* [delete](docs/sdks/customfields/README.md#delete) - Delete Custom Field

### [discounts](docs/sdks/discounts/README.md)

* [list](docs/sdks/discounts/README.md#list) - List Discounts
* [create](docs/sdks/discounts/README.md#create) - Create Discount
* [get](docs/sdks/discounts/README.md#get) - Get Discount
* [update](docs/sdks/discounts/README.md#update) - Update Discount
* [delete](docs/sdks/discounts/README.md#delete) - Delete Discount

### [externalOrganizations](docs/sdks/externalorganizations/README.md)

* [list](docs/sdks/externalorganizations/README.md#list) - List External Organizations

### [files](docs/sdks/files/README.md)

* [list](docs/sdks/files/README.md#list) - List Files
* [create](docs/sdks/files/README.md#create) - Create File
* [uploaded](docs/sdks/files/README.md#uploaded) - Complete File Upload
* [update](docs/sdks/files/README.md#update) - Update File
* [delete](docs/sdks/files/README.md#delete) - Delete File

### [licenseKeys](docs/sdks/licensekeys/README.md)

* [list](docs/sdks/licensekeys/README.md#list) - List License Keys
* [get](docs/sdks/licensekeys/README.md#get) - Get License Key
* [update](docs/sdks/licensekeys/README.md#update) - Update License Key
* [getActivation](docs/sdks/licensekeys/README.md#getactivation) - Get Activation

### [metrics](docs/sdks/metrics/README.md)

* [get](docs/sdks/metrics/README.md#get) - Get Metrics
* [limits](docs/sdks/metrics/README.md#limits) - Get Metrics Limits

### [oauth2](docs/sdks/oauth2/README.md)

* [authorize](docs/sdks/oauth2/README.md#authorize) - Authorize
* [token](docs/sdks/oauth2/README.md#token) - Request Token
* [revoke](docs/sdks/oauth2/README.md#revoke) - Revoke Token
* [introspect](docs/sdks/oauth2/README.md#introspect) - Introspect Token
* [userinfo](docs/sdks/oauth2/README.md#userinfo) - Get User Info

#### [oauth2.clients](docs/sdks/clients/README.md)

* [list](docs/sdks/clients/README.md#list) - List Clients
* [create](docs/sdks/clients/README.md#create) - Create Client
* [get](docs/sdks/clients/README.md#get) - Get Client
* [update](docs/sdks/clients/README.md#update) - Update Client
* [delete](docs/sdks/clients/README.md#delete) - Delete Client

### [orders](docs/sdks/orders/README.md)

* [list](docs/sdks/orders/README.md#list) - List Orders
* [get](docs/sdks/orders/README.md#get) - Get Order
* [invoice](docs/sdks/orders/README.md#invoice) - Get Order Invoice

### [organizations](docs/sdks/organizations/README.md)

* [list](docs/sdks/organizations/README.md#list) - List Organizations
* [create](docs/sdks/organizations/README.md#create) - Create Organization
* [get](docs/sdks/organizations/README.md#get) - Get Organization
* [update](docs/sdks/organizations/README.md#update) - Update Organization


### [products](docs/sdks/products/README.md)

* [list](docs/sdks/products/README.md#list) - List Products
* [create](docs/sdks/products/README.md#create) - Create Product
* [get](docs/sdks/products/README.md#get) - Get Product
* [update](docs/sdks/products/README.md#update) - Update Product
* [updateBenefits](docs/sdks/products/README.md#updatebenefits) - Update Product Benefits

### [refunds](docs/sdks/refunds/README.md)

* [list](docs/sdks/refunds/README.md#list) - List Refunds
* [create](docs/sdks/refunds/README.md#create) - Create Refund

### [repositories](docs/sdks/repositories/README.md)

* [list](docs/sdks/repositories/README.md#list) - List Repositories
* [get](docs/sdks/repositories/README.md#get) - Get Repository
* [update](docs/sdks/repositories/README.md#update) - Update Repository

### [subscriptions](docs/sdks/subscriptions/README.md)

* [list](docs/sdks/subscriptions/README.md#list) - List Subscriptions
* [export](docs/sdks/subscriptions/README.md#export) - Export Subscriptions
* [get](docs/sdks/subscriptions/README.md#get) - Get Subscription
* [update](docs/sdks/subscriptions/README.md#update) - Update Subscription
* [revoke](docs/sdks/subscriptions/README.md#revoke) - Revoke Subscription

</details>
<!-- End Available Resources and Operations [operations] -->

<!-- Start Standalone functions [standalone-funcs] -->
## Standalone functions

All the methods listed above are available as standalone functions. These
functions are ideal for use in applications running in the browser, serverless
runtimes or other environments where application bundle size is a primary
concern. When using a bundler to build your application, all unused
functionality will be either excluded from the final bundle or tree-shaken away.

To read more about standalone functions, check [FUNCTIONS.md](./FUNCTIONS.md).

<details>

<summary>Available standalone functions</summary>

- [`advertisementsGet`](docs/sdks/advertisements/README.md#get) - Get Campaign
- [`advertisementsList`](docs/sdks/advertisements/README.md#list) - List Campaigns
- [`benefitsCreate`](docs/sdks/benefits/README.md#create) - Create Benefit
- [`benefitsDelete`](docs/sdks/benefits/README.md#delete) - Delete Benefit
- [`benefitsGet`](docs/sdks/benefits/README.md#get) - Get Benefit
- [`benefitsGrants`](docs/sdks/benefits/README.md#grants) - List Benefit Grants
- [`benefitsList`](docs/sdks/benefits/README.md#list) - List Benefits
- [`benefitsUpdate`](docs/sdks/benefits/README.md#update) - Update Benefit
- [`checkoutLinksCreate`](docs/sdks/checkoutlinks/README.md#create) - Create Checkout Link
- [`checkoutLinksDelete`](docs/sdks/checkoutlinks/README.md#delete) - Delete Checkout Link
- [`checkoutLinksGet`](docs/sdks/checkoutlinks/README.md#get) - Get Checkout Link
- [`checkoutLinksList`](docs/sdks/checkoutlinks/README.md#list) - List Checkout Links
- [`checkoutLinksUpdate`](docs/sdks/checkoutlinks/README.md#update) - Update Checkout Link
- [`checkoutsCustomClientConfirm`](docs/sdks/custom/README.md#clientconfirm) - Confirm Checkout Session from Client
- [`checkoutsCustomClientGet`](docs/sdks/custom/README.md#clientget) - Get Checkout Session from Client
- [`checkoutsCustomClientUpdate`](docs/sdks/custom/README.md#clientupdate) - Update Checkout Session from Client
- [`checkoutsCustomCreate`](docs/sdks/custom/README.md#create) - Create Checkout Session
- [`checkoutsCustomGet`](docs/sdks/custom/README.md#get) - Get Checkout Session
- [`checkoutsCustomList`](docs/sdks/custom/README.md#list) - List Checkout Sessions
- [`checkoutsCustomUpdate`](docs/sdks/custom/README.md#update) - Update Checkout Session
- [`customerPortalBenefitGrantsGet`](docs/sdks/benefitgrants/README.md#get) - Get Benefit Grant
- [`customerPortalBenefitGrantsList`](docs/sdks/benefitgrants/README.md#list) - List Benefit Grants
- [`customerPortalBenefitGrantsUpdate`](docs/sdks/benefitgrants/README.md#update) - Update Benefit Grant
- [`customerPortalCustomersGet`](docs/sdks/polarcustomers/README.md#get) - Get Customer
- [`customerPortalDownloadablesGet`](docs/sdks/downloadables/README.md#get) - Get Downloadable
- [`customerPortalDownloadablesList`](docs/sdks/downloadables/README.md#list) - List Downloadables
- [`customerPortalLicenseKeysActivate`](docs/sdks/polarlicensekeys/README.md#activate) - Activate License Key
- [`customerPortalLicenseKeysDeactivate`](docs/sdks/polarlicensekeys/README.md#deactivate) - Deactivate License Key
- [`customerPortalLicenseKeysGet`](docs/sdks/polarlicensekeys/README.md#get) - Get License Key
- [`customerPortalLicenseKeysList`](docs/sdks/polarlicensekeys/README.md#list) - List License Keys
- [`customerPortalLicenseKeysValidate`](docs/sdks/polarlicensekeys/README.md#validate) - Validate License Key
- [`customerPortalOrdersGet`](docs/sdks/polarorders/README.md#get) - Get Order
- [`customerPortalOrdersInvoice`](docs/sdks/polarorders/README.md#invoice) - Get Order Invoice
- [`customerPortalOrdersList`](docs/sdks/polarorders/README.md#list) - List Orders
- [`customerPortalOrganizationsGet`](docs/sdks/polarorganizations/README.md#get) - Get Organization
- [`customerPortalSubscriptionsCancel`](docs/sdks/polarsubscriptions/README.md#cancel) - Cancel Subscription
- [`customerPortalSubscriptionsGet`](docs/sdks/polarsubscriptions/README.md#get) - Get Subscription
- [`customerPortalSubscriptionsList`](docs/sdks/polarsubscriptions/README.md#list) - List Subscriptions
- [`customerPortalSubscriptionsUpdate`](docs/sdks/polarsubscriptions/README.md#update) - Update Subscription
- [`customersCreate`](docs/sdks/customers/README.md#create) - Create Customer
- [`customersDelete`](docs/sdks/customers/README.md#delete) - Delete Customer
- [`customerSessionsCreate`](docs/sdks/customersessions/README.md#create) - Create Customer Session
- [`customersGet`](docs/sdks/customers/README.md#get) - Get Customer
- [`customersList`](docs/sdks/customers/README.md#list) - List Customers
- [`customersUpdate`](docs/sdks/customers/README.md#update) - Update Customer
- [`customFieldsCreate`](docs/sdks/customfields/README.md#create) - Create Custom Field
- [`customFieldsDelete`](docs/sdks/customfields/README.md#delete) - Delete Custom Field
- [`customFieldsGet`](docs/sdks/customfields/README.md#get) - Get Custom Field
- [`customFieldsList`](docs/sdks/customfields/README.md#list) - List Custom Fields
- [`customFieldsUpdate`](docs/sdks/customfields/README.md#update) - Update Custom Field
- [`discountsCreate`](docs/sdks/discounts/README.md#create) - Create Discount
- [`discountsDelete`](docs/sdks/discounts/README.md#delete) - Delete Discount
- [`discountsGet`](docs/sdks/discounts/README.md#get) - Get Discount
- [`discountsList`](docs/sdks/discounts/README.md#list) - List Discounts
- [`discountsUpdate`](docs/sdks/discounts/README.md#update) - Update Discount
- [`externalOrganizationsList`](docs/sdks/externalorganizations/README.md#list) - List External Organizations
- [`filesCreate`](docs/sdks/files/README.md#create) - Create File
- [`filesDelete`](docs/sdks/files/README.md#delete) - Delete File
- [`filesList`](docs/sdks/files/README.md#list) - List Files
- [`filesUpdate`](docs/sdks/files/README.md#update) - Update File
- [`filesUploaded`](docs/sdks/files/README.md#uploaded) - Complete File Upload
- [`licenseKeysGet`](docs/sdks/licensekeys/README.md#get) - Get License Key
- [`licenseKeysGetActivation`](docs/sdks/licensekeys/README.md#getactivation) - Get Activation
- [`licenseKeysList`](docs/sdks/licensekeys/README.md#list) - List License Keys
- [`licenseKeysUpdate`](docs/sdks/licensekeys/README.md#update) - Update License Key
- [`metricsGet`](docs/sdks/metrics/README.md#get) - Get Metrics
- [`metricsLimits`](docs/sdks/metrics/README.md#limits) - Get Metrics Limits
- [`oauth2Authorize`](docs/sdks/oauth2/README.md#authorize) - Authorize
- [`oauth2ClientsCreate`](docs/sdks/clients/README.md#create) - Create Client
- [`oauth2ClientsDelete`](docs/sdks/clients/README.md#delete) - Delete Client
- [`oauth2ClientsGet`](docs/sdks/clients/README.md#get) - Get Client
- [`oauth2ClientsList`](docs/sdks/clients/README.md#list) - List Clients
- [`oauth2ClientsUpdate`](docs/sdks/clients/README.md#update) - Update Client
- [`oauth2Introspect`](docs/sdks/oauth2/README.md#introspect) - Introspect Token
- [`oauth2Revoke`](docs/sdks/oauth2/README.md#revoke) - Revoke Token
- [`oauth2Token`](docs/sdks/oauth2/README.md#token) - Request Token
- [`oauth2Userinfo`](docs/sdks/oauth2/README.md#userinfo) - Get User Info
- [`ordersGet`](docs/sdks/orders/README.md#get) - Get Order
- [`ordersInvoice`](docs/sdks/orders/README.md#invoice) - Get Order Invoice
- [`ordersList`](docs/sdks/orders/README.md#list) - List Orders
- [`organizationsCreate`](docs/sdks/organizations/README.md#create) - Create Organization
- [`organizationsGet`](docs/sdks/organizations/README.md#get) - Get Organization
- [`organizationsList`](docs/sdks/organizations/README.md#list) - List Organizations
- [`organizationsUpdate`](docs/sdks/organizations/README.md#update) - Update Organization
- [`productsCreate`](docs/sdks/products/README.md#create) - Create Product
- [`productsGet`](docs/sdks/products/README.md#get) - Get Product
- [`productsList`](docs/sdks/products/README.md#list) - List Products
- [`productsUpdate`](docs/sdks/products/README.md#update) - Update Product
- [`productsUpdateBenefits`](docs/sdks/products/README.md#updatebenefits) - Update Product Benefits
- [`refundsCreate`](docs/sdks/refunds/README.md#create) - Create Refund
- [`refundsList`](docs/sdks/refunds/README.md#list) - List Refunds
- [`repositoriesGet`](docs/sdks/repositories/README.md#get) - Get Repository
- [`repositoriesList`](docs/sdks/repositories/README.md#list) - List Repositories
- [`repositoriesUpdate`](docs/sdks/repositories/README.md#update) - Update Repository
- [`subscriptionsExport`](docs/sdks/subscriptions/README.md#export) - Export Subscriptions
- [`subscriptionsGet`](docs/sdks/subscriptions/README.md#get) - Get Subscription
- [`subscriptionsList`](docs/sdks/subscriptions/README.md#list) - List Subscriptions
- [`subscriptionsRevoke`](docs/sdks/subscriptions/README.md#revoke) - Revoke Subscription
- [`subscriptionsUpdate`](docs/sdks/subscriptions/README.md#update) - Update Subscription
- ~~[`checkoutsCreate`](docs/sdks/checkouts/README.md#create)~~ - Create Checkout :warning: **Deprecated** Use [`checkoutsCustomCreate`](docs/sdks/custom/README.md#create) instead.
- ~~[`checkoutsGet`](docs/sdks/checkouts/README.md#get)~~ - Get Checkout :warning: **Deprecated**

</details>
<!-- End Standalone functions [standalone-funcs] -->

<!-- Start Pagination [pagination] -->
## Pagination

Some of the endpoints in this SDK support pagination. To use pagination, you
make your SDK calls as usual, but the returned response object will also be an
async iterable that can be consumed using the [`for await...of`][for-await-of]
syntax.

[for-await-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of

Here's an example of one such pagination call:

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Pagination [pagination] -->

<!-- Start Retries [retries] -->
## Retries

Some of the endpoints in this SDK support retries.  If you use the SDK without any configuration, it will fall back to the default retry strategy provided by the API.  However, the default retry strategy can be overridden on a per-operation basis, or across the entire SDK.

To change the default retry strategy for a single API call, simply provide a retryConfig object to the call:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  }, {
    retries: {
      strategy: "backoff",
      backoff: {
        initialInterval: 1,
        maxInterval: 50,
        exponent: 1.1,
        maxElapsedTime: 100,
      },
      retryConnectionErrors: false,
    },
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```

If you'd like to override the default retry strategy for all operations that support retries, you can provide a retryConfig at SDK initialization:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  retryConfig: {
    strategy: "backoff",
    backoff: {
      initialInterval: 1,
      maxInterval: 50,
      exponent: 1.1,
      maxElapsedTime: 100,
    },
    retryConnectionErrors: false,
  },
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Retries [retries] -->

<!-- Start Error Handling [errors] -->
## Error Handling

Some methods specify known errors which can be thrown. All the known errors are enumerated in the `models/errors/errors.ts` module. The known errors for a method are documented under the *Errors* tables in SDK docs. For example, the `list` method may throw the following errors:

| Error Type                 | Status Code | Content Type     |
| -------------------------- | ----------- | ---------------- |
| errors.HTTPValidationError | 422         | application/json |
| errors.SDKError            | 4XX, 5XX    | \*/\*            |

If the method throws an error and it is not captured by the known errors, it will default to throwing a `SDKError`.

```typescript
import { Polar } from "@polar-sh/sdk";
import { HTTPValidationError } from "@polar-sh/sdk/models/errors/httpvalidationerror.js";
import { SDKValidationError } from "@polar-sh/sdk/models/errors/sdkvalidationerror.js";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  let result;
  try {
    result = await polar.externalOrganizations.list({
      page: 1,
      limit: 10,
    });

    for await (const page of result) {
      // Handle the page
      console.log(page);
    }
  } catch (err) {
    switch (true) {
      // The server response does not match the expected SDK schema
      case (err instanceof SDKValidationError): {
        // Pretty-print will provide a human-readable multi-line error message
        console.error(err.pretty());
        // Raw value may also be inspected
        console.error(err.rawValue);
        return;
      }
      case (err instanceof HTTPValidationError): {
        // Handle err.data$: HTTPValidationErrorData
        console.error(err);
        return;
      }
      default: {
        // Other errors such as network errors, see HTTPClientErrors for more details
        throw err;
      }
    }
  }
}

run();

```

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted multi-line string since validation errors can list many issues and the plain error string may be difficult read when debugging.

In some rare cases, the SDK can fail to get a response from the server or even make the request due to unexpected circumstances such as network conditions. These types of errors are captured in the `models/errors/httpclienterrors.ts` module:

| HTTP Client Error                                    | Description                                          |
| ---------------------------------------------------- | ---------------------------------------------------- |
| RequestAbortedError                                  | HTTP request was aborted by the client               |
| RequestTimeoutError                                  | HTTP request timed out due to an AbortSignal signal  |
| ConnectionError                                      | HTTP client was unable to make a request to a server |
| InvalidRequestError                                  | Any input used to create a request is invalid        |
| UnexpectedClientError                                | Unrecognised or unexpected error                     |
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Name

You can override the default server globally by passing a server name to the `server: keyof typeof ServerList` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the names associated with the available servers:

| Name         | Server                         |
| ------------ | ------------------------------ |
| `production` | `https://api.polar.sh`         |
| `sandbox`    | `https://sandbox-api.polar.sh` |

#### Example

```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  server: "sandbox",
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```

### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL: string` optional parameter when initializing the SDK client instance. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  serverURL: "https://api.polar.sh",
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { Polar } from "@polar-sh/sdk";
import { HTTPClient } from "@polar-sh/sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000)
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new Polar({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name          | Type | Scheme      | Environment Variable |
| ------------- | ---- | ----------- | -------------------- |
| `accessToken` | http | HTTP Bearer | `POLAR_ACCESS_TOKEN` |

To authenticate with the API the `accessToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { Polar } from "@polar-sh/sdk";

const polar = new Polar({
  accessToken: process.env["POLAR_ACCESS_TOKEN"] ?? "",
});

async function run() {
  const result = await polar.externalOrganizations.list({
    page: 1,
    limit: 10,
  });

  for await (const page of result) {
    // Handle the page
    console.log(page);
  }
}

run();

```
<!-- End Authentication [security] -->

<!-- Start Debugging [debug] -->
## Debugging

You can setup your SDK to emit debug logs for SDK requests and responses.

You can pass a logger that matches `console`'s interface as an SDK option.

> [!WARNING]
> Beware that debug logging will reveal secrets, like API tokens in headers, in log messages printed to a console or files. It's recommended to use this feature only during local development and not in production.

```typescript
import { Polar } from "@polar-sh/sdk";

const sdk = new Polar({ debugLogger: console });
```

You can also enable a default debug logger by setting an environment variable `POLAR_DEBUG` to true.
<!-- End Debugging [debug] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically. Any manual changes added to internal files will be overwritten on the next generation. 
We look forward to hearing your feedback. Feel free to open a PR or an issue with a proof of concept and we'll do our best to include it in a future release. 

### SDK Created by [Speakeasy](https://www.speakeasy.com/?utm_source=@polar-sh/sdk&utm_campaign=typescript)
