"use client";

import { useState, useEffect } from "react";

import shadowDOM from "./components/shadow-dom";

export default function Home() {
  useEffect(() => {
    setTimeout(() => {
      console.log(document.getElementById("shadow-internal"));
      console.log(document.getElementById("iframe-internal"));
      console.log(parent.frames);
    }, 1000);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <info-tooltip
        dangerouslySetInnerHTML={{
          __html: shadowDOM(),
        }}
      ></info-tooltip>

      <div>
        <iframe id="MyFrame" src="./assets/index.html"></iframe>
      </div>

      <div>
        <div id="iframe-id"></div>
        <div id="shadowdom-id"></div>
      </div>
    </main>
  );
}

/*



*/
