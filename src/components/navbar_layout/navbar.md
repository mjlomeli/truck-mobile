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
