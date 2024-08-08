import axios from "axios";


export const signupHandler = async (firstName, lastName, phoneNumber, email, password) => {
  try {
    const response = await axios.post("http://localhost:8080/addNewUser", {
      userFirstName: firstName,
      userLastName: lastName,
      userPhoneNumber: phoneNumber,
      userEmail: email,
      userPassword: password
    });

    if (response.status === 201) {
      localStorage.setItem('UserData', JSON.stringify(response.data));
      return true
    } else {
      console.log(response.data);
      return false
    }
  } catch (error) {
    console.error('Signup failed:', error.message);
    return false
  }
};
