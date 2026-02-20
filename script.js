let thrivingList = [];
let strugglingList = [];
let currentStatus = 'all'

// counting 
const total = document.getElementById('total-count');
const thrivingCount = document.getElementById('thrivingCount');
const strugglingCount = document.getElementById('strugglingCount');


// toggle buttons
const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');

// console.log(total , thrivingCount , strugglingCount);

const allCardSection = document.getElementById('allCards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');

// calculate total count
function calculateTotalCount() {
    total.innerText = allCardSection.children.length;
    thrivingCount.innerText = thrivingList.length;
    strugglingCount.innerText = strugglingList.length;
    // console.log(allCardSection.children.length);

}
calculateTotalCount();


// step 1 toggling btns
function toggling(id) {

    // adding all gray btn 
    allFilterBtn.classList.add('btn-soft');
    thrivingFilterBtn.classList.add('btn-soft');
    strugglingFilterBtn.classList.add('btn-soft');

    // removing black btn
    allFilterBtn.classList.remove('btn-neutral');
    thrivingFilterBtn.classList.remove('btn-neutral');
    strugglingFilterBtn.classList.remove('btn-neutral');




    
    // if selected change the btn to black 
    const selected = document.getElementById(id);
    selected.classList.remove('btn-soft');
    selected.classList.add('btn-neutral');
    currentStatus = id;


    if (id == 'thriving-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderThriving();

    } else if (id == 'all-filter-btn') {
        allCardSection.classList.remove('hidden');
        filterSection.classList.add('hidden');

    } else if (id == 'struggling-filter-btn') {
        allCardSection.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderStruggling();
    }


}


// step 2 delegation
mainContainer.addEventListener('click', function (event) {

    // console.log(event.target.classList.contains('thriving-btn'));

    if (event.target.classList.contains('thriving-btn')) {


        const parentNode = event.target.parentNode.parentNode;
        //    console.log(parentNode);

        const plantName = parentNode.querySelector('.plantName').innerText;
        const latinName = parentNode.querySelector('.latinName').innerText;
        const light = parentNode.querySelector('.light').innerText;
        const water = parentNode.querySelector('.water').innerText;
        const status = parentNode.querySelector('.Status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.Status').innerText = 'Thrive'

        // console.log(plantName , latinName , light , water ,status , notes);

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status: 'Thrive',
            notes

        }

        const plantExist = thrivingList.find(item => item.plantName == cardInfo.plantName);

        if (!plantExist) {

            thrivingList.push(cardInfo);
        }

        strugglingList = strugglingList.filter(item => item.plantName != cardInfo.plantName);
        if (currentStatus == 'struggling-filter-btn') {

            renderStruggling();
        }
        calculateTotalCount()



    } else if (event.target.classList.contains('struggling-btn')) {


        const parentNode = event.target.parentNode.parentNode;
        //    console.log(parentNode);

        const plantName = parentNode.querySelector('.plantName').innerText;
        const latinName = parentNode.querySelector('.latinName').innerText;
        const light = parentNode.querySelector('.light').innerText;
        const water = parentNode.querySelector('.water').innerText;
        const status = parentNode.querySelector('.Status').innerText;
        const notes = parentNode.querySelector('.notes').innerText;

        parentNode.querySelector('.Status').innerText = 'struggling'

        // console.log(plantName , latinName , light , water ,status , notes);

        const cardInfo = {
            plantName,
            latinName,
            light,
            water,
            status: 'struggle', 
            notes

        }

        const plantExist = strugglingList.find(item => item.plantName == cardInfo.plantName);

        if (!plantExist) {

            strugglingList.push(cardInfo);
        }

        thrivingList = thrivingList.filter(item => item.plantName != cardInfo.plantName);
        if (currentStatus == 'thriving-filter-btn') {

            renderThriving();
        }
        calculateTotalCount()


    }

})




// step 3 html create
function renderThriving() {

    filterSection.innerHTML = '';

    for (let thrive of thrivingList) {
        // console.log(thrive);
        let div = document.createElement('div');
        div.className = ' flex justify-between py-10 px-5 border-2 shadow-md'
        div.innerHTML = `
          <!-- left -->
                <div class="left space-y-4 ">
                    <div>
                        <h1 class="plantName text-lg font-semibold">${thrive.plantName}</h1>
                        <p class="latinName font-light ">${thrive.latinName}</p>
                    </div>


                    <div class="flex gap-3 ">
                        <p class="light text-gray-700 bg-gray-300 p-1 rounded-md">${thrive.light}</p>
                        <p class="water text-gray-700 bg-gray-300 p-1 rounded-md"> ${thrive.water}</p>
                    </div>

                    <p class="Status border rounded-md p-1">${thrive.status}</p>

                    <p class="notes">${thrive.notes}</p>

                    <div class=" space-x-5">
                        <button class="thriving-btn btn btn-outline btn-success ">Thriving</button>
                        <button class="struggling-btn btn btn-outline btn-error">Struggling</button>
                    </div>
                </div>


                <!-- right -->
                <div>
                    <button class="btn-delete btn btn-outline btn-error ">Delete</button>
                </div>
        `
        filterSection.appendChild(div);
    }
}


function renderStruggling() {

    filterSection.innerHTML = '';

    for (let struggle of strugglingList) {
        // console.log(thrive);
        let div = document.createElement('div');
        div.className = ' flex justify-between py-10 px-5 border-2 shadow-md'
        div.innerHTML = `
          <!-- left -->
                <div class="left space-y-4 ">
                    <div>
                        <h1 class="plantName text-lg font-semibold">${struggle.plantName}</h1>
                        <p class="latinName font-light ">${struggle.latinName}</p>
                    </div>


                    <div class="flex gap-3 ">
                        <p class="light text-gray-700 bg-gray-300 p-1 rounded-md">${struggle.light}</p>
                        <p class="water text-gray-700 bg-gray-300 p-1 rounded-md"> ${struggle.water}</p>
                    </div>

                    <p class="Status border rounded-md p-1">${struggle.status}</p>

                    <p class="notes">${struggle.notes}</p>

                    <div class=" space-x-5">
                        <button class="thriving-btn btn btn-outline btn-success ">Thriving</button>
                        <button class="struggling-btn btn btn-outline btn-error">Struggling</button>
                    </div>
                </div>


                <!-- right -->
                <div>
                    <button class="btn-delete btn btn-outline btn-error ">Delete</button>
                </div>
        `
        filterSection.appendChild(div);
    }
}
