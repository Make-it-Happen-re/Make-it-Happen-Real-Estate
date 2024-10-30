(function() {
    "use strict";
    const e = "screen and (max-width: 992px) and (pointer: coarse)"
      , i = () => window.matchMedia(e).matches ? "mobile" : "desktop"
      , o = c => () => {
        const {LiveChatWidget: n} = window
          , t = i();
        n.call("update_session_variables", {
            device: t
        })
    }
    ;
    window.commversion = window.commversion || {},
    window.LiveChatWidget.on("ready", o())
}
)();