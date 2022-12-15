function main(node) {
  const markup = ` 
    <main>
        <form>
            <input type="search" name="search" id="search" />
            <button>search city</button>
        </form>

        <div class="data">
            
        </div>
    </main>`;

  node.insertAdjacentHTML("beforeend", markup);
}

export default main;
