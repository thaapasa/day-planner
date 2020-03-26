export type ISOTime = string;

export function toMinutesInDay(time: ISOTime) {
  const [h, m] = time.split(':');
  return Number(h) * 60 + Number(m);
}

export const dayMiddleMinutes = toMinutesInDay('12:00');
