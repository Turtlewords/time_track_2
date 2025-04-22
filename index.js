const cardContainer = document.querySelector("#card-container");
const daily = document.querySelector("#daily");
const weekly = document.querySelector("#weekly");
const monthly = document.querySelector("#monthly");


daily.addEventListener("click", displayDaily);
weekly.addEventListener("click", displayWeekly);
monthly.addEventListener("click", displayMonthly);

const fetchData = async () => {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            throw new Error("Could not retrieve data")
        }
        const data = await response.json();
        return data;
    } catch(error) {
        alert(error.message);
    }
}

async function displayDaily() {
    let data = await fetchData();
    let element = "";

    console.log(data);

    data.forEach((activity) => {
        element += 
        `<section class="card" id="${activity.title.toLowerCase().replace(" ", "-")}">
        <div class="content">
          <div class="content-top">
            <h2 class="activity-title">${activity.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis">
          </div>
          <div class="content-bottom">
            <p class="current">${activity.timeframes.daily.current}hrs</p>
            <p class="prev">Yesterday - ${activity.timeframes.daily.previous}hrs</p>
          </div>
        </div>
      </section>`
    })
    cardContainer.innerHTML = element;
    daily.classList.add("white");
    weekly.classList.remove("white");
    monthly.classList.remove("white")
}

async function displayWeekly() {
    let data = await fetchData();
    let element = "";

    console.log(data);

    data.forEach((activity) => {
        element += 
        `<section class="card" id="${activity.title.toLowerCase().replace(" ", "-")}">
        <div class="content">
          <div class="content-top">
            <h2 class="activity-title">${activity.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis">
          </div>
          <div class="content-bottom">
            <p class="current">${activity.timeframes.weekly.current}hrs</p>
            <p class="prev">Last week - ${activity.timeframes.weekly.previous}hrs</p>
          </div>
        </div>
      </section>`
    })
    cardContainer.innerHTML = element;
    daily.classList.remove("white");
    weekly.classList.add("white");
    monthly.classList.remove("white")
}

async function displayMonthly() {
    let data = await fetchData();
    let element = "";

    console.log(data);

    data.forEach((activity) => {
        element += 
        `<section class="card" id="${activity.title.toLowerCase().replace(" ", "-")}">
        <div class="content">
          <div class="content-top">
            <h2 class="activity-title">${activity.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis">
          </div>
          <div class="content-bottom">
            <p class="current">${activity.timeframes.monthly.current}hrs</p>
            <p class="prev">Last month - ${activity.timeframes.monthly.previous}hrs</p>
          </div>
        </div>
      </section>`
    })
    cardContainer.innerHTML = element;
    daily.classList.remove("white");
    weekly.classList.remove("white");
    monthly.classList.add("white")
}

displayDaily();
