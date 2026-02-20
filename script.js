let thrivingList = [];
let strugglingList = [];


// counting 
const total =document.getElementById('total-count');
const thrivingCount =document.getElementById('thrivingCount');
const strugglingCount =document.getElementById('thrivingCount');


// toggle buttons
const allFilterBtn =document.getElementById('all-filter-btn');
const thrivingFilterBtn =document.getElementById('thriving-filter-btn');
const strugglingFilterBtn =document.getElementById('struggling-filter-btn');

// console.log(total , thrivingCount , strugglingCount);

const allCardSection =document.getElementById('allCards');

// calculate total count
function calculateTotalCount() {
    total.innerText = allCardSection.children.length ;

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
}