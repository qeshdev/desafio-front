export const goToLogin = (navigate) => {
    navigate("/");
}

export const goBack = (navigate) => {
    navigate(-1)
}

export const goToSignUpUser = (navigate) => {
    navigate("/signup/user");
}

export const goToSignUpAdress = (navigate) => {
    navigate("/signup/adress");
}

export const goToFeed = (navigate) => {
    navigate("/feed");
}

export const goToRestaurantDetails = (navigate, id) => {
    navigate(`/restaurant/${id}`);
}

export const goToCart = (navigate) => {
    navigate("/cart");
}

export const goToProfile = (navigate) => {
    navigate("/profile");
}

export const goToProfileEditUser = (navigate) => {
    navigate("/profile/edit/user");
}

export const goToProfileEditAdress = (navigate) => {
    navigate("/profile/edit/adress");
}