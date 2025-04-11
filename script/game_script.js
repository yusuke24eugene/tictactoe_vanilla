var turn = 1;
var T1 = 0;
var T2 = 0;
var T3 = 0;
var T4 = 0;
var T5 = 0;
var T6 = 0;
var T7 = 0;
var T8 = 0;
var T9 = 0;
var W = 0;
var move = 0;
var lock1 = false;
var lock2 = false;
var lock3 = false;
var lock4 = false;
var lock5 = false;
var lock6 = false;
var lock7 = false;
var lock8 = false;
var lock9 = false;
let xwin = 0;
let owin = 0;
let xloss = 0;
let oloss = 0;
let draw = 0;

const xcount = document.getElementById("xcounter");
const ocount = document.getElementById("ocounter");

reset.addEventListener('click',(e)=>{resetclick()});
function resetclick() {
    console.log('X TURN');
    turn = 1;
    T1 = 0;
    T2 = 0;
    T3 = 0;
    T4 = 0;
    T5 = 0;
    T6 = 0;
    T7 = 0;
    T8 = 0;
    T9 = 0;
    W = 0;
    move = 0;
    lock1 = false;
    lock2 = false;
    lock3 = false;
    lock4 = false;
    lock5 = false;
    lock6 = false;
    lock7 = false;
    lock8 = false;
    lock9 = false;
    t1.style.visibility = 'hidden';
    t2.style.visibility = 'hidden';
    t3.style.visibility = 'hidden';
    t4.style.visibility = 'hidden';
    t5.style.visibility = 'hidden';
    t6.style.visibility = 'hidden';
    t7.style.visibility = 'hidden';
    t8.style.visibility = 'hidden';
    t9.style.visibility = 'hidden';
    t1.style.color ='black';
    t2.style.color ='black';
    t3.style.color ='black';
    t4.style.color ='black';
    t5.style.color ='black';
    t6.style.color ='black';
    t7.style.color ='black';
    t8.style.color ='black';
    t9.style.color ='black';
    xcontainer.style.visibility = 'visible';
    ocontainer.style.visibility = 'hidden';
    xcontainer.innerHTML = 'X TURN';
    ocontainer.innerHTML = 'O TURN';
}

