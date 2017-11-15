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
                if (html !== false) {
                    console.log(html);
                    console.log(selector);
                }
                else {
                    displayContent("Unable to convert data to Markdown.");
                }
            },
            error: function() {
                var msg = "An error has occurred while pulling data.";
                console.log(msg);
                displayContent(msg);
            },
            complete: function(xhr, status) {
                console.log(status);
            }
        }
    );
};

var displayContent = function (selector, content)
{
    $(selector)
    .hide()
    .fadeIn(125)
    .html(content);
}

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
                displayContent(selector, data);
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
