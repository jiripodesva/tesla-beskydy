import type { MouseEvent } from "react";
import type { PlanId } from "../data/plans";

export const RESERVATION_EVENT = "tesla-beskydy:reservation-plan";

export function reservationHref(_planId?: PlanId): string {
  return "#rezervace";
}

export function readPlanFromLocation(): PlanId | null {
  const searchPlan = new URLSearchParams(window.location.search).get("sluzba");
  if (searchPlan) return searchPlan as PlanId;

  const hash = window.location.hash;
  const queryStart = hash.indexOf("?");
  if (queryStart === -1) return null;

  return new URLSearchParams(hash.slice(queryStart + 1)).get("sluzba") as PlanId | null;
}

export function handleReservationClick(planId?: PlanId) {
  return (_event: MouseEvent<HTMLAnchorElement>) => {
    if (!planId) return;

    window.dispatchEvent(
      new CustomEvent(RESERVATION_EVENT, { detail: { planId } }),
    );
  };
}
