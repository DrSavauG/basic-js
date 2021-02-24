  module.exports = 
  function calculateHanoi(disksNumber, turnsSpeed) {
    let turns = Math.pow(2, disksNumber) - 1;
    let seconds = Math.floor(turns / (turnsSpeed / 3600));
    return { turns: turns, seconds: seconds }
};

// console.log('calculateHanoi(123,233) =', calculateHanoi(9,4347));
// //  {turns: 511, seconds: 423
// console.log(calculateHanoi(5, 4074), {turns: 31, seconds: 27});
// console.log(calculateHanoi(38, 4594), {turns: 274877906943, seconds: 215402800390});
// console.log(calculateHanoi(34, 4005), {turns: 17179869183, seconds: 15442579040});
// console.log(calculateHanoi(19, 4770), {turns: 524287, seconds: 395688});
// console.log(calculateHanoi(23, 4344), {turns: 8388607, seconds: 6951884});
// console.log(calculateHanoi(9, 4347), {turns: 511, seconds: 423});
// console.log(calculateHanoi(15, 4254), {turns: 32767, seconds: 27729});
// console.log(calculateHanoi(14, 4681), {turns: 16383, seconds: 12599});
// console.log(calculateHanoi(9, 4308), {turns: 511, seconds: 427});
// console.log(calculateHanoi(18, 4442), {turns: 262143, seconds: 212452});
// console.log(calculateHanoi(10, 4159), {turns: 1023, seconds: 885});
// console.log(calculateHanoi(44, 4685), {turns: 17592186044415, seconds: 13518008486636});
// console.log(calculateHanoi(39, 4936), {turns: 549755813887, seconds: 400956428280});
// console.log(calculateHanoi(49, 4797), {turns: 562949953421311, seconds: 422476512886537});
// console.log(calculateHanoi(43, 4335), {turns: 8796093022207, seconds: 7304713928476});
// console.log(calculateHanoi(20, 4091), {turns: 1048575, seconds: 922725});
// console.log(calculateHanoi(19, 4351), {turns: 524287, seconds: 433792});
// console.log(calculateHanoi(26, 4164), {turns: 67108863, seconds: 58019189});
// console.log(calculateHanoi(48, 4040), {turns: 281474976710655, seconds: 250819286177811});
// console.log(calculateHanoi(7, 4090), {turns: 127, seconds: 111});
// console.log(calculateHanoi(43, 4431), {turns: 8796093022207, seconds: 7146453369430});
// console.log(calculateHanoi(46, 4851), {turns: 70368744177663, seconds: 52221702543720});
// console.log(calculateHanoi(13, 4333), {turns: 8191, seconds: 6805});
// console.log(calculateHanoi(20, 4693), {turns: 1048575, seconds: 804361});
// console.log(calculateHanoi(26, 4713), {turns: 67108863, seconds: 51260748});
// console.log(calculateHanoi(31, 4540), {turns: 2147483647, seconds: 1702850468});
// console.log(calculateHanoi(9, 4128), {turns: 511, seconds: 445});
// console.log(calculateHanoi(3, 4941), {turns: 7, seconds: 5});
// console.log(calculateHanoi(39, 4005), {turns: 549755813887, seconds: 494162529336});
// console.log(calculateHanoi(12, 4071), {turns: 4095, seconds: 3621});
// console.log(calculateHanoi(4, 4504), {turns: 15, seconds: 11});
// console.log(calculateHanoi(10, 4050), {turns: 1023, seconds: 909});
// console.log(calculateHanoi(19, 4913), {turns: 524287, seconds: 384171});
// console.log(calculateHanoi(26, 4253), {turns: 67108863, seconds: 56805056});
// console.log(calculateHanoi(5, 4446), {turns: 31, seconds: 25});
// console.log(calculateHanoi(19, 4393), {turns: 524287, seconds: 429645});
// console.log(calculateHanoi(39, 4421), {turns: 549755813887, seconds: 447663634922});
// console.log(calculateHanoi(14, 4179), {turns: 16383, seconds: 14113});
// console.log(calculateHanoi(7, 4669), {turns: 127, seconds: 97});
// console.log(calculateHanoi(7, 4107), {turns: 127, seconds: 111});
// console.log(calculateHanoi(25, 4683), {turns: 33554431, seconds: 25794565});
// console.log(calculateHanoi(24, 4125), {turns: 16777215, seconds: 14641933});
// console.log(calculateHanoi(34, 4838), {turns: 17179869183, seconds: 12783697614});
// console.log(calculateHanoi(42, 4498), {turns: 4398046511103, seconds: 3520001654061});
// console.log(calculateHanoi(15, 4400), {turns: 32767, seconds: 26809});
// console.log(calculateHanoi(34, 4951), {turns: 17179869183, seconds: 12491926693});
// console.log(calculateHanoi(29, 4808), {turns: 536870911, seconds: 401983211});
// console.log(calculateHanoi(46, 4938), {turns: 70368744177663, seconds: 51301636095501});
// console.log(calculateHanoi(8, 4734), {turns: 255, seconds: 193});
// console.log(calculateHanoi(14, 4004), {turns: 16383, seconds: 14729});
// console.log(calculateHanoi(21, 4581), {turns: 2097151, seconds: 1648055});
// console.log(calculateHanoi(19, 4832), {turns: 524287, seconds: 390611});
// console.log(calculateHanoi(2, 4840), {turns: 3, seconds: 2});
// console.log(calculateHanoi(21, 4892), {turns: 2097151, seconds: 1543283});
// console.log(calculateHanoi(11, 4769), {turns: 2047, seconds: 1545});
// console.log(calculateHanoi(23, 4714), {turns: 8388607, seconds: 6406233});
// console.log(calculateHanoi(38, 4801), {turns: 274877906943, seconds: 206115489480});
// console.log(calculateHanoi(3, 4616), {turns: 7, seconds: 5});
// console.log(calculateHanoi(36, 4381), {turns: 68719476735, seconds: 56468869264});
// console.log(calculateHanoi(34, 4103), {turns: 17179869183, seconds: 15073733623});
// console.log(calculateHanoi(7, 4153), {turns: 127, seconds: 110});
// console.log(calculateHanoi(15, 4789), {turns: 32767, seconds: 24631});
// console.log(calculateHanoi(45, 4245), {turns: 35184372088831, seconds: 29838336753778});
// console.log(calculateHanoi(41, 4880), {turns: 2199023255551, seconds: 1622230270488});
// console.log(calculateHanoi(46, 4495), {turns: 70368744177663, seconds: 56357614914257});
// console.log(calculateHanoi(20, 4116), {turns: 1048575, seconds: 917120});
// console.log(calculateHanoi(47, 4399), {turns: 140737488355327, seconds: 115175030252143});
// console.log(calculateHanoi(24, 4710), {turns: 16777215, seconds: 12823349});
// console.log(calculateHanoi(21, 4393), {turns: 2097151, seconds: 1718584});
// console.log(calculateHanoi(17, 4195), {turns: 131071, seconds: 112480});
// console.log(calculateHanoi(24, 4897), {turns: 16777215, seconds: 12333668});
// console.log(calculateHanoi(17, 4571), {turns: 131071, seconds: 103228});
// console.log(calculateHanoi(19, 4999), {turns: 524287, seconds: 377562});
// console.log(calculateHanoi(18, 4807), {turns: 262143, seconds: 196320});
// console.log(calculateHanoi(14, 4833), {turns: 16383, seconds: 12203});
// console.log(calculateHanoi(5, 4216), {turns: 31, seconds: 26});
// console.log(calculateHanoi(22, 4886), {turns: 4194303, seconds: 3090358});
// console.log(calculateHanoi(30, 4698), {turns: 1073741823, seconds: 822790668});
// console.log(calculateHanoi(20, 4036), {turns: 1048575, seconds: 935299});
// console.log(calculateHanoi(6, 4604), {turns: 63, seconds: 49});
// console.log(calculateHanoi(25, 4534), {turns: 33554431, seconds: 26642247});
// console.log(calculateHanoi(7, 4023), {turns: 127, seconds: 113});
// console.log(calculateHanoi(47, 4983), {turns: 140737488355327, seconds: 101676692369893});
// console.log(calculateHanoi(12, 4122), {turns: 4095, seconds: 3576});
// console.log(calculateHanoi(47, 4930), {turns: 140737488355327, seconds: 102769768373058});
// console.log(calculateHanoi(49, 4533), {turns: 562949953421311, seconds: 447081366052662});
// console.log(calculateHanoi(27, 4296), {turns: 134217727, seconds: 112472955});
// console.log(calculateHanoi(7, 4516), {turns: 127, seconds: 101});
// console.log(calculateHanoi(36, 4750), {turns: 68719476735, seconds: 52082129736});
// console.log(calculateHanoi(8, 4694), {turns: 255, seconds: 195});
// console.log(calculateHanoi(26, 4884), {turns: 67108863, seconds: 49465992});
// console.log(calculateHanoi(4, 4999), {turns: 15, seconds: 10});
// console.log(calculateHanoi(38, 4971), {turns: 274877906943, seconds: 199066679741});
// console.log(calculateHanoi(18, 4808), {turns: 262143, seconds: 196280});
// console.log(calculateHanoi(18, 4760), {turns: 262143, seconds: 198259});
// console.log(calculateHanoi(29, 4364), {turns: 536870911, seconds: 442881594});
// console.log(calculateHanoi(44, 4468), {turns: 17592186044415, seconds: 14174545604273});
// console.log(calculateHanoi(46, 4236), {turns: 70368744177663, seconds: 59803465306795});
// console.log(calculateHanoi(15, 4522), {turns: 32767, seconds: 26086});