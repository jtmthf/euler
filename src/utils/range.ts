export function range(stop: number): Iterable<number>;
export function range(
  start: number,
  stop: number,
  step?: number,
): Iterable<number>;
export function* range(
  startOrStop: number,
  stop?: number,
  step = 1,
): Iterable<number> {
  let i = stop === undefined ? 0 : startOrStop;
  stop = stop === undefined ? startOrStop : stop;
  while (i < stop) {
    yield i;
    i += step;
  }
}
