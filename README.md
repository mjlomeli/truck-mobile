![FrontPage](render_example.png)
![Creating](render_example.png)
![updating](render_example.png)


# Frontend
https://github.com/mjlomeli/truck-mobile

# Backend
https://github.com/mjlomeli/truck-mobile-backend

# API
https://github.com/mjlomeli/truck-mobile-backend/blob/main/src/main/java/com/backend/truck_mobile/tools/API.java

# CardListing

The card layout renders a component, and has the ability
to flip like a playing card on a click onto another component.
To begin using the card layout follow these instructions.

Decide on your parts. Two sections must be filled out.
1. The front of the card
2. The back of the card


## Either side of the card must be a component

An example below illustrates the general component to be the front and back.

```javascript
// front of card_layout
let ace_hearts = <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg" alt="ace_hearts"/>

// back of card_layout
let ace_spades = <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/703px-01_of_spades_A.svg.png" alt="ace_spades"/>
```

## Rendering
To apply these two into the card layout, assign the props ```front``` and ```back``` to
each respectively.
```javascript
<CardLayout front={ace_hearts} back={ace_spades} />
```

## Finale
Lets put it all together.

```javascript
import CardLayout from "../card_layout/card_layout";

... // inside a render function

let ace_hearts = <img src="https://upload.wikimedia.org/wikipedia/commons/5/57/Playing_card_heart_A.svg"
                      alt="ace_hearts"/>
let ace_spades = <img
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/01_of_spades_A.svg/703px-01_of_spades_A.svg.png"
    alt="ace_spades"/>

<CardLayout front={ace_hearts} back={ace_spades}/>
```

<br>

![CardLayout](render_example.png)

<br>

## Customizing

### Custom onClick
To add your own onClick, pass your onClick method to the props called ```onClick```. It will override the
flip.
```javascript
<CardLayout onClick={() => myOnClickFunction} .../>
```

# GridLayout

To begin using the grid layout follow these instructions.

Decide on your parts. Two sections must be filled out.
1. The gridTemplateAreas
2. The corresponding components


## The gridTemplateAreas

An example below illustrates the general formatting. For making a grid
of various dimensions. A full horizontal category means that a
component fills the entire top area.
```javascript
let areas = [
    ['header_template header_template header_template header_template header_template header_template'],
    ['menu main main main right right'],
    ['menu footer_template footer_template footer_template footer_template footer_template']
]
```

This is the component layout. Its an association of a component linked/mapped
to the grid area.
```javascript
let components = {
    'header': <div>Header</div>,
    'menu': <div>Menu</div>,
    'main': <div>Main</div>,
    'right': <div>Right</div>,
    'footer': <div>Footer</div>
}
```

## Rendering
To render the grid pass in the gridTemplateAreas and components to the props

```javascript
import GridLayout from "../grid_layout/grid_layout";
<GridLayout areas={areas} components={components}/>
```


## Finale

```javascript
import GridLayout from "../grid_layout/grid_layout";

... // inside a render function

let areas = [
    ['header_template header_template header_template header_template header_template header_template'],
    ['menu main main main right right'],
    ['menu footer_template footer_template footer_template footer_template footer_template']
]
let components = {
    'header': <div>Header</div>,
    'menu': <div>Menu</div>,
    'main': <div>Main</div>,
    'right': <div>Right</div>,
    'footer': <div>Footer</div>
}

<GridLayout gridTemplateAreas={areas} components={components}/>
```

<br>

![GridLayout](render_example.png)

<br>

## Customizing
To add styles to the grid or the grid items, a class name to either can be passed
down by defining the props ```grid``` and ```item```.

```javascript
<GridLayout gridClass="grid" itemClass="item" .../>
```

Now in the css file, the container and the grid items can be accessed.
```css
.grid {
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
}

.item {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}
```
<br>

![GridLayout](styled_example.png)


# GridLayout

To begin using the grid layout follow these instructions.

Decide on your parts. Two sections must be filled out.
1. The gridTemplateAreas
2. The corresponding components


## The gridTemplateAreas

An example below illustrates the general formatting. For making a grid
of various dimensions. A full horizontal category means that a
component fills the entire top area.
```javascript
let areas = [
    ['header_template header_template header_template header_template header_template header_template'],
    ['menu main main main right right'],
    ['menu footer_template footer_template footer_template footer_template footer_template']
]
```

This is the component layout. Its an association of a component linked/mapped
to the grid area.
```javascript
let components = {
    'header': <div>Header</div>,
    'menu': <div>Menu</div>,
    'main': <div>Main</div>,
    'right': <div>Right</div>,
    'footer': <div>Footer</div>
}
```

## Rendering
To render the grid pass in the gridTemplateAreas and components to the props

```javascript
import GridLayout from "../grid_layout/grid_layout";
<GridLayout areas={areas} components={components}/>
```


## Finale

```javascript
import GridLayout from "../grid_layout/grid_layout";

... // inside a render function

let areas = [
    ['header_template header_template header_template header_template header_template header_template'],
    ['menu main main main right right'],
    ['menu footer_template footer_template footer_template footer_template footer_template']
]
let components = {
    'header': <div>Header</div>,
    'menu': <div>Menu</div>,
    'main': <div>Main</div>,
    'right': <div>Right</div>,
    'footer': <div>Footer</div>
}

<GridLayout gridTemplateAreas={areas} components={components}/>
```

<br>

![GridLayout](render_example.png)

<br>

## Customizing
To add styles to the grid or the grid items, a class name to either can be passed
down by defining the props ```grid``` and ```item```.

```javascript
<GridLayout className="grid" classElements="elements" .../>
```

Now in the css file, the container and the grid items can be accessed.
```css
.grid {
    grid-gap: 10px;
    background-color: #2196F3;
    padding: 10px;
}

.elements {
    background-color: rgba(255, 255, 255, 0.8);
    text-align: center;
    padding: 20px 0;
    font-size: 30px;
}
```
<br>

![GridLayout](styled_example.png)


# Navbar

The navbar layout renders a component, and has the ability
to assemble a navbar link header.

Decide on your parts. Two distinct parts must be filled out.
1. The navigation bar belt.
2. The drop down content.

## Setting up the data

This is an example of navbar to dropdown relations.
```javascript
const components = [
    {header: "Home", link: "/home"},
    {header: "Clothing & Shoes", link: "#", components: <ul>
            <li>link 1</li>
            <li>link 2</li>
            <li>link 3</li>
        </ul>
    },
    {header: "Gifts & Gift Cards", components: {
            "link 1": "/nav_bar",
            "link 2": "/nav_bar",
            "#": <CardListing permit={"16MFF-0010"}/>
        }
    }
]
```

## Rendering
To apply this navbar assign the prop ```navEntries```.

```javascript
import NavbarLayout from "./navbar";

<NavbarLayout components={components}/>
```

## Finale
Lets put it all together.

```javascript
import NavbarLayout from "./navbar";

... // inside a render function

const components = [
        {header: "Home", link: "/home"},
        {header: "Clothing & Shoes", link: "#", components: <ul>
                <li>link 1</li>
                <li>link 2</li>
                <li>link 3</li>
            </ul>
        },
        {header: "Gifts & Gift Cards", components: {
                "link 1": "/nav_bar",
                "link 2": "/nav_bar",
                "#": <CardListing permit={"16MFF-0010"}/>
            }
        }
    ]
<NavbarLayout components={components}/>
```

<br>

![NavbarLayout](render_example.png)
