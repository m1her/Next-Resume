import { NextRequest, NextResponse } from "next/server";
import PDFParser from "pdf2json";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    return new Promise<NextResponse>((resolve, reject) => {
      const pdfParser = new PDFParser();

      pdfParser.on("pdfParser_dataError", (errData: any) => {
        console.error("Error parsing PDF:", errData);
        resolve(
          NextResponse.json({ error: "Error parsing file" }, { status: 500 })
        );
      });

      pdfParser.on("pdfParser_dataReady", (pdfData: any) => {

        try {
          const text = pdfData?.Pages.map(
            (page: any, pageIndex: number) => {
              console.log(
                `Page ${pageIndex} Content:`,
                JSON.stringify(page.Texts, null, 2)
              );

              return page.Texts.map((text: any) =>
                decodeURIComponent(text.R[0].T)
              ).join(" ");
            }
          ).join("\n");

          resolve(NextResponse.json({ text }, { status: 200 }));
        } catch (error) {
          console.error("Error extracting text from PDF data:", error);
          resolve(
            NextResponse.json(
              { error: "Error extracting text from PDF data" },
              { status: 500 }
            )
          );
        }
      });

      pdfParser.parseBuffer(buffer);
    });
  } catch (error) {
    console.error("Server error:", error);
    return NextResponse.json({ error: "Error parsing file" }, { status: 500 });
  }
}
