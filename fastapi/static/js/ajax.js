$(document).ready(function update_list() {
    console.log("get_list")
    $.ajax({
        url: '/guestbook',
        method: 'GET',
        async: false,
        timeout: 10000, // 10초
        data: "",
        dataType: "JSON",
        beforeSend: function () { },
        success: function (response) {
            // alert(response[0].designer)
            console.log(response)
            $.each(response, function (i, row) {
                i = i + 1
                element = "<tr style='display: table-row;'>" + "<td>" + i + "</td>" +
                    "<td>" + row.designer + "</td>" +
                    "<td>" + row.content + "</td>" +
                    "<td>" + row.id + "</td>" +
                    "<td>" + row.wdate + "</td></tr>";
                $('#table-id > tbody').append(element);

                console.log(row)
                getPagination('#table-id');
            })

        },
        error: function (error) {
            console.log(error);
        }
    });
});

// function get_list() {
//     console.log("get_list")
//     let name = $('.guest_name')[0].value;
//     let writer = $('.guest_name')[0].value;
//     let comments = $('.guest_comments')[0].value;
//     let insert_db_data = JSON.stringify({
//         "designer": String(name),
//         "writer": String(writer),
//         "content": String(comments)
//     })
//     console.log(insert_db_data);
//     $.ajax({
//         url: '/insertbook',
//         method: 'POST',
//         body: insert_db_data,
//         dataType: 'JSON',
//         contentType: 'application/json',
//         timeout: 10000, // 10초
//         success: function (response) {
//             update_list()
//         },
//         error: function (error) {
//             console.log(error);
//         }
//     });
// }
function get_list() {
    console.log("get_list")
    let name = $('.guest_name')[0].value;
    let writer = $('.guest_name')[0].value;
    let comments = $('.guest_comments')[0].value;
    let insert_db_data = JSON.stringify({
        "designer": String(name),
        "writer": String(writer),
        "content": String(comments)
    })
    console.log(insert_db_data);

    fetch("/insertbook", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: insert_db_data,
    }).then((response) => console.log(response));
}
