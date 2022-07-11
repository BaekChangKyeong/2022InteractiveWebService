function get_list() {
    console.log("get_list")
    $.ajax({
        url: '/guestbook',
        method: 'GET',
        async: false,
        timeout: 10000, // 10초
        data:"",
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