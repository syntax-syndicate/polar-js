/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { dlv } from "./dlv.js";

import * as z from "zod";

export interface Env {
  POLAR_ACCESS_TOKEN?: string | undefined;

  POLAR_DEBUG?: boolean | undefined;
}

export const envSchema: z.ZodType<Env, z.ZodTypeDef, unknown> = z.object({
  POLAR_ACCESS_TOKEN: z.string(),

  POLAR_DEBUG: z.coerce.boolean(),
})
  .partial();

let envMemo: Env | undefined = undefined;
/**
 * Reads and validates environment variables.
 */
export function env(): Env {
  if (envMemo) {
    return envMemo;
  }

  envMemo = envSchema.parse(
    dlv(globalThis, "process.env") ?? dlv(globalThis, "Deno.env") ?? {},
  );
  return envMemo;
}

/**
 * Clears the cached env object. Useful for testing with a fresh environment.
 */
export function resetEnv() {
  envMemo = undefined;
}
