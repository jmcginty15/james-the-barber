export default function About(props: { scrollTo: (linkName: string) => void }) {
  const { scrollTo } = props;

  return (
    <div className="about">
      <div className="aboutContent">
        <h1 className="aboutTitle">No gimmicks.</h1>
        <h2 className="aboutTitle">Just a classic barber.</h2>
        <p className="aboutText">
          You deserve a tailored haircut, professional beard trim, luxury
          straight razor face shave, and old-fashioned customer service. Enjoy
          the barbering experience your dad and granpda expected. Bring your son
          to make lifelong memories together. I specialize in classic barbering
          in downtown Stillwater, Oklahoma.
        </p>
      </div>
      <div id="aboutContentRight" className="aboutContent">
        <h3 className="aboutTitle">
          Regular haircut | <span className="aboutPrice">$32.00</span>
        </h3>
        <p className="aboutDescription">
          Classic haircut with razor neck shave and hair tonic scalp treatment.
          Old-fashioned barbershop experience.
        </p>
        <h3 className="aboutTitle">
          Straight razor shave | <span className="aboutPrice">$35.00</span>
        </h3>
        <p className="aboutDescription">
          Hot towel and straight razor face shave like your dad and grandpa
          received.
        </p>
        <h3 className="aboutTitle">
          Beard trim | <span className="aboutPrice">$25.00</span>
        </h3>
        <p className="aboutDescription">
          Beard trim and lineup with straight razor, finished off with beard
          oil.
        </p>
        <div className="aboutText">
          More options available
          <br />
          <button
            className="aboutButton"
            onClick={() => scrollTo("Appointments")}
          >
            Schedule an appointment
          </button>
        </div>
      </div>
    </div>
  );
}
