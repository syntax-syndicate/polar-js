/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutLinksGet } from "../../funcs/checkoutLinksGet.js";
import { CheckoutLinksGetRequest$inboundSchema } from "../../models/operations/checkoutlinksget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckoutLinksGetRequest$inboundSchema,
};

export const tool$checkoutLinksGet: ToolDefinition<typeof args> = {
  name: "checkout-links_get",
  description: `Get Checkout Link

Get a checkout link by ID.

**Scopes**: \`checkout_links:read\` \`checkout_links:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkoutLinksGet(
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
