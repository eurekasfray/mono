/**
 *==============================================================================
 * Readme Component
 *
 * This implements the Observer pattern.
 *==============================================================================
 */

function Event(sender) {
    this._sender = sender;
    this._listeners = [];
}

Event.prototype = {
    attach : function(listener) {
        this._listeners.push(listener);
        console.log("Listener attached " + listener + " to " + this);
    },
    notify : function(args) {
        var i;
        for (i = 0; i < this._listeners.length; i += 1) {
            this._listeners[i](this._sender, args);
            console.log("Notification sent from " + this._listeners[i]);
        }
    }
};

/**
 *==============================================================================
 * Readme Component
 *==============================================================================
 */

function ReadmeModel(htmlify) {
    this._url = "https://api.github.com/repos/eurekasfray/mono/readme";
    this._htmlify = htmlify;

    this.fetching = new Event(this);
    this.fetched = new Event(this);
    this.failed = new Event(this);
    this.empty = new Event(this);

    var _this = this;

    this._htmlify.rendered.attach(function(sender, args) {
        _this.respond(args.html);
    });

    this._htmlify.failed.attach(function() {
        _this.fail();
    });
}

ReadmeModel.prototype = {
    fetch : function() {

        this.fetching.notify();

        var _this = this;
        $.ajax(
            "https://api.github.com/repos/eurekasfray/mono/readme",
            {
                headers: {
                    "Accept": "application/vnd.github.v3+json"
                },
                success: function(data) {
                    // console.log(data.content);
                    console.log("SUCCESS: Data successfully pulled form GitHub.");
                    var markdown = atob(data.content);
                    // console.log(markdown);
                    console.log("SUCCESS: Markdown converted from base64 to ASCII.");
                    _this._htmlify.convert(markdown);
                    //html = htmlify(markdown); // TODO: Replace with DI object
                },
                error: function() {
                    var msg = "An error has occurred while pulling data.";
                    console.log(msg);
                    _this.failed.notify();
                },
                complete: function(xhr, status) {
                    console.log(status);
                }
            }
        );
    },

    respond : function (html) {
        if (html !== false) {
            this.fetched.notify({html : html})
            return html;
        }
        else {
            this.empty.notify();
            return false;
        }
    },

    fail : function () {
        return false;
    }
};

/**
 *==============================================================================
 * ReadmeView Component
 *==============================================================================
 */

function ReadmeView(model, elements) {
    this._model = model;
    this._elements = elements;

    this.domReady = new Event(this);

    var _this = this;

    this._elements.document.ready(function () {
        _this.domReady.notify();
    });

    this._model.fetched.attach(function (sender, args) {
        _this.show(args.html);
    });

    this._model.failed.attach(function (sender, args) {
        _this.error(args.html);
    });

    this._model.empty.attach(function (sender, args) {
        _this.empty(args.html);
    });
}

ReadmeView.prototype = {
    show : function (content) {
        this._fadeIn(this._elements.readme, content);
    },

    empty : function () {
        this._fadeIn(this._elements.readme, "The README is empty and there's nothing to show.");
    },

    error : function () {
        this._fadeIn(this._elements.readme, "Could not pull README from GitHub. Read the document on <a href='https://github.com/eurekasfray/mono'>GitHub</a>.");
    },

    _fadeIn : function (element, html) {
        element.hide().fadeIn(125).html(html);
    }
};

function ReadmeController(model, view)
{
    this._model = model;
    this._view = view;

    var _this = this;

    this._view.domReady.attach(function () {
        _this.show();
    });
}

ReadmeController.prototype = {
    show : function () {
        this._model.fetch();
    }
};
/**
 *==============================================================================
 * SpinnerView Component
 *==============================================================================
 */

function SpinnerView(model, elements) {
    this._model = model;
    this._elements = elements;

    var _this = this;

    this._model.fetching.attach(function() {
        _this.show();
    });

    // Attach model listeners.
    this._model.fetched.attach(function () {
        _this.remove();
    });
}

SpinnerView.prototype = {
    show : function () {
        this._elements.spinner.addClass("spinner");
        this._elements.spinner.show();
    },

    remove : function () {
        this._elements.spinner.hide().remove();
    }
};

/**
 *==============================================================================
 * Utility
 *==============================================================================
 */

function Htmlify() {
    this.rendered = new Event(this);
    this.failed = new Event(this);
}

Htmlify.prototype = {
    convert : function (markdown) {
        var _this = this;
        $.ajax(
            "https://api.github.com/markdown",
            {
                method: "POST",
                headers: {
                    "Accept": "application/vnd.github.v3+json"
                },
                data: JSON.stringify({
                    "text": markdown,
                    "mode": "markdown",
                    "context": "none"
                }),
                success: function(data) {
                    // console.log(data);
                    console.log("SUCCESS: Markdown converted from Markdown to HTML.");
                    _this.rendered.notify({html : data});
                    //return data;
                },
                error: function() {
                    console.log("An error has occurred during Markdown conversion.")
                    _this.failed.notify();
                    return false;
                },
                complete: function(xhr, status) {
                    console.log(status);
                }
            }
        );
    }
};

function htmlify (markdown) {
    $.ajax(
        "https://api.github.com/markdown",
        {
            method: "POST",
            headers: {
                "Accept": "application/vnd.github.v3+json"
            },
            data: JSON.stringify({
                "text": markdown,
                "mode": "markdown",
                "context": "none"
            }),
            success: function(data) {
                // console.log(data);
                console.log("SUCCESS: Markdown converted from Markdown to HTML.");
                return data;
            },
            error: function() {
                console.log("An error has occurred during Markdown conversion.")
                return false;
            },
            complete: function(xhr, status) {
                console.log(status);
            }
        }
    );
}

$(function () {
    var htmlify = new Htmlify();

    var readmeModel = new ReadmeModel(htmlify);
    var readmeView = new ReadmeView(readmeModel, {
        'readme' : $("#readme"),
        "document" : $(document)
    });
    var readmeController = new ReadmeController(readmeModel, readmeView);

    var spinnerView = new SpinnerView(readmeModel, {
        'spinner' : $("#spinner")
    });
});
