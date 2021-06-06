import inRange from './range'
export const miniMax = (ageTerm) => {
    var minimum = 1,
    maximum = 150;

  if (inRange(ageTerm, 1, 25)) {
    minimum = 1;
    maximum = 25;
  } else if (inRange(ageTerm, 26, 50)) {
    minimum = 26;
    maximum = 50;
  } else if (inRange(ageTerm, 51, 150)) {
    minimum = 51;
    maximum = 150;
  }
    return [minimum,maximum];   
  };
  
  