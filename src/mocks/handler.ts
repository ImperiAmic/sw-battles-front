import { http, HttpResponse } from "msw";
import {
  catalanBattles,
  catalanBattlesPage1,
  catalanBattlesPage2,
} from "../battle/dto/fixturesDto";
import type { BattlesInfoDto } from "../battle/dto/types";

const apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  throw new Error("URL not found for the test");
}

export const handlers = [
  http.get(`${apiUrl}/battles`, ({ request }) => {
    const url = new URL(request.url);
    const currentPage = url.searchParams.get("page");

    if (currentPage === "2") {
      return HttpResponse.json<BattlesInfoDto>({
        battles: catalanBattlesPage2,
        battlesTotal: catalanBattles.length,
      });
    }

    return HttpResponse.json<BattlesInfoDto>({
      battles: catalanBattlesPage1,
      battlesTotal: catalanBattles.length,
    });
  }),
];
