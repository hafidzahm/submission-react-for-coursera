import AboutUs from './AboutUs';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="background-image">
        <img src="/garden.jpg" alt="garden" />
      </div>
      <div className="content">
        <div className="landing_content">
          <h1>Welcome to Unique Plants!</h1>
          <div className="divider"></div>
          <p>Great Nature, Great Responsibility!</p>
          <button className="get-started-button">Get Started</button>
        </div>

        <div className="aboutus_container">
          <AboutUs />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
