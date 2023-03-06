// singers function 
$("#singers h3").click(function () {
  $(this).next().slideToggle(500);
});

// ===============/=========================
   var max = 100;
   $("textarea").keyup(function () {
     let textareaLength = $(this).val().length;
     let remainNums = max - textareaLength;
     if (remainNums <= 0) {
       $(".allowedNum").text("your available character finished");
     } else {
       $(".allowedNum").text(remainNums);
     }
   });


//    =================  countdown function  till the first day of ramadan =========================

const countDownDate = new Date("Mar 22, 2023 23:59:59");

let counter=setInterval(() => {
  let dateNow = new Date().getTime();

  let dateDiff = countDownDate - dateNow;
  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML =days < 10 ? `0${days} D` : `${days} D`;

  document.querySelector(".hours").innerHTML =  hours < 10 ? `0${hours} h` : `${hours} h`;
   
  document.querySelector(".minutes").innerHTML =minutes < 10 ? `0${minutes} m` : `${minutes} m`;

  document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds} s` : `${seconds} s`;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);



//  hours < 10 ? `0${hours}` : hours;

//  minutes < 10 ? `0${minutes}` : minutes;

//  seconds < 10 ? `0${seconds}` : seconds;