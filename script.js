

// navbar
const navdia = document.getElementById('nav-dialog')
function handlemenu() {
    navdia.classList.toggle('hidden')
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

const phrase = ['Less Code', 'Drag & Drop', 'Simple', 'Easy to Use'];
const elem = document.getElementById("typewriter");

let sleepTime = 400;
let curphrase = 0;

const writeloop = async () => {
    while (true) {
        let curword = phrase[curphrase];
        // console.log(curword)
        for (let i = 0; i < curword.length; i++) {
            elem.innerText = curword.substring(0, i + 1)
            await sleep(sleepTime)
        }
        await sleep(sleepTime * 2)

        // console.log(curword)
        for (let i = curword.length; i > 0; i--) {
            elem.innerText = curword.substring(0, i - 1)
            await sleep(sleepTime / 6)
        }

        await sleep(sleepTime * 2)

        if (curphrase === phrase.length - 1) {
            curphrase = 0;
        }
        else {
            curphrase++;
        }
    }

};
writeloop();

const initialLTR = -48 * 4;
const initialRLT = 36 * 4;

function setupIntersectionObserver(element, isLTR, speed) {
    const intersectionCallback = (entries) => {
        const isIntersecting = entries[0].isIntersecting;
        if (isIntersecting) {
            document.addEventListener('scroll', scrollHandler)
        } else {
            document.removeEventListener('scroll', scrollHandler)
        }

    }
    const intersectionObserver = new IntersectionObserver(intersectionCallback)

    intersectionObserver.observe(element)

    function scrollHandler() {
        const translateX = (window.innerHeight - element.getBoundingClientRect().top) * speed;

        let totalTranslate = 0;
        if (isLTR) {
            totalTranslate = translateX + initialLTR
        } else {
            totalTranslate = -(translateX + initialRLT);
        }
        element.style.transform = `translateX(${totalTranslate}px)`;
    }
}


const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')
setupIntersectionObserver(line1, true, 0.15)
setupIntersectionObserver(line2, false, 0.15)
setupIntersectionObserver(line3, true, 0.15)

setupIntersectionObserver(line4, true, 1)


const dtElements = document.querySelectorAll('dt');
dtElements.forEach(element => {
    element.addEventListener('click', () => {
        const ddId = element.getAttribute('aria-controls');
        const ddElement = document.getElementById(ddId);
        const ddarrwoicon = element.querySelectorAll('i')[0];

        ddElement.classList.toggle('hidden')
        ddarrwoicon.classList.toggle('-rotate-180')
    })
})


