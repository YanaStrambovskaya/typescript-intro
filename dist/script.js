"use strict";
function createTree(depth) {
    if (depth <= 0)
        return null;
    return {
        value: depth,
        child: depth === 1 ? null : createTree(depth - 1),
    };
}
createTree(3);
//# sourceMappingURL=script.js.map