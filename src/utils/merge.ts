import { Indexed } from "../services/types";

function merge(lhs: Indexed, rhs: Indexed): Indexed {
  for (const p in rhs) {
    try {
      if (rhs[p].constructor === Object) {
        rhs[p] = merge(lhs[p] as Indexed, rhs[p] as Indexed);
      } else {
        lhs[p] = rhs[p];
      }
    } catch (e) {
      lhs[p] = rhs[p];
    }
  }

  return lhs;
}

export default merge
