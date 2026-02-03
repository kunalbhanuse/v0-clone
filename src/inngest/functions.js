import { inngest } from "../inngest/client";
import { gemini, createAgent } from "@inngest/agent-kit";

export const helloWorld = inngest.createFunction(
  { id: "hello-world" },
  { event: "agent/hello" },
  async ({ event, step }) => {
    const helloAgent = createAgent({
      name: "hello-agent",
      description: "A simple agent that say hello",
      system: "you are a helpful assistant . Always great with enthusiasm",
      model: gemini({ model: "gemini-2.5-flash" }),
    });
    const { output } = await helloAgent.run("Say Hello to the User!");
    return {
      message: output[0].content,
    };
  },
);
