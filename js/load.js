if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./sw.js").then(
        (reg) => console.log("registro exitos")
    ).catch(
        error => console.error(error)
    )
}