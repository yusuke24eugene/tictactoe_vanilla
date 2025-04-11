let turn = false;
let T1 = null;
let T2 = null;
let T3 = null;
let T4 = null;
let T5 = null;
let T6 = null;
let T7 = null;
let T8 = null;
let T9 = null;
let W = false;
let move = 0;
let ai = false;
let click1 = false;
let click2 = false;
let click3 = false;
let click4 = false;
let click5 = false;
let click6 = false;
let click7 = false;
let click8 = false;
let click9 = false;
let random = null;
let xwin = 0;
let owin = 0;
let xloss = 0;
let oloss = 0;
let draw = 0;

const xcount = document.getElementById("xcounter");
const ocount = document.getElementById("ocounter");
console.log("X TURN");

reset.addEventListener("click", (e) => {
  resetclick();
});

function resetclick() {
  console.log("X TURN");
  turn = false;
  ai = false;
  T1 = null;
  T2 = null;
  T3 = null;
  T4 = null;
  T5 = null;
  T6 = null;
  T7 = null;
  T8 = null;
  T9 = null;
  W = false;
  move = 0;
  click1 = false;
  click2 = false;
  click3 = false;
  click4 = false;
  click5 = false;
  click6 = false;
  click7 = false;
  click8 = false;
  click9 = false;
  random = 0;
  t1.style.visibility = "hidden";
  t2.style.visibility = "hidden";
  t3.style.visibility = "hidden";
  t4.style.visibility = "hidden";
  t5.style.visibility = "hidden";
  t6.style.visibility = "hidden";
  t7.style.visibility = "hidden";
  t8.style.visibility = "hidden";
  t9.style.visibility = "hidden";
  t1.style.color = "black";
  t2.style.color = "black";
  t3.style.color = "black";
  t4.style.color = "black";
  t5.style.color = "black";
  t6.style.color = "black";
  t7.style.color = "black";
  t8.style.color = "black";
  t9.style.color = "black";
  xcontainer.style.visibility = "visible";
  ocontainer.style.visibility = "hidden";
  xcontainer.innerHTML = "X TURN";
  ocontainer.innerHTML = "O TURN";
  if (ai == true) {
    aiplay();
  } else {
    tictactoe();
  }
}

