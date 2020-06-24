function login() {
    document.getElementsByClassName("login")[0].style.display = "block";
    document.getElementById("denglu").style.display = "none";
    document.getElementById("logo-pic").style.display = "none";
}

function pass() {
    document.getElementsByClassName("pass")[0].style.display = "block";
    document.getElementById("zhuce").style.display = "none";
    document.getElementById("logo-pic").style.display = "none";
}

function chang_head() {
    document.getElementsByClassName("chang")[0].style.display = "block";
    document.getElementById("backcolor").style.display = "none";
    document.getElementById("headpic").style.display = "block";
}

function chang_back() {
    document.getElementsByClassName("chang")[0].style.display = "block";
    document.getElementById("headpic").style.display = "none";
    document.getElementById("backcolor").style.display = "block";
}

function close_login() {
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementById("denglu").style.display = "block";
    document.getElementById("logo-pic").style.display = "block";
}

function close_pass() {
    document.getElementsByClassName("pass")[0].style.display = "none";
    document.getElementById("zhuce").style.display = "block";
    document.getElementById("logo-pic").style.display = "block";
}

function close_big() {
    document.getElementsByClassName("big")[0].style.display = "none";
}

function close_chang() {
    document.getElementsByClassName("chang")[0].style.display = "none";
    var _this = $("#finalImg").attr("src");
    if (_this != "") {
        document.getElementById("headsc").src = _this;
    }

}

function topass() {
    document.getElementsByClassName("pass")[0].style.display = "block";
    document.getElementsByClassName("login")[0].style.display = "none";
}

function tologin() {
    document.getElementsByClassName("pass")[0].style.display = "none";
    document.getElementsByClassName("login")[0].style.display = "block";
}

function input_user() {
    document.getElementById("user2").style.display = "none";
    document.getElementById("user").getElementsByTagName("input")[0].placeholder = "请输入用户名";
}

function input_password() {
    document.getElementsByClassName("key")[0].style.display = "none";
    document.getElementsByClassName("eye")[0].style.display = "block";
    document.getElementById("password").getElementsByTagName("input")[0].placeholder = "请输入密码";
}

function checkpassword() {
    if (document.getElementById("password").getElementsByTagName("input")[0].type == "password") {
        document.getElementsByClassName("eye")[0].src = "img/icon/eye2.png";
        document.getElementById("password").getElementsByTagName("input")[0].type = "text";
    } else {
        document.getElementsByClassName("eye")[0].src = "img/icon/eye.png";
        document.getElementById("password").getElementsByTagName("input")[0].type = "password";
    }
}

function input_phone() {
    document.getElementById("phonenum").getElementsByTagName("img")[0].style.display = "none";
    document.getElementById("phone").placeholder = "请输入手机号";
}

function input_mail() {
    document.getElementById("email").getElementsByTagName("img")[0].style.display = "none";
    document.getElementById("email").getElementsByTagName("input")[0].placeholder = "请输入邮箱";
}

function input_heart() {
    document.getElementById("heart").getElementsByTagName("img")[0].style.display = "none";
    document.getElementById("heart").getElementsByTagName("input")[0].placeholder = "请输入昵称";
}

function input_password2() {
    document.getElementsByClassName("key")[1].style.display = "none";
    document.getElementsByClassName("eye")[1].style.display = "block";
    document.getElementById("password2").getElementsByTagName("input")[0].placeholder = "请输入密码(不得小于6位)";
}

function checkpassword2() {
    if (document.getElementById("password2").getElementsByTagName("input")[0].type == "password") {
        document.getElementsByClassName("eye")[1].src = "img/icon/eye2.png";
        document.getElementById("password2").getElementsByTagName("input")[0].type = "text";
    } else {
        document.getElementsByClassName("eye")[1].src = "img/icon/eye.png";
        document.getElementById("password2").getElementsByTagName("input")[0].type = "password";
    }
}

function input_repassword() {
    document.getElementsByClassName("key")[2].style.display = "none";
    document.getElementsByClassName("eye")[2].style.display = "block";
    document.getElementById("repassword").getElementsByTagName("input")[0].placeholder = "重复输入密码";
}

function recheckpassword() {
    if (document.getElementById("repassword").getElementsByTagName("input")[0].type == "password") {
        document.getElementsByClassName("eye")[2].src = "img/icon/eye2.png";
        document.getElementById("repassword").getElementsByTagName("input")[0].type = "text";
    } else {
        document.getElementsByClassName("eye")[2].src = "img/icon/eye.png";
        document.getElementById("repassword").getElementsByTagName("input")[0].type = "password";
    }
}

$(function () {
    $("#denglu2").click(function () {
        var user = $("#user input").val();
        var pass = $("#password input").val();
        if (user == "" || pass == "") {
            alert("用户名或密码不能为空");
        }
    })
    $("#user input").keypress(function (e) {
        if (e.which == 13) {
            input_password();
            $("#password input").focus()
        }
    })
    $("#password input").keypress(function (e) {
        if (e.which == 13) {
            $("#denglu2").focus()
        }
    })
})

