function register(username,password) {
    const susername =document.getElementById("reg-username").value;
    const spassword = document.getElementById("reg-password").value;;
       // Yosu would need to implement proper password hashing here
    // and handle user registration on the server side
    console.log("User registered:", susername);
    return username===susername && password===spassword;
  }
  
  function login() {
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;
    // You would need to implement proper password checking here
    // and handle user login on the server side
    if (register(username,password)) {
      document.getElementById("registration-form").classList.add("hidden");
      document.getElementById("login-form").classList.add("hidden");
      document.getElementById("secured-content").classList.remove("hidden");
    } else {
      document.getElementById("message").innerHTML = "Invalid username or password";
    }
  }
  