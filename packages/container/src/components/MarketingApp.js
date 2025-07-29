import React from "react";
import { mount } from "marketing/MarketingApp";

const MarketingApp = () => {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, []);

  return <div ref={ref} />;
};

export default MarketingApp;
