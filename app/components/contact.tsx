export default function Contact() {
  return (
    <div className="contact">
      <div className="contactContent">
        <h1 className="contactTitle">Contact</h1>
        <h2 className="contactTitle">Location</h2>
        <p className="contactText">609 S Main St</p>
        <p className="contactText">Stillwater, OK 74074</p>
        <h2 className="contactTitle">Call or text</h2>
        <p className="contactText">
          <a className="contactLink" href="tel:4058772059">
            (405) 877-2059
          </a>
        </p>
      </div>
      <div className="contactContent">Map widget goes here</div>
    </div>
  );
}
