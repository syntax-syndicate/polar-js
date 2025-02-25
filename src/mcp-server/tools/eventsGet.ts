/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { eventsGet } from "../../funcs/eventsGet.js";
import { EventsGetRequest$inboundSchema } from "../../models/operations/eventsget.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: EventsGetRequest$inboundSchema,
};

export const tool$eventsGet: ToolDefinition<typeof args> = {
  name: "events_get",
  description: `Get Event

Get an event by ID.

**Scopes**: \`events:read\` \`events:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await eventsGet(
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
