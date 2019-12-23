export function* union<T>(...iterables: Iterable<T>[]): Iterable<T> {
  const iterators = iterables.map(iterable => iterable[Symbol.iterator]());
  const buffer = new Set<T>();
  let done: boolean;
  do {
    done = true;
    for (const iterator of iterators) {
      const result = iterator.next();
      if (!result.done) {
        done = false;
        if (!buffer.has(result.value)) {
          buffer.add(result.value);
          yield result.value;
        }
      }
    }
  } while (!done);
}
