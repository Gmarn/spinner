import './InnerSpinner.scss';
import './OutterSpinner.scss';
import React from "react";

function OutterSpinner() {
  return (
    <div className="outter-spinner">
      <div className="dot-top-container">
        <div className="dot-top"></div>
      </div>
      <div className="dot-bottom-container">
        <div className="dot-bottom"></div>
      </div>
    </div>
  );
}

function InnerSpinner() {
  return (
    <div className="inner-spinner">
      <div className="dot-1-container">
        <div className="dot-1"></div>
      </div>
      <div className="dot-2-container">
        <div className="dot-2"></div>
      </div>
    </div>
  );
}

export default function CircleLoader() {
  return (
    <div>
      <div className="outter-spinner-container">
        <OutterSpinner />
        <OutterSpinner />
        <OutterSpinner />
        <OutterSpinner />
        <OutterSpinner />
      </div>
      <div className="inner-spinner-container">
        <InnerSpinner />
        <InnerSpinner />
        <InnerSpinner />
        <InnerSpinner />
      </div>
    </div>
  );
}
