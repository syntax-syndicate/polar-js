/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutsClientGet } from "../../funcs/checkoutsClientGet.js";
import { CheckoutsClientGetRequest$inboundSchema } from "../../models/operations/checkoutsclientget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckoutsClientGetRequest$inboundSchema,
};

export const tool$checkoutsClientGet: ToolDefinition<typeof args> = {
  name: "checkouts_client-get",
  description: `Get Checkout Session from Client

Get a checkout session by client secret.`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkoutsClientGet(
      client,
      args.request,
      { fetchOptions: { signal: ctx.signal } },
    ).$inspect();

    if (!result.ok) {
      return {
        content: [{ type: "text", text: result.error.message }],
        isError: true,
      };
    }

    const value = result.value;

    return formatResult(value, apiCall);
  },
};
