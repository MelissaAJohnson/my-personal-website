function addingEventListener() {
    const input = document.getElementById('tile1');

    function changeText() {
        input.innerHTML = "<p>I've had a passion for coding for many years. It started with simple family websites, then websites for schools and ultimately, I developed a few apps and stand-alone mobile apps. But it was always done as a hobby or a one-off project. Now I want to turn my hobby into a full-time job</p>";
    }
    input.addEventListener('click', changeText);
}

addingEventListener();