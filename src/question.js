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
          question.id = responce.name
          return question
        })
        .then(addToLocalStorage)
        .then(Question.renderList)
    }

    static renderList() {
        const questions = getQuestionsFromLocalStorage()

        const html = questions.length
        ? questions.map(toCard).join('') :
        '<div class="mui--text-headline">No questions yet</div>'

        const list = document.getElementById('list')

        list.innerHTML = html
    }
}

function addToLocalStorage(question) {
    const all = getQuestionsFromLocalStorage()
    all.push(question)
    localStorage.setItem('questions', JSON.stringify(all))
}

function getQuestionsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question) {
    return `
    <div class="mui--text-black-54">
        ${new Date(question.date).toLocaleDateString()}
        ${new Date(question.date).toLocaleTimeString()}
    </div>
    <div>${question.text}</div>
    <br>`
}