const template = () => {
  const baseTemplate = `
  <head>
  <script>
    
    window.addEventListener("load", function () {
      console.log(window.parent.document.getElementById("shadowdom-id"));
        /*window.parent.document.getElementById("shadowdom-id").innerHTML =
          "<p>hacking shadow</p>";*/
      });
  </script>

  <p id="shadow-internal">hola internal</p>
  `;

  return `<template shadowroot="open">${baseTemplate}</template>`;
};

export default template;
