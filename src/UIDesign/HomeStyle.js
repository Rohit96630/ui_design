import React from "react";
import "./HomeStyle.css";
const HomeStyle = () => {
  return (
    <>
      <div id="up" class="head">
        <div class="head-container">
          <header>
            <div class="logo">
              <a href="">
                <img src="http://bit.ly/2k0oZTJ" alt="tinyone-logo" />
              </a>
              <p>tinyone</p>
            </div>
            <div class="socials">
              <ul>
                <li>
                  <a href="#">
                    <i class="fa fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-pinterest" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </header>
          <div class="hero">
            <h1>Best solutions for your business</h1>
            <p>
              We are a team of inspired, highly skilled professionals who are
              ready to undertake tasks of any complexity.
              <br />
              We have beencreating best web ideas since 2010.
              <br />
              Grow your business with us.
            </p>
            <button type="button" href="">
              get start
            </button>
            <a href="#arrow-link">
              <i class="fa fa-long-arrow-down fa-lg" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
      <div id="arrow-link" class="services-container">
        <div class="h-p-group">
          <h2>Tinyone features</h2>
          <p>
            Depending on the needs of your business, we are always ready to
            offer you the best solution.
            <br />
            Our team analyzes the initial data, searches for the new ideas that
            could be ideally suitable for your business and carries out
            meticulous tests.
          </p>
        </div>
        <div class="services-block">
          <div class="services-block-box marg-left">
            <i class="fa fa-tablet fa-3x" aria-hidden="true"></i>
            <h3>Fully Responsive</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
          <div class="services-block-box">
            <i class="fa fa-lemon-o fa-3x" aria-hidden="true"></i>
            <h3>Fully Layered PSD</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
          <div class="services-block-box">
            <i class="fa fa-folder-o fa-3x" aria-hidden="true"></i>
            <h3>Font Awesome Icons</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
          <div class="services-block-box marg-top marg-left">
            <i class="fa fa-code fa-3x" aria-hidden="true"></i>
            <h3>HTML3 & CSS3 </h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
          <div class="services-block-box marg-top">
            <i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i>
            <h3>Email Template</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
          <div class="services-block-box marg-top">
            <i class="fa fa-bookmark-o fa-3x" aria-hidden="true"></i>
            <h3>Free to download</h3>
            <p>
              Lorem ipsum dolor sit amet,
              <br /> consectetur adipiscing elit.
              <br /> Praesent vitae eros eget tellus
              <br /> tristique bibendum.
            </p>
          </div>
        </div>
      </div>
      <div class="pricing-container">
        <div class="h-p-group">
          <h2>Pricing And Free Trial</h2>
          <p>
            Three plans are available: two with approachable prices and one free
            plan.
            <br />
            Choose the option that suits you best.
          </p>
        </div>
        <div class="price-block left-block">
          <img src="Images/1row.png" alt="tablet.png" />
          <h3>Basic</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <p>free</p>
          <img src="Images/price.png" alt="line.png" />
          <p>free forever</p>
          {/* <button class="button">get free now</button> */}
        </div>
        <div class="price-block center-block">
          <img src="http://bit.ly/2sPaa9L" alt="laptop.png" />
          <h3>Standard</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <p>
            <i class="fa fa-usd" aria-hidden="true"></i>99
          </p>
          <img src="http://bit.ly/2uhCRRm" alt="line.png" />
          <p>month</p>
          {/* <button class="button">upgrade</button> */}
        </div>
        <div class="price-block right-block">
          <img src="http://bit.ly/2sPfcU3" alt="desktop.png" />
          <h3>Enterprise</h3>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <p>
            <i class="fa fa-usd" aria-hidden="true"></i>199
          </p>
          <img src="http://bit.ly/2uhCRRm" alt="line.png" />
          <p>month</p>
          {/* <button class="button">learn more</button> */}
        </div>
      </div>
      <div class="portfolio-container">
        <div class="h-p-group">
          <h2>Our works</h2>
          <p>
            Our portfolio is literally YUGE. And it's getting bigger every day.
            <br />
            Here is just a small part of it.
          </p>
        </div>
        <div class="portfolio-block">
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img src="http://bit.ly/2tdFu1w" alt="portfolio-image1.png" />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Fully Responsive</h3>
            <p>Design / Branding</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img src="http://bit.ly/2sPaa9L" alt="portfolio-image2.png" />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Font Awesome Icons</h3>
            <p>Design / Branding</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img src="http://bit.ly/2uPWfSv" alt="portfolio-image3.png" />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>HTML5 & CSS3</h3>
            <p>App design / development</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img
                    src="http://bit.ly/2sPfcU3"
                    alt="portfolio-image4.png"
                    height="220"
                    width="220"
                  />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Various Layouts</h3>
            <p>Branding</p>
          </div>
          {/*___________________________2nd row_____________________________ */}
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img
                    src="http://bit.ly/2tHl04F"
                    alt="2row-portfolio-image1.png"
                  />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Fully Responsive</h3>
            <p>Design / Branding</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img
                    src="http://bit.ly/2tHLSBB"
                    alt="2row-portfolio-image2.png"
                  />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Font Awesome Icons</h3>
            <p>Design / Branding</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img
                    src="http://bit.ly/2t33Pfm"
                    alt="2row-portfolio-image3.png"
                  />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>HTML5 & CSS3</h3>
            <p>App design / development</p>
          </div>
          <div class="positioning-container">
            <div class="img-icon-container">
              <div class="row-img">
                <a href="#">
                  <img
                    src="http://bit.ly/2t364zg"
                    alt="22row-portfolio-image4.png"
                    height="220"
                    width="220"
                  />
                </a>
              </div>
              <div class="row-1icon">
                <i class="fa fa-eye" aria-hidden="true"></i>
              </div>
              <div class="row-2icon">
                <i class="fa fa-clock-o" aria-hidden="true"></i>
              </div>
            </div>
            <h3>Various Layouts</h3>
            <p>Branding</p>
          </div>
        </div>
      </div>
      <div class="team-block-container">
        <div class="h-p-group">
          <h2>Our team</h2>
          <p>
            Our team of 20 qualified UI/UX designers, developers, researchers
            and analysts can turn your wishes
            <br />
            into effective tools that will make your business better, bigger and
            more successful.
          </p>
        </div>
        <div class="team-block">
          <img src="http://bit.ly/2AAE5rf" alt="pic1-of-team-member.png" />
          <h4>Rohit</h4>
          <h5>UI Designer</h5>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="team-block">
          <img src="http://bit.ly/2AxnyX5" alt="pic2-of-team-member.png" />
          <h4>John Doe</h4>
          <h5>UI Designer</h5>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="team-block">
          <img src="http://bit.ly/2BN92bS" alt="pic3-of-team-member.png" />
          <h4>John Doe</h4>
          <h5>UI Designer</h5>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
        <div class="team-block">
          <img src="http://bit.ly/2BEkrK3" alt="pic4-of-team-member.png" />
          <h4>John Doe</h4>
          <h5>UI Designer</h5>
          <p>
            Lorem ipsum dolor sit amet,
            <br /> consectetur adipiscing elit
          </p>
          <ul>
            <li>
              <a href="#">
                <i class="fa fa-facebook" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-twitter" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fa fa-linkedin" aria-hidden="true"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="data-container">
        <div class="h-p-group">
          <h2>Stats & Testimonials</h2>
          <p>
            Improving our clients' businesses, we accomplished
            <br />
            many goals and reached new heights.
          </p>
        </div>
        <div class="stats-container">
          <div class="stats-block">
            <i class="fa fa-puzzle-piece fa-3x" aria-hidden="true"></i>
            <h4>20</h4>
            <h5>Products</h5>
          </div>
          <div class="stats-block">
            <i class="fa fa-cloud-download fa-3x" aria-hidden="true"></i>
            <h4>120,000</h4>
            <h5>Downloads</h5>
          </div>
          <div class="stats-block">
            <i class="fa fa-users fa-3x" aria-hidden="true"></i>
            <h4>1200</h4>
            <h5>Customers</h5>
          </div>
          <div class="stats-block">
            <i class="fa fa-thumbs-up fa-3x" aria-hidden="true"></i>
            <h4>900</h4>
            <h5>Like</h5>
          </div>
        </div>
        <div class="testimonials-container">
          <div class="customer-info">
            <img src="http://bit.ly/2itYB4l" alt="customer-image.png" />
            <h4>Rohit</h4>
            <h5>From frontend </h5>
          </div>
          <div class="customer-quote">
            <i class="fa fa-quote-left fa-lg" aria-hidden="true"></i>
            <blockquote>
              These guys can do magic! Improved stats, bigger number of
              customers and overall excitement - this is what you may expect
              when start working with them.
            </blockquote>
            {/* this is a block level element */}
            <i class="fa fa-quote-right fa-lg" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div class="feedback-container">
        <div class="h-p-group">
          <h2>Keep in touch with us</h2>
          <p>
            Available 24/7 via email and phone. Come and visit us in our office
            from Monday till Friday,
            <br />9 am - 9 pm
          </p>
        </div>
        <div class="contacts-container">
          <div class="contacts-block left-b">
            <i class="fa fa-map-marker fa-lg" aria-hidden="true"></i>
            <h4>Address</h4>
            <address>
              66, Dang Van ngu, Dong Da,
              <br /> Ha noi, Vietnam
            </address>
          </div>
          <div class="contacts-block center-b">
            <i class="fa fa-envelope fa-lg" aria-hidden="true"></i>
            <h4>Email</h4>
            <a href="mailto:contact@halovietnam.com">contact@halovietnam.com</a>
          </div>
          <div class="contacts-block right-b">
            <i class="fa fa-phone-square fa-lg" aria-hidden="true"></i>
            <h4>Phone</h4>
            <a href="tel:+844123456789">+844 1234 56789</a>
          </div>
        </div>
        <div class="contact-form">
          <form>
            <input type="email" name="mail" placeholder="Email" required />
            <input type="text" name="name" placeholder="Full name" required />
            <div class="textarea-positioning">
              <textarea
                name="textarea"
                rows="10"
                cols="20"
                placeholder="Message"
              ></textarea>
            </div>
            <input type="submit" value="Send Message" />
          </form>
        </div>
      </div>
      <footer id="footer">
        <div class="footer-container">
          <div class="footer-form">
            <h2>Sign up for our newsletter</h2>
            <p>
              We send emails with news, articles and information about our
              promotions.
              <br />
              No junk mail, we promise!
            </p>
            <form>
              <input
                type="email"
                name="mail"
                placeholder="Enter your email to update"
                required
              />
              <input type="submit" value="Submit" />
            </form>
          </div>

          <div class="block">
            <div class="footer-contacts">
              <h5>HALOVIETNAM LTD</h5>
              <address>
                66, Dang Van ngu, Dong Da
                <br /> Hanoi, Vietnam
              </address>
              <a href="mailto:contact@halovietnam.com">
                contact@halovietnam.com
              </a>
              <a href="tel:+844123456789">+844 1234 56789</a>
            </div>
            <div class="footer-nav">
              <ul>
                <li>
                  <a href="#">Examples</a>
                </li>
                <li>
                  <a href="#">Shop</a>
                </li>
                <li>
                  <a href="#">License</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Contact</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
                <li>
                  <a href="#">Terms</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Download</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <a href="#">Documents</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a href="#">Media</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Forums</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      {/* <div id="up-btn">
    <a href="#up"><i class="fa fa-3x fa-chevron-up" aria-hidden="true"></i></a>
  </div> */}
    </>
  );
};

export default HomeStyle;
