function CalculateWidth(asteroidWidth, animalWidth){
  const result = Math.round(asteroidWidth/animalWidth);

  return result;

}
function CalculateSpeed(asteroidRelativeSpeed, animalSpeed){
  const result = Math.round(asteroidRelativeSpeed/animalSpeed);

  return result;
}

export {CalculateWidth, CalculateSpeed};
