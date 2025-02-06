import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


const faqData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Foxtraa the best forex trading website for beginners?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foxtraa is the best forex trading website for beginners due to its intuitive interface, free educational resources, and AI-driven tools like the Chart Analyzer. It simplifies complex market analysis, helping new traders learn forex trading strategies with low risk.",
      },
    },
    {
      "@type": "Question",
      name: "How does Foxtraa compare to other forex trading platforms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Unlike generic platforms, Foxtraa focuses on AI-powered forex trading tools, real-time market insights, and actionable data. Its Forex Heatmap and Economic Calendar make it a top-rated forex trading website for traders prioritizing accuracy and efficiency.",
      },
    },
    {
      "@type": "Question",
      name: "How do I start forex trading with low risk on Foxtraa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foxtraa's risk management tools, such as stop-loss analyzers and position size calculators, help minimize losses. Beginners can also use its demo-friendly interface to practice strategies before live trading.",
      },
    },
    {
      "@type": "Question",
      name: "What AI tools does Foxtraa offer for technical analysis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The platform’s AI Chart Analyzer detects patterns like candlestick formations (e.g., Head & Shoulders) and generates signals, making it ideal for traders seeking forex trading tools for technical analysis.",
      },
    },
    {
      "@type": "Question",
      name: "How does Foxtraa help during major forex sessions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foxtraa’s Session Timers and Forex Heatmap highlight active trading hours (e.g., London, New York), enabling traders to capitalize on liquidity spikes. This feature positions it as the best forex website for real-time analysis.",
      },
    },
    {
      "@type": "Question",
      name: "Can I track currency strength trends on Foxtraa?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes! The Forex Heatmap visualizes real-time currency strength using color-coded charts, a key tool for mastering how to trade forex with AI insights.",
      },
    },
    {
      "@type": "Question",
      name: "Does Foxtraa offer courses for mastering forex trading?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While Foxtraa doesn’t provide formal courses, its YouTube tutorials and articles cover topics like how to manage risk in forex trading and interpreting technical indicators (e.g., MACD, Bollinger Bands).",
      },
    },
    {
      "@type": "Question",
      name: "Where can I learn forex trading strategies for volatile markets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Foxtraa’s blog and strategy guides break down high-risk scenarios, teaching tactics like hedging and scalping. These resources solidify its reputation as the best forex educational platform for adaptive traders.",
      },
    },
  ],
};


const FAQ = () => {
  return (
    <>
    <h3 className='text-3xl font-semibold mb-5'>Frequently Asked Questions</h3>
      <Accordion type="single" collapsible className="w-full max-w-[70rem]">
        {faqData.mainEntity.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-2xl">{faq.name}</AccordionTrigger>
            <AccordionContent className="text-xl">
              {faq.acceptedAnswer.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

        {/*structured data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqData) }} />

    </>
  );
}

export default FAQ