import React from "react";

export const Services = (props) => {
  // Function to calculate column class
  const getColumnClass = (index) => {
    // For the first three items, use a third of the row. Afterwards, use full width.
    return index < 3 ? "col-md-4" : "col-md-12";
  };

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Lineage</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                // Apply dynamic class based on the index
                <div key={`${d.name}-${i}`} className={getColumnClass(i)}>
                  <img src={d.image} alt={`${d.name} icon`} style={{ maxWidth: '200px', maxHeight: '200px' }} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
