# 📈 Chand - Real-time Market Dashboard

A high-performance financial dashboard built with **Next.js 15**, tracking real-time prices for Currencies (USD, EUR, GBP) and Precious Metals (Gold, Silver, Ayar Fund).

The app features a **serverless architecture** that automatically synchronizes data every 10 minutes using a secure cron-logic and cloud-based Redis storage to ensure zero-latency data delivery.

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Features

- **Real-time Asset Tracking**: Live conversion from Rial to Toman for major global currencies.
- **Commodity Insights**: Daily tracking for Gold 18k, Silver 999, and the Ayar Gold Fund.
- **Interactive Charts**: Visual 30-day historical trends for every asset.
- **Serverless Cron Jobs**: Automated data fetching via a secure API route (`/api/cron/update`).
- **Cloud Caching**: Uses **Upstash Redis** to cache market data, preventing API rate limits and ensuring instant page loads.
- **Atomic Design**: Built using a scalable Atomic Design file structure (Atoms, Molecules, Organisms).

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database**: [Upstash Redis](https://upstash.com/) (Serverless Key-Value Store)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: TGJU Market Indicators
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗 Project Structure

This project follows the **Atomic Design** methodology for components and the **App Router** for routing.

```text
├── app/
│   ├── api/
│   │   ├── cron/update/   # The "Saver": Fetches external API data & saves to Redis
│   │   └── graph/         # The "Reader": Fetches cached data from Redis for the UI
│   ├── components/
│   │   ├── atoms/         # Buttons, badges, typography
│   │   ├── molecules/     # Cards, graphs
│   │   ├── organisms/     # Complex sections (e.g., Cards grid)
│   │   └── layout/        # Main layout wrappers
│   └── page.# 📈 Chand - Real-time Market Dashboard

A high-performance financial dashboard built with **Next.js 15**, tracking real-time prices for Currencies (USD, EUR, GBP) and Precious Metals (Gold, Silver, Ayar Fund).

The app features a **serverless architecture** that automatically synchronizes data every 10 minutes using a secure cron-logic and cloud-based Redis storage to ensure zero-latency data delivery.

![Project Status](https://img.shields.io/badge/status-live-success)
![License](https://img.shields.io/badge/license-MIT-blue)

## 🚀 Features

- **Real-time Asset Tracking**: Live conversion from Rial to Toman for major global currencies.
- **Commodity Insights**: Daily tracking for Gold 18k, Silver 999, and the Ayar Gold Fund.
- **Interactive Charts**: Visual 30-day historical trends for every asset.
- **Serverless Cron Jobs**: Automated data fetching via a secure API route (`/api/cron/update`).
- **Cloud Caching**: Uses **Upstash Redis** to cache market data, preventing API rate limits and ensuring instant page loads.
- **Atomic Design**: Built using a scalable Atomic Design file structure (Atoms, Molecules, Organisms).

## 🛠 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Database**: [Upstash Redis](https://upstash.com/) (Serverless Key-Value Store)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Data Source**: TGJU Market Indicators
- **Deployment**: [Vercel](https://vercel.com/)

## 🏗 Project Structure

This project follows the **Atomic Design** methodology for components and the **App Router** for routing.

```text
├── app/
│   ├── api/
│   │   ├── cron/update/   # The "Saver": Fetches external API data & saves to Redis
│   │   └── graph/         # The "Reader": Fetches cached data from Redis for the UI
│   ├── components/
│   │   ├── atoms/         # Buttons, badges, typography
│   │   ├── molecules/     # Cards, graphs
│   │   ├── organisms/     # Complex sections (e.g., Cards grid)
│   │   └── layout/        # Main layout wrappers
│   └── page.tsx           # Dashboard Entry Point
├── lib/
│   ├── constants.ts       # Asset definitions (IDs, Slugs, Labels)
│   └── market-service.ts  # Data fetching logic
└── public/                # Static assetstsx           # Dashboard Entry Point
├── lib/
│   ├── constants.ts       # Asset definitions (IDs, Slugs, Labels)
│   └── market-service.ts  # Data fetching logic
└── public/                # Static assets