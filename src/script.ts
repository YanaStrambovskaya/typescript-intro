type node = {
  value: number;
  child: node | null;
};

function createTree(depth: number): node | null {
  if (depth <= 0) return null;
  return {
    value: depth,
    child: depth === 1 ? null : createTree(depth - 1),
  };
}
createTree(3);
