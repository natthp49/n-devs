import React from 'react'

export function createElement(params) {
  const script = document.createElement("script");

      script.src = `${params}`;
      // script.src = "../../js/demo-bar.js";
      script.async = true;

      document.body.appendChild(script);
}