import { first } from './first';
import { Maybe } from './types';
import { isIterable } from './is-iterable';

export function reduce<T>(
  reducer: (previous: T, next: T) => T,
): {
  (start: T): (iterable: Iterable<T>) => T;
  (iterable: Iterable<T>): Maybe<T>;
};
export function reduce<T, O>(
  reducer: (previous: O, next: T) => O,
): (start: O) => (iterable: Iterable<T>) => O;
export function reduce<T, O>(
  reducer: (previous: O, next: T) => O,
): (startOrIterable: O | Iterable<T>) => any {
  return startOrIterable => {
    if (isIterable(startOrIterable)) {
      const [{ value }, iterator] = first(startOrIterable);
      return reduce(reducer)(value)(iterator);
    }
    return (iterable: Iterable<T>) => {
      let previous = startOrIterable;
      for (const value of iterable) {
        previous = reducer(previous!, value);
      }
      return previous;
    };
  };
}
