let num_cards = 3;

function caricaCards() {
    let date_titles = document.getElementsByClassName("day-title");

    for (let i = 0; i < date_titles.length; i++) {
        let date_title = date_titles.item(i);
        date_title.textContent = date_title.textContent.toUpperCase();
    }
}

function downloadDalServer(nomeFile) {
    let element = document.createElement('a');
    
    element.setAttribute('href', 'rel/' + nomeFile);

    element.setAttribute('download', nomeFile);
    
    element.style.display = 'none';
    document.body.appendChild(element);
    
    element.click();
    document.body.removeChild(element);
}
