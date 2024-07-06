export default function Appointments() {
  return (
    <div className="appointments">
      <div className="appointmentsContent">
        <h1 className="appointmentsTitle">Appointments</h1>
        <h2 className="appointmentsTitle">Hours</h2>
        <p className="appointmentsText">Mon - Fri</p>
        <p className="appointmentsText">10am - 5pm</p>
      </div>
      <div className="appointmentsContent">
        <iframe
          src="https://dbajamesthebarber.resurva.com/book?embedded=true"
          title="resurva-frame"
          width="800"
          height="600"
          style={{ width: "100%", height: "50vh" }}
        />
      </div>
    </div>
  );
}
