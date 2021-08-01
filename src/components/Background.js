import React from "react";
import { Particles } from "react-particles-js";

const Background = () => {
  return (
    <Particles
      style={{ position: "absolute" }}
      height="95%"
      width="95%"
      params={{
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: 3,
          },
        },
        interactivity: {
          events: {
            onhover: {
              enable: true,
              mode: "repulse",
            },
          },
        },
      }}
    />
  );
};

export default Background;
