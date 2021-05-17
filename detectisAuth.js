let isAuth = localStorage.getItem("isAuthorization");
if (!isAuth) {
    location.href = "./index.html"
}