async function awaitCall() {
    try {
      // Simulating an API call by fetching data
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
      const data = await response.json();  
      console.log(data);  
    } catch (error) {
      console.log('Error fetching data:', error); 
    }
  }
  
  awaitCall();  // Call the function to test
  