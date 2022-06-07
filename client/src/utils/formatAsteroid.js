export default function formatAsteroid(asteroid) {
  debugger;

  const {
    id,
    name,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: diameterMin,
        estimated_diameter_max: diameterMax,
      },
    },
    is_potentially_hazardous_asteroid: isHazardous,
    close_approach_data,
    orbital_data: {
      last_observation_date: lastSeen,
      first_observation_date: firstSeen,
    },
  } = asteroid;

  const {
    miss_distance: {
      astronomical: astronomicalDistance,
      lunar: lunarDistance,
      kilometers: kilometersDistance,
    },
    relative_velocity: { kilometers_per_hour: relativeVelocity },
    orbiting_body: orbitingBody,
  } = close_approach_data[close_approach_data.length - 1];

  const randomFormattedAsteroid = {
    id,
    name,
    averageEstimatedDiameter: ((diameterMax + diameterMin) / 2) * 1000,
    isHazardous,
    relativeVelocity,
    lastSeen,
    firstSeen,
    orbitingBody,
    missDistance: {
      astronomicalDistance,
      lunarDistance,
      kilometersDistance,
    },
  };

  console.info(`> Selected Asteroid: ${name}`);
  return randomFormattedAsteroid;
}
