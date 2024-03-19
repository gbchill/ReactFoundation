import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #FF0000; // Changed this line
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;


const Example2 = () => {
  return (
    <div className="grid min-h-[200px] place-content-center bg-slate-900 p-4">
      <DrawOutlineButton>CONTACT</DrawOutlineButton>
    </div>
  );
};

const DrawOutlineButton = styled(Button)`
  /* Add additional or override styles specific to DrawOutlineButton here */
  /* For example, the existing styles from the DrawOutlineButton component can be added here */
  position: relative;
  padding: 8px 16px; /* Adjusted padding to reduce the button size */
  font-weight: 500;
  color: #FF0000;
  background-color: transparent;
  border: 2px solid #FF0000;
  transition: color 0.4s, border-color 0.4s;
  font-size: 14px; /* Reduced font size */

  &:hover {
    color: #FFFFFF;
    background-color: #000000;
  }
`;

export default Example2;
