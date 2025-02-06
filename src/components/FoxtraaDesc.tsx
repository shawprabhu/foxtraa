"use client"
import React from "react";
import { Button } from "./ui/button";

const FoxtraaDesc = () => {
  const [readmore, setReadmore] = React.useState(false);

  const toggleReadmore = () => {
    setReadmore(!readmore);
  };

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="max-w-6xl w-full mb-4">
        <h2 className="text-5xl font-bold mb-4">
          FoxTraa: The Best Forex Trading Website
        </h2>
        <p className="mb-4 text-2xl">
          Looking for the best forex trading website that provides accurate
          market insights, powerful tools, and real-time updates? Look no
          further—FoxTraa is your ultimate trading companion. Whether
          you&apos;re a beginner or an experienced trader, our cutting-edge
          resources and market-leading tools empower you to stay ahead in the
          dynamic forex market.
        </p>

        {readmore && (
          <>
            <h2 className="text-4xl font-semibold mt-4 mb-4">
              Why FoxTraa is the Best Forex Trading Website
            </h2>
            <p className="mb-4 text-2xl">
              At FoxTraa, we merge expertise with advanced technology to offer a
              seamless trading experience. Here&apos;s what sets us apart as the
              best forex trading website:
            </p>
            <ul className="text-2xl list-disc ml-6 mb-4">
              <li>
                Real-Time Market Data &#x2010; Access up-to-the-second forex
                market trends and in-depth analysis.
              </li>
              <li>
                Advanced Trading Tools &#x2010; Utilize RSI, SMA, ATR, and other
                indicators for informed decision-making.
              </li>
              <li>
                Comprehensive Educational Resources &#x2010; Learn forex trading
                with expert insights, tutorials, and strategy guides.
              </li>
              <li>
                User-Friendly Interface &#x2010; Navigate effortlessly with an
                intuitive design and smooth user experience.
              </li>
              <li>
                Reliable Forex News & Updates &#x2010; Stay informed with the
                latest financial news, trading strategies, and global market
                developments.
              </li>
              <li>
                Secure and Fast Execution &#x2010; Trade with confidence,
                knowing that our platform provides secure transactions and
                lightning-fast execution speeds.
              </li>
            </ul>

            <h2 className="text-4xl font-semibold mt-4 mb-4">
              Trade Smarter with the Best Forex Trading Website
            </h2>
            <p className="mb-4 text-2xl">
              FoxTraa isn&apos;t just another forex platform—it&apos;s the best
              forex trading website for traders who demand accuracy,
              reliability, and real-time insights. Whether you&apos;re analyzing
              trends, checking forex signals, or planning your next trade,
              FoxTraa equips you with the right tools to make smarter decisions.
            </p>

            <h2 className="text-4xl font-semibold mt-4 mb-4">
              Key Features of the Best Forex Trading Website
            </h2>
            <ol className="text-2xl list-decimal ml-6 mb-4">
              <li>
                <strong>Live Forex Charts</strong> &#x2010; Stay on top of market
                movements with our real-time forex charts. Featuring multiple
                indicators and interactive tools, FoxTraa allows traders to
                conduct deep technical analysis efficiently.
              </li>
              <li>
                <strong>Forex Market News & Analysis</strong> &#x2010; Get
                instant access to the latest updates on global markets, major
                currency pairs, and geopolitical events affecting forex prices.
                Our expert analysts break down complex financial data to help
                you make informed trading decisions.
              </li>
              <li>
                <strong>Trading Strategies and Step-by-Step Guides</strong>{" "}
                &#x2010; Whether you&apos;re a beginner or a seasoned trader, our
                in-depth guides and proven trading strategies enhance your forex
                knowledge and skills.
              </li>
              <li>
                <strong>Forex Signals & Alerts</strong> &#x2010; Receive
                real-time forex trading signals and price alerts to stay ahead
                of the market. Our automated system delivers crucial trade
                signals to maximize your profit potential.
              </li>
              <li>
                <strong>Risk Management Tools</strong> &#x2010; Manage risk
                effectively with FoxTraa&apos;s built-in stop-loss strategies,
                leverage calculators, and other essential trading tools designed
                to help you protect your capital.
              </li>
              <li>
                <strong>Mobile & Desktop Accessibility</strong> &#x2010; Trade
                anytime, anywhere with FoxTraa&apos;s fully responsive platform.
                Whether you&apos;re on your desktop or mobile device, our
                website offers a seamless trading experience with all the
                features you need at your fingertips.
              </li>
              <li>
                <strong>24/7 Customer Support</strong> &#x2010; We understand the
                importance of support in forex trading. Our dedicated customer
                service team is available 24/7 to assist you with any queries,
                ensuring that you have a hassle-free trading experience.
              </li>
            </ol>

            <h2 className="text-4xl font-semibold mt-4 mb-4">
              Why FoxTraa Outshines Other Forex Trading Websites
            </h2>
            <p className="mb-4 text-2xl">
              Unlike other forex platforms, FoxTraa provides a one-stop solution
              for traders of all levels. Our commitment to transparency,
              education, and top-tier trading tools ensures that we remain the
              most trusted and best forex trading website available.
            </p>
            <ul className="text-2xl list-disc ml-6 mb-4">
              <li>
                No Hidden Fees &#x2010; Trade with full transparency and no surprise
                charges.
              </li>
              <li>
                Regular Market Insights &#x2010; Stay ahead with daily and weekly forex
                analysis.
              </li>
              <li>
                Customizable Trading Dashboard &#x2010; Tailor your trading experience
                with personalized settings and tools.
              </li>
            </ul>

            <h2 className="text-4xl font-semibold mt-4 mb-4">
              Join the Best Forex Trading Website Today!
            </h2>
            <p className="mb-4 text-2xl">
              FoxTraa offers everything you need to succeed in forex trading.
              Whether you&apos;re looking for reliable forex signals, in-depth
              market analysis, or real-time data, FoxTraa has you covered.
            </p>
            <p className="mb-4 text-2xl">
              Join FoxTraa today and experience the best forex trading website
              for expert insights, powerful trading tools, and real-time
              updates. Take your trading journey to the next level with
              FoxTraa—where precision meets performance.
            </p>
          </>
        )}

        {/* Button is now placed at the bottom dynamically */}
        <div className="mt-4 flex justify-center">
          <Button onClick={toggleReadmore}>
            {readmore ? "Show Less" : "Read More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FoxtraaDesc;