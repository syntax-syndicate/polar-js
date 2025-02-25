/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutsGet } from "../../funcs/checkoutsGet.js";
import { CheckoutsGetRequest$inboundSchema } from "../../models/operations/checkoutsget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckoutsGetRequest$inboundSchema,
};

export const tool$checkoutsGet: ToolDefinition<typeof args> = {
  name: "checkouts_get",
  description: `Get Checkout Session

Get a checkout session by ID.

**Scopes**: \`checkouts:read\` \`checkouts:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkoutsGet(
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
