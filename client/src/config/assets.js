import * as Images from "../assets/img";

/**
 *  Array of all space images.
 *
 *  @property {String} name - Name of the asset.
 *  @property {String} image - Image URL.
 *  @property {String} description - Description of the asset.
 */
export const SpaceIcons = {
  Asteroid: {
    name: "Asteroid",
    image: Images.Asteroid,
    description: "Asteroid",
  },
  RealAsteroid: {
    name: "Real Asteroid",
    image: Images.RealAsteroid,
    description: "Real Asteroid",
  },
  Meteor: {
    name: "Meteor",
    image: Images.Meteor,
    description: "Meteor",
  },
  Moon: {
    name: "Moon",
    image: Images.Moon,
    description: "Moon",
  },
  Earth: {
    name: "Earth",
    image: Images.Earth,
    description: "Earth",
  },
  Sun: {
    name: "Sun",
    image: Images.Sun,
    description: "Sun",
  },
};

/**
 * Array of Space Planets for the animation.
 *
 * @property {String} name - Name of the asset.
 * @property {String} image - Image URL.
 * @property {String} description - Description of the asset.
 */
export const SpacePlanets = {
  Earth: {
    name: "Earth",
    image: Images.EarthPlanet,
    description: "Earth, our planet",
  },
  AnotherPlanet: {
    name: "Another Planet",
    image: Images.AnotherPlanet,
    description: "Another Planet with a different color",
  },
  Mars: {
    name: "Mars",
    image: Images.MarsPlanet,
    description:
      "Mars is a planet in our solar system, with a diameter of 6,779 km and reddish-brown color",
  },
};

export const ApplicationIcons = {
  HorizontalLogo: {
    name: "Horizontal Logo",
    theme: {
      dark: Images.HorizontalLogoBlack,
      light: Images.HorizontalLogoWhite,
    },
    description: "Horizontal Logo",
  },
};

export const Patterns = {
  Noise: {
    path: Images.Noise,
  },
};
