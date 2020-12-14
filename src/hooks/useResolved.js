import { useState, useEffect } from 'react';

// The purpose of this hook is to be able to determine whether
// or not a value that is initialized as undefined has been
// updated to the expected data type. For example, if a
// component has a state variable that is declared without an
// initial value, but you expect that value to appear at some point..
// you can use this hook to determine when the value is no longer undefined.
// This is especially helpful with auth.

export const useResolved = (
  ...vals
) => {
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    setResolved(vals.every(v => v !== undefined));
  }, [vals]);

  // Returns true if resolved otherwise false
  return resolved;
};
