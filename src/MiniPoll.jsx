import React, { useState } from "react";

export default function MiniPoll() {
  const [data, setData] = useState(["React", "Vue", "Svelte"]);
  const [showResults, setShowResults] = useState(true);
  const [vote, setVote] = useState({
    React: 0,
    Vue: 0,
    Svelte: 0,
  });

  const toggleResults = () => {
    setShowResults((result) => !result);
  };
  const resetVotes = () => {
    const resetObj = {};
    data.forEach((name) => {
      resetObj[name] = 0;
    });
    setVote(resetObj);
  };
  return (
    <div className="justify-items-center font-bold">
      {data.map((name) => (
        <div>
          <div>{name}</div>

          <button onClick={() => setVote({ ...vote, [name]: vote[name] + 1 })}>
            add Count
          </button>

          <div>{showResults ? vote[name] : ""} </div>
        </div>
      ))}
          <button onClick={toggleResults}>
            {showResults ? "Hide Result" : "Show Result"}
          </button>
          <br />
          <button onClick={resetVotes}>Reset Votes</button>
    </div>
  );
}
