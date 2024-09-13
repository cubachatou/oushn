import { NextRequest, NextResponse } from "next/server";
import SubmitJSON from "submitjson";

const sj = new SubmitJSON({
  apiKey: process.env.SUBMIT_JSON_API_KEY as string,
  endpoint: process.env.ENDPOINT,
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const response = await sj.submit(body);

  if (response) {
    return NextResponse.json(
      { message: `Форма відправлена`, response },
      { status: 200 },
    );
  } else {
    return NextResponse.json(
      { message: `Щось пішло не так`, response },
      { status: 400 },
    );
  }
}

export { GET } from "next-video/request-handler";
