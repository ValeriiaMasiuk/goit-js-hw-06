// * * * 1

const listEl = document.querySelectorAll('li.item')
console.log(`Number of categoties: ${listEl.length}`)

// * * * 2

const headers = document.querySelectorAll('h2')

let header = []
for (let i = 0; i < headers.length; i += 1) {
    header = headers[i];
    console.log(`${header.textContent}: ${header.nextElementSibling.children.length}`)
}

