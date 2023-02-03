import { FC, useEffect, useState } from "react";

import "./App.css";

interface Counter {
  icon: string;
  target: number;
  label: string;
  current?: number;
}

const App: FC = () => {
  const [counters, setCounters] = useState<Counter[]>([
    {
      icon: "fab fa-twitter fa-3x",
      target: 1000,
      label: "Twitter Followers",
    },
    {
      icon: "fab fa-youtube fa-3x",
      target: 500,
      label: "YouTube Subscribers",
    },
    {
      icon: "fab fa-facebook fa-3x",
      target: 370,
      label: "Facebook Fans",
    },
  ]);

  useEffect(() => {
    counters.forEach((counter, i) => {
      let current = 0;
      const interval = setInterval(() => {
        current++;
        if (current === counter.target) {
          clearInterval(interval);
        }
        setCounters((prevCounters) => [
          ...prevCounters.slice(0, i),
          { ...prevCounters[i], current: current },
          ...prevCounters.slice(i + 1),
        ]);
      }, 1);
    });
  }, []);

  return (
    <div className="counter-container">
      {counters.map((counter) => (
        <div key={counter.label}>
          <i className={counter.icon} />
          <div className="counter">{counter.current}</div>
          <span>{counter.label}</span>
        </div>
      ))}
    </div>
  );
};

export default App;
