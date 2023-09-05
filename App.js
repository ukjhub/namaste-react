const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello WorldE from dReact!!"
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
