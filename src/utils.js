export function isValid(value){
    return value.length >= 10
}

export function createModal(title, content) {
    const modal = document.createElement('div')
    modal.classList.add('modal')

    mui.overlay('on', modal)
}
