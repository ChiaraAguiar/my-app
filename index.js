const react = () => { //metodo
    return React.createElement("h1", {}, "we are learn about react");
};
ReactDOM.render(React.createElement(react), document.getElementById("root"));

