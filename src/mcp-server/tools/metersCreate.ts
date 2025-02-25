/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { metersCreate } from "../../funcs/metersCreate.js";
import { MeterCreate$inboundSchema } from "../../models/components/metercreate.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: MeterCreate$inboundSchema,
};

export const tool$metersCreate: ToolDefinition<typeof args> = {
  name: "meters_create",
  description: `Create Meter

Create a meter.

**Scopes**: \`meters:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await metersCreate(
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
