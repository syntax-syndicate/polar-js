/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checkoutLinksList } from "../../funcs/checkoutLinksList.js";
import { CheckoutLinksListRequest$inboundSchema } from "../../models/operations/checkoutlinkslist.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CheckoutLinksListRequest$inboundSchema,
};

export const tool$checkoutLinksList: ToolDefinition<typeof args> = {
  name: "checkout-links_list",
  description: `List Checkout Links

List checkout links.

**Scopes**: \`checkout_links:read\` \`checkout_links:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await checkoutLinksList(
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

    const value = result.value.result;

    return formatResult(value, apiCall);
  },
};
