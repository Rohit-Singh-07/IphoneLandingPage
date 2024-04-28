import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Model = () => {
  useGSAP(() => {
    gsap.to('#heading', {
        opacity: 1,
        y: 0,
        delay: 0.5,
        duration: 1.5
    })
  }, []);

  return (
    <section className="common-padding">
      <div className="screen max-width">
        <h1 id="heading" className="section-heading">
          Take a Closer Look
        </h1>
      </div>
    </section>
  );
};

export default Model;
