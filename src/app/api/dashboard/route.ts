import { NextResponse } from "next/server";

import { getDashboardSummary } from "@/domain/training";

export const GET = () => {
  return NextResponse.json({
    data: getDashboardSummary(),
  });
};
