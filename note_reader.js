//testing to see if the pointer finger has been dipped
function pointerTest (p_tip, p_pip) {
  var tip = 0.001;
  var dip = 0.001;

  tip = p_tip;
  pip = p_pip;

  var diff = tip - pip;



  // var ouput1 = 0;
  // if(diff <= 3. && diff >= -3.){
  //   ouput1 = -1;
  // }

  // outlet(0, ouput1);

  outlet(0, diff);
}


// function startSongTest(p_tip, p_dip, pink_tip, pink_dip){
//   tip1 = p_tip
//   dip1 = p_dip

//   tip2 = pink_tip
//   dip2 = pink_dip

//   var diff1 = tip1 - dip1
//   var diff2 = tip2 - dip2

//   var output2 = 0

//   if(diff1 <= 0 && diff2 <= 0){
//     output2 = 1
//   }

//   outlet(0, output2);
// }