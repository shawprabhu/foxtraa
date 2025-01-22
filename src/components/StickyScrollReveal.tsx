"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
  {
    title: "Average True Range (ATR)",
    description:
      "The Average True Range (ATR) measures market volatility, helping traders assess price fluctuations. By understanding volatility, you can set realistic targets and manage risk effectively. FoxTraa integrates ATR to help you make more informed trading decisions, ensuring you adapt your strategies to current market conditions.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/atr.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="average true range atr"
        />
      </div>
    ),
  },
  {
    title: "AI Trading Chart Analyzer",
    description:
      "FoxTraa’s AI Trading Chart Analyzer uses advanced algorithms to identify patterns and trends in real-time. It helps you spot trading opportunities and optimize strategies, making informed decisions faster. With this tool, you gain insights into market movements, improving your trading experience and boosting your confidence.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src="/aichart.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="ai trading chart analyzer"
        />
      </div>
    ),
  },
  {
    title: "Simple Moving Average (SMA)",
    description:
      "The Simple Moving Average (SMA) smooths out price data to identify trends over a set period. It helps traders spot market direction and potential reversal points by averaging price movements. FoxTraa’s SMA tool supports your strategy by highlighting long-term trends, giving you clearer insights into market behavior.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        <Image
          src="/SMA.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="simple moving average sma"
        />
      </div>
    ),
  },
  {
    title: "Relative Strength Index (RSI)",
    description:
      "The Relative Strength Index (RSI) measures the strength of price movements, indicating whether an asset is overbought or oversold. RSI helps traders identify potential entry or exit points based on market momentum. FoxTraa’s RSI tool allows you to make better-informed decisions by assessing market conditions for more precise trades.",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <Image
          src="/RSI.jpg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="relative strength index rsi"
        />
      </div>
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="p-10">
      <div className="content text-center">
        <h1 className="text-5xl font-bold mb-3 mt-3 tracking-wide">
          Built for Traders, Backed by <span className="text-logo-gradient tracking-normal">Expertise</span>
        </h1>
      </div>
      <StickyScroll content={content} />
    </div>
  );
}
