(function() {
    "use strict";
    const t = () => {
        const {LiveChatWidget: e} = window;
        document.querySelectorAll("input").forEach(n => {
            n.addEventListener("invalid", () => {
                e.call("update_session_variables", {
                    input_error: "true"
                })
            }
            )
        }
        )
    }
    ;
    window.LiveChatWidget.on("ready", t)
}
)();
