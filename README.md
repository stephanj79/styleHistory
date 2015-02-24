
# stylehistory.js
> Erstellt einen Chronologischen Ablauf von Ereignissen
> Creates a chronological sequence of events

## Getting Started
This plugin is developed with Jquery V.`jquery-1.11.2`
> Test it with younger Versions of jquery!!!

Add to your HTML
```html
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
```

#How to use:
```html
<head>
<script>
        $(document).ready(function(){
            $('.style-history').stylehistory({
                chronologically:true,reverse:false,itemCount:0,marker:'arrow'
            });
        });
</script>
</head>

<body>
<div class="style-history">
    <div class="style-history-head">
        <h1>Über 15 Jahre Erfahrung in der Branche</h1>

        <h1>Stephan Jäger</h1>

        <h1>Historie:</h1>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">1979</div>
        <div class="style-history-item-month">07</div>
        <div class="style-history-item-text">Geburt</div>
        <div class="style-history-item-text">Krankenhaus verlassen</div>
        <div class="style-history-item-month">12</div>
        <div class="style-history-item-text">Erstes Weihnachten</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">1986</div>
        <div class="style-history-item-month">07</div>
        <div class="style-history-item-text">Schulbeginn</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">1990</div>
        <div class="style-history-item-text">Besuch des Otto-Hahn-Gymnasium
        </div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">1997</div>
        <div class="style-history-item-text">Ausbildung zum Kommunikationselektroniker
        </div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2001</div>
        <div class="style-history-item-month">07</div>
        <div class="style-history-item-text">Abschluß der Berufausbildung</div>
        <div class="style-history-item-month">08</div>
        <div class="style-history-item-text">Angestellt bei Fa. E.I.M.G. in Duisburg</div>
        <div class="style-history-item-month">09</div>
        <div class="style-history-item-text">Angestellt bei Fa. SPS in Oberhausen</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2002</div>
        <div class="style-history-item-month">01</div>
        <div class="style-history-item-text">Angestellt bei der Fa. Protime</div>
        <div class="style-history-item-month">04</div>
        <div class="style-history-item-text">Unterbrechung des Arbeitsvertrags Wehrdienst in Wesel, bei der 2.RakArtBat 150</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2003</div>
        <div class="style-history-item-month">01</div>
        <div class="style-history-item-text">Angestellt bei der Fa. Protime</div>
        <div class="style-history-item-month">04</div>
        <div class="style-history-item-text">Angestellt bei der Fa. Subitec in Duisburg</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2006</div>
        <div class="style-history-item-month">12</div>
        <div class="style-history-item-text">Angestellt bei Fa. MTC Medizintechnik in Dorsten</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2008</div>
        <div class="style-history-item-month">05</div>
        <div class="style-history-item-text">Projektleiter/Software Entwickler Bei Rodata GmbH / AutoID</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2011</div>
        <div class="style-history-item-month">07</div>
        <div class="style-history-item-text">Anwendungssoftware Entwickler Bei Tricon Consulting</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2012</div>
        <div class="style-history-item-month">08</div>
        <div class="style-history-item-text">Webdesign Bei Publitec Gmbh</div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2013</div>
        <div class="style-history-item-month">05</div>
        <div class="style-history-item-text">Anwendungssoftware Entwickler Bei Pohl Steuerbüro
        </div>
    </div>
    <div class="style-history-item">
        <div class="style-history-item-year">2014</div>
        <div class="style-history-item-month">11</div>
        <div class="style-history-item-text">System-/Anwendungssoftware-Entwickler Stephan Jäger
        </div>
    </div>
</div>
</body>
```

## The "exporter" task

### Overview
In your project's Gruntfile, add a section named `exporter` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  exporter: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.silent
Type: `Boolean`
Default value: `true`

If 'false' output in console

#### options.banner
Type: `String`
Default value: ``

Banner for your files


#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing.html` file has the content-tag the content of this tags will be written to file

```js
grunt.initConfig({
     exporter: {
       dist: {
         options: {
           silent: true,
           banner: "/*\n * Export from\n * grunt-exporter\n * https://www.npmjs.com/package/grunt-exporter\n * https://github.com/stephanj79/grunt-exporter\n */\n\n"
         },
         files: {
           src: ['test/fixtures/testing.html']
         }
       }
     }
});
```

#### Custom Options
Script search in 'test/fixtures/testing.html' and in all but only *.html and *.js files in 'test/expected/'
You can use css file or jade as well...


```js
grunt.initConfig({
  exporter: {
  dist:{
      options: {
        silent: false,
        banner: "here my text..."
    },
    files: {
      src: ['test/fixtures/testing.html', 'test/expected/**/*.html', '/test/expected/**/*.js']
    }
  },
});
```


### Usage in File
```html
Starttag    X=type   path/to/outputfile.X
<!--(start-X-export includes/ScrollTop.less)-->
  //Content here will be copy
<!--(end-X-export)-->
^Endtag
```
**rename X with type like html,jade,js,css,scss,sass,less**


### Usage Examples
master.html
```html

<script>
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<!--(end-js-export)-->
</script>

<header class="site-footer">
  <!-- what ever... -->
</header>

<!--(start-less-export includes/ScrollTop.less)-->
.header {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
<!--(end-less-export)-->


<style>
/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
/*<!--(end-css-export)-->*/

<!--(start-less-export includes/footer.less)-->
.site-footer {
  background: @MainColorBackground;
  min-height: @footerHoehe;
  a:link, a:visited {
    color: @MainColorLink !important;
  }
}
<!--(end-less-export)-->
</style>

<!--(start-html-export src/html/templates/footer.html)-->
<footer class="test">
    <a href="huiu" si="ujio">a</a>
<footer>
<!--(end-html-export)-->


```

Create files:
* include/test.js
```js
alert("TEST");
```
* include/ScrollTop.less
```css
.scroll-top {
  position: fixed;
  a:link, a:visited,a:hover {
    text-decoration: none;
    background: @MainColorLink;
    i{
      color:@MainColorBackground;
    }
  }
}
```
* include/test.css
```css
.site-footer-css {
  min-height: 180px;
}
```

**In js files you can use "//" or in css "/*" if you want!**
```js
//<!--(start-js-export includes/test.js)-->
alert("TEST");
//<!--(end-js-export)-->
```
```css
/*<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
/*<!--(end-css-export)-->*/
```

## Release History
* 1.0.0 **Final Release**
  ...
  ...
  ...
* **Start Project**


## Tips and Tricks
use in html files
```html
<script>
<!--(start-js-export includes/test.js)-->
alert("TEST");
<!--(end-js-export)-->
</script>

<style>
<!--(start-css-export includes/test.css)-->*/
.site-footer-css {
  min-height: 180px;
}
<!--(end-css-export)-->*/
</style>
```

## INFO
* **If there a 2 files export to one the first export will be override!!!**
* **If there a 2 export tags in one file with the same destination it will be merged!!!**