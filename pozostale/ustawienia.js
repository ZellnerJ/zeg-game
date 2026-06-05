// Wczytanie zapisanych ustawień po otwarciu strony
window.addEventListener("load", () => {

    document.getElementById("potwory").checked =
        localStorage.getItem("wylaczPotwory") === "true";

    document.getElementById("pulapki").checked =
        localStorage.getItem("wylaczPulapki") === "true";

    document.getElementById("hp").checked =
        localStorage.getItem("wylaczHP") === "true";

    document.getElementById("stamina").checked =
        localStorage.getItem("wylaczStamine") === "true";

});

// Zapis ustawień
document.getElementById("zapisz").addEventListener("click", () => {

    localStorage.setItem(
        "wylaczPotwory",
        document.getElementById("potwory").checked
    );

    localStorage.setItem(
        "wylaczPulapki",
        document.getElementById("pulapki").checked
    );

    localStorage.setItem(
        "wylaczHP",
        document.getElementById("hp").checked
    );

    localStorage.setItem(
        "wylaczStamine",
        document.getElementById("stamina").checked
    );

    alert("Ustawienia zapisane!");
});