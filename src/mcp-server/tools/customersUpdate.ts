/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { customersUpdate } from "../../funcs/customersUpdate.js";
import { CustomersUpdateRequest$inboundSchema } from "../../models/operations/customersupdate.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: CustomersUpdateRequest$inboundSchema,
};

export const tool$customersUpdate: ToolDefinition<typeof args> = {
  name: "customers_update",
  description: `Update Customer

Update a customer.

**Scopes**: \`customers:write\``,
  scopes: ["write", "customers"],
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await customersUpdate(
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
