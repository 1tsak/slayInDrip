document.addEventListener('DOMContentLoaded', function () {
    const isLoggedIn = checkIfUserIsLoggedIn();

    if (!isLoggedIn) {
        window.location.href = 'login.html';
    }
});

function checkIfUserIsLoggedIn() {
    const usersJSON = localStorage.getItem('users');
    if (usersJSON) {
        const users = JSON.parse(usersJSON);
        
        for (const user of users) {
            if (user.loggedIn) {
                return true; 
            }
        }
    }
    return false;
}
