export function asResult<T>(value: T): IteratorResult<T> {
  return {
    value,
  };
}
