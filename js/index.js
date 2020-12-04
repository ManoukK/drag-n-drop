const list_items = document.querySelectorAll('li');
const lists = document.querySelectorAll('ul');

// welke item er gesleept word
let draggedItem = null;


list_items.forEach(item => {

    // event listener voor wanneer het slepen begint
    item.addEventListener('dragstart', function (e) {

        //draggeditem word nu het item wat je gaat slepen
        draggedItem = item;

        // door de set timeout zie je nog wel het item wat je sleept maar
        // niet meer in het lijstje als je dit niet via settimeout doet word het item onzichtbaar ook als je sleept. 
		setTimeout(function () {
			draggedItem.style.display = 'none';
		}, 0)
	});

    // wanneer het slepen eindigd
	item.addEventListener('dragend', function () {
		setTimeout(function () {
            draggedItem.style.display = 'block';
            // dragged item weer op null omdat je niet meer sleept
			draggedItem = null;
		}, 0);
	})

});

lists.forEach(list => {
    
    // hier "tel" je elk frame wanneer je van het ene lijstje naar de ander gaat slepen
    // je wilt de default preventen
    list.addEventListener('dragover', function(e){
        e.preventDefault();
    });

    //dit word geactiveerd zodra je voor het eerst de lijst "entert"
    // zo kan je ervoor zorgen dat het item erin komt.
    list.addEventListener('dragenter', function(e){
        e.preventDefault();

        // als je erover heen hoverd wordt de achtergrond iets donkerder
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
    });

    list.addEventListener('dragleave', function(){
        // zet de kleuren weer normaal voor als je er overheen hovert maar er niet in zet
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    });


    list.addEventListener('drop', function(e){
        this.append(draggedItem);
        // zet de kleuren weer normaal als je het item erin zet
        this.style.backgroundColor = 'rgba(0, 0, 0, 0.4)';
    });
})


// met classes werken ipv javascript styling