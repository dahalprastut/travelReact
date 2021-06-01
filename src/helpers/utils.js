export const getCurrentUser = () => {
  let user = null;
  try {
    user =
      localStorage.getItem("current_user") != null
        ? JSON.parse(
            localStorage.getItem("current_user")
          )
        : null;
  } catch (error) {
    console.log("local user error", error);
    user = null;
  }

  return user;
};

export const setCurrentUser = user => {
  try {
    if (user) {
      localStorage.setItem(
        "current_user",
        JSON.stringify(user)
      );
    } else {
      localStorage.removeItem("current_user");
    }
  } catch (error) {
    console.log("local user error", error);
  }
};
