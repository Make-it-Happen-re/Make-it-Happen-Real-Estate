(function() {
    "use strict";
    const t = (a, o) => {
        const {dataLayer: d} = window;
        d.push({
            event: `lc_${a}`,
            payload: o
        })
    }
      , c = ["ready", "availability_changed", "visibility_changed", "customer_status_changed", "new_event", "form_submitted", "rating_submitted", "greeting_displayed", "greeting_hidden", "rich_message_button_clicked"]
      , r = a => ({state: o, configuration: d}) => {
        let i = !1;
        const {LiveChatWidget: n, dataLayer: s} = window;
        !n || typeof s != "undefined" && (c.forEach(e => {
            n.on(e, _ => t(e, _))
        }
        ),
        n.on("customer_status_changed", ({status: e}) => {
            e === "chatting" ? (t("chat_started", {
                status: e
            }),
            i = !0) : e === "browsing" && i && (t("chat_ended", {
                status: e
            }),
            i = !1)
        }
        ))
    }
    ;
    window.commversion = window.commversion || {},
    window.LiveChatWidget.on("ready", r())
}
)();
