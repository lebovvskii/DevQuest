import { NextResponse } from "next/server";

import { getTopics } from "@/domain/training";

export const GET = () => {
  return NextResponse.json({
    data: getTopics(),
  });
};
