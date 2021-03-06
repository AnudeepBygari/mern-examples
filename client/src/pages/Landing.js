import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span> tracking</span> app
          </h1>
          <p>
            Quickly generate your favicon from text by selecting the text,
            fonts, and colors. Download your favicon in the most up to date
            formats.
          </p>
          <button className="btn btn-hero"> Login/Register</button>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </main>
  );
};

export default Landing;
