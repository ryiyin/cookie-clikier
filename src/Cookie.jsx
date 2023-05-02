import { useState } from "react";

export function Cookie() {
  const [cookieClick, setCookieclick] = useState(0);
  return (
    <div className="container">
      <div className="column column-cookie">
        <h1 className="cookie-counter">{cookieClick}</h1>
        <img
          src={"../src/assets/cookie_PNG13659.png"}
          alt="ds"
          className="cookie"
          onMouseUp={() => {
            setCookieclick(cookieClick + 1);
          }}
        />
      </div>
      <div>
        imagen
      </div>
      <div className="column updgrades">
        upgrades
      </div>
    </div>
  );
}
