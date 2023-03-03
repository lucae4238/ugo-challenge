import { rest } from "msw";

export const handlers = [
  //handle requ
  rest.get("link", (req, res, ctx) => {
    return res(ctx.status(200));
  })
];
