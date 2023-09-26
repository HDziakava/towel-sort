// You should implement your task here.

module.exports = function towelSort(matrix) {
    let newMatrix = [];

    if (matrix) {
        matrix.forEach((array, index) => {
            if (index % 2 !== 0) {
                newMatrix = [...newMatrix, ...array.reverse()];
                return;
            }
            newMatrix = [...newMatrix, ...array];
        });
        return newMatrix;
    } else {
        return newMatrix;
    }
};
