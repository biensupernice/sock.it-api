import { normal } from "random";

export type BabyInfo = {
  heartbeat: number;
  heartbeatDanger: boolean;
  oxygen: number;
  oxygenDanger: boolean;
  dateTime: string;
};

function randomInclusive(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

const getDataTick = (): BabyInfo => {
  const hb = Math.floor(normal(90, 15)());
  const ox = Math.min(Math.floor(normal(95, 10)()), 100);

  const hbDanger = hb < 85 || hb > 100;
  const oxDanger = ox < 90;

  return {
    heartbeat: hb,
    heartbeatDanger: hbDanger,
    oxygen: ox,
    oxygenDanger: oxDanger,
    dateTime: new Date().toISOString()
  };
};

export function subscribe(cb: (info: BabyInfo) => void, millis: number) {
  console.log("subscribed");

  let interval = setInterval(() => {
    const data = getDataTick();
    cb(data);
  }, millis);

  return () => {
    console.log("unsubscribed");
    clearInterval(interval);
  };
}
