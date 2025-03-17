import { openai } from "@ai-sdk/openai"
import { streamText } from "ai"

export const maxDuration = 30

export async function POST(req: Request) {
  const { messages } = await req.json()

  // Extract the system message if it exists
  const systemMessage =
    messages.find((m: any) => m.role === "system")?.content ||
    "I am a virtual representation of the 'Competitor's Customers' audience. I'll respond as if I'm a customer who shops more with your competitors than with your brand."

  // Filter out system messages for the API call
  const userMessages = messages.filter((m: any) => m.role !== "system")

  const result = streamText({
    model: openai("gpt-4-turbo"),
    system: systemMessage,
    messages: userMessages,
  })

  return result.toDataStreamResponse()
}

