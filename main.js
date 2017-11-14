$(document).ready( function() {
    setContent("#jsContent");
});

var setContent = function(selector) {
    $.ajax(
        "https://api.github.com/repos/eurekasfray/mono/readme",
        {
            headers: {
                "Accept": "application/vnd.github.v3+json"
            },
            success: function(data) {
                console.log(data.content);
                var markdown = atob(data.content);
                console.log(markdown);
                var html = markdownify(markdown, selector);
                console.log(html);
                console.log(selector);
            },
            error: function() {
                console.log("An error has occurred while pulling data.");
                $(selector).html("An error has occurred while pulling data.");
            },
            complete: function(xhr, status) {
                console.log(status);
            }
        }
    );
};

var markdownify = function(markdown, selector) {
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
                console.log(data);
                $(selector).html(data);
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
    )
};
