const request_url = 'http://39.96.38.111:8080/api/comment-records/publish';
$("#comment-commit").on('click', function () {
    if ($.html5Validate.isAllpass($("#comment-form"))) {
        let data = {};
        let value = $('#comment-form').serializeArray();

        $.each(value, function (index, item) {
            data[item.name] = item.value;
        });

        let json = JSON.stringify(data);

        $.ajax({
            type: "POST",
            url: request_url,
            data: json,
            contentType: "application/json",
            success: function (respMsg) {
                console.log(respMsg)
                alert("预约成功！")
            },
            error: function (data) {
                let a = JSON.stringify(data);
                console.log(data)
            }
        });
    }
})