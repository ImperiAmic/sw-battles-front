import { http, HttpResponse } from "msw";
import { almansaBattle, lleidaBattle, tebasBattle } from "../fixtures";
import { type BattleDto, type BattlesInfoDto } from "../battle/dto/types";
import {
  almansaBattleDto,
  catalanBattlesDtos,
  lleidaBattleDto,
  tebasBattleDto,
} from "../battle/dto/fixturesDto";

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
        battles: catalanBattlesDtos.slice(6, 12),
        battlesTotal: catalanBattlesDtos.length,
      });
    }

    return HttpResponse.json<BattlesInfoDto>({
      battles: catalanBattlesDtos.slice(0, 6),
      battlesTotal: catalanBattlesDtos.length,
    });
  }),

  http.patch(`${apiUrl}/battles/${lleidaBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: { ...lleidaBattleDto, doesLightSideWin: false },
    });
  }),

  http.patch(`${apiUrl}/battles/${almansaBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: { ...almansaBattleDto, doesLightSideWin: true },
    });
  }),

  http.patch(`${apiUrl}/battles/${tebasBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: { ...tebasBattleDto, doesLightSideWin: true },
    });
  }),
];
