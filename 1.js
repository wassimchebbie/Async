async function iterateWithAsyncAwait(values) {
    for (const value of values) {
      console.log(value);  
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  const values = [1, 2, 3, 4, 5];
  iterateWithAsyncAwait(values);  // Expected output: 1, 2, 3, 4, 5 with a 1-second delay between each
  