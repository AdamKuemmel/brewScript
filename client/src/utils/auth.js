<<<<<<< HEAD
// need to get the user's info from their jwt
import decode from "jwt-decode";

// create a new class to instantiate for a user
class AuthService {
  // retrieve the user's token from localStorage
  getToken() {
    return localStorage.getItem("id_token");
  }
  // check if the token is expired
  isTokenExpired(token) {
    try {
      const decoded = decode(token);
      if (decoded.exp < Date.now() / 1000) {
        return true;
      } else return false;
    } catch (err) {
      return false;
    }
  }
  // get the current user's profile from the token above
  getUser() {
    return decode(this.getToken());
  }
  // Save the user token upon login
  login(idToken) {
    localStorage.setItem("id_token", idToken);
    // Update this location to the user landing url
    window.location.assign("/land");
  }

  // Check if user is currently logged in
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token) ? true : false;
  }

  // Destroy the user token upon logout
  logout() {
    localStorage.removeItem("id_token");
    window.location.assign("/");
=======
import decode from 'jwt-decode';

class AuthService {
  getProfile() {
    return decode(this.getToken());
  }

  loggedIn() {
    const token = this.getToken();
    return token && !this.isTokenExpired(token) ? true : false;
  }

  isTokenExpired(token) {
    const decoded = decode(token);
    if (decoded.exp < Date.now() / 1000) {
      localStorage.removeItem('id_token');
      return true;
    }
    return false;
  }

  getToken() {
    return localStorage.getItem('id_token');
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  logout() {
    localStorage.removeItem('id_token');
    window.location.reload();
>>>>>>> main
  }
}

export default new AuthService();
