function calculateWidth(asteroidWidth, animalWidth){
  const result = Math.round(asteroidWidth/animalWidth);

  return result;

}
function calculateSpeed(asteroidRelativeSpeed, animalSpeed){
  const result = Math.round(asteroidRelativeSpeed/animalSpeed);

  return result;
}

export { calculateWidth, calculateSpeed };
