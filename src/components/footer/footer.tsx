import "./footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="footer-section">
        <h3>Info</h3>
        <hr className="footer-section-divider" />
        <div>This mock ecommerce site was built by Chris!</div>
        <div>It is based on a site by a popular phone company in Ireland</div>
        <a href="https://aeronautalist.github.io/profile-page/">
          Check out my site!
        </a>
      </div>
      <div className="footer-section">
        <h3>Built with</h3>
        <hr />
        <ul>
          <li>
            <a href="https://react.dev/">React</a>
          </li>
          <li>
            <a href="https://shoelace.style">Shoelace</a>
          </li>
          <li>
            <a href="https://vitejs.dev/">Vite</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Image Credit</h3>
        <hr className="footer-section-divider" />
        <ul>
          <li>
            <a href="https://unsplash.com/@amirhanna?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Amir Hanna
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@jonasleupe?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Jonas Leupe
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@vojtechbruzek?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Vojtech Bruzek
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@aleno?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Adomas Aleno
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@steven_st22?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Steven Shi
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@kayrasercan?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Kayra Sercan
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@frostroomhead?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Rodion Kutsaiev
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@noellerebekah?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Noelle Rebekah
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@kellysikkema?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Kelly Sikkema
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@cdx2?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              C D-X
            </a>
          </li>
          <li>
            <a href="https://unsplash.com/@redaquamedia?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
              Denny Müller
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
