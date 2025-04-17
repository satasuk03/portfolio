import React from "react";
import FadeInDiv from "@/ui/components/FadeInDiv";
import { Lens } from "../components/Lens";

export default function About() {
  return (
    <FadeInDiv>
      <h2 className="sm:text-2xl text-lg font-medium font-poppins text-secondary/80">
        About me
        <span className="text-xl mt-1"> 🧑‍💻️ 🧗 📸</span>
      </h2>
      <div className="sm:mt-4 mt-2 font-abel font-medium">
        I’m a software engineer with a passion for creativity and
        problem-solving. I specialize in backend development, building robust
        and scalable systems that power great user experiences. I’m a fast
        learner, and highly adaptive. I believe in simplicity and clarity.
      </div>
      <div className="flex justify-center items-center sm:mt-5 mt-2 gap-2 sm:gap-4">
        <div className="sm:w-[200px] sm:min-w-[200px] min-w-[150px] w-[150px] p-2 border border-secondary/30 rounded-lg">
          <Lens
            zoomFactor={2.5}
            lensSize={150}
            isStatic={false}
            ariaLabel="Zoom Area"
          >
            <img
              src="/images/photos/sanddune.webp"
              alt="sand dune at night"
              className="w-full h-full object-cover"
            />
          </Lens>
        </div>
        <div>
          <p className="text-sm font-poppins text-terminal-white/80 italic">
            &quot;Perfection is achieved, not when there is nothing more to add,
            but when there is nothing left to take away.&quot;
          </p>
          <p className="text-xs mt-2 font-poppins text-terminal-white/60 w-full text-right">
            - Antoine de Saint-Exupéry
          </p>
        </div>
      </div>
    </FadeInDiv>
  );
}
