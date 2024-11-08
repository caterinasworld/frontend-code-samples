function getTimeJS() {
  // get time JS DOM
  const time = new Date().toLocaleTimeString();
  const element = `
    <h2>getTimeJS </h2>
    <p>Current time: ${time} </p>
  `;
  document.getElementById('appDOM').innerHTML = element;
}

function getTimeReact() {
  // get time React DOM
  const time = new Date().toLocaleTimeString();

  const element = (
    <div>
      <h2>getTimeReact </h2>
      <p>Current time: {time} </p>
    </div>
  );

  ReactDOM.render(element, document.getElementById('appVirtualDOM'));
}

setInterval(getTimeJS, 1000);
setInterval(getTimeReact, 1000);
