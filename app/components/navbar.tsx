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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting && !isStuck) {
            setIsStuck(true);
            if (!hasBeenSet) setHasBeenSet(true);
          } else if (entry.isIntersecting) setIsStuck(false);
        });
      },
      { threshold: 0.75 },
    );

    const current = landingRef.current;
    if (current) observer.observe(current);
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
