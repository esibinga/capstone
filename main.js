// // function logSubmit(event) {
// //     // log.textContent = `Form Submitted! Time stamp: ${event.timeStamp}`;
// //     // event.preventDefault();
// //     console.log("event", event)
// //     console.log("form", form)
// // }
// // const form = document.getElementById('form');

// // // const log = document.getElementById('log');
// // if (form) {
// //     form.addEventListener('submit', logSubmit);
// //     console.log("form", form)
// //     // console.log("log", log)
// // }


// var $form = $('form#form'),
//     url = 'https://script.google.com/macros/s/AKfycbzUS4tA-vUaDcPs7hqAhpKXQenkvtuw5bgMZTlrx5tqdtX42pJ1cTulg6EXtCSxGeKpsQ/exec'

// $('#submit-form').on('click', function (e) {
//     e.preventDefault();
//     console.log("it worked!");
//     var jqxhr = $.ajax({
//         url: url,
//         method: "GET",
//         dataType: "json",
//         data: $form.serializeObject(),
//     }).done(
//         // do something

//     );
// })