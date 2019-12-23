export const iterable = <T>(generator: () => Iterator<T>): Iterable<T> => ({
  [Symbol.iterator]: generator,
});
