import React from "react";

const Slide = (props) => {
  const { slides } = props;
  const [index, setIndex] = React.useState(0);

  const handleRestartClick = () => {
    setIndex(0);
  };

  const handlePrevClick = () => {
    const updatedIndex = index - 1;
    setIndex(updatedIndex);
  };

  const handleNextClick = () => {
    const updatedIndex = index + 1;
    setIndex(updatedIndex);
  };

  return (
    <>
      <h1 data-testid="title">{slides[index].title}</h1>
      <p data-testid="text">{slides[index].text}</p>
      <button data-testid="button-restart" onClick={handleRestartClick}>
        Restart
      </button>
      <button
        data-testid="button-prev"
        disabled={index === 0}
        onClick={handlePrevClick}
      >
        Prev
      </button>
      <button
        data-testid="button-next"
        disabled={index === 4}
        onClick={handleNextClick}
      >
        Next
      </button>
    </>
  );
};

export default Slide;
