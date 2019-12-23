import { flow } from 'lodash';
import { range, reduce, add } from '../../utils';
import { flatten } from '../../utils/flatten';

export function multiplesOf3And5(below: number): number {
  return flow(apply(range), flatten, filterCopy, reduce(add)(0))(below);
}
