const input = document.querySelector('input')
const list = document.querySelector('table')
const sort = document.querySelector('span')
const menu = []

const addRow = () => {
    const newMenu = input.value
    menu.push(newMenu)
    addTableRow(newMenu)
    // const row = list.insertRow()
    // const col1 = row.insertCell(0)
    // const col2 = row.insertCell(1)

    // col1.innerHTML = newMenu
    //col2.innerHTML = '<a href="#" onClick="deleteRow(\'' +  newMenu  +  '\')">X</a>' 
    input.value = ''
}

input.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        addRow()
    }
})

const deleteRow = (quitMenu) => {
    const index = menu.indexOf(quitMenu)
    menu.splice(index, 1)
    list.deleteRow(index)
}

const addTableRow = (text) => {
    const row = list.insertRow()
    const col1 = row.insertCell(0)
    const col2 = row.insertCell(1)

    col1.innerHTML = text
    col2.innerHTML = '<a href="#" onClick="deleteRow(\'' + text + '\')">X</a>'
}

sort.addEventListener('click', () => {
    menu.sort()
    for (let i = menu.length - 1; i >= 0; i--) {
        list.deleteRow(i)
    }

    for (let i = 0; i < menu.length; i++) {
        addTableRow(menu[i])
    }
})