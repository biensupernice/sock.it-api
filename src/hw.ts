import * as five from "johnny-five";

const board = new five.Board();

board.on("ready", () => console.log("yo"));