function aiplay() {
  if (ai == true && W == false) {
    console.log("AI turn");
    if (turn == false) {
      if (T2 == true && T3 == true && click1 == false) {
        random = 1;
      } else if (T4 == true && T7 == true && click1 == false) {
        random = 1;
      } else if (T5 == true && T9 == true && click1 == false) {
        random = 1;
      } else if (T1 == true && T3 == true && click2 == false) {
        random = 2;
      } else if (T5 == true && T8 == true && click2 == false) {
        random = 2;
      } else if (T1 == true && T2 == true && click3 == false) {
        random = 3;
      } else if (T6 == true && T9 == true && click3 == false) {
        random = 3;
      } else if (T5 == true && T7 == true && click3 == false) {
        random = 3;
      } else if (T5 == true && T6 == true && click4 == false) {
        random = 4;
      } else if (T1 == true && T7 == true && click4 == false) {
        random = 4;
      } else if (T4 == true && T6 == true && click5 == false) {
        random = 5;
      } else if (T2 == true && T8 == true && click5 == false) {
        random = 5;
      } else if (T1 == true && T9 == true && click5 == false) {
        random = 5;
      } else if (T3 == true && T7 == true && click5 == false) {
        random = 5;
      } else if (T4 == true && T5 == true && click6 == false) {
        random = 6;
      } else if (T3 == true && T9 == true && click6 == false) {
        random = 6;
      } else if (T8 == true && T9 == true && click7 == false) {
        random = 7;
      } else if (T1 == true && T4 == true && click7 == false) {
        random = 7;
      } else if (T1 == true && T3 == true && click7 == false) {
        random = 7;
      } else if (T7 == true && T9 == true && click8 == false) {
        random = 8;
      } else if (T2 == true && T5 == true && click8 == false) {
        random = 8;
      } else if (T7 == true && T8 == true && click9 == false) {
        random = 9;
      } else if (T3 == true && T6 == true && click9 == false) {
        random = 9;
      } else if (T1 == true && T5 == true && click9 == false) {
        random = 9;
      } else if (T4 == false && T7 == false && click1 == false) {
        random = 1;
      } else if (T5 == false && T9 == false && click1 == false) {
        random = 1;
      } else if (T1 == false && T3 == false && click2 == false) {
        random = 2;
      } else if (T5 == false && T8 == false && click2 == false) {
        random = 2;
      } else if (T1 == false && T2 == false && click3 == false) {
        random = 3;
      } else if (T6 == false && T9 == false && click3 == false) {
        random = 3;
      } else if (T5 == false && T7 == false && click3 == false) {
        random = 3;
      } else if (T5 == false && T6 == false && click4 == false) {
        random = 4;
      } else if (T1 == false && T7 == false && click4 == false) {
        random = 4;
      } else if (T4 == false && T6 == false && click5 == false) {
        random = 5;
      } else if (T2 == false && T8 == false && click5 == false) {
        random = 5;
      } else if (T1 == false && T9 == false && click5 == false) {
        random = 5;
      } else if (T3 == false && T7 == false && click5 == false) {
        random = 5;
      } else if (T4 == false && T5 == false && click6 == false) {
        random = 6;
      } else if (T3 == false && T9 == false && click6 == false) {
        random = 6;
      } else if (T8 == false && T9 == false && click7 == false) {
        random = 7;
      } else if (T1 == false && T4 == false && click7 == false) {
        random = 7;
      } else if (T1 == false && T3 == false && click7 == false) {
        random = 7;
      } else if (T7 == false && T9 == false && click8 == false) {
        random = 8;
      } else if (T2 == false && T5 == false && click8 == false) {
        random = 8;
      } else if (T7 == false && T8 == false && click9 == false) {
        random = 9;
      } else if (T3 == false && T6 == false && click9 == false) {
        random = 9;
      } else if (T1 == false && T5 == false && click9 == false) {
        random = 9;
      } else {
        random = Math.floor(Math.random() * 9) + 1;
      }
    }
    if (turn == true) {
      if (T2 == false && T3 == false && click1 == false) {
        random = 1;
      } else if (T4 == false && T7 == false && click1 == false) {
        random = 1;
      } else if (T5 == false && T9 == false && click1 == false) {
        random = 1;
      } else if (T1 == false && T3 == false && click2 == false) {
        random = 2;
      } else if (T5 == false && T8 == false && click2 == false) {
        random = 2;
      } else if (T1 == false && T2 == false && click3 == false) {
        random = 3;
      } else if (T6 == false && T9 == false && click3 == false) {
        random = 3;
      } else if (T5 == false && T7 == false && click3 == false) {
        random = 3;
      } else if (T5 == false && T6 == false && click4 == false) {
        random = 4;
      } else if (T1 == false && T7 == false && click4 == false) {
        random = 4;
      } else if (T4 == false && T6 == false && click5 == false) {
        random = 5;
      } else if (T2 == false && T8 == false && click5 == false) {
        random = 5;
      } else if (T1 == false && T9 == false && click5 == false) {
        random = 5;
      } else if (T3 == false && T7 == false && click5 == false) {
        random = 5;
      } else if (T4 == false && T5 == false && click6 == false) {
        random = 6;
      } else if (T3 == false && T9 == false && click6 == false) {
        random = 6;
      } else if (T8 == false && T9 == false && click7 == false) {
        random = 7;
      } else if (T1 == false && T4 == false && click7 == false) {
        random = 7;
      } else if (T1 == false && T3 == false && click7 == false) {
        random = 7;
      } else if (T7 == false && T9 == false && click8 == false) {
        random = 8;
      } else if (T2 == false && T5 == false && click8 == false) {
        random = 8;
      } else if (T7 == false && T8 == false && click9 == false) {
        random = 9;
      } else if (T3 == false && T6 == false && click9 == false) {
        random = 9;
      } else if (T1 == false && T5 == false && click9 == false) {
        random = 9;
      } else if (T2 == true && T3 == true && click1 == false) {
        random = 1;
      } else if (T4 == true && T7 == true && click1 == false) {
        random = 1;
      } else if (T5 == true && T9 == true && click1 == false) {
        random = 1;
      } else if (T1 == true && T3 == true && click2 == false) {
        random = 2;
      } else if (T5 == true && T8 == true && click2 == false) {
        random = 2;
      } else if (T1 == true && T2 == true && click3 == false) {
        random = 3;
      } else if (T6 == true && T9 == true && click3 == false) {
        random = 3;
      } else if (T5 == true && T7 == true && click3 == false) {
        random = 3;
      } else if (T5 == true && T6 == true && click4 == false) {
        random = 4;
      } else if (T1 == true && T7 == true && click4 == false) {
        random = 4;
      } else if (T4 == true && T6 == true && click5 == false) {
        random = 5;
      } else if (T2 == true && T8 == true && click5 == false) {
        random = 5;
      } else if (T1 == true && T9 == true && click5 == false) {
        random = 5;
      } else if (T3 == true && T7 == true && click5 == false) {
        random = 5;
      } else if (T4 == true && T5 == true && click6 == false) {
        random = 6;
      } else if (T3 == true && T9 == true && click6 == false) {
        random = 6;
      } else if (T8 == true && T9 == true && click7 == false) {
        random = 7;
      } else if (T1 == true && T4 == true && click7 == false) {
        random = 7;
      } else if (T1 == true && T3 == true && click7 == false) {
        random = 7;
      } else if (T7 == true && T9 == true && click8 == false) {
        random = 8;
      } else if (T2 == true && T5 == true && click8 == false) {
        random = 8;
      } else if (T7 == true && T8 == true && click9 == false) {
        random = 9;
      } else if (T3 == true && T6 == true && click9 == false) {
        random = 9;
      } else if (T1 == true && T5 == true && click9 == false) {
        random = 9;
      } else {
        random = Math.floor(Math.random() * 9) + 1;
      }
    }
    console.log(`AI click` + random);
    if (random == 1 && click1 == false) {
      ai = false;
      click1 = true;
      ++move;
      if (turn == false && W == false) {
        const t1 = document.querySelector("#t1");
        t1.innerHTML = "X";
        t1.style.visibility = "visible";
        turn = true;
        T1 = true;
        if (T2 == true && T3 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T4 == true && T7 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T9 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        const t1 = document.querySelector("#t1");
        t1.innerHTML = "O";
        t1.style.visibility = "visible";
        turn = false;
        T1 = false;
        if (T2 == false && T3 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T4 == false && T7 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T9 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 2 && click2 == false) {
      ai = false;
      click2 = true;
      ++move;
      if (turn == false && W == false) {
        const t2 = document.querySelector("#t2");
        t2.innerHTML = "X";
        t2.style.visibility = "visible";
        turn = true;
        T2 = true;
        if (T1 == true && T3 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T8 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t2.innerHTML = "O";
        turn = false;
        t2.style.visibility = "visible";
        T2 = false;
        if (T1 == false && T3 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T8 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 3 && click3 == false) {
      click3 = true;
      a1 = false;
      ++move;
      if (turn == false && W == false) {
        const t3 = document.querySelector("#t3");
        t3.innerHTML = "X";
        t3.style.visibility = "visible";
        turn = true;
        T3 = true;
        if (T1 == true && T2 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T6 == true && T9 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T7 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == true && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t3.innerHTML = "O";
        turn = false;
        T3 = false;
        t3.style.visibility = "visible";
        if (T1 == false && T2 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T6 == false && T9 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T7 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == 0 && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 4 && click4 == false) {
      click4 = true;
      ai = false;
      ++move;
      if (turn == false && W == false) {
        const t4 = document.querySelector("#t4");
        t4.innerHTML = "X";
        t4.style.visibility = "visible";
        turn = true;
        T4 = true;
        if (T5 == true && T6 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T7 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t4.innerHTML = "O";
        turn = false;
        T4 = false;
        t4.style.visibility = "visible";
        if (T5 == false && T6 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T7 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 5 && click5 == false) {
      ai = false;
      click5 = true;
      ++move;
      if (turn == false && W == false) {
        const t5 = document.querySelector("#t5");
        t5.innerHTML = "X";
        t5.style.visibility = "visible";
        turn = true;
        T5 = true;
        if (T4 == true && T6 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == true && T8 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T9 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T7 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t5.innerHTML = "O";
        turn = false;
        T5 = false;
        t5.style.visibility = "visible";
        if (T4 == false && T6 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == false && T8 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T9 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T7 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 6 && click6 == false) {
      ai = false;
      click6 = true;
      ++move;
      if (turn == false && W == false) {
        const t6 = document.querySelector("#t6");
        t6.innerHTML = "X";
        t6.style.visibility = "visible";
        turn = true;
        T6 = true;
        if (T4 == true && T5 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T9 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t6.innerHTML = "O";
        turn = false;
        T6 = false;
        t6.style.visibility = "visible";
        if (T4 == false && T5 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T9 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 7 && click7 == false) {
      click7 = true;
      ai = false;
      ++move;
      if (turn == false && W == false) {
        const t7 = document.querySelector("#t7");
        t7.innerHTML = "X";
        t7.style.visibility = "visible";
        turn = true;
        T7 = true;
        if (T8 == true && T9 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T4 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T5 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t7.innerHTML = "O";
        turn = false;
        T7 = false;
        t7.style.visibility = "visible";
        if (T8 == false && T9 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T4 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T5 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 8 && click8 == false) {
      click8 = true;
      ai = true;
      ++move;
      if (turn == false && W == false) {
        const t8 = document.querySelector("#t8");
        t8.innerHTML = "X";
        t8.style.visibility = "visible";
        turn = true;
        T8 = true;
        if (T7 == true && T9 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == true && T5 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t8.innerHTML = "O";
        turn = false;
        T8 = false;
        t8.style.visibility = "visible";
        if (T7 == false && T9 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == false && T5 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (random == 9 && click9 == false) {
      click9 = true;
      ai = false;
      ++move;
      if (turn == false && W == false) {
        const t9 = document.querySelector("#t9");
        t9.innerHTML = "X";
        t9.style.visibility = "visible";
        turn = true;
        T9 = true;
        if (T7 == true && T8 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T6 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T5 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t9.innerHTML = "O";
        turn = false;
        T9 = false;
        t9.style.visibility = "visible";
        if (T7 == false && T8 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T6 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T5 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
    } else if (W == false && move < 9) {
      console.log("already clicked");
      aiplay();
    }
  }
}

aiplay();

function tictactoe() {
  const sq1 = document.getElementById("sq1");
  sq1.addEventListener("click", (e) => {
    sq1Click();
  });
  function sq1Click() {
    if (W == false && click1 == false) {
      console.log("click1");
    }
    if (click1 == false && W == false) {
      const t1 = document.querySelector("#t1");
      ++move;
      ai = true;
      click1 = true;
      if (turn == false && W == false) {
        t1.innerHTML = "X";
        t1.style.visibility = "visible";
        turn = true;
        T1 = true;
        if (T2 == true && T3 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T4 == true && T7 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T9 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t1.innerHTML = "O";
        turn = false;
        t1.style.visibility = "visible";
        T1 = false;
        if (T2 == false && T3 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T4 == false && T7 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T9 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq2 = document.getElementById("sq2");
  sq2.addEventListener("click", (e) => {
    sq2Click();
  });
  function sq2Click() {
    if (W == false && click2 == false) {
      console.log("click2");
    }
    if (click2 == false && W == false) {
      const t2 = document.querySelector("#t2");
      ++move;
      ai = true;
      click2 = true;
      if (turn == false && W == false) {
        const t2 = document.querySelector("#t2");
        t2.innerHTML = "X";
        t2.style.visibility = "visible";
        turn = true;
        T2 = true;
        if (T1 == true && T3 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T8 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t2.innerHTML = "O";
        turn = false;
        t2.style.visibility = "visible";
        T2 = false;
        if (T1 == false && T3 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T8 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq3 = document.getElementById("sq3");
  sq3.addEventListener("click", (e) => {
    sq3Click();
  });
  function sq3Click() {
    if (W == false && click3 == false) {
      console.log("click3");
    }
    if (click3 == false && W == false) {
      const t3 = document.querySelector("#t3");
      ++move;
      ai = true;
      click3 = true;
      if (turn == false && W == false) {
        const t3 = document.querySelector("#t3");
        t3.innerHTML = "X";
        t3.style.visibility = "visible";
        turn = true;
        T3 = true;
        if (T1 == true && T2 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T6 == true && T9 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == true && T7 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == true && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t3.innerHTML = "O";
        turn = false;
        T3 = false;
        t3.style.visibility = "visible";
        if (T1 == false && T2 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t2.style.color = "red";
          t3.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T6 == false && T9 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T5 == false && T7 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == 0 && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == true && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == true && turn == true && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == true) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq4 = document.getElementById("sq4");
  sq4.addEventListener("click", (e) => {
    sq4Click();
  });
  function sq4Click() {
    if (W == false && click4 == false) {
      console.log("click4");
    }
    if (click4 == false && W == false) {
      const t4 = document.querySelector("#t4");
      ++move;
      ai = true;
      click4 = true;
      if (turn == false && W == false) {
        const t4 = document.querySelector("#t4");
        t4.innerHTML = "X";
        t4.style.visibility = "visible";
        turn = true;
        T4 = true;
        if (T5 == true && T6 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T7 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t4.innerHTML = "O";
        turn = false;
        T4 = false;
        t4.style.visibility = "visible";
        if (T5 == false && T6 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T7 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq5 = document.getElementById("sq5");
  sq5.addEventListener("click", (e) => {
    sq5Click();
  });
  function sq5Click() {
    if (W == false && click5 == false) {
      console.log("click5");
    }
    if (click5 == false && W == false) {
      const t5 = document.querySelector("#t5");
      ++move;
      ai = true;
      click5 = true;
      if (turn == false && W == false) {
        const t5 = document.querySelector("#t5");
        t5.innerHTML = "X";
        t5.style.visibility = "visible";
        turn = true;
        T5 = true;
        if (T4 == true && T6 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == true && T8 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T9 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T7 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t5.innerHTML = "O";
        turn = false;
        T5 = false;
        t5.style.visibility = "visible";
        if (T4 == false && T6 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == false && T8 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T9 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T7 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq6 = document.getElementById("sq6");
  sq6.addEventListener("click", (e) => {
    sq6Click();
  });
  function sq6Click() {
    if (W == false && click6 == false) {
      console.log("click6");
    }
    if (click6 == false && W == false) {
      const t6 = document.querySelector("#t6");
      ++move;
      ai = true;
      click6 = true;
      if (turn == false && W == false) {
        const t6 = document.querySelector("#t6");
        t6.innerHTML = "X";
        t6.style.visibility = "visible";
        turn = true;
        T6 = true;
        if (T4 == true && T5 == true) {
          console.log("X Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T9 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t6.innerHTML = "O";
        turn = false;
        T6 = false;
        t6.style.visibility = "visible";
        if (T4 == false && T5 == false) {
          console.log("O Win");
          t4.style.color = "red";
          t5.style.color = "red";
          t6.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T9 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq7 = document.getElementById("sq7");
  sq7.addEventListener("click", (e) => {
    sq7Click();
  });
  function sq7Click() {
    if (W == false && click7 == false) {
      console.log("click7");
    }
    if (click7 == false && W == false) {
      const t7 = document.querySelector("#t7");
      ++move;
      ai = true;
      click7 = true;
      if (turn == false && W == false) {
        const t7 = document.querySelector("#t7");
        t7.innerHTML = "X";
        t7.style.visibility = "visible";
        turn = true;
        T7 = true;
        if (T8 == true && T9 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T4 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T5 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t7.innerHTML = "O";
        turn = false;
        T7 = false;
        t7.style.visibility = "visible";
        if (T8 == false && T9 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T4 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t4.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T5 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t5.style.color = "red";
          t7.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq8 = document.getElementById("sq8");
  sq8.addEventListener("click", (e) => {
    sq8Click();
  });
  function sq8Click() {
    if (W == false && click8 == false) {
      console.log("click8");
    }
    if (click8 == false && W == false) {
      const t8 = document.querySelector("#t8");
      ++move;
      ai = true;
      click8 = true;
      if (turn == false && W == false) {
        const t8 = document.querySelector("#t8");
        t8.innerHTML = "X";
        t8.style.visibility = "visible";
        turn = true;
        T8 = true;
        if (T7 == true && T9 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == true && T5 == true) {
          console.log("X Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t8.innerHTML = "O";
        turn = false;
        T8 = false;
        t8.style.visibility = "visible";
        if (T7 == false && T9 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T2 == false && T5 == false) {
          console.log("O Win");
          t2.style.color = "red";
          t5.style.color = "red";
          t8.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }

  const sq9 = document.getElementById("sq9");
  sq9.addEventListener("click", (e) => {
    sq9Click();
  });
  function sq9Click() {
    if (W == false && click9 == false) {
      console.log("click9");
    }
    if (click9 == false && W == false) {
      const t9 = document.querySelector("#t9");
      ++move;
      ai = true;
      click9 = true;
      if (turn == false && W == false) {
        const t9 = document.querySelector("#t9");
        t9.innerHTML = "X";
        t9.style.visibility = "visible";
        turn = true;
        T9 = true;
        if (T7 == true && T8 == true) {
          console.log("X Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == true && T6 == true) {
          console.log("X Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == true && T5 == true) {
          console.log("X Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      } else if (turn == true && W == false) {
        t9.innerHTML = "O";
        turn = false;
        T9 = false;
        t9.style.visibility = "visible";
        if (T7 == false && T8 == false) {
          console.log("O Win");
          t7.style.color = "red";
          t8.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T3 == false && T6 == false) {
          console.log("O Win");
          t3.style.color = "red";
          t6.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (T1 == false && T5 == false) {
          console.log("O Win");
          t1.style.color = "red";
          t5.style.color = "red";
          t9.style.color = "red";
          W = true;
          console.log("End of Game");
        } else if (W == false && move == 9) {
          console.log("Draw Game");
        }
      }
      if (W == false && turn == true && move < 9) {
        console.log("O TURN");
        xcontainer.style.visibility = "hidden";
        ocontainer.style.visibility = "visible";
      } else if (W == false && turn == false && move < 9) {
        console.log("X TURN");
        ocontainer.style.visibility = "hidden";
        xcontainer.style.visibility = "visible";
      } else if (W == false && move == 9) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "visible";
        xcontainer.innerHTML = "DRAW";
        ocontainer.innerHTML = "DRAW";
        ++draw;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      if (W == true && turn == true) {
        xcontainer.style.visibility = "visible";
        ocontainer.style.visibility = "hidden";
        xcontainer.innerHTML = "X WIN";
        ++xwin;
        ++oloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      } else if (W == true && turn == false) {
        ocontainer.style.visibility = "visible";
        xcontainer.style.visibility = "hidden";
        ocontainer.innerHTML = "O WIN";
        ++owin;
        ++xloss;
        xcount.innerHTML =
          "Win: " + xwin + " Loss: " + xloss + " Draw: " + draw;
        ocount.innerHTML =
          "Win: " + owin + " Loss: " + oloss + " Draw: " + draw;
      }
      aiplay();
    }
  }
}

tictactoe();
