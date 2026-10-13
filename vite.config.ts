import { defineConfig, loadEnv, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import { handleChatRequest } from "./src/chat/handle";

function chatApi(): Plugin {
  return {
    name: "portfolio-chat",
    configureServer(server) {
      const env = loadEnv(server.config.mode, process.cwd(), "");
      server.middlewares.use("/.netlify/functions/chat", async (req, res, next) => {
        if (req.method !== "POST") {
          next();
          return;
        }
        const chunks: Buffer[] = [];
        for await (const chunk of req) chunks.push(Buffer.from(chunk));
        const previous = process.env.GROQ_API_KEY;
        const previousModel = process.env.GROQ_MODEL;
        if (env.GROQ_API_KEY) process.env.GROQ_API_KEY = env.GROQ_API_KEY;
        if (env.GROQ_MODEL) process.env.GROQ_MODEL = env.GROQ_MODEL;
        try {
          const response = await handleChatRequest(
            new Request("http://127.0.0.1/.netlify/functions/chat", {
              method: "POST",
              headers: {
                "content-type": req.headers["content-type"] ?? "application/json",
                "x-forwarded-for": req.socket.remoteAddress ?? "local",
              },
              body: Buffer.concat(chunks),
            }),
          );
          res.statusCode = response.status;
          response.headers.forEach((value, key) => res.setHeader(key, value));
          res.end(Buffer.from(await response.arrayBuffer()));
        } finally {
          if (previous === undefined) delete process.env.GROQ_API_KEY;
          else process.env.GROQ_API_KEY = previous;
          if (previousModel === undefined) delete process.env.GROQ_MODEL;
          else process.env.GROQ_MODEL = previousModel;
        }
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), chatApi()],
});
