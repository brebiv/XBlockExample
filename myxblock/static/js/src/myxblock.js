/* Javascript for MyXBlock. */
function MyXBlock(runtime, element) {

    function updateTitle(resp) {
        $('#title', element).text(resp.title);
    }

    function updateContent(resp) {
        $('#content', element).text(resp.content);
    }

    var update_title_url = runtime.handlerUrl(element, 'update_title');
    var update_content_url = runtime.handlerUrl(element, 'update_content');

    $('#title-button', element).click(function(eventObject) {
        // console.log("CLICK");
        // console.log($('#title-input', element))
        // console.log($('#title-input', element).val())
        $.ajax({
            type: "POST",
            url: update_title_url,
            data: JSON.stringify({"title": $('#title-input', element).val()}),
            success: updateTitle
        });
    });

    $('#content-button', element).click(function(eventObject) {
        $.ajax({
            type: "POST",
            url: update_content_url,
            data: JSON.stringify({"content": $('#content-input', element).val()}),
            success: updateContent
        });
    });

    $(function ($) {
        /* Here's where you'd do things on page load. */
    });
}
