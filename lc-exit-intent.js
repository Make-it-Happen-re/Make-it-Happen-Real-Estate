(function() {
    "use strict";
    const t = () => {
        const {LiveChatWidget: e} = window;
        e.call("update_session_variables", {
            exit_intent: "false"
        }),
        document.addEventListener("mouseleave", () => {
            const {status: n} = e.get("customer_data");
            n === "browsing" && e.call("update_session_variables", {
                exit_intent: "true"
            })
        }
        ),
        document.addEventListener("mouseenter", () => {
            e.call("update_session_variables", {
                exit_intent: "false"
            })
        }
        )
    }
    ;
    window.LiveChatWidget.on("ready", t)
}
)();
