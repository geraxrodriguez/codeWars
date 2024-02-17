function openOrSenior(data){
    return data.map( pair => pair[0] >= 55 && pair[1] > 7 ? 'Senior' : 'Open' );
}

// also could have used destructuring, would have made lil bit more readable
// data.map( [age, handicap] => age >= 55 && handicap > 7 ? 'Senior' : 'Open' )

//                         {
//     if (pair[0] >= 55 && pair[1] > 7) {
//       return 'Senior'
//     } else {
//       return 'Open'
//     }

