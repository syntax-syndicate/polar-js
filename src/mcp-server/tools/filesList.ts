/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { filesList } from "../../funcs/filesList.js";
import { FilesListRequest$inboundSchema } from "../../models/operations/fileslist.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: FilesListRequest$inboundSchema,
};

export const tool$filesList: ToolDefinition<typeof args> = {
  name: "files_list",
  description: `List Files

List files.

**Scopes**: \`files:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await filesList(
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
