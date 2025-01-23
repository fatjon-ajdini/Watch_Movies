import React from "react";

const Hero = ({ title = "Watch the latest movies at Movie R", subtitle }) => {
  return (
    <section className="bg-gray-700 text-white py-40">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-4">{title}</h1>
        <p className="text-lg">
          {subtitle}
          Stream your favorite movies in high quality. Explore the best titles
          available now.
        </p>
      </div>
    </section>
  );
};

export default Hero;
