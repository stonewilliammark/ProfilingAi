"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Send, RefreshCw, Info, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useChat } from "ai/react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function VirtualAudienceChat() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialPrompt = searchParams.get("prompt")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [isFirstMessage, setIsFirstMessage] = useState(true)
  const [activeTab, setActiveTab] = useState("brand-perception")

  const { messages, input, handleInputChange, handleSubmit, isLoading, reload, stop } = useChat({
    initialMessages: [
      {
        id: "welcome",
        role: "system",
        content:
          "I am a virtual representation of the 'Competitor's Customers' audience. I'll respond as if I'm a customer who shops more with your competitors than with your brand, specifically in the fast food industry. I'll mention preferences for Hungry Jack's and KFC over other brands.",
      },
      {
        id: "initial-response",
        role: "assistant",
        content:
          "I'm primarily a fan of Hungry Jack's and KFC for fast food in Australia. About 65% of us regularly visit these chains, with Hungry Jack's slightly ahead. We also frequent Grill'd (42%) when looking for a premium burger option, and many of us (38%) choose Nando's for a healthier alternative. McDonald's sees less loyalty from our segment despite their market dominance.",
      },
    ],
  })

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Send initial prompt if provided
  useEffect(() => {
    if (initialPrompt && isFirstMessage) {
      const form = new FormData()
      form.append("message", initialPrompt)
      handleSubmit(new Event("submit") as any, { formData: form } as any)
      setIsFirstMessage(false)
    }
  }, [initialPrompt, handleSubmit, isFirstMessage])

  // Custom submit handler
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (input.trim()) {
      handleSubmit(e)
    }
  }

  const suggestedQuestions = [
    "What brands do you currently prefer in this category?",
    "How does our brand positioning compare to the competitors you prefer?",
    "Why do you choose these brands over others?",
    "What qualities do you associate with our brand versus competitors?",
  ]

  return (
    <div className="flex flex-col h-screen">
      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Back button and header */}
        <div className="px-8 pt-6 pb-4">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-[#1E1E1E] hover:opacity-80 transition-opacity mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="text-base font-normal">Back</span>
          </button>

          <div className="flex justify-between items-center">
            <div className="flex-1 text-center">
              <h2 className="text-[#706F6D] text-lg font-normal">Virtual audience</h2>
              <h1 className="text-[40px] font-bold mt-1 bg-gradient-to-b from-[#7A7871] to-[#4D4C44] bg-clip-text text-transparent">
                Competitor's Customers
              </h1>
            </div>
            <Info className="h-5 w-5 text-[#706F6D]" />
          </div>
        </div>

        {/* Chat container */}
        <div className="flex-1 overflow-y-auto px-8 pb-4">
          {/* Chat messages */}
          {messages
            .filter((m) => m.role !== "system")
            .map((message, index) => (
              <div
                key={message.id}
                className={`mb-4 ${message.role === "user" ? "flex justify-end" : "flex justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-4 rounded-lg ${
                    message.role === "user" ? "bg-[#1E1E1E] text-white" : "bg-white border border-[#E9E9E9]"
                  }`}
                >
                  {message.content}
                  {message.role === "assistant" && index > 0 && (
                    <div className="mt-3 pt-3 border-t border-[#E9E9E9]">
                      <button className="text-sm text-[#1175B5] hover:underline">Show me evidence</button>
                    </div>
                  )}
                </div>
              </div>
            ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start mb-4">
              <div className="max-w-[80%] p-4 rounded-lg bg-white border border-[#E9E9E9]">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-300"></div>
                </div>
              </div>
            </div>
          )}

          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>

        {/* Tabs and suggested questions */}
        <div className="border-t border-[#E9E9E9] bg-white">
          <div className="px-8 py-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="w-full justify-start mb-4 bg-transparent p-0 gap-4">
                <TabsTrigger
                  value="brand-perception"
                  className="px-0 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1E1E1E] data-[state=active]:border-b-2 data-[state=active]:border-[#1E1E1E] text-[#706F6D]"
                >
                  Brand Perception
                </TabsTrigger>
                <TabsTrigger
                  value="decision-drivers"
                  className="px-0 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1E1E1E] data-[state=active]:border-b-2 data-[state=active]:border-[#1E1E1E] text-[#706F6D]"
                >
                  Decision Drivers
                </TabsTrigger>
                <TabsTrigger
                  value="customer-journey"
                  className="px-0 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1E1E1E] data-[state=active]:border-b-2 data-[state=active]:border-[#1E1E1E] text-[#706F6D]"
                >
                  Customer Journey
                </TabsTrigger>
                <TabsTrigger
                  value="value-proposition"
                  className="px-0 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1E1E1E] data-[state=active]:border-b-2 data-[state=active]:border-[#1E1E1E] text-[#706F6D]"
                >
                  Value Proposition
                </TabsTrigger>
                <TabsTrigger
                  value="marketing-effectiveness"
                  className="px-0 py-2 rounded-none data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-[#1E1E1E] data-[state=active]:border-b-2 data-[state=active]:border-[#1E1E1E] text-[#706F6D]"
                >
                  Marketing Effectiveness
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Suggested questions */}
            <div className="space-y-4">
              {suggestedQuestions.map((question, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 bg-[#F9F9F9] hover:bg-[#F4F4F4] rounded-lg text-[#1E1E1E] transition-colors"
                  onClick={() => {
                    const form = new FormData()
                    form.append("message", question)
                    handleSubmit(new Event("submit") as any, { formData: form } as any)
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          {/* Input area */}
          <div className="border-t border-[#E9E9E9] p-4 px-8">
            <form onSubmit={onSubmit} className="flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className="flex-1 p-3 border border-[#E9E9E9] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFCC00]"
                disabled={isLoading}
              />
              <Button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-[#FFCC00] text-black hover:bg-[#FFCC00]/90"
              >
                <Send className="h-5 w-5" />
              </Button>
              {isLoading ? (
                <Button type="button" onClick={() => stop()} variant="outline" className="border-[#E9E9E9]">
                  Stop
                </Button>
              ) : (
                messages.length > 1 && (
                  <Button type="button" onClick={() => reload()} variant="outline" className="border-[#E9E9E9]">
                    <RefreshCw className="h-5 w-5" />
                  </Button>
                )
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

