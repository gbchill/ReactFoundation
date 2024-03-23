import React from "react";


export const Navigation = (props) => {
  return (
    
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          {/* Updated className to include 'navbar-brand-custom' */}
          <a className="navbar-brand page-scroll navbar-brand-custom" href="#page-top">
      One Heart <br /> Siu Lum Pai Hung Gar <br /> Arizona
        </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Adults
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Children
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Lineage
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Instructors
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
