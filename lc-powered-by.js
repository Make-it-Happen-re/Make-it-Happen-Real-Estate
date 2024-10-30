(function() {
    "use strict";
    var s = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAAyCAYAAAB1V8bkAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEc2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTEyLTA2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmU2OWFkOTUwLWJlNWItNGI1Zi04YTUyLTJlNTI3NmQ5MmFmMTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5Qb3dlcmVkIEJ5IExvZ28gLSAyPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlv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";
    const l = {
        modern: {
            height: "31px",
            bottom: "0px",
            width: "368px",
            left: "16px",
            transition: "all 260ms ease 200ms"
        },
        smooth: {
            height: "23px",
            width: "360px",
            bottom: "16px",
            left: "16px",
            transition: "all 160ms ease-out 200ms",
            borderRadius: "0 0 16px 16px"
        },
        show: {
            opacity: "1"
        },
        hidden: {
            transitionDelay: "0ms",
            height: "0px",
            opacity: "0",
            width: "0px",
            left: "0px"
        }
    };
    function g() {
        return window.matchMedia("(max-width: 600px)").matches
    }
    function y() {
        return document.querySelector("#chat-widget-container").style.right.length > 0 ? "right" : "left"
    }
    function b(t={}) {
        var c;
        const i = document.createElement("a");
        i.style.display = "flex",
        i.style.flex = 1,
        i.style.justifyContent = "center",
        i.href = (c = t.poweredBy) != null ? c : "https://www.commversion.com/powered-by?utm_campaign=poweredby&utm_medium=link&utm_source=&customer",
        i.target = "_blank";
        const A = document.createElement("img");
        return A.src = s,
        A.style.display = "block",
        A.style.height = "30px",
        A.style.width = "150px",
        A.style.maxWidth = "100%",
        i.appendChild(A),
        i
    }
    function d(t="smooth") {
        return l[t]
    }
    function m(t, i="smooth") {
        const A = d(i);
        Object.entries(A).forEach( ([c,e]) => {
            t.style[c] = e
        }
        )
    }
    const n = t => ({state: i, customerData: A}) => {
        const {LiveChatWidget: c} = window
          , e = document.createElement("div");
        e.style.opacity = "0",
        e.style.display = "block",
        e.style.position = "absolute",
        e.style.height = "0",
        e.style.boxSizing = "border",
        e.style.textAlign = "center",
        e.style.background = "#fff",
        e.style.overflow = "hidden",
        m(e, t == null ? void 0 : t.theme);
        const a = b(t);
        e.style.display = "flex",
        e.style.justifyContent = "center",
        e.style.alignItems = "center",
        e.appendChild(a);
        const o = document.querySelector("#chat-widget-container");
        if (g())
            return;
        o.appendChild(e),
        i.visibility === "maximized" && G(),
        i.visibility === "minimized" && Y(),
        c.on("visibility_changed", h => {
            if (h.visibility === "minimized")
                return Y();
            if (h.visibility === "maximized")
                return G()
        }
        );
        function G() {
            m(e, "show"),
            m(e, t == null ? void 0 : t.theme)
        }
        function Y() {
            if (m(e, "hidden"),
            y() !== "left") {
                const h = d(t == null ? void 0 : t.theme);
                e.style.left = h.width
            }
        }
    }
    ;
    window.commversion = window.commversion || {},
    window.LiveChatWidget.on("ready", n(window.commversion))
}
)();
