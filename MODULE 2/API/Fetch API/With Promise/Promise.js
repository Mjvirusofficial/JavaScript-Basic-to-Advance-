//Find Covid data using fetch API####################
fetch('https://api.covid19api.com/summary').then(d => d.json()
.then((data) =>

{
    //On Console:-
    console.log(data.Countries[77])

    //On Webpages
    let Data = data.Countries[77]

    let Name = document.getElementById('name')
    Name.textContent=`The name of the country is ${Data.Country} Total Confirmed ${Data.TotalConfirmed}`;    

    let TotalRecovered = document.getElementById('tc')
    TotalRecovered.textContent=`Total TotalRecovered ${Data.TotalRecovered}`;    
    
    let TotalDeaths = document.getElementById('td')
    TotalDeaths.textContent=`Total Deaths ${Data.TotalDeaths}`;    
  
    let NewConfirmed = document.getElementById('nd')
    NewConfirmed.textContent=`New Deaths ${Data.NewConfirmed}`;    
    
    let NewDeaths = document.getElementById('nc')
    NewDeaths.textContent=`New Confirmed ${Data.NewDeaths
    }`;    
  
}
))

