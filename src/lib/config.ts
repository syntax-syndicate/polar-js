/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { HTTPClient } from "./http.js";
import { Logger } from "./logger.js";
import { RetryConfig } from "./retries.js";
import { Params, pathToFunc } from "./url.js";

/**
 * Production environment
 */
export const ServerProduction = "production";
/**
 * Sandbox environment
 */
export const ServerSandbox = "sandbox";
/**
 * Contains the list of servers available to the SDK
 */
export const ServerList = {
  [ServerProduction]: "https://api.polar.sh",
  [ServerSandbox]: "https://sandbox-api.polar.sh",
} as const;

export type SDKOptions = {
  accessToken?: string | (() => Promise<string>);

  httpClient?: HTTPClient;
  /**
   * Allows overriding the default server used by the SDK
   */
  server?: keyof typeof ServerList;
  /**
   * Allows overriding the default server URL used by the SDK
   */
  serverURL?: string;
  /**
   * Allows overriding the default retry config used by the SDK
   */
  retryConfig?: RetryConfig;
  timeoutMs?: number;
  debugLogger?: Logger;
};

export function serverURLFromOptions(options: SDKOptions): URL | null {
  let serverURL = options.serverURL;

  const params: Params = {};

  if (!serverURL) {
    const server = options.server ?? ServerProduction;
    serverURL = ServerList[server] || "";
  }

  const u = pathToFunc(serverURL)(params);
  return new URL(u);
}

export const SDK_METADATA = {
  language: "typescript",
  openapiDocVersion: "0.1.0",
  sdkVersion: "0.11.0",
  genVersion: "2.426.2",
  userAgent: "speakeasy-sdk/typescript 0.11.0 2.426.2 0.1.0 @polar-sh/sdk",
} as const;
