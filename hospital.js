const images=[
    "attractive-young-female-doctor-portrait-white-coat-67072437.jpg ",
    "depositphotos_218007348-stock-photo-happy-male-doctor-stethoscope-neck.jpg",
    "cheerful-handsome-bearded-smiling-guy-is-holding-the-copy-space-doc-is-wearing-white-uniform.jpg",
    "beautiful-female-doctor-her-consultation-sitting-desk-34888370.jpg",
    "beautiful-young-female-doctor-9182291 (1).jpg",
    "happy-young-male-doctor-man-smile-handsome-15357662.jpg",
    "handsome-young-male-doctor-with-stethoscope-standing-against-blue-background_662251-343.jpg",
    "beautiful-successful-female-doctor-13011820.jpg",
    "male doctor_213323746_ for newsroom.jpg"
    
];
let currentIndex=0;

const slide=document.getElementById("# slide");
setInterval(() => {
 currentIndex++;


 if(currentIndex >= images.length){
    currentIndex=0;
 }
 
slide.src=images[currentIndex];
},3000);

const scrollContainer = document.querySelectorAll('.team');
for(const item of scrollContainer){
    item.addEventListener('mousepointer',(evt) =>{
        evt.preventDefault();
        item.scrollLeft +=evt.deltaY;
    })
}

const bars =
document.getElementById("bars");
const menu = 
document .querySelector("nav ul");
bars.addEventListener("click",
    function () {
        menu.classList.toggle("show");
    });




    const submit = document.querySelector(".sub-btn");
 sub-btn.addEventListener("onclick",
    function (){
        console.log("Your Appointment Successfully Submitted .");
    }
 );




 async function submitAppointment(event) {

    event.preventDefault();

    const name = document.querySelector('input[name="name"]').value.trim();
    const number = document.querySelector('input[name="number"]').value.trim();
    const date = document.querySelector('input[name="date"]').value;
    const time = document.querySelector('input[name="time"]').value;

    // सभी fields check
    if (!name || !number || !date || !time) {
        alert("Please fill all fields.");
        return;
    }

    try {

        const response = await fetch("/appointment", {
            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                name: name,
                number: number,
                date: date,
                time: time
            })
        });

        const result = await response.json();

        // केवल database में successfully save होने पर
        // success page पर जाएगा
        if (result.success) {

            window.location.href = "appointment-success.html";

        } else {

            alert("Appointment was not submitted.");
        }

    } catch (error) {

        console.error(error);

        alert("Server error. Please try again.");
    }
}
