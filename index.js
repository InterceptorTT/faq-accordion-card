const question = document.querySelectorAll(".question");
const answer = document.querySelectorAll(".answer");
const arrow = document.querySelectorAll(".question img");

question.forEach((q, i) => {
    q.addEventListener("click", () => {

            question[i].style.fontWeight = "700";
            question[i].style.color = "hsl(238, 29%, 16%)";

            answer[i].style.transition = "opacity 0.3s ease-in";
            answer[i].classList.toggle("close");
            answer[i].classList.toggle("open");

            arrow[i].style.transition = "transform 0.2s ease-in";
            arrow[i].classList.toggle("rotate");
        
    if(answer[i].classList.contains("open")){(question[i].style.fontWeight = "700")}
    if(answer[i].classList.contains("close")){question[i].style.fontWeight = "400";}

        
            
    })
    
})


