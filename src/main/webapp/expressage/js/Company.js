/*删除公司按钮点击事件*/
$(document).ready(function () {
    $('.btn-info').each(function () {
        $(this).click(function () {
            var expressage_id = $(this).children("span").text();
            var bool = confirm("确定货物已经收到手里了吗？");
            if (bool){
                $.ajax({
                   type: "POST",
                   url: "/expressage/updateStatus",
                   data: {
                       expressage_id: expressage_id,
                       type: 2
                   },
                   success: function () {
                       alert("收货成功");
                       //跳转支付页面
                   },
                   error: function () {
                       alert("系统异常，收货失败");
                       window.location.reload()
                   }
                });
            }
        })
    })
});

/*确认送达按钮点击事件*/
$(document).ready(function () {
    $('.btn-default').each(function () {
        $(this).click(function () {
            var expressage_id = $(this).children("span").text();
            var Prompt = prompt("确定货物已经送到指定位置了吗(输入取货地址)？");
            if (Prompt != null){
                $.ajax({
                    type: "POST",
                    url: "/expressage/updateStatus",
                    data: {
                        expressage_id: expressage_id,
                        type: 1,
                        prompt: Prompt
                    },
                    success: function () {
                        alert("成功");
                        window.location.reload()
                    },
                    error: function () {
                        alert("系统异常，修改失败");
                    }
                });
            }
        })
    })
});

/*我要配送按钮点击事件*/
$(document).ready(function () {
    $('.btn-danger').each(function () {
        $(this).click(function () {
            var expressage_id = $(this).children("span").text();
            var bool = confirm("确定要配送吗？");
            if (bool){
                $.ajax({
                    type: "POST",
                    url: "/expressage/updateStatus",
                    data: {
                        expressage_id: expressage_id,
                        type: 0
                    },
                    success: function () {
                        alert("成功");
                        window.location.reload()
                    },
                    error: function () {
                        alert("系统异常，修改失败");
                    }
                });
            }
        })
    })
});

/*我要配送按钮点击事件*/
$(document).ready(function () {
    $('.btn-warning').each(function () {
        $(this).click(function () {
            var expressage_id = $(this).children("span").text();
            var bool = confirm("确定要删除吗？");
            if (bool){
                $.ajax({
                    type: "POST",
                    url: "/expressage/deleteExpressage",
                    data: {
                        expressage_id: expressage_id
                    },
                    success: function () {
                        alert("成功");
                        window.location.reload()
                    },
                    error: function () {
                        alert("系统异常，修改失败");
                    }
                });
            }
        })
    })
});