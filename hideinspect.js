
    document.addEventListener("contextmenu", (e) => e.preventDefault());


    document.addEventListener("keydown", (e) => {
        if (e.key === "F12" || 
            (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) || 
            (e.ctrlKey && e.key === "U")) {
            e.preventDefault();
        }
    });

    setInterval(() => {
        if (window.outerHeight - window.innerHeight > 200 || 
            window.outerWidth - window.innerWidth > 200) {
            document.body.innerHTML = "DevTools detected! Please close it.";
        }
    }, 1000);
