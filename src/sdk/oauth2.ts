/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { oauth2Authorize } from "../funcs/oauth2Authorize.js";
import { oauth2Introspect } from "../funcs/oauth2Introspect.js";
import { oauth2Revoke } from "../funcs/oauth2Revoke.js";
import { oauth2Token } from "../funcs/oauth2Token.js";
import { oauth2Userinfo } from "../funcs/oauth2Userinfo.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import { IntrospectTokenResponse } from "../models/components/introspecttokenresponse.js";
import { RevokeTokenResponse } from "../models/components/revoketokenresponse.js";
import { TokenResponse } from "../models/components/tokenresponse.js";
import { Oauth2AuthorizeResponseOauth2Authorize } from "../models/operations/oauth2authorize.js";
import { Oauth2IntrospectTokenIntrospectTokenRequest } from "../models/operations/oauth2introspecttoken.js";
import { Oauth2RequestTokenRequestBody } from "../models/operations/oauth2requesttoken.js";
import { Oauth2RevokeTokenRevokeTokenRequest } from "../models/operations/oauth2revoketoken.js";
import { Oauth2UserinfoResponseOauth2Userinfo } from "../models/operations/oauth2userinfo.js";
import { unwrapAsync } from "../types/fp.js";
import { Clients } from "./clients.js";

export class Oauth2 extends ClientSDK {
  private _clients?: Clients;
  get clients(): Clients {
    return (this._clients ??= new Clients(this._options));
  }

  /**
   * Authorize
   */
  async authorize(
    options?: RequestOptions,
  ): Promise<Oauth2AuthorizeResponseOauth2Authorize> {
    return unwrapAsync(oauth2Authorize(
      this,
      options,
    ));
  }

  /**
   * Request Token
   *
   * @remarks
   * Request an access token using a valid grant.
   */
  async token(
    request: Oauth2RequestTokenRequestBody,
    options?: RequestOptions,
  ): Promise<TokenResponse> {
    return unwrapAsync(oauth2Token(
      this,
      request,
      options,
    ));
  }

  /**
   * Revoke Token
   *
   * @remarks
   * Revoke an access token or a refresh token.
   */
  async revoke(
    request: Oauth2RevokeTokenRevokeTokenRequest,
    options?: RequestOptions,
  ): Promise<RevokeTokenResponse> {
    return unwrapAsync(oauth2Revoke(
      this,
      request,
      options,
    ));
  }

  /**
   * Introspect Token
   *
   * @remarks
   * Get information about an access token.
   */
  async introspect(
    request: Oauth2IntrospectTokenIntrospectTokenRequest,
    options?: RequestOptions,
  ): Promise<IntrospectTokenResponse> {
    return unwrapAsync(oauth2Introspect(
      this,
      request,
      options,
    ));
  }

  /**
   * Get User Info
   *
   * @remarks
   * Get information about the authenticated user.
   */
  async userinfo(
    options?: RequestOptions,
  ): Promise<Oauth2UserinfoResponseOauth2Userinfo> {
    return unwrapAsync(oauth2Userinfo(
      this,
      options,
    ));
  }
}
