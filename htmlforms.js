function recaptchaReady() {
    $$(".htmlform").each(function(e) {
        e.getElement("div.g-recaptcha") && grecaptcha && (e.grecaptcha_instance = grecaptcha.render(e.getElement("div.g-recaptcha")))
    })
}
window.addEvent("domready", function() {
    $$(".htmlform").each(function(a) {
        0 < a.getElements('input[type="file"]').length && new PushWidgets.WFUpload($(a),{
            max_image_side: 800,
            maxUploads: 10,
            maxFileSize: 4194304,
            maxResizableFileSize: 8e6,
            maxTotalUploadSize: 22020096
        }),
        a.getElements("input, textarea").addEvent("input", function() {
            this.validity.valid && this.getElement("!>").set("data-validation-message", null).removeClass("htmlform-validation-failed")
        }),
        a.addEvent("submit", function(e) {
            e.stop(),
            this.getElements(":invalid").each(function(e) {
                e.setCustomValidity("")
            }),
            a.send.debounce(2e3, !0).bind(this)()
        }),
        a.set("send", {
            onRequest: function() {
                a.addClass("submitting")
            },
            onSuccess: function(e) {
                e = JSON.parse(e),
                a.removeClass("submitting");
                var t = a.getElement(".validation-messages").empty();
                0 === e.status && (e.validation.each(function(e) {
                    new Element("div",{
                        text: e
                    }).inject(t, "bottom")
                }),
                e.validationids.each(function(e) {
                    $(e) && ($(e).setCustomValidity("Invalid value"),
                    0)
                })),
                void 0 !== a.grecaptcha_instance && grecaptcha && grecaptcha.reset(a.grecaptcha_instance),
                1 === e.status ? ($(a).reset(),
                $(a).getElements(".file-attachment-thumbnails>div").dispose(),
                window.fireEvent("htmlform_success", [$(a), e.message, e.url])) : window.fireEvent("htmlform_failed", [$(a), e.message])
            },
            onFailure: function() {
                window.fireEvent("htmlform_error", [$(a), "Unable to submit form."])
            },
            onComplete: function() {
                a.removeClass("submitting")
            },
            onCancel: function() {
                a.removeClass("submitting")
            }
        })
    })
});
