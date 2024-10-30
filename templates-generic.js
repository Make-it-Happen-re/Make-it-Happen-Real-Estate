function inViewportAnimations() {
    let i = document.querySelector(".scroll-inner-wrap h3");
    if (i && isInViewPort(i)) {
        let t = i.closest(".scroll-fade-out");
        t && !t.classList.contains("animated") && (t.classList.remove("hidden"),
        t.classList.add("animated"),
        t.classList.add("slideInUp"))
    }
    document.querySelectorAll(".offsetpair-size h2.hidden").forEach(function(t, i) {
        isInViewPort(t) && (t.classList.contains("animated") || (t.classList.remove("hidden"),
        t.classList.add("animated"),
        t.classList.add("slideInRight")))
    }),
    document.querySelectorAll(".pittTitle h2").forEach(function(t, i) {
        isInViewPort(t) && (t.classList.contains("animated") || (t.style.visibility = "visible",
        t.classList.add("animated"),
        t.classList.add("slideInRight")))
    })
}
function isInViewPort(t) {
    t = t.getBoundingClientRect();
    return 0 <= t.top && 0 <= t.left && t.right <= (window.innerWidth || document.documentElement.clientWidth) && t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
}
function adjustFormFieldMargin() {
    var i = document.querySelector("form header > .htmlform-title");
    if (i) {
        i = window.getComputedStyle(i),
        i = parseInt(i.height, 10) + parseInt(i.marginBottom, 10);
        let t = document.querySelector("form main.htmlform-main");
        t.style.marginTop = i + "px"
    }
}
window.addEvent("domready", function() {
    inViewportAnimations(),
    window.addEventListener("scroll", function(t) {
        inViewportAnimations()
    }),
    adjustFormFieldMargin(),
    window.addEventListener("resize", function(t) {
        adjustFormFieldMargin()
    })
});
