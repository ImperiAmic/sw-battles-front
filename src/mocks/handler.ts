import { http, HttpResponse } from "msw";
import {
  catalanBattles,
  ebreBattle,
  revisitedEbreBattle,
} from "../battle/dto/fixturesDto";
import { type BattleDto, type BattlesInfoDto } from "../battle/dto/types";

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
        battles: catalanBattles.slice(6, 12),
        battlesTotal: catalanBattles.length,
      });
    }

    return HttpResponse.json<BattlesInfoDto>({
      battles: catalanBattles.slice(0, 6),
      battlesTotal: catalanBattles.length,
    });
  }),

  http.patch(`${apiUrl}/battles/${ebreBattle._id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: revisitedEbreBattle,
    });
  }),
];
