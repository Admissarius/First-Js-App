export class Question {
    static create(question) {
        return fetch('https://podcast-js-app-3d30c-default-rtdb.europe-west1.firebasedatabase.app/questions.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(responce => responce.json())
        .then(responce => {
            console.log(responce);
        })
    }
}