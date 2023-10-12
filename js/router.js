function getParam() 
{
    const urlParams = new URLSearchParams(window.location.search);
    const idIvitationCard = urlParams?.get('id') || 'anonymous';
    if(idIvitationCard !== 'anonymous'){
        // Gọi api lấy dữ liệu
        if(true){
            // Lưu local storage
            localStorage.setItem('ivitation_card_id', idIvitationCard);
        }
    }
}

// Gọi get param một lần khi tải trang
getParam();

// Gọi get param mỗi khi URL thay đổi (sử dụng sự kiện hashchange)
window.addEventListener("hashchange", getParam);