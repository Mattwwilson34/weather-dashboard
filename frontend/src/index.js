const getData = async () => {
  try {
    const response = await fetch('http://localhost:3000/');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

getData();
