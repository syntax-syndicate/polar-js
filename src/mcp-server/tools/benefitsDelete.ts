/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { benefitsDelete } from "../../funcs/benefitsDelete.js";
import { BenefitsDeleteRequest$inboundSchema } from "../../models/operations/benefitsdelete.js";
import { formatResult, ToolDefinition } from "../tools.js";

const args = {
  request: BenefitsDeleteRequest$inboundSchema,
};

export const tool$benefitsDelete: ToolDefinition<typeof args> = {
  name: "benefits_delete",
  description: `Delete Benefit

Delete a benefit.

> [!WARNING]
> Every grants associated with the benefit will be revoked.
> Users will lose access to the benefit.

**Scopes**: \`benefits:write\``,
  args,
  tool: async (client, args, ctx) => {
    const [result, apiCall] = await benefitsDelete(
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

    return formatResult(void 0, apiCall);
  },
};
