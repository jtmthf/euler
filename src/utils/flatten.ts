import { iterable } from './iterable';

export function flatten<T>(iterables: Iterable<Iterable<T>>): Iterable<T> {
  return iterable(function*() {
    for (const value of iterables) {
      yield* value;
    }
  });
}
