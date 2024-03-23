import React from "react";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container centered-container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2>Meet the Instructors</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div id="row" className="centered-row">
          {props.data ? props.data.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
              <div className="thumbnail">
                {d.img ? <img src={d.img} alt="..." className="team-img" /> : null}
                <div className="caption">
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                </div>
              </div>
            </div>
          )) : "loading"}
        </div>
      </div>
    </div>
  );
};
