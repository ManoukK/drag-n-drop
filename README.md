# Drag and Drop
In deze documentatie ga ik uitleggen hoe je een simpele drag and drop functie kan maken. Gebruik dit vooral als basis want je kan er nog veel kleine functies aan toevoegen. Ik split het op in 3 hoofdlijnen: HTML, CSS en JavaScript. Voordat je begint moet je een project aanmaken met een html, css en javascript file. Zorg ervoor dat alles alvast goed linkt. 

## HTML
#### Stap 1 
Maak in je body een section aan. In de section maak je een aantal ul's aan. Dit worden de lijsten waar je item in en uit kan slepen. Voor deze tutorial heb ik er 3 gebruikt. 

```html
<section>
    <ul></ul>
    <ul></ul>
    <ul></ul>
</section>
```

#### Stap 2
Maak nu een aantal li's in een list. Je kan ervoor kiezen elke lijst 1 item te geven maar om het overzichtelijk te houden raad ik je aan om in de eerste ul 3 of 4 list items te zetten.

```html
<section>
    <ul>
        <li> List item 1</li>
        <li> List item 2</li>
        <li> List item 3</li>
        <li> List item 4</li>
    </ul>
    <ul></ul>
    <ul></ul>
</section>
```

#### Stap 3
Maak de list items sleepbaar door de draggable attribute op te zetten en deze op true te zetten. Met deze attribute kan je vetellen of een element sleepbaar moet zijn of niet. 

```html
<li draggable="true"> List item 1</li>
```

## CSS
#### Stap 1
We gaan van buiten naar binnen toe met de css dus we beginnen bij de section. Eerst zetten we er een display flex op. Ik wil dat de ul's naast elkaar komen te staan. Dankzij de nowrap kan ik ervoor zorgen dat je op een kleiner scherm kan scrollen, dit gaat samen met de overflow-x scroll. Als je align items op start zet groeit je ul mee met de content die erin zit. Dat vind ik zelf mooier dan dat het stretched met de rest van de ul's. 

```css
section {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    align-items: start;
    overflow-x: scroll;
}
```

#### Stap 2 
Nu gaan we de ul's stylen. Eerst zet ik een achtergrond kleur. Dit is voor jezelf ook gemakkelijk om de ul's te onderscheiden. Dan zet ik een margin voor aan de bovenkant en wat padding voor de li's die erin komen te staan. 

Ik zet een minimale width. Als je gebruikt maakt van een vaste width zul je zien dat de ul's toch nog meeschalen als je de responiveness test. Dit wil ik niet en dus zeg ik dat de width minimaal 20rem moet zijn. 

```css
ul {
    background: rgba(0, 0, 0, 0.4);
    margin: 0 1rem;
    padding: 1rem;
    min-width: 20rem;
    border-radius: 5px;
}
```

#### Stap 3
De laatste css stap is om de li's te stylen. Eerst haal ik alle standaard styling van de li's. De width zet ik op 100%. Dit doe ik omdat ik niet zeker weet hoe breed de ul is maar ik wil dat het wel zo breed word al de lu. Dan zet ik er een kleurtje op met wat margin en padding. 

```css
li {
    list-style: none;
    background-color: white;
    width: 100%;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 5px;
}
```

Nu heb je een paar mooie lijstjes met lijst-items. Nu moeten we er alleen nog voor zorgen dat je ze kan slepen, het belangrijkste van de tutorial. 

## JavaScript
#### Stap 1
Eerst moet je ervoor zorgen dat de ul's en de li's in de html aangesproken kunnen worden door javascript. Dit door je doormiddel van een querySelectorAll. Ook zetten we een variable die kijkt naar welk item je "target" om te slepen. De waarde zetten we eerst op null want je sleept nu nog niks, omdat de waarde kan veranderen gebruiken we let. 

```js
const list_items = document.querySelectorAll('li');
const lists = document.querySelectorAll('ul');

let draggedItem = null;
```

#### Stap 2
Nu maak je een foreach voor de list items. Hierin komen 2 event listeners die ik hieronder ga uitleggen. 

```js
list_items.forEach(item => {

}
```

#### Stap 2.1
De eerste event listener luistert wanneer je een item begint met slepen. Als je er ook een console.log inzet zie je ook wanneer deze word getriggert. Zet deze event listener in de foreach die je nu hebt aangemaakt. 

Zodra deze functie word getriggert willen we de draggedItem vervangen voor het item wat gesleept word. 

```js
item.addEventListener('dragstart', function () {
    draggedItem = item;
    
    setTimeout(function () {
        draggedItem.style.display = 'none';
    }, 0)
});
```



# Bronnen 
- https://www.youtube.com/watch?v=tZ45HZAkbLc
- https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

# Voor de toekomst 
- [ ] Lijsten meeschalen met de hoeveelheid content erin
- [ ] Lijsten mooi meeschalen met de hoeveelheid lijsten (+ met veel lijsten overflow x)
- [ ] Mooiere styling 
