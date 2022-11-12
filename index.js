const reveals = document.getElementsByClassName("reveal");

function reveal() {
    // console.log("reveal")
    const windowHeight = window.innerHeight
    const elementRevealFactor = 1.05;
    const elementUnvealFactor = .15;
    for (let i = 0; i < reveals.length; i++) {
        const elementPos = reveals[i].getBoundingClientRect().y + reveals[i].getBoundingClientRect().height / 2;
        // console.log(elementPos, windowHeight * elementRevealFactor, windowHeight * elementUnvealFactor);
        if (elementPos < windowHeight * elementRevealFactor
                && elementPos > windowHeight * elementUnvealFactor) {
            // console.log(i)
            reveals[i].classList.add("active");
        } else {
            // console.log(i, " off")
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);
