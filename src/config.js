
export const config = {
    facebookAppId: "526589592823122",
    facebookAppSecret: "6e4f98f3269b3b724b48333bab5be28b",
    firebase : {
        apiKey: "AIzaSyBmkOgunQIIfq7uxM__n6gBlVQckbLfBpY",
        authDomain: "shared-movie-8fea5.firebaseapp.com",
        projectId: "shared-movie-8fea5",
        storageBucket: "shared-movie-8fea5.appspot.com",
        messagingSenderId: "726942981739",
        appId: "1:726942981739:web:e3cb3358d2a844303edb2e",
        measurementId: "G-XN05VG1M92"
    }
}
// https://shared-movie-8fea5.firebaseapp.com/__/auth/handler

// B1: Tạo project firebase
// B2: chọn Tab authentication (Add Facebook provider) (apikey, secretKey)

// B3: Tạo ứng dụng từ facebook developer
// B4: vào cài đặt => thông tin cơ bản (apikey, secretKey)\
// B5: Cung cấp apikey, scretkey cho firebase

// B6: tại trang Facebook developer => tab sản phẩm => click vào tab đăng nhập fb
// B7: copy redirect URL từ firebase => dán vào ô URI chuyển hướng OAuth hợp lệ