$(function () {
    var mail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    $("#zhuce2").click(function () {
        var phone = $("#phone").val();
        var code = $("#phone2").val();
        var email = $("#email input").val();
        var heart = $("#heart input").val();
        var pass = $("#password2 input").val();
        var repass = $("#repassword input").val();
        if (phone == "") {
            alert("手机号不能为空");
        } else if (code == "") {
            alert("验证码不能为空");
        } else if (email == "") {
            alert("邮箱不能为空");
        } else if (!mail.test(email)) {
            alert("请输入有效的邮箱");
            return false;
        } else if (heart == "") {
            alert("昵称不能为空");
        } else if (pass == "" || pass.length < 6) {
            alert("密码需不小于6位");
        } else if (repass != pass) {
            alert("请重复输入正确的密码");
        }
    })
    $("#phone").keypress(function (e) {
        if (e.which == 13) {
            sendMessage1();
            $("#phone2").focus()
        }
    })
    $("#phone2").keypress(function (e) {
        if (e.which == 13) {
            input_mail();
            $("#email input").focus()
        }
    })
    $("#email input").keypress(function (e) {
        if (e.which == 13) {
            input_heart();
            $("#heart input").focus()
        }
    })
    $("#heart input").keypress(function (e) {
        if (e.which == 13) {
            input_password2();
            $("#password2 input").focus()
        }
    })
    $("#password2 input").keypress(function (e) {
        if (e.which == 13) {
            input_repassword();
            $("#repassword input").focus()
        }
    })
    $("#repassword input").keypress(function (e) {
        if (e.which == 13) {
            $("#zhuce2").focus()
        }
    })
})

$(".pic").click(function () {
    var _this = $(this).attr("src");
    document.getElementsByClassName("big")[0].style.display = "block";
    document.getElementById("bigpic").src = _this;

})
$(function () {
    var mail = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
    $("#save").click(function () {
        var email = $("#mailchange input").val();
        if (!mail.test(email) && email != "") {
            alert("请输入有效的邮箱");
            return false;
        }
        var nick = $(".nickname input").val();
        var pick = document.getElementById("nickname");
        var a = nick.length - 1
        if (nick.length >= 6) {
            nick = nick[0] + nick[1] + "…" + nick[a]
        }
        pick.innerHTML = nick;
    })
})
$(".yuan").hover(function () {
    $(".yuan div").css("display", "block");
}, function () {
    $(".yuan div").css("display", "none");
})
$(".trashbin").click(function () {
    var _this = $(this).parent();

    _this.css("display", "none");
})
$(".heart").click(function () {
    var _this = $(this).attr("src");
    var gray = "./img/icon/heart-gray.gif";
    var red = "./img/icon/heart-red.gif"
    if (_this == gray) {
        $(this).attr("src", red);
    } else {
        $(this).attr("src", gray);
    }
})
$(".demo").hover(function () {
    $(this).css("z-index", "999");
}, function () {
    $(this).css("z-index", "0");
})
$("#messager1").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#messager2").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#messager3").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#messager4").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#messager5").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#messager6").hover(function () {
    $(this).find("p").css("display", "block")
}, function () {
    $(this).find("p").css("display", "none")
})
$("#changg").click(function () {
    $("#messager1").css("background-image", "url(../img/head/6.jpg)");
    $("#messager2").css("background-image", "url(../img/head/5.jpg)");
    $("#messager3").css("background-image", "url(../img/head/4.jpg)");
    $("#messager4").css("background-image", "url(../img/head/3.jpg)");
    $("#messager5").css("background-image", "url(../img/head/2.jpg)");
    $("#messager6").css("background-image", "url(../img/head/1.jpg)");
})
$("#huoqu").click(function () {
    if ($("#month option:selected").text() == "03月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("白羊座");
        }
    }
    if ($("#month option:selected").text() == "04月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("白羊座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("金牛座");
        }
    }
    if ($("#month option:selected").text() == "05月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("金牛座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("双子座");
        }
    }
    if ($("#month option:selected").text() == "06月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("双子座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("巨蟹座");
        }
    }
    if ($("#month option:selected").text() == "07月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("巨蟹座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("狮子座");
        }
    }
    if ($("#month option:selected").text() == "08月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("狮子座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("处女座");
        }
    }
    if ($("#month option:selected").text() == "09月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("处女座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("天秤座");
        }
    }
    if ($("#month option:selected").text() == "10月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("天秤座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("天蝎座");
        }
    }
    if ($("#month option:selected").text() == "11月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("天蝎座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("射手座");
        }
    }
    if ($("#month option:selected").text() == "12月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("射手座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("摩羯座");
        }
    }
    if ($("#month option:selected").text() == "01月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("摩羯座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("水瓶座");
        }
    }
    if ($("#month option:selected").text() == "02月") {
        if ($("#days option:selected").text() == "01日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "02日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "03日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "04日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "05日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "06日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "07日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "08日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "09日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "10日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "11日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "12日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "13日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "14日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "15日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "16日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "17日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "18日") {
            $("#xingx").html("水瓶座");
        }
        if ($("#days option:selected").text() == "19日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "20日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "21日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "22日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "23日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "24日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "25日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "26日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "27日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "28日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "29日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "30日") {
            $("#xingx").html("双鱼座");
        }
        if ($("#days option:selected").text() == "31日") {
            $("#xingx").html("双鱼座");
        }
    }
})
$("#chakan").click(function(){
    if($("#ques option:selected").text() == "本网站的基本概况")
    {
        $("#answ1").css("display","block");
        $("#answ2").css("display","none");
    }
else if($("#ques option:selected").text() == "附近是什么意思"){
    $("#answ1").css("display","none");
    $("#answ2").css("display","block");
}
})