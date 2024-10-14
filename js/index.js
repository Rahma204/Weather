let htmlContinerCurrent = document.querySelector(".current")
let htmlContinerforcast1 = document.querySelector(".forcast1")
let htmlContinerforcast2 = document.querySelector(".forcast2")
let searchInput = document.querySelector(".search")


async function getData(countery){
let response = await fetch
(`https://api.weatherapi.com/v1/forecast.json?key=c4ecea6b233c469ab9592800241110&q=${countery}&days=3`)
let data = await response.json()
display(data, data.forecast.forecastday)
return data
}  




function display(data, array){
  let dayCurrent = new Date(data.current.last_updated)
  let today = dayCurrent.toLocaleDateString("en-us", {weekday:"long"})
  let dayfrca1 = new Date(array[1].date)
  let dayForcast1 = dayfrca1.toLocaleDateString("en-us", {weekday:"long"})
  let dayCurrent2 = new Date(array[2].date)
  let Forcast2 = dayCurrent2.toLocaleDateString("en-us", {weekday:"long"})
              
let htmlContentCurrent = ` <div class="inner overflow-hidden d-flex justify-content-center align-content-center flex-column w-100">
              <div class="d-flex   p-3 justify-content-between head text-white p-2 bg-inner">
              <h1 class="h5 today ">${today}</h1>
              <span class="">${data.location.localtime}</span>

              </div>      
          <h6 class="m-2 h4 text-gray  p-3">${data.location.name}</h6>
              <div class="d-flex gap-1 p-1">
                <h2 class=" fw-bold text-white p-2 ">${data.current.heatindex_c}oC                             </h2>
                <img src="${data.current.condition.icon}" class="">
              </div>
              <p class="text-primary fw-bold  p-3">${data.current.condition.text}</p>
              <div class="d-flex align-content-center gap-5  p-3">
                <i class="fa-solid fa-umbrella "><span class="ms-2">20%</span></i>
                <i class="fa-solid fa-wind"><span class="ms-2">18km/h</span></i>
                <i class="fa-brands fa-nfc-directional"><span  class="ms-2">East</span></i>
              </div>
              </div>`
              htmlContinerCurrent.innerHTML = htmlContentCurrent
              
            
              let htmlContentforcast1 = ` <div class="inner d-flex flex-column align-items-center justify-content-center ">
              <h1 class="h5 head text-white p-2 w-100">${dayForcast1}</h1>
              <img src="${array[1].day.condition.icon}" class  ="p-2">
              <h3 class="text-white p-2">${array[1].day.maxtemp_c}</h3>
              <h5 class="text-gray p-2">${array[1].day.mintemp_c}</h5>
              <p class="text-prim p-2">${array[1].day.condition.text}</p> 
            </div> `
            htmlContinerforcast1.innerHTML = htmlContentforcast1
              let htmlContentforcast2 = ` <div class="inner d-flex flex-column align-items-center justify-content-center ">
              <h1 class="h5 head text-white p-2 w-100">${Forcast2}</h1>
              <img src="${array[2].day.condition.icon}" class  ="p-2">
              <h3 class="text-white p-2">${array[2].day.maxtemp_c}</h3>
              <h5 class="text-gray p-2">${array[2].day.mintemp_c}</h5>
              <p class="text-prim p-2">${array[2].day.condition.text}</p> 
            </div> `
            htmlContinerforcast2.innerHTML = htmlContentforcast2
    }
  
    
   
  

  searchInput.addEventListener("input", async function searh() {
        let weather = await getData(searchInput.value) 
        
        
   
  }
  
  )
 