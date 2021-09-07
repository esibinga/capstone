function logSubmit(event) {
    // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
    event.preventDefault();
    console.log("event", event)
    console.log("form", form)

}
const form = document.getElementById('form');

//const log = document.getElementById('log');
if (form) {
    form.addEventListener('submit', logSubmit);
    // console.log("form", form)
    // console.log("log", log)
}