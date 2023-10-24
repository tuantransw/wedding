var back = document.getElementById("back");

back.onclick = function () {
    // ivitationCardModal.style.display = "block";
    ivitationCardModal.classList.remove("is-active");
}

document.querySelector(".click_thamgia").addEventListener("click", function (event) {
    event.preventDefault();
    var guestId = localStorage.getItem('guest_id');
    if (guestId !== null && guestId !== undefined && guestId !== "") {
        document.querySelector("#btnSubmit").textContent = "Cập nhất";
    } else {
        document.querySelector("#btnSubmit").textContent = "Gửi";
    }

    document.querySelector("#cm-join").classList.add("_thamgia_active");
    document.querySelector("#btnMusic").style.opacity = 0;
    document.querySelector("#btnMusic").style.visibility = "hidden";
});

document.querySelector("._thamgia .close").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#cm-join").classList.remove("_thamgia_active");
    document.querySelector("#btnMusic").style.opacity = 1;
    document.querySelector("#btnMusic").style.visibility = "visible";
});

document.querySelector(".chucmung_toggle").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.add("_chucmung_active");
    document.querySelector("#btnMusic").style.opacity = 0;
    document.querySelector("#btnMusic").style.visibility = "hidden";
});

document.querySelector("._chucmung .close").addEventListener("click", function (event) {
    event.preventDefault();
    document.querySelector("#cm-groom").classList.remove("_chucmung_active");
    document.querySelector("#btnMusic").style.opacity = 1;
    document.querySelector("#btnMusic").style.visibility = "visible";
    ivitationCardModal.classList.add("is-active");
});


function submitForm() {
    // Lấy giá trị từ trường nhập
    var name = document.getElementById("name").value;
    var numberOfPeople = document.getElementById("numberOfPeople").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Lấy phần tử HTML để hiển thị thông báo lỗi
    var message = document.getElementById("messageSubmitForm");
    if (name === "") {
        message.textContent = "Vui lòng nhập tên trước khi gửi.";
        return; // Ngừng xử lý tiếp và hiển thị thông báo lỗi
    }
    if (phoneNumber === "") {
        message.textContent = "Vui lòng nhập số điện thoại trước khi gửi.";
        return; // Ngừng xử lý tiếp và hiển thị thông báo lỗi
    }
    else {
        var phoneRegex = /^(0|\+84)(\s|\.)?((3[2-9])|(5[689])|(7[06-9])|(8[1-689])|(9[0-46-9]))(\d)(\s|\.)?(\d{3})(\s|\.)?(\d{3})$/;
        if (!phoneRegex.test(phoneNumber)) {
            message.textContent = "Số điện thoại không hợp lệ. Vui lòng nhập lại.";
            return; // Ngừng xử lý tiếp và hiển thị thông báo lỗi
        }
    }

    var guestId = localStorage.getItem('guest_id');

    var data = {
        id: guestId,
        name: name,
        phoneNumber: phoneNumber,
        numberOfPeople: numberOfPeople
    };

    var apiUrl = "";
    if(guestId !== null && guestId !== undefined && guestId !== ""){
        apiUrl = "https://api.tuanngoc.online/api/guests/update"
        fetch(apiUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error("Có lỗi xảy ra khi gửi. Vui lòng thử lại.");
                }
                message.textContent = "Cập nhật thông tin thành công.";
            }
            )
            .catch(error => {
                // Xử lý lỗi (nếu có)
                console.error("Lỗi khi gọi API: " + error);
                message.textContent = "Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại.";
            });
    }
    else {
        apiUrl = "https://api.tuanngoc.online/api/guests";
        // Gửi POST request bằng Fetch API
    fetch(apiUrl, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("Có lỗi xảy ra khi gửi. Vui lòng thử lại.");
            }
            return response.json()
        }
        )
        .then(data => {
            // Xử lý dữ liệu từ API ở đây
            if (data !== null && data !== undefined && data !== "") {
                localStorage.setItem('guest_id', data);
                message.textContent = "Gửi thông tin thành công, cảm ơn bạn đã tham gia cùng gia đình chúng tôi.";
                document.querySelector("#btnSubmit").textContent = "Cập nhất";
            } else {
                message.textContent = "Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại.";
            }
            console.log(data);
        })
        .catch(error => {
            // Xử lý lỗi (nếu có)
            console.error("Lỗi khi gọi API: " + error);
            message.textContent = "Có lỗi xảy ra trong quá trình gửi. Vui lòng thử lại.";
        });
    }

    
}