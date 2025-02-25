/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { oauth2ClientsDelete } from "../../funcs/oauth2ClientsDelete.js";
import { Oauth2ClientsOauth2DeleteClientRequest$inboundSchema } from "../../models/operations/oauth2clientsoauth2deleteclient.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: Oauth2ClientsOauth2DeleteClientRequest$inboundSchema,
};

export const tool$oauth2ClientsDelete: ToolDefinition<typeof args> = {
  name: "oauth2-clients_delete",
  description: `Delete Client

Delete an OAuth2 client.

**Scopes**:`,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await oauth2ClientsDelete(
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
