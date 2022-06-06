import { Desription, Title, FootNote } from "./styles";

export default function ProjectOverview() {
  return (
    <section>
      <Title id='about-me'>Project Overview</Title>
      <section>
        <Desription>
          <strong>Asteroid Trivia</strong> is a frontend project developed in 36 hours for the
          codedamn hackathon. In the website, you can see real data from NASA
          about asteroids together with size and speed comparisons with Animals.
          More details down below :)
        </Desription>
      </section>
      <FootNote>
        {"See our "}
        <a href='https://github.com/stelianok/codedamn-hackathon-project'>
          inteire project
        </a>
      </FootNote>
    </section>
  );
}
