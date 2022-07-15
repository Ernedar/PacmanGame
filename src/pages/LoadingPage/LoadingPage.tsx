import React, { FC } from "react";

import "./LoadingPage.css";

const LoadingPage: FC = () => {
  return (
    <div className="loading-wrapper">
      <div className="loading-animation-wrapper">
        <div className="loading-animation-inner">
          <div className="pacman loading">
            <div className="top-half"></div>
            <div className="bottom-half"></div>
            <div className="eye"></div>
          </div>
          <div className="ghost-wrapper clyde-wrapper loading">
            <div className="ghost clyde">
              <div className="ghost-body">
                <div className="ghost-eye">
                  <div className="ghost-eye-socket"></div>
                </div>
                <div className="ghost-eye">
                  <div className="ghost-eye-socket"></div>
                </div>
                <div className="ghost-skirt">
                  <div className="skirt-wave"></div>
                  <div className="skirt-wave"></div>
                  <div className="skirt-wave"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="ghost-wrapper blinky-wrapper loading">
            <div className="ghost blinky">
              <div className="ghost-body">
                <div className="ghost-eye">
                  <div className="ghost-eye-socket"></div>
                </div>
                <div className="ghost-eye">
                  <div className="ghost-eye-socket"></div>
                </div>
                <div className="ghost-skirt">
                  <div className="skirt-wave"></div>
                  <div className="skirt-wave"></div>
                  <div className="skirt-wave"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2>Loading...</h2>
    </div>
  );
};

export default LoadingPage;
