const submittime = document.querySelector('#time');

function grabtime() {
    submittime.value = new Date();
    console.log("submit time= ", submittime.value);  // for debug only
}

document.querySelector('.submitBtn').addEventListener('submit', grabtime());