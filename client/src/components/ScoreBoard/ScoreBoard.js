import React from "react";
import "./ScoreBoard.css";

export const ScoreBoard = ({ children }) => (
    <div className="scoreInfo">
      {children}
    </div>
  );

export default ScoreBoard;