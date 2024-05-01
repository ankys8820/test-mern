export function fetchAllProducts() {
  return new Promise(async (resolve) => {

    // TODO : WE WILL NOT HARD CODE SERVER URL HERE
    const response = await fetch("http://localhost:8080/products");
    const data = await response.json();
    resolve({ data });
  });
}