console.log('XTURN');
const sq1 = document.getElementById('sq1');
sq1.addEventListener('click', (e) => {sq1Click()})
function sq1Click() {if(W==0){console.log('click1');
                const t1 = document.querySelector("#t1");
                move++;
                if(turn==1&&W==0&&lock1==false){t1.innerHTML = "X";
                            t1.style.visibility = 'visible';
                             turn = 2;
                             T1 = 1;
                             lock1 = true;
                    if(T2==1&&T3==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T4==1&&T7==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t4.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T5==1&&T9==1){console.log('X Win')
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }
            else if(turn==2&&W==0&&lock1==false){t1.innerHTML = "O";
                    turn = 1;
                    t1.style.visibility = 'visible';
                    T1 = 2;
                    lock1 = true;
                    if(T2==2&&T3==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T4==2&&T7==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t4.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T5==2&&T9==2){console.log('O Win')
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
                }
               if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq2 = document.getElementById('sq2');
sq2.addEventListener('click', (e) => {sq2Click()})
function sq2Click() {if(W==0){console.log('click2');
                const t2 = document.querySelector("#t2");
                move++;
                if(turn==1&&W==0&&lock2==false){t2.innerHTML = "X";
                            t2.style.visibility = 'visible';
                             turn = 2;
                             T2 = 1;
                             lock2 = true;
                             if(T1==1&&T3==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                            else if(T5==1&&T8==1){console.log('X Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                        }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock2==false){t2.innerHTML = "O";
                    turn = 1;
                    t2.style.visibility = 'visible';
                    T2 = 2;
                    lock2 = true;
                    if(T1==2&&T3==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T5==2&&T8==2){console.log('O Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
                   
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq3 = document.getElementById('sq3');
sq3.addEventListener('click', (e) => {sq3Click()})
function sq3Click() {if(W==0){console.log('click3');
                const t3 = document.querySelector("#t3");
                move++;
                if(turn==1&&W==0&&lock3==false){t3.innerHTML = "X";
                            t3.style.visibility = 'visible';
                             turn = 2;
                             T3=1;
                             lock3 =true;
                             if(T1==1&&T2==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T6==1&&T9==1){console.log('X Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T5==1&&T7==1){console.log('X Win');
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock3==false){t3.innerHTML = "O";
                    turn = 1;
                    T3=2;
                    lock3 = true;
                    t3.style.visibility = 'visible';
                    if(T1==2&&T2==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t2.style.color ='red';
                                     t3.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T6==2&&T9==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T5==2&&T7==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq4 = document.getElementById('sq4');
sq4.addEventListener('click', (e) => {sq4Click()})
function sq4Click() {if(W==0){console.log('click4');
                const t4 = document.querySelector("#t4");
                move++;
                if(turn==1&&W==0&&lock4==false){t4.innerHTML = "X";
                            t4.style.visibility = 'visible';
                             turn = 2;
                             T4=1;
                             lock4 = true;
                             if(T5==1&&T6==1){console.log('X Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T1==1&&T7==1){console.log('X Win')
                                     t1.style.color ='red';
                                     t4.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock4==false){
                    t4.innerHTML = "O";
                    turn = 1;
                    T4 = 2;
                    lock4 = true;
                    t4.style.visibility = 'visible';
                    if(T5==2&&T6==2){console.log('O Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T1==2&&T7==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq5 = document.getElementById('sq5');
sq5.addEventListener('click', (e) => {sq5Click()})
function sq5Click() {if(W==0){console.log('click5');
                const t5 = document.querySelector("#t5");
                move++;
                if(turn==1&&W==0&&lock5==false){t5.innerHTML = "X";
                            t5.style.visibility = 'visible';
                             turn = 2;
                             T5=1;
                             lock5 = true;
                             if(T4==1&&T6==1){console.log('X Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');          
                            }
                    else if(T2==1&&T8==1){console.log('X Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T1==1&&T9==1){console.log('X Win')
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T3==1&&T7==1){console.log('X Win')
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock5==false){t5.innerHTML = "O";
                    turn = 1;
                    T5 = 2;
                    lock5 = true;
                    t5.style.visibility = 'visible';
                    if(T4==2&&T6==2){console.log('O Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T2==2&&T8==2){console.log('O Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                else if(T1==2&&T9==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                else if(T3==2&&T7==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq6 = document.getElementById('sq6');
sq6.addEventListener('click', (e) => {sq6Click()})
function sq6Click() {if(W==0){console.log('click6');
                const t6 = document.querySelector("#t6");
                move++;
                if(turn==1&&W==0&&lock6==false){t6.innerHTML = "X";
                            t6.style.visibility = 'visible';
                             turn = 2;
                             T6=1;
                             lock6 = true;
                             if(T4==1&&T5==1){console.log('X Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T3==1&&T9==1){console.log('X Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock6==false){t6.innerHTML = "O";
                    turn = 1;
                    T6 = 2;
                    lock6 = true;
                    t6.style.visibility = 'visible';
                    if(T4==2&&T5==2){console.log('O Win');
                                     t4.style.color ='red';
                                     t5.style.color ='red';
                                     t6.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T3==2&&T9==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');}
                   else if(T5==1&&T7==1){console.log('X Win');
                                     T3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq7 = document.getElementById('sq7');
sq7.addEventListener('click', (e) => {sq7Click()})
function sq7Click() {if(W==0){console.log('click7');
                const t7 = document.querySelector("#t7");
                move++;
                if(turn==1&&W==0&&lock7==false){t7.innerHTML = "X";
                            t7.style.visibility = 'visible';
                             turn = 2;
                             T7=1;
                             lock7 = true;
                             if(T8==1&&T9==1){console.log('X Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T1==1&&T4==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t4.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                                     
                } else if(T3==1&&T5==1){console.log('X Win');
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');}
                else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock7==false){t7.innerHTML = "O";
                    turn = 1;
                    T7=2;
                    lock7 = true;
                    t7.style.visibility = 'visible';
                    if(T8==2&&T9==2){console.log('O Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T1==2&&T4==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t4.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');}
                     else if(T3==2&&T5==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t5.style.color ='red';
                                     t7.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq8 = document.getElementById('sq8');
sq8.addEventListener('click', (e) => {sq8Click()})
function sq8Click() {if(W==0){console.log('click8');
                const t8 = document.querySelector("#t8");
                move++;
                if(turn==1&&W==0&&lock8==false){t8.innerHTML = "X";
                            t8.style.visibility = 'visible';
                             turn = 2;
                             T8=1;
                             lock8 = true;
                             if(T7==1&&T9==1){console.log('X Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T2==1&&T5==1){console.log('X Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock8==false){t8.innerHTML = "O";
                    turn = 1;
                    T8 = 2;
                    lock8 = true;
                    t8.style.visibility = 'visible';
                    if(T7==2&&T9==2){console.log('O Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T2==2&&T5==2){console.log('O Win');
                                     t2.style.color ='red';
                                     t5.style.color ='red';
                                     t8.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}

const sq9 = document.getElementById('sq9');
sq9.addEventListener('click', (e) => {sq9Click()})
function sq9Click() {if(W==0){console.log('click9');
                const t9 = document.querySelector("#t9");
                move++;
                if(turn==1&&W==0&&lock9==false){t9.innerHTML = "X";
                            t9.style.visibility = 'visible';
                             turn = 2;
                             T9=1;
                             lock9 = true;
                             if(T7==1&&T8==1){console.log('X Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                            }
                    else if(T3==1&&T6==1){console.log('X Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T1==1&&T5==1){console.log('X Win');
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
            }else if(turn==2&&W==0&&lock9==false){t9.innerHTML = "O";
                    turn = 1;
                    T9 = 2;
                    lock9 = true;
                    t9.style.visibility = 'visible';
                    if(T7==2&&T8==2){console.log('O Win');
                                     t7.style.color ='red';
                                     t8.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                    else if(T3==2&&T6==2){console.log('O Win');
                                     t3.style.color ='red';
                                     t6.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }
                else if(T1==2&&T5==2){console.log('O Win');
                                     t1.style.color ='red';
                                     t5.style.color ='red';
                                     t9.style.color ='red';
                                     W=1;
                                     console.log('End of Game');
                }else if(W==0&&move==9){console.log('Draw Game')}
        }
        if(W==0&&turn==2&&move<9){console.log('O TURN');
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.style.visibility = 'visible';
            }
            else if(W==0&&turn==1&&move<9){console.log('X TURN');
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.style.visibility = 'visible';
            }
            else if(W==0&&move==9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.innerHTML = 'DRAW';
                                         ocontainer.innerHTML = 'DRAW';
                                         ++draw;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
            if(W==1&&turn==2&&move<9){
                                         xcontainer.style.visibility = 'visible';
                                         ocontainer.style.visibility = 'hidden';
                                         xcontainer.innerHTML = 'X WIN';
                                         ++xwin;
                                         ++oloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }else if(W==1&&turn==1&&move<9){
                                         ocontainer.style.visibility = 'visible';
                                         xcontainer.style.visibility = 'hidden';
                                         ocontainer.innerHTML = 'O WIN';
                                         ++owin;
                                         ++xloss;
                                         xcount.innerHTML = "Win: "+xwin+" Loss: "+xloss+" Draw: "+draw;
                                         ocount.innerHTML = "Win: "+owin+" Loss: "+oloss+" Draw: "+draw;
            }
        }
}
