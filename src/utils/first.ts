import { iterableIterator } from './iterable-iterator';

export function first<T>(
  source: Iterable<T>,
): [IteratorResult<T>, IterableIterator<T>] {
  const iterator = source[Symbol.iterator]();

  return [iterator.next(), iterableIterator(iterator)];
}
