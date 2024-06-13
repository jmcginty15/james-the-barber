import { RefObject, useRef, useState } from "react";

export default function Navbar(props: {
  landingRef: RefObject<HTMLDivElement>;
  scrollTo: (linkName: string) => void;
}) {
  const { scrollTo } = props;
  const [isStuck] = useState<boolean>(false);
  const navbarRef = useRef<HTMLDivElement>(null);

  //   useLayoutEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           console.log(`!entry.isIntersecting: ${!entry.isIntersecting}`);
  //           console.log(`!isStuck: ${!isStuck}`);
  //           !entry.isIntersecting && !isStuck && setIsStuck(true);
  //         });
  //       },
  //       { threshold: 1 },
  //     );

  //     const current = navbarRef.current;
  //     if (current) {
  //       observer.observe(current);
  //       return () => {
  //         if (current) observer.unobserve(current);
  //       };
  //     }
  //   }, []);

  //   useLayoutEffect(() => {
  //     const observer = new IntersectionObserver(
  //       (entries) => {
  //         entries.forEach((entry) => {
  //           if (entry.isIntersecting) isStuck && setIsStuck(false);
  //           else !isStuck && setIsStuck(true);
  //             console.log(entry.isIntersecting);
  //             entry.isIntersecting && isStuck && setIsStuck(false);
  //             console.log(entry.isIntersecting);
  //             console.log(isStuck);
  //             if (entry.isIntersecting && isStuck) {
  //               console.log("butthole");
  //               setIsStuck(false);
  //             }
  //         });
  //       },
  //       { threshold: 0.75 },
  //     );

  //     const current = landingRef.current;
  //     if (current) {
  //       observer.observe(current);
  //       return () => {
  //         if (current) observer.unobserve(current);
  //       };
  //     }
  //   }, []);

  return (
    <div
      ref={navbarRef}
      className={`navbar${isStuck === null ? "" : isStuck ? " stuck" : " unstuck"}`}
    >
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
      <div className="barberPoleContainer">
        <div className="ball" />
        <div className="endCap" />
        <div className="cap" />
        <div className="barberWrap">
          <div className="barber" />
        </div>
        <div className="cap" />
        <div className="endCap" />
        <div className="ball" />
      </div>
    </div>
  );
}
