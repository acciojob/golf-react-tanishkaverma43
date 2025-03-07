import React, { useState, useEffect } from "react";

const GolfBallGame = () => {
  const [showBall, setShowBall] = useState(false);
  const [position, setPosition] = useState(0); // Ensure it starts at 0px

  const buttonClickHandler = () => {
    setShowBall(true);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "ArrowRight") {
        setPosition((prevPosition) => prevPosition + 5);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      {!showBall ? (
        <button className="start" data-testid="start-button" onClick={buttonClickHandler}>Start</button>
      ) : (
        <div
          className="ball"
          data-testid="golf-ball"
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: "green",
            borderRadius: "50%",
            position: "absolute",
            left: `${position}px`,
            top: "100px",
          }}
        ></div>
      )}
    </div>
  );
};

export default GolfBallGame;
