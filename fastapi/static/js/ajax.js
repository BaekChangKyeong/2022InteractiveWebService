$(document).ready(update_list())

function update_list() {
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
            $('#table-id > tbody').empty()
            $.each(response, function (i, row) {
                i = i + 1
                var date = []
                date = row.wdate.split('T')
                time_date = date[0]
                time_time = date[1].slice(0,5);
                element = 
                    "<tr style='display: table-row;'>" + 
                    "<td>" + row.designer + "　　　" + time_date + "　　" + time_time + "<br><br>" +  row.content + 
                    "</td></tr>";
                $('#table-id > tbody').append(element);
            })
            getPagination('#table-id');

        },
        error: function (error) {
            console.log(error);
        }
    });
}

// TODO "댓글창 초기화, 아무것도 없을때 댓글안달리게"
// TODO "flag 처리 (안보임처리 해야함)"

function get_list() {
    let name = $('.guest_name')[0].value;
    let writer = $('.guest_name')[0].value;
    let comments = $('.guest_comments')[0].value;

    if (comments == ""){alert("글을 입력해주세요.")}
    if (name == ""){alert("이름을 입력해주세요.")}

    if (comments != "" && name != ""){
        let insert_db_data = JSON.stringify({
            "designer": String(name),
            "writer": String(writer),
            "content": String(comments)
        })
    
        fetch("/insertbook", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: insert_db_data,
        }).then(location.reload());
    }
}
