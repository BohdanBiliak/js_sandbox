function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
         let scoreTitle = ""
       if(score === 100){
  scoreTitle = "A++"
  }else if(score >= 90 && score <= 99){
  scoreTitle = "A"
  }else if(score >= 80 && score <= 89){
      scoreTitle = "B"
      }else if(score >= 70 && score <= 79){
          scoreTitle = "C"
          }else if(score >= 60 && score <= 69){
              scoreTitle = "D"
              }else if(score >= 0 && score <= 59){
                      scoreTitle = "F"
                      }
      
  
  return scoreTitle
      
  }
  
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));