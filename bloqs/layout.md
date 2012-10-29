# Collusion Server Layout

This is the main layout for the collusion site.

## Wireframe

``` sketch
size 640 480
rect 10 10 620 40 Navigation Bar
rect 10 60 620 60 Header
rect 10 130 200 80 Demo Button
rect 220 130 200 80 Demo Button
rect 440 130 200 80 Demo Button
rect 10 220 200 80 Demo Button
rect 220 220 200 80 Demo Button
rect 440 220 200 80 Demo Button
```

## Template

Template uses nunjucks (client-side?)

``` html
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8" />
	<title>{{title}}</title>
	<link rel="stylesheet" href="/style.css" />
	<!--[if IE]>
		<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<![endif]-->
</head>
<body>
    {% include "navbar.html" %}
    {% include "header.html" %}
    {% for button in buttons %}
        {% include "demobutton.html" %}
    {% endfor %}
    <script src="/script.js"></script>
</body>
</html>
```

## Style

``` less

```

## Script

``` coffee

```