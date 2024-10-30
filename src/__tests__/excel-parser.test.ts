import { describe, it, expect } from "@jest/globals";
import { parseExcel } from "../excel-parser";

describe("Marcaciones", () => {
  it("No tiene fechas en futuro", async () => {
    const results = await parseExcel("src/__fixtures__/report.xlsx");

    expect(results).toEqual("foo");
  });
});
