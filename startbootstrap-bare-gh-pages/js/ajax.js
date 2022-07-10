function get_list() {
    console.log("get_list")
    $.ajax({
        url: '/guestbook',
        type: 'GET',
        cache: false,
        async: false,
        timeout: 10000, // 10초
        contentType: 'application/json; charset=UTF-8',
        dataType: "JSON",
        beforeSend: function () { },
        success: function (response) {
            alert(response)
        },
        error: function (error) {
            console.log(error);
        }
    });
}