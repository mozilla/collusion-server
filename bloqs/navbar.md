# Collusion Server Navigation Bar

This provides the primary navigation for the site

## Wireframe

``` sketch
size 640 40
ltext 10 10 Mozilla Collusion
rect 550 10 80 20 Help
rect 460 10 80 20 API
rect 370 10 80 20 About
rect 280 10 80 20 Demos
```

## Template

Template uses nunjucks (client-side?)

``` html
<nav>
<span class="title">{{title}}</span>
<button class="navbutton help">Help</button>
<button class="navbutton api">API</button>
<button class="navbutton about">About</button>
<button class="navbutton demos">Demos</button>
</nav>
```

## Style

``` less

```

## Script

``` coffee

```