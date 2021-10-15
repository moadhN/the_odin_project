
function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

window.addEventListener('scroll', debounce(checkslide))
const imgs = document.querySelectorAll('img')
function checkslide(e) {

    imgs.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) - (img.height / 2)

        const imageBottom = img.offsetTop + img.height;
        const isHalfShown = slideInAt > img.offsetTop;
        const isNoscrolledPast = imageBottom > window.scrollY
        if (isHalfShown && isNoscrolledPast) {
            img.classList.add('active')
        } else {
            img.classList.remove('active')
        }

    })
}