const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;


        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            document.querySelectorAll('.faq-answer').forEach((item) => {
                item.classList.remove('show');
            });
            answer.classList.add('show');
        }
    });
});
