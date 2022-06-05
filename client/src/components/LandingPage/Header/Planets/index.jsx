import { BasePlanet as PlanetPattern } from "./styles";
import { motion } from "framer-motion";

import { SpaceImages } from "../../../../config/assets";

export const BasePlanet = ({ name, animationConfig, position, size }) => {
  return (
    <motion.div
      {...animationConfig}
      style={{ position: "absolute", ...position }}
    >
      <PlanetPattern image={SpaceImages[name].image} style={{ ...size }} />
    </motion.div>
  );
};
