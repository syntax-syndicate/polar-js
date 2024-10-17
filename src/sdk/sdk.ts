/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { ClientSDK } from "../lib/sdks.js";
import { Advertisements } from "./advertisements.js";
import { Articles } from "./articles.js";
import { Benefits } from "./benefits.js";
import { CheckoutLinks } from "./checkoutlinks.js";
import { Checkouts } from "./checkouts.js";
import { ExternalOrganizations } from "./externalorganizations.js";
import { Files } from "./files.js";
import { LicenseKeys } from "./licensekeys.js";
import { Metrics } from "./metrics.js";
import { Oauth2 } from "./oauth2.js";
import { Orders } from "./orders.js";
import { Organizations } from "./organizations.js";
import { Products } from "./products.js";
import { Repositories } from "./repositories.js";
import { Subscriptions } from "./subscriptions.js";
import { Users } from "./users.js";

export class Polar extends ClientSDK {
  private _users?: Users;
  get users(): Users {
    return (this._users ??= new Users(this._options));
  }

  private _externalOrganizations?: ExternalOrganizations;
  get externalOrganizations(): ExternalOrganizations {
    return (this._externalOrganizations ??= new ExternalOrganizations(
      this._options,
    ));
  }

  private _repositories?: Repositories;
  get repositories(): Repositories {
    return (this._repositories ??= new Repositories(this._options));
  }

  private _organizations?: Organizations;
  get organizations(): Organizations {
    return (this._organizations ??= new Organizations(this._options));
  }

  private _subscriptions?: Subscriptions;
  get subscriptions(): Subscriptions {
    return (this._subscriptions ??= new Subscriptions(this._options));
  }

  private _articles?: Articles;
  get articles(): Articles {
    return (this._articles ??= new Articles(this._options));
  }

  private _advertisements?: Advertisements;
  get advertisements(): Advertisements {
    return (this._advertisements ??= new Advertisements(this._options));
  }

  private _oauth2?: Oauth2;
  get oauth2(): Oauth2 {
    return (this._oauth2 ??= new Oauth2(this._options));
  }

  private _benefits?: Benefits;
  get benefits(): Benefits {
    return (this._benefits ??= new Benefits(this._options));
  }

  private _products?: Products;
  get products(): Products {
    return (this._products ??= new Products(this._options));
  }

  private _orders?: Orders;
  get orders(): Orders {
    return (this._orders ??= new Orders(this._options));
  }

  private _checkouts?: Checkouts;
  get checkouts(): Checkouts {
    return (this._checkouts ??= new Checkouts(this._options));
  }

  private _files?: Files;
  get files(): Files {
    return (this._files ??= new Files(this._options));
  }

  private _metrics?: Metrics;
  get metrics(): Metrics {
    return (this._metrics ??= new Metrics(this._options));
  }

  private _licenseKeys?: LicenseKeys;
  get licenseKeys(): LicenseKeys {
    return (this._licenseKeys ??= new LicenseKeys(this._options));
  }

  private _checkoutLinks?: CheckoutLinks;
  get checkoutLinks(): CheckoutLinks {
    return (this._checkoutLinks ??= new CheckoutLinks(this._options));
  }
}
