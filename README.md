# 🤖 Stagehand AI Browser Framework

<p align="center">
  <img src="https://img.shields.io/badge/Stagehand-v2.7.2-blue?style=for-the-badge&logo=npm" alt="Stagehand Version">
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License">
</p>

---

Welcome to **Stagehand** - a powerful AI-powered browser automation framework built on top of [Playwright](https://playwright.dev/). This project enables you to build intelligent web agents that can navigate, extract, and interact with websites autonomously.

<div align="center">
  <img src="https://github.com/amkyawdev/stagehand-app/blob/main/banner.png?raw=true" width="100" alt="Stagehand App Icon">
</div>

## ✨ Features

- **🤖 AI-Powered Automation** - Leverage LLMs to control browsers naturally
- **🔍 Smart Extraction** - Extract structured data from any webpage using AI
- **👆 Intelligent Actions** - Act on web pages with natural language commands
- **🧠 Agent Mode** - Full autonomous agent capabilities with CUA mode
- **🔄 Session Management** - Persistent browser sessions via Browserbase
- **🎯 Precision Control** - High-level API with better debugging and fail-safes

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Browserbase account (for cloud sessions) OR local Chrome browser

### Installation

```bash
# Clone the repository
git clone https://github.com/amkyawdev/stagehand-app.git
cd stagehand-app

# Install dependencies
npm install

# Copy environment configuration
cp .env.example .env
```

### Configuration

Add your API keys to the `.env` file:

```env
# Browserbase (required for cloud sessions)
BROWSERBASE_PROJECT_ID=your_project_id
BROWSERBASE_API_KEY=your_api_key

# LLM Provider (choose one)
OPENAI_API_KEY=your_openai_key
# or
GOOGLE_API_KEY=your_google_key
# or
ANTHROPIC_API_KEY=your_anthropic_key
```

### Running the App

```bash
npm start
```

Watch the magic happen! 🔮

## 📖 Usage Examples

### Extract Data from Webpages

```typescript
const extractResult = await stagehand.extract(
  "Extract the value proposition from the page."
);
console.log(extractResult);
```

### Act on Web Pages

```typescript
await stagehand.act("Click the 'Evals' button.");
```

### Observe Page Elements

```typescript
const observeResult = await stagehand.observe(
  "What can I click on this page?"
);
console.log(observeResult);
```

### Use Agent Mode

```typescript
const agent = stagehand.agent({
  mode: "cua",
  model: "google/gemini-2.5-computer-use-preview-10-2025",
  systemPrompt: "You're a helpful assistant that can control a web browser.",
});

const result = await agent.execute("What is the most accurate model to use in Stagehand?");
```

## 🛠️ Project Structure

```
stagehand-app/
├── index.ts          # Main application entry point
├── package.json      # Project dependencies
├── tsconfig.json     # TypeScript configuration
├── .env.example      # Environment variables template
├── .cursorrules      # Cursor IDE rules for Stagehand
└── claude.md         # Claude AI assistant configuration
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm start` | Run the Stagehand example |
| `npm run dev` | Start development mode |
| `npm run build` | Build the project |
| `npm run test` | Run tests |

## 🌐 Run Locally

To run on a local browser instead of Browserbase cloud:

1. Add your API keys to `.env`
2. Change the env setting in `index.ts`:

```typescript
const stagehand = new Stagehand({
  env: "LOCAL"  // Change from "BROWSERBASE" to "LOCAL"
});
```

## 📚 Resources

- [Stagehand Documentation](https://stagehand.dev/docs)
- [Browserbase Documentation](https://docs.browserbase.com)
- [Playwright Documentation](https://playwright.dev/)
- [GitHub Repository](https://github.com/browserbase/stagehand)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

---

<p align="center">
  Made with ❤️ using <a href="https://stagehand.dev">Stagehand</a>
</p>
