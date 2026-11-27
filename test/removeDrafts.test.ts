import { describe, expect, it } from "vitest";
import { VFile } from "vfile";
import type { BuildCtx, ProcessedContent } from "@quartz-community/types";
import { RemoveDrafts } from "../src/index";

const publishes = (frontmatter?: Record<string, unknown>) => {
  const file = new VFile("");
  file.data = { frontmatter } as VFile["data"];
  return RemoveDrafts().shouldPublish(
    {} as BuildCtx,
    [{ type: "root", children: [] }, file] as ProcessedContent,
  );
};

describe("RemoveDrafts", () => {
  it.each([[true], ["true"]])("drops pages with draft: %j", (draft) => {
    expect(publishes({ draft })).toBe(false);
  });

  it.each([[false], ["false"], [undefined], ["yes"], [1]])(
    "publishes pages with draft: %j",
    (draft) => {
      expect(publishes({ draft })).toBe(true);
    },
  );

  it("publishes pages without frontmatter", () => {
    expect(publishes(undefined)).toBe(true);
  });
});
