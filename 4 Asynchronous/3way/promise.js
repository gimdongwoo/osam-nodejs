function delay() {
  new Promise((resolve) => {
    setTimeout(resolve, 2000);
  }).then(() => console.log("Hello World"));
}

delay();
