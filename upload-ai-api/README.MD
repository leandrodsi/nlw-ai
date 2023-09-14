# NLW AI - Backend AI Transcription and Response Service

This backend service processes video content, performing transcription on the audio and leveraging AI capabilities to generate responses based on user prompts.

## Overview

1. **Video & Audio Processing**: The backend receives video metadata and its corresponding audio. It performs transcription on the audio to generate text content.
2. **AI Integration**: Using the transcribed content, users can provide prompts, such as "generate three titles for a YouTube video", set a desired temperature, and the system will harness AI to generate a contextual response based on the given input.

## Technologies

- **Node.js**: The runtime environment powering the backend.
- **Fastify**: A fast and low overhead web framework for Node.js.
- **Zod**: Used for schema validation, ensuring correct body and params structure.
- **OpenAI**: The core engine for processing prompts and generating AI-driven responses.

## Setup & Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/leandrodsi/nlw-ai.git
   ```

2. **Navigate into the directory**

   ```bash
   cd nlw-ai/upload-ai-api
   ```

3. **Install dependencies** <br />
   Using pnpm

   ```bash
   pnpm i
   ```

   Using npm

   ```bash
   npm install
   ```

   Using yarn

   ```bash
   yarn
   ```

4. **Run the backend server**
   Using pnpm

   ```bash
   pnpm run dev
   ```

   Using npm

   ```bash
   npm run dev
   ```

   Using yarn

   ```bash
   yarn dev
   ```
