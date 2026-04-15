import "dotenv/config";
import { Stagehand } from "@browserbasehq/stagehand";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  // Only allow POST requests
  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { action, instruction, url } = request.body;

    // Initialize Stagehand
    const stagehand = new Stagehand({
      env: process.env.BROWSERBASE_API_KEY ? "BROWSERBASE" : "LOCAL",
    });

    await stagehand.init();

    const page = stagehand.context.pages()[0];

    let result;

    switch (action) {
      case "navigate":
        if (!url) {
          throw new Error("URL is required for navigate action");
        }
        await page.goto(url);
        result = { success: true, message: `Navigated to ${url}` };
        break;

      case "extract":
        if (!instruction) {
          throw new Error("Instruction is required for extract action");
        }
        result = await stagehand.extract(instruction);
        break;

      case "act":
        if (!instruction) {
          throw new Error("Instruction is required for act action");
        }
        await stagehand.act(instruction);
        result = { success: true, message: "Action completed" };
        break;

      case "observe":
        if (!instruction) {
          throw new Error("Instruction is required for observe action");
        }
        result = await stagehand.observe(instruction);
        break;

      case "agent":
        if (!instruction) {
          throw new Error("Instruction is required for agent action");
        }
        const agent = stagehand.agent({
          mode: "cua",
          model: "google/gemini-2.5-computer-use-preview-10-2025",
          systemPrompt: "You're a helpful assistant that can control a web browser.",
        });
        result = await agent.execute(instruction);
        break;

      default:
        throw new Error(`Unknown action: ${action}`);
    }

    await stagehand.close();

    return response.status(200).json({ result });
  } catch (error: any) {
    console.error("Error:", error);
    return response.status(500).json({
      error: error.message || "Internal server error",
    });
  }
}