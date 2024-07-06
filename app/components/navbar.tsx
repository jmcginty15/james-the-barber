import { RefObject, useEffect, useState } from "react";

import poleCaps from "../assets/vectorstock_35558/barberPole.png";

function NavbarContent(props: { scrollTo: (linkName: string) => void }) {
  const { scrollTo } = props;

  return (
    <>
      <button
        id="appointmentsButton"
        className="navbarButton"
        onClick={() => scrollTo("Appointments")}
      >
        Appointments
      </button>
      <button
        id="contactButton"
        className="navbarButton"
        onClick={() => scrollTo("Contact")}
      >
        Contact
      </button>
      <div
        className="barberPoleContainer"
        style={{ backgroundImage: `url(${poleCaps})` }}
      >
        {/* <div className="ball" />
  <div className="endCap" />
  <div className="cap" /> */}
        <div className="barberWrap">
          <div className="barber" />
        </div>
        {/* <div className="cap" />
  <div className="endCap" />
  <div className="ball" /> */}
      </div>
    </>
  );
}

export default function Navbar(props: {
  landingRef: RefObject<HTMLDivElement>;
  scrollTo: (linkName: string) => void;
}) {
  const { landingRef, scrollTo } = props;
  const [isStuck, setIsStuck] = useState<boolean | null>(null);
  const [hasBeenSet, setHasBeenSet] = useState<boolean>(false);
  const [threshold, setThreshold] = useState<number>(0.6);
  const [observer, setObserver] = useState<IntersectionObserver | null>(null);

  const createNewObserver = () => {
    const newObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !isStuck) {
            setIsStuck(true);
            if (!hasBeenSet) setHasBeenSet(true);
          } else if (entry.isIntersecting) setIsStuck(false);
        });
      },
      { threshold },
    );

    const current = landingRef.current;
    if (current) newObserver.observe(current);

    setObserver(newObserver);
  };

  const disconnectCurrentObserver = () => observer?.disconnect();

  const isTall = () => window.innerHeight >= window.innerWidth;

  useEffect(() => {
    setThreshold(isTall() ? 0.6 : 0.75);
    window.addEventListener("resize", () => {
      const portrait = isTall();
      if (portrait && threshold !== 0.6) setThreshold(0.6);
      else if (!portrait && threshold !== 0.75) setThreshold(0.75);
    });
  }, [threshold]);

  useEffect(() => {
    if (observer) disconnectCurrentObserver();
    createNewObserver();
  });

  return (
    <>
      <div className={`navbar ${isStuck ? "stuck" : "hidden"}`}>
        <NavbarContent scrollTo={scrollTo} />
      </div>
      <div
        className={`navbar ${isStuck ? "hidden" : `unstuck${hasBeenSet ? " animate" : ""}`}`}
      >
        <NavbarContent scrollTo={scrollTo} />
      </div>
    </>
  );
}
