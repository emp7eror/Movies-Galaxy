import decode from 'jwt-decode';

export default class AuthHelperMethods {
  

    loggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = this.getToken(); // Getting token from localstorage
        return !!token && !this.isTokenExpired(token); // handwaiving here
    };

    isTokenExpired = token => {
        try {
            const decoded = decode(token);
            console.log('Date.now() :', Date.now());
            if (decoded.exp < Date.now() / 1000) {
                // Checking if token is expired.
                return true;
            } else return false;
        } catch (err) {
            console.log('expired check failed! Line 42: AuthService.js');
            return false;
        }
    };

    setToken = idToken => {
        // Saves user token to localStorage
        localStorage.setItem('id_token', idToken);
    };

    getToken = () => {
        // Retrieves the user token from localStorage
        const token = localStorage.getItem('id_token'); 
        return token;
    };

    logout = () => {
        // Clear user token and profile data from localStorage
        localStorage.removeItem('id_token');
    };

    getConfirm = () => {
        // Using jwt-decode npm package to decode the token
        let answer = decode(this.getToken());
        console.log('Recieved answer!');
        return answer;
    };

    _checkStatus = response => {
        // raises an error in case response status is not a success
        if (response.status >= 200 && response.status < 300) {
            // Success status lies between 200 to 300
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    };
}
