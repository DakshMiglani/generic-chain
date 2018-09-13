import { chain } from "./lib";

describe("test chain", () => {
  it("modifying argument persists", () => {
    chain([
      (next, ctx) => {
        ctx.name = "hey";
        return next();
      },
      (next, ctx) => {
        expect(ctx.name).toBe("hey");
        return next();
      }
    ])(() => 5)({}, {}, {}, {});
  });
});
