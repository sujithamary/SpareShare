import axios from "axios";

export const loginHandler = async (email, password) => {
    try {
      const response = await axios.post("http://localhost:8080/login", {
        userEmail: email,
        userPassword: password
      });
  
      if (response.status === 200) {
        localStorage.setItem('UserData', JSON.stringify(response.data));
        console.log('success')
       return true
      } 
      else {
        console.log(response.data);
        return false
      }
    } catch (error) {
        console.log(error)

      console.error('Signup failed:', error.message);
      return false
    }
  };