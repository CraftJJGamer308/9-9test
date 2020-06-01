var map = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];
var c = [];
const bc = [
    [[0, 0], [0, 1], [0, 2], [1, 0], [1, 1], [1, 2], [2, 0], [2, 1], [2, 2]],
    [[3, 0], [3, 1], [3, 2], [4, 0], [4, 1], [4, 2], [5, 0], [5, 1], [5, 2]],
    [[6, 0], [6, 1], [6, 2], [7, 0], [7, 1], [7, 2], [8, 0], [8, 1], [8, 2]],
    [[0, 3], [0, 4], [0, 5], [1, 3], [1, 4], [1, 5], [2, 3], [2, 4], [2, 5]],
    [[3, 3], [3, 4], [3, 5], [4, 3], [4, 4], [4, 5], [5, 3], [5, 4], [5, 5]],
    [[6, 3], [6, 4], [6, 5], [7, 3], [7, 4], [7, 5], [8, 3], [8, 4], [8, 5]],
    [[0, 6], [0, 7], [0, 8], [1, 6], [1, 7], [1, 8], [2, 6], [2, 7], [2, 8]],
    [[3, 6], [3, 7], [3, 8], [4, 6], [4, 7], [4, 8], [5, 6], [5, 7], [5, 8]],
    [[6, 6], [6, 7], [6, 8], [7, 6], [7, 7], [7, 8], [8, 6], [8, 7], [8, 8]]
];

function checkRow(x, y, n) {
    var i;
    for (i = 0; i < 9; i++) {
        if (i == y)
            continue;
        if (map[x][i] == n)
            return false;
    }
    return true;
}

function checkCol(x, y, n) {
    var i;
    for (i = 0; i < 9; i++) {
        if (i == x)
            continue;
        if (map[i][y] == n)
            return false;
    }
    return true;
}

function checkBox(x, y, n) {
    var index;
    var i, j;
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (bc[i][j][0] == x && bc[i][j][1] == y)
                index = i;
        }
    }
    for (i = 0; i < 9; i++) {
        if (x == bc[index][i][0] && y == bc[index][i][1])
            continue;
        if (map[bc[index][i][0]][bc[index][i][1]] == n)
            return false;
    }
    return true;
}

function chk(x, y, n) {
    if (checkBox(x, y, n) && checkCol(x, y, n) && checkRow(x, y, n))
        return true;
    else
        return false;
}

function solve() {
    var i, j, x, y, n, val, found;

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            val = document.getElementsByClassName(i.toString())[j].value - '0'
            if (val == '') {
                map[i].push(0);
                continue;
            }
            else if (!(1 <= val && val <= 9))
                return alert('You should only enter numbers between 1 and 9');
            else
                map[i].push(val);

        }
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            if (map[i][j] == 0)
                c.push([i, j]);
        }
    }

    for (i = 0; i < c.length;) {
        x = c[i][0];
        y = c[i][1];
        n = map[x][y] + 1;
        found = false;

        while (!found && n <= 9) {
            if (chk(x, y, n)) {
                found = true;
                map[x][y] = n;
                i++;
            }
            else
                n++;
        }

        if (!found) {
            map[x][y] = 0;
            i--;
        }
    }

    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++) {
            document.getElementsByClassName(i.toString())[j].value = map[i][j];
        }
    }
}
