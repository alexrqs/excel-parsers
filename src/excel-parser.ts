import readXlsxFile from "read-excel-file/node";

export async function parseExcel(path) {
  const rows = await readXlsxFile(path);
  console.log(rows[2]);

  return "foo";
}
