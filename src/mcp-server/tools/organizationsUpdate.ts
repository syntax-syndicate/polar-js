/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { organizationsUpdate } from "../../funcs/organizationsUpdate.js";
import { OrganizationsUpdateRequest$inboundSchema } from "../../models/operations/organizationsupdate.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: OrganizationsUpdateRequest$inboundSchema,
};

export const tool$organizationsUpdate: ToolDefinition<typeof args> = {
  name: "organizations_update",
  description: `Update Organization

Update an organization.

**Scopes**: \`organizations:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await organizationsUpdate(
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
