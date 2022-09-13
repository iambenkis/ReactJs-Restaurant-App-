const Contact = (props) => (
  <div className="contact">
    <div className="menu-content">
      <div className="menu-text">
        <p className="try-text">TRY & DISCOVER</p>
        <h3>CONTACTS</h3>
        <p className="desc-p">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.
          Utenim ad minim veniam, quis nostrud. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
          doloremque laudantium, totam rem aperiam!
        </p>
      </div>
      <form>
        <div className="inputs">
          <input type="text" placeholder="Username" />
          <input type="Email" placeholder="Your email" />
          <input type="url" placeholder="WebSite" />
        </div>
        <textarea placeholder="Your message" maxLength="200" />
        <button type="submit">SUBMIT</button>
      </form>
    </div>
  </div>
);

export default Contact;
