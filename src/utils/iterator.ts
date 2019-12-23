export function iterator<T>(source: Iterable<T>): IterableIterator<T> {
  return iterableIterator(source[Symbol.iterator]());
}
