export function iterableIterator<T>(source: Iterator<T>): IterableIterator<T> {
  return {
    ...source,
    [Symbol.iterator]() {
      return source;
    },
  } as IterableIterator<T>;
}
