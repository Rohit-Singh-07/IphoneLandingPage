import { rightImg, watchImg } from "../utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", { opacity: 1, y: 0, delay: 0.5, duration: 1.5 });

    gsap.to(".link", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1.3,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full flex justify-between items-end flex-wrap">
          <h1 id="title" className="section-heading">
            Get the Highlights
          </h1>

          <div className="flex felx-wrap items-end gap-5">
            <p className="link">
              watch the film
              <img src={watchImg} alt="watch" className="ml-2"/>
            </p>

            <p className="link">
                watch the event
                <img src={rightImg} alt="right" className="ml-2"/>
            </p>
          </div>
        </div>
        <VideoCarousel/>
      </div>
    </section>
  );
};

export default Highlights;
