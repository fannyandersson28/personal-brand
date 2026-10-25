const temaknapp = document.querySelector("#tema");

if (temaknapp) {
    temaknapp.hidden = false;

    function uppdateraTemaKnapp() {
        const arMorkt = document.body.classList.contains("morkt");
        temaknapp.setAttribute("aria-label", arMorkt ? "Byt till ljust läge" : "Byt till mörkt läge");
        temaknapp.setAttribute("title", arMorkt ? "Byt till ljust läge" : "Byt till mörkt läge");
    }

    function bytTema() {
        document.body.classList.toggle("morkt");
        uppdateraTemaKnapp();
        try {
            localStorage.setItem("fanny-tema", document.body.classList.contains("morkt") ? "morkt" : "ljust");
        } catch (e) {
            // Ignorera om lagring inte tillåts
        }
    }

    temaknapp.addEventListener("click", bytTema);

    // Läs sparad inställning eller systemets föredragna läge
    try {
        const sparatTema = localStorage.getItem("fanny-tema");
        if (sparatTema === "morkt" || (!sparatTema && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.body.classList.add("morkt");
        }
    } catch (e) {}

    uppdateraTemaKnapp();
}