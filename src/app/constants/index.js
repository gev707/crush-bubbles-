export const board = document.getElementById('board');

export const colors = ['#8B0000', '#00FF00', '#00BFFF', '#FFD700', '#FF4500', '#FF1493', '#4B0082', '#008B8B', '#696969'];

export const showScore = document.querySelector('.score');
export const showMoves = document.querySelector('.moves');

//notifications constants

export const notification = document.querySelector('.notification');
export const btn = document.querySelector('.btn');
export const title = document.querySelector('.notification-title')

//timer constants

export const timer = document.getElementById("timer");
export const pauseBtn = document.querySelector('.pause');
export const continueBtn = document.querySelector('.continue');

export const getShapesForSuperBuster = [2, 3, 4, 5, 6, 7, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23, 26, 27, 28, 29, 30, 31, 34, 35, 36, 37, 38, 39, 42, 43, 44, 45, 46, 47, 50, 51, 52, 53, 54, 55, 58, 59, 60, 61, 62, 63];
export const getShapesTree = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55];
export const getShapesFour = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55];