
# stylehistory.js
- Creates a chronological sequence of events like Curriculum Vitae / History
- Erstellt einen Chronologischen Ablauf von Ereignissen wie einen Lebenslauf/Historie

# Hier gehts zur [Live Demo](http://jsfiddle.net/stephanj79/g7631mhf/)

## Getting Started
This plugin is developed with `jquery-1.11.2`
> Test it with other Versions!!!

Add to your HTML
```html

<link rel="stylesheet" href="css/stylehistory.css">

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
<script src="jquery.stylehistory.min.js"></script>
```

#How to use:
```html
<head>
<script>
        $(document).ready(function(){
            $('.style-history').stylehistory({
                chronologically:true
                ,reverseYear:false
                ,reverseMonth:false
                ,itemCount:0
                ,marker:'dot'
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

### Options
```js
 $('.style-history').stylehistory({
    chronologically:true
    ,reverseYear:false
    ,reverseMonth:false
    ,itemCount:0
    ,marker:'dot'
});
```

#### chronologically
Type: `Boolean`
Default value: `true`

- Sort Array (1. by Year, 2. by Month)
- Sortiert die Einträge (1. Jahre, 2. Monate)

#### reverseYear
Type: `Boolean`
Default value: `false`

- Turn sorting years
- Sortierung der Jahre umdrehen

#### reverseMonth
Type: `Boolean`
Default value: `false`

- Turn sorting months
- Sortierung der Monate umdrehen


#### itemCount
Type: `Integer`
Default value: `0`

- Itemscount to Show (0 == all events will show)
- Die Anzahl der angezeigten Ereignisse (0 == Alle Elemente werden angezeigt)

#### marker
Type: `String`
Default value: `dot`

- `arrow` or `dot` as yearmarker
- `Pfeil` oder `Punkte` als Jahresmarker


### Release History
* 1.0.3 Minified fixed
* 1.0.2 Minified
* 1.0.1 Bugfix
* 1.0.0 Final Release
