// apiLogin.js

const COHORT_NAME = "2302-ACC-PT-WEB-PT-A";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const loginUser = async (username, password) => {
  if (!username || !password) {
    return {
      success: false,
      error: { message: "Username and password are required." },
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password,
        },
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: { message: result.error.message || "Login failed." },
      };
    }

    return { success: true, user: result.data.user, token: result.data.token };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: { message: "An error occurred during login." },
    };
  }
};
