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
Maak de list items sleepbaar door de draggable attribute op te zetten en deze op true te zetten. HIER VERDER EN VERTELLEN OVER DRAGGABLE

# Bronnen 
- https://www.youtube.com/watch?v=tZ45HZAkbLc
- https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API

# Voor de toekomst 
- [ ] Lijsten meeschalen met de hoeveelheid content erin
- [ ] Lijsten mooi meeschalen met de hoeveelheid lijsten (+ met veel lijsten overflow x)
- [ ] Mooiere styling 
