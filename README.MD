# AI Transcription and Response Service

This project offers a comprehensive solution for processing video content, performing transcription on the video's audio, and leveraging AI capabilities to generate responses based on user prompts. The repository encompasses both the frontend and backend components of this service.

## Repository Structure

- **Frontend (Web Application)**: Located in the `upload-ai-web` folder.
- **Backend (API Service)**: Located in the `upload-ai-api` folder.

## Overview

1. **Video & Audio Processing**: Users can upload a video, and the backend will transcribe its audio to generate text content.
2. **AI Integration**: Using the transcribed content, users can provide prompts, such as "generate three titles for a YouTube video", and set a desired temperature. The system will then harness AI to generate a contextual response based on this input.

## Technologies

- **React**: The frontend web application framework.
- **Node.js**: The runtime environment powering the backend.
- **Fastify**: Used in the backend for a fast and efficient API.
- **Zod**: For schema validation in the backend.
- **OpenAI**: The engine for processing prompts and generating AI-driven responses.

## Getting Started

For instructions on how to run the frontend and backend projects, please refer to the respective `readme.md` files within the `upload-ai-web` and `upload-ai-api` directories.

## Contribution

Contributions to any part of this project are welcome. Whether it's the frontend in `upload-ai-web` or the backend in `upload-ai-api`, we appreciate your input. Please fork the repository and submit pull requests for your proposed changes.

## License

MIT License

Copyright (c) 2023 Leandro Domingos da Silva

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
