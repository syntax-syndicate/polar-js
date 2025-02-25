/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { subscriptionsExport } from "../../funcs/subscriptionsExport.js";
import { SubscriptionsExportRequest$inboundSchema } from "../../models/operations/subscriptionsexport.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: SubscriptionsExportRequest$inboundSchema,
};

export const tool$subscriptionsExport: ToolDefinition<typeof args> = {
  name: "subscriptions_export",
  description: `Export Subscriptions

Export subscriptions as a CSV file.

**Scopes**: \`subscriptions:read\` \`subscriptions:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await subscriptionsExport(
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
