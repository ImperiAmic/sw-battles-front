import { http, HttpResponse } from "msw";
import { type BattleDto, type BattlesInfoDto } from "../../battle/dto/types";
import {
  almansaBattleDto,
  catalanBattlesDtos,
  lleidaBattleDto,
  llucmajorBattleDto,
  mallorcaBattleDto,
  montjuicBattleDto,
  muretBattleDto,
  roncesvallesBattleDto,
  tebasBattleDto,
  editedAlmansaBattleDto,
  editedRoncesvallesBattleDto,
  vilafrancaBattleDto,
} from "../../battle/dto/fixturesDto";
import {
  almansaBattle,
  lleidaBattle,
  llucmajorBattle,
  mallorcaBattle,
  montjuicBattle,
  muretBattle,
  roncesvallesBattle,
  tebasBattle,
} from "../fixtures";

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

  http.patch(`${apiUrl}/battles/${muretBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: { ...muretBattleDto, doesLightSideWin: true },
    });
  }),

  http.delete(`${apiUrl}/battles/${mallorcaBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: mallorcaBattleDto,
    });
  }),

  http.delete(`${apiUrl}/battles/${llucmajorBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: llucmajorBattleDto,
    });
  }),

  http.delete(`${apiUrl}/battles/${roncesvallesBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: roncesvallesBattleDto,
    });
  }),

  http.get(`${apiUrl}/battles/${montjuicBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: montjuicBattleDto,
    });
  }),

  http.get(`${apiUrl}/battles/${almansaBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: almansaBattleDto,
    });
  }),

  http.get(`${apiUrl}/battles/${muretBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: muretBattleDto,
    });
  }),

  http.post(`${apiUrl}/battles`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: vilafrancaBattleDto,
    });
  }),

  http.get(`${apiUrl}/battles/${mallorcaBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: mallorcaBattleDto,
    });
  }),

  http.put(`${apiUrl}/battles/${almansaBattleDto._id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: editedAlmansaBattleDto,
    });
  }),

  http.get(`${apiUrl}/battles/${roncesvallesBattle.id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: roncesvallesBattleDto,
    });
  }),

  http.put(`${apiUrl}/battles/${roncesvallesBattleDto._id}`, () => {
    return HttpResponse.json<{ battle: BattleDto }>({
      battle: editedRoncesvallesBattleDto,
    });
  }),
];
