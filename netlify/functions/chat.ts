import { handleChatRequest } from "../../src/chat/handle";

export default function chat(request: Request): Promise<Response> {
  return handleChatRequest(request);
}
