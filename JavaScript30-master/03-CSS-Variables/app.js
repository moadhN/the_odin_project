const inputs = document.querySelectorAll(`input`);


inputs.forEach(input => input.addEventListener('change', changeVarible));
inputs.forEach(input => input.addEventListener('mousemove', changeVarible));

function changeVarible(e) {
    const suffix = this.dataset.sizing || "";

    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}`);



}