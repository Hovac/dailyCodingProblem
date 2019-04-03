/*
You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.
Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.
For example, given the following board:
[[f, f, f, f],
[t, t, f, t],
[f, f, f, f],
[f, f, f, f]]
and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.
*/

var m = 3;
var n = 3;
var matrix = [[0,0,0,0], [1,1,0,1], [0,0,0,0], [0,0,0,0]];
var startX = 3;
var startY = 0;
var stopX = 0;
var stopY = 0;
var x, y;
var steps = 0;
var errorMessage = "Maze is unsolvable!";

//Created matrix M*N size and filling it with random values of true/false and making start and stop value false by default so it can be "walked" on.
/* 
for (let i = 0; i < m; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
        if (Math.random() > 0.5) matrix[i][j] = false;
        else matrix[i][j] = true;
    }
}
matrix[startX][startY] = false;
matrix[stopX][stopY] = false;
*/

x = startX;
y = startY;
console.log(matrix);

/* The problem with this code is that if there are dead ends, it will get stuck there because it first goes furthest to the x axis, then the y axis...
it could probably incorporate retracing and deleting steps based on how much x,y retraced, but it is very inefficient and I will get spaghetti code here
while (x != stopX && y != stopY) {
    if (x < stopX) {
        if (matrix[x + 1][y] == false) {
            x++;
            steps++;
        }
        else if (x != stopX) {
            console.log(errorMessage);
        }
    }
    else if (x > stopX) {
        if (matrix[x - 1][y] == false) {
            x--;
            steps++;
        }
        else if (y != stopY) {
            console.log(errorMessage);
        }
    }
    if (y < stopY) {
        if (matrix[x][y + 1] == false) {
            y++;
            steps++;
        }
        else if (y != stopY) {
            console.log(errorMessage);
        }
    }
    else if (y > stopY) {
        if (matrix[x][y - 1] == false) {
            y--;
            steps++;
        }
        else if (y != stopY) {
            console.log(errorMessage);
        }
    }
    console.log("x: ", x, "y: ", y);
}
*/
console.log(steps);
//will return to this problem as it is entertaining :)