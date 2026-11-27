import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import emailjs from "@emailjs/browser"
import { useRef } from 'react'
import './App.css'
import {
  FaBullseye,
  FaEye,
  FaHandshake
} from "react-icons/fa";

function App() {
  const form = useRef();

const [status, setStatus] = useState("");
const [loading, setLoading] = useState(false);

const sendEmail = async (e) => {
  e.preventDefault();

  if (loading) return;

  setLoading(true);
  setStatus("");

  try {

    // Send notification to admin
    await emailjs.sendForm(
      "service_skqjjlt",
      "template_yk8izsc",
      form.current,
      {
        publicKey: "BgwHtd_aak1150fGW",
      }
    );

    // Send confirmation email to customer
    await emailjs.send(
      "service_skqjjlt",
      "template_yk8izsc",
      {
        name: form.current.name.value,
        email: form.current.email.value,
        phone: form.current.phone.value,
        service: form.current.service.value,
        address: form.current.address.value,
      },
      {
        publicKey: "BgwHtd_aak1150fGW",
      }
    );

    setStatus("success");
    form.current.reset();

  } catch (error) {

    console.error("Email sending failed:", error);
    setStatus("error");

  } finally {

    setLoading(false);

  }
};
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          <img src='ved.jpeg'
          alt='logo'
          width="70"
          height="60"
          
          
          />
      </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      
<section className="hero" id="home">
  
  <video
    className="bg-video"
    autoPlay
    muted
    loop
    playsInline
    preload="auto"
  >
    <source
      src={`${import.meta.env.BASE_URL}background.mp4`}
      type="video/mp4"
    />
    Your browser does not support video.
  </video>
  {/* Homepage Content */}

  <div className="hero-content">
    <div className="logo1">
          <img src='ved.jpeg'
          alt='logo1'
          
          
          />
      </div>


    <p className="small-title">
      WELCOME TO OUR DIGITAL AGENCY
    </p>

    <h1>
      Grow Your Business With
      <span> Digital Innovation</span>
    </h1>

    <p className="hero-text">
      We create modern websites, creative designs
      and powerful digital marketing strategies
      to help your business grow.
    </p>

    <div className="hero-buttons">

      <a href="#contact" className="outline-btn1">
        Get Started
      </a>
       

      <a href="#services" className="outline-btn">
        Our Services
      </a>

    </div>

   

  </div>
</section>


      {/* About */}
      <section className="about" id="about">
        <p className="small-title">ABOUT US</p>

        <h2>We Help Businesses Grow Online</h2>

        <p>
          Vedant Digital is a professional digital marketing agency dedicated to helping businesses grow and succeed online. We offer result-driven solutions including SEO, Social Media Marketing, Meta Ads, Google Ads, Website Development, Content Marketing and Graphic Design. Our goal is to strengthen your brand presence, reach the right audience and generate quality leads. We combine creativity, innovation and effective marketing strategies to deliver solutions tailored to your business needs. We believe in building strong relationships and helping brands achieve long-term digital growth. At Vedant Digital, your success is our priority.
        </p>

        <div className="about-features">

  <div className="about-box">
    <FaBullseye className="about-icon" />
    <h3>Our Mission</h3>
    <p>
      To help businesses grow online through
      creative and result-driven digital marketing strategies.
    </p>
  </div>

  <div className="about-box">
    <FaEye className="about-icon" />
    <h3>Our Vision</h3>
    <p>
      To become a trusted digital marketing partner
      and help brands achieve long-term success.
    </p>
  </div>

  <div className="about-box">
    <FaHandshake className="about-icon" />
    <h3>Our Values</h3>
    <p>
      We believe in creativity, transparency,
      commitment and customer satisfaction.
    </p>
  </div>

</div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        
        <p className="small-title">WHAT WE DO</p>

        <h2>Our Digital Marketing Services</h2>

        <div className="service-container">

  {/* SEO */}
  <div className="service-row">
    <div className="card">
      <video
  className="card-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={`${import.meta.env.BASE_URL}seo1.mp4`}
    type="video/mp4"
  />
</video>
      
    </div>

    <div className="card-content">
      
      <h3>SEO🔍</h3>
      <p>
        Boost your Google rankings, increase organic traffic and attract potential customers with our powerful SEO strategies designed to grow your business online.
      </p>
    </div>
  </div>

  {/* Social Media Marketing */}
  <div className="service-row">
    <div className="card">
       <video
  className="card-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={`${import.meta.env.BASE_URL}social.mp4`}
    type="video/mp4"
  />
</video>
      
      
    </div>

    <div className="card-content">
      
      <h3>Social Media Marketing 📱</h3>
      <p>
        Build a strong brand presence with our social media marketing strategies. We create engaging content, grow your followers, increase audience engagement and reach potential customers on platforms like Instagram and Facebook to boost your business growth.
      </p>
    </div>
  </div>

  {/* Meta Ads */}
  <div className="service-row">
    <div className="card">
      <img src='meta.jpg'
          alt='logo'
          width="100%"
          height="100%"
          
          />
    </div>

    <div className="card-content">
      
      <h3>Meta Ads♾️</h3>
      <p>
        Grow your business with targeted Meta Ads on Facebook and Instagram. We create high-performing ad campaigns to reach the right audience, increase brand awareness, generate quality leads and drive more conversions while optimizing your advertising budget.
      </p>
    </div>
  </div>

  {/* Google Ads */}
  <div className="service-row">
    <div className="card">
      <video
  className="card-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={`${import.meta.env.BASE_URL}google.mp4`}
    type="video/mp4"
  />
</video>
      
    </div>

    <div className="card-content">
      
      <h3>Google Ads🎯</h3>
      <p>
        Reach potential customers with powerful Google Ads campaigns. We create targeted advertisements to increase website traffic, improve brand visibility, generate quality leads and drive more sales while maximizing your advertising budget.
      </p>
    </div>
  </div>

  {/* Website Development */}
  <div className="service-row">
    <div className="card">
      <video
  className="card-video"
  autoPlay
  muted
  loop
  playsInline
>
  <source
    src={`${import.meta.env.BASE_URL}website.mp4`}
    type="video/mp4"
  />
</video>
    </div>

    <div className="card-content">
      
      <h3>Website Development💻</h3>
      <p>
        Build a strong online presence with our professional website development services. We create modern, responsive and user-friendly websites that showcase your brand, enhance customer experience and help your business grow online.
      </p>
    </div>
  </div>

  {/* Content Marketing */}
  <div className="service-row">
    <div className="card">
      <video className="card-video" autoPlay muted loop playsInline>
  <source
    src={`${import.meta.env.BASE_URL}content.mp4`}
    type="video/mp4"
  />
</video>
      
    </div>

    <div className="card-content">
      
      <h3>Content Marketing✍️</h3>
      <p>
        Attract and engage your audience with effective content marketing strategies. We create valuable blogs, social media posts and creative content that build brand trust, increase online visibility and turn potential customers into loyal clients.
      </p>
    </div>
  </div>

  {/* Graphic Design */}
  <div className="service-row">
    <div className="card">
      <video className="card-video" autoPlay muted loop playsInline>
  <source
    src={`${import.meta.env.BASE_URL}graphic.mp4`}
    type="video/mp4"
  />
</video>
     
      
    </div>

    <div className="card-content">
      
      <h3>Graphic Design📈</h3>
      <p>
       Make your brand stand out with creative and professional graphic design services. We design eye-catching logos, social media posts, banners and marketing materials that capture attention, strengthen your brand identity and leave a lasting impression.
      </p>
    </div>
  </div>

</div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <p className="small-title">WHY CHOOSE US</p>

        <h2>Why Choose Vedant Digital?</h2>

        <div className="why-container">
          <div>
            <h3>✓ Result Driven</h3>
            <p>We focus on measurable business growth.</p>
          </div>

          <div>
            <h3>✓ Customized Strategy</h3>
            <p>Strategies designed according to your business.</p>
          </div>

          <div>
            <h3>✓ Experienced Team</h3>
            <p>Professional solutions for your digital growth.</p>
          </div>

          <div>
            <h3>✓ Regular Reporting</h3>
            <p>Track your campaigns and business performance.</p>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="portfolio" id="portfolio">
        <p className="small-title">OUR WORK</p>

        <h2>Our Digital Marketing Work</h2>

        <div className="portfolio-container">
          <div className="portfolio-card">
            <h3>SEO Campaign</h3>
            <p>Improving search engine visibility and organic traffic.</p>
          </div>

          <div className="portfolio-card">
            <h3>Social Media Campaign</h3>
            <p>Building brand awareness and audience engagement.</p>
          </div>

          <div className="portfolio-card">
            <h3>Google Ads Campaign</h3>
            <p>Generating targeted leads through paid advertising.</p>
          </div>
        </div>
      </section>
      {/*Testimonials*/}
      <section className="Testimonials" id="testimonials">
        <p className="small-title">OUR CLIENT</p>

        <h2>Our Digital Marketing Client</h2>
 <div className="portfolio-container">
        <div className="portfolio-card">
          
           <img src='wow.jpeg'
          alt='logo'
          width="100"
          height="100"
          />
          <p>Amazing experience working with this team! Their creative strategies helped improve our online presence and connect with more customers.</p>
         
         </div>
          <div className="portfolio-card">
           <img src='wow club.jpeg'
          alt='logo'
          width="100"
          height="100"
          />
          
        <p>From content creation to social media management, everything was handled professionally. Truly outstanding service!</p>
          
        </div>
        </div>
      </section>

      

      {/* Contact */}
      <section className="contact" id="contact">
        <p className="small-title">GET IN TOUCH</p>

        <h2>Let's Grow Your Business</h2>
        <form ref={form} onSubmit={sendEmail}>

        <input type="text" name='name' placeholder="Your Name" />

        <input type="email" name='email' placeholder="Your Email" />

        <input type="tel" name='phone' placeholder="Your Phone Number" />
        <select name='service' required>
          <option value="">Choose a Service</option>
          <option value="Social media marketing">Social media marketing</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Web Development">Web Development</option>
          <option value="Content Marketing">Content Marketing</option>
          <option value="Graphic Design">Graphic Design</option>

        </select>

        <textarea name='address' placeholder="Tell us about your project"></textarea>
        <button type="submit" disabled={loading}>
    {loading ? "Sending..." : "Send Message"}
  </button>

  {status === "success" && (
    <p className="success-message">
      ✓ Thank you! Your enquiry has been submitted successfully.
      We will contact you soon.
    </p>
  )}

  {status === "error" && (
    <p className="error-message">
      Sorry! Something went wrong. Please try again.
    </p>
  )}

        </form>

      
      </section>

      {/* Footer */}
      <footer>
        <div className='footer-content'>
          <div className='address'
        style={{
          textAlign:'right'
        }}
        >
          <h3>📍Address</h3>
          <p>
            Office No. 413, 4th Floor, Fenkin9 Business Park, </p>
            <p>Wagle Estate Road No. 9,near Mulund Check Naka </p> 
            <p>Thane (West),Maharashtra, 400604 </p> 
    

        </div>
        <div className="vedinfo">
  <h3>Follow Us</h3>

  <div className="social-icons">

  <a
    href="https://www.instagram.com/ved_digital_agency/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${import.meta.env.BASE_URL}insta.jpg`}
      alt="Instagram"
    />
  </a>

  <a
    href="https://www.linkedin.com/company/vedant-soft-solutions-pvt-ltd/"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src={`${import.meta.env.BASE_URL}all.jpg`}
      alt="LinkedIn"
    />
  </a>

</div>

  <p>📧 info@vedantsoft.in</p>
  <p>📞 (+91) 7666-99-6668</p>
</div>
        </div>
      </footer>
    </div>
    
  );
}

export default App;