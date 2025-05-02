import { createServer } from "cors-anywhere";

const server = createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"],
});

export default function handler(req, res) {
  req.url = req.url?.replace(/^\/api\/proxy/, "") || "/";
  server.emit("request", req, res);
}
