
$.ajaxPrefilter(function (options) {
    if (options.crossDomain && $.support.cors) {
        options.url = 'https://cors-anywhere.herokuapp.com/' + options.url;
    }
});

$(function () {

    $("signin-btn").on("click", function (event) {
        event.preventDefault();
        signIn();
    })

    $("signup-btn").on("click", function (event) {
        event.preventDefault();
        signUp();
    })

    $("#searchButton").on("click", function (event) {
        event.preventDefault();

        var searchRoute = "";
        searchRoute += "/" + $("#option").val();
        searchRoute += "/" + $("#search").val();

        $.get("/api/posts" + searchRoute, function () {
        }).then(function () {
            console.log("Search completed")
        })
    })

    $("#add").on("click", function () {
        var form = new FormData();
        form.append("image", $('#fileInput')[0].files[0])

        $.ajax({
            url: "https://api.imgur.com/3/upload",
            type: "POST",
            datatype: "json",
            headers: {
                "Authorization": "Client-ID 8bc6ab7f6927702"
            },
            data: form,
            success: function (response) {

                var postData = {
                    body: $("#body").val(),
                    imgLink: response.data.link,
                    location: $("#location").val(),
                    season: $("#option").val()
                }

                console.log(postData)

                $.post("/api/posts", postData).then(function () {
                    console.log("Post created")
                })
            },
            cache: false,
            contentType: false,
            processData: false
        });
    })

    function signIn() {
        window.location.href = "/signin";
    }

    function signUp() {
        window.location.href = "/signup";
    }

    function search(signup) {
        $.post("/signup", signup, function () {
            window.location.href = "/dashboard";
        });
    }

})