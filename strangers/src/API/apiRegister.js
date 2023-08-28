const COHORT_NAME = "2302-ACC-PT-WEB-PT-A"; // Replace with your cohort name
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export const registerUser = async (username, password) => {
  // Validate input
  if (!username || !password) {
    return {
      success: false,
      error: { message: "Username and password are required." },
    };
  }

  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
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

    // Check for errors in the API response
    if (!response.ok) {
      return {
        success: false,
        error: { message: result.error.message || "Registration failed." },
      };
    }

    return { success: true, user: result.data.user };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      error: { message: "An error occurred during registration." },
    };
  }
};

// Example usage:
const username = "";
const password = "";

registerUser(username, password)
  .then((response) => {
    if (response.success) {
      console.log("Registration successful:", response.user);
    } else {
      console.error("Registration failed:", response.error.message);
    }
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
