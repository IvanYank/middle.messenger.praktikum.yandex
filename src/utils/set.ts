import merge from "./merge";
import { Indexed } from "../services/types";

function set(object: Indexed | unknown, path: string, value: unknown): Indexed | unknown {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  if (typeof path !== 'string') {
    throw new Error('path must be string');
  }

  /* eslint-disable */
  const result = path.split('.').reduceRight<Indexed>((acc, key) => ({ [key]: acc }), value as any);
  /* eslint-enable */
  return merge(object as Indexed, result);
}

export default set
