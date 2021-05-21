const inRange=(x, min, max)=>{
    return (x - min) * (x - max) <= 0;
  }
  export default inRange;