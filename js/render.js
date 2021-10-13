function render() {
    // list nameS
    if (lists.length > 0) {
        document.getElementById('current-list-name').innerText = currentList.name;
        // lists
        let listHtml = '<ul class="list-group">';
        for (let i = 0; i < lists.length; i++) {
            listHtml += `<li class="list-group-item" onclick="changeCurrentList(${i})">${lists[i].name}</li>`;
        }
        listHtml += '</ul>';
        document.getElementById('lists').innerHTML = listHtml;
        //list items
        let listItemsHTML = '<ul class="list-group todos">';
        for (let i = 0; i < currentList.toDos.length; i++) {
            if (currentList.toDos[i].completed === true) {
                listItemsHTML += `
        <li class="list-group-item listItem">
                            <div>
                                <input id="flexCheckChecked" class="form-check-input me-1" type="checkbox" value="true" aria-label="..." onclick="unmarkComplete(${i})"checked>
                                ${currentList.toDos[i].description}
                            </div>    
                            </li>
        `;
            }
            else {
                listItemsHTML += `
        <li class="list-group-item listItem">
                            <div>
                                <input class="form-check-input me-1" type="checkbox" value="false" aria-label="..." onclick="markComplete(${i})">
                                ${currentList.toDos[i].description}
                            </div>    
                            </li>
        `;
            };
        }
        listItemsHTML += `</ul>`
        document.getElementById('listItems').innerHTML = listItemsHTML;
    }
}