function header(node) {
  const markup = ` 
    <header>
        <h1>Weather <span>Forcast</span></h1>
    </header>`;

  node.insertAdjacentHTML("beforeend", markup);
}

export default header;
