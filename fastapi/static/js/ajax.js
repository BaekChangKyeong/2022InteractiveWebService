$( document ).ready(function() {
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
            // alert(response[0].designer)
            console.log(response)
            $.each(response, function (i, row) {
                i = i+1
                element = "<tr style='display: table-row;'>" + "<td>" + i + "</td>" +
                            "<td>" + row.designer + "</td>" +
                            "<td>" + row.content + "</td>" +
                            "<td>" + row.id + "</td>" +
                            "<td>" + row.wdate + "</td></tr>"; 
                $('#table-id > tbody').append(element);

                console.log(row)
            })

        },
        error: function (error) {
            console.log(error);
        }
    });
});