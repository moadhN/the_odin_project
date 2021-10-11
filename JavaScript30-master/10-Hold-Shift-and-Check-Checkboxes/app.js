const items = document.querySelectorAll('.inbox input[type="checkbox"]');
items.forEach(item => item.addEventListener('click', handelcheck))

function handelcheck(e) {
    let inBetween = false
    if (this.checked && e.shiftKey) {
        items.forEach(item => {
            if (item.checked) {
                inBetween = !inBetween
            }
            if (inBetween) {
                item.checked = true;
            }
        })
    }

}