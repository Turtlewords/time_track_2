const cardContainer = document.querySelector("#card-container");

const fetchData = async () => {
    try {
        const response = await fetch("data.json");
        if (!response.ok) {
            switch (response.status) {
                case 404:
                    throw new Error('Data file not found');
                case 403:
                    throw new Error('Access to data file forbidden');
                default:
                    throw new Error(`HTTP error! status: ${response.status}`);
            }
        }
        const data = await response.json();
        return data;
    } catch(error) {
        throw new Error('Error fetching data:', error);
    }
}

async function initialize() {
    let data = await fetchData();

    console.log(data);

    data.forEach((activity) => {
        cardContainer.innerHTML += 
        `<section class="card" id="${activity.title}">
        <div id="content">
          <div class="content-top">
            <h2 class="activity-title">${activity.title}</h2>
            <img src="images/icon-ellipsis.svg" alt="ellipsis">
          </div>
          <div class="content-bottom">
            <p class="current">${activity.timeframes.daily.current}</p>
            <p class="prev">Yesterday - ${activity.timeframes.daily.previous}</p>
          </div>
        </div>
      </section>`
    })
}

initialize();
