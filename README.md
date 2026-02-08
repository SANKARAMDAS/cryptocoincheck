This is a Crypto currency rate checking app. 
✨ Introduction
CryptoPulse is a high-performance analytics dashboard built with Next.js 16, TailwindCSS v4, and shadcn/ui, delivering real-time market intelligence via CoinGecko’s API and WebSockets. It features high-frequency price tracking and live orderbook streams for low-latency updates, paired with interactive TradingView candlestick charts to visualize OHLCV data with surgical precision. From a dynamic homepage showcasing global stats and trending assets to robust token pages with multi-fiat converters and advanced search tables, the platform provides a modular, developer-friendly stack optimized for speed and clarity.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 50k+ members. It's a place where people help each other out.

## Getting Started
⚙️ Tech Stack
Next.js is a powerful React framework for building full-stack web applications. It simplifies development with features like server-side rendering, static site generation, and API routes, enabling developers to focus on building products and shipping quickly.

TypeScript is a superset of JavaScript that adds static typing, providing better tooling, code quality, and error detection for developers. It is ideal for building large-scale applications and enhances the development experience.

Tailwind CSS is a utility-first CSS framework that allows developers to rapidly build modern websites by composing styles directly in their HTML markup, which facilitates highly customized designs and ensures the smallest possible production CSS bundles.

Shadcn/ui is a collection of beautifully-designed, accessible React components that you copy and paste directly into your project (it is not a traditional npm library), giving you full source code ownership and total customization control to build your own design system often utilizing Tailwind CSS.

CodeRabbit is an AI-powered code review platform that integrates into Git workflows (like GitHub and GitLab) to automatically analyze pull requests, identifying issues ranging from readability concerns to logic bugs and security flaws, and offering one-click fixes to help teams ship high-quality code faster.

CoinGecko API is a comprehensive and reliable RESTful API that provides real-time and historical cryptocurrency market data, including prices, market capitalization, volume, and exchange information, enabling developers to build crypto tracking, analysis, and portfolio management applications.

TradingView is a high-performance financial visualization library that provides interactive charting capabilities for rendering complex OHLCV data. It enables the integration of responsive candlestick charts and technical indicators, allowing users to perform professional-grade technical analysis with low-latency updates and surgical precision.

🔋 Features
👉 Home Dashboard: Displays crucial market health indicators like Total Market Cap and BTC & ETH dominance, alongside a dynamic list of Trending Tokens, all retrieved instantly using the CoinGecko /global and /search/trending endpoints.

👉 Token Discovery Page: A comprehensive, sortable and searchable table featuring key token metrics (Price, 24h change, Market Cap Rank) for mass market analysis, powered by the scalable /coins/markets REST API and optimized with pagination for efficient browsing.

👉 Detailed Token Overview: Provides an immediate summary of any selected token, including its logo, current price, and market cap rank, utilizing the /coins/{id} REST API for core data and the CGSimplePrice WebSocket for continuous, live price monitoring.

👉 Interactive Candlestick Chart: Integrates TradingView Lightweight Charts to visualize market trends and price action with surgical precision, rendering multi-timeframe OHLCV data fetched from CoinGecko’s high-performance market endpoints.

👉 Real-Time Trades & Orderbook: Features a live stream of market activity exactly as it happens on the exchange, using low-latency WebSockets to display a constant flow of buy/sell orders and recent trade executions.

👉 Smart Currency Converter: An interactive tool that allows users to instantly compute coin amounts into dozens of supported fiat and crypto currencies, leveraging the /simple/supported_vs_currencies and /simple/price endpoints for accurate conversions.

👉 Exchange & Trading Pairs: Allows users to analyze trading context by displaying aggregated lists of exchanges and available trading pairs, with all data sourced directly from the dedicated /exchanges and /exchanges/{id}/tickers REST APIs.

👉 Global Search Functionality: A powerful, unified search bar that allows users to quickly locate any crypto asset by name or symbol, linking directly to the respective Token Detail Page via the CoinGecko /search and /coins/{id} REST endpoints.

And many more, including code architecture and reusability.

🤸 Quick Start
Follow these steps to set up the project locally on your machine.

Prerequisites

Make sure you have the following installed on your machine:

Git
Node.js
npm (Node Package Manager)
Cloning the Repository

git clone https://github.com/adrianhajdin/coinpulse.git
cd coinpulse
Installation

Install the project dependencies using npm:

npm install
Set Up Environment Variables

Create a new file named .env in the root of your project and add the following content:

COINGECKO_BASE_URL=https://pro-api.coingecko.com/api/v3
COINGECKO_API_KEY=

NEXT_PUBLIC_COINGECKO_WEBSOCKET_URL=
NEXT_PUBLIC_COINGECKO_API_KEY=
Replace the placeholder values with your real credentials. You can get these by signing up at: CoinGecko API.

Running the Project

npm run dev
Open http://localhost:3000 in your browser to view the project.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


<img width="1476" height="1053" alt="Screenshot 2026-02-08 161600" src="https://github.com/user-attachments/assets/32b4cf5c-7809-4c3e-ab7e-d3aa5fed9337" />
<img width="1469" height="1109" alt="Screenshot 2026-02-08 161553" src="https://github.com/user-attachments/assets/353af233-a189-4d0d-9d30-40983d80a0ed" />
<img width="1496" height="1122" alt="Screenshot 2026-02-08 161544" src="https://github.com/user-attachments/assets/6d16ce61-6a72-496f-88dc-7ff8cf8b1081" />
<img width="1459" height="1114" alt="Screenshot 2026-02-08 161616" src="https://github.com/user-attachments/assets/0a58c1f5-44e8-4d9f-a2b6-d7b5c9619225" />
<img width="1488" height="1061" alt="Screenshot 2026-02-08 161607" src="https://github.com/user-attachments/assets/7e08f946-2afe-4ddc-bdec-b849334d54ae" />
