fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {


   
    const asiaCountries = data.filter(country => country.region === 'Asia');
    console.log('Asia Countries:', asiaCountries);


   
    const lowPopulationCountries = data.filter(country => country.population < 200000);
    console.log('Low Population Countries:', lowPopulationCountries);


    data.forEach(country => console.log('Name:', country.name.common, 'Capital:', country.capital, 'Flag:', country.flags[0]));


   
    const totalPopulation = data.reduce((acc, country) => acc + country.population, 0);
    console.log('Total Population:', totalPopulation);


    const usdCountry = data.find(country => country.currencies.USD);
    console.log('USD Country:', usdCountry);
  })
  .catch(error => console.log(error));



