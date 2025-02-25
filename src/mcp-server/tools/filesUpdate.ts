/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesUpdate } from "../../funcs/filesUpdate.js";
import { FilesUpdateRequest$inboundSchema } from "../../models/operations/filesupdate.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: FilesUpdateRequest$inboundSchema,
};

export const tool$filesUpdate: ToolDefinition<typeof args> = {
  name: "files_update",
  description: `Update File

Update a file.

**Scopes**: \`files:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesUpdate(
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
