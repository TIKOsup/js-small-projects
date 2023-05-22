const questions = document.querySelectorAll(".q");

questions.forEach(function(question) {
    const btn = question.querySelector(".q-btn");

    btn.addEventListener("click", function() {
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-elem");
            }
        });

        question.classList.toggle("show-elem");
    });
});