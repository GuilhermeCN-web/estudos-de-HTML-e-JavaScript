    const input = document.querySelector('input');
    const log = document.getElementById('log');

    function updateValue() {
        log.innerHTML = input.value;
    }
    input.onchange = updateValue;