export function fetchAllProducts() {
  return new Promise(async (resolve) => {
    // TODO : We will not hard-code server url
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    resolve({ data });
  });
}

// return by filter
export function fetchProductsByFilters(filter) {
  // filter = {"category":"smartphone"}
  // TODO : on server we will support multi values
  let queryString = "";
  for (let key in filter) {
    queryString += `${key}=${filter[key]}&`;
  }

  return new Promise(async (resolve) => {
    //TODO: we will not hard-code server URL here
    const response = await fetch(
      "http://localhost:3000/products?" + queryString
    );
    const data = await response.json();
    resolve({ data });
  });
}
