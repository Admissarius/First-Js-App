export function  getAuthForm() {
    return `
        <form class="mui-form" id="auth-form">
            <div class="mui-textfield mui-textfield--float-label">
                <input type="email" id="email" required>
                <label for="email">Email</label>
            </div>
            <div class="mui-textfield mui-textfield--float-label">
                <input type="password" id="password" required>
                <label for="email">Password</label>
            </div>
            <button
                type="submit"
                class="mui-btn mui-btn--raised mui-btn--primary"              
            >              
                Submit
            </button>
    </form>

    `
}

export function authWithEmailAndPasword(email, password) {
    const apiKey = 'AIzaSyCWI_2wwiw6koBsDbo4PFADorD8PTFrt6I'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${apiKey}`, {
        method: 'POST',
        body: JSON.stringify({
            email, password,
            returnSecureToken: true
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(responce => responce.json())
    .then(data => data.idToken)

}