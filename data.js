export const kategorienFarben = {
    'Klassenarbeiten': '#cce6ff',
    'Intelligenzallergie': '#ffff99',
    'Events': '#ccffcc',
    'Lehrer': '#ffcc99',
    'Hausaufgaben': '#99ff99',
    'Gaming': '#ff9999',
    'Besseres Gaming': '#cc99ff',
    'Antimaterie': '#9999ff',
    'Was auch immer': '#cccccc'
  };

export const artikelDaten = [
    {
      titel: 'An object',
      kategorie: 'Was auch immer',
      vektor: [0.76, -0.04, 0.69],
      bild: 'dreieck.jpg',
      text: 'An object ist ein Objekt. Niemand weiß genau, was für ein Objekt, aber es ist ein Objekt.'
    },
    {
      titel: 'The 7b Rooms',
      kategorie: 'Besseres Gaming',
      vektor: [0.85, 0.17, 0.69],
      bild: '7bRooms.jpg',
      text: 'The 7b Rooms (<a href="https://idlegameperson.github.io/The_7b_Rooms/">siehe hier</a>) ist ein von Roblox DOORS inspiriertes Spiel.<br>Man startet in Raum 0 mit 3 HP. Das Ziel ist es, zu überleben, bis man Raum 999 erreicht.<hr><b>Raumstruktur:</b><br> - Räume bestehen aus 2 bis 10 Rechtecken.<br> - Im letzten Rechteck ist eine Tür zum nächsten Raum.<hr><b>Bücher:</b><br>Es gibt Bücher, die man sammeln kann. Bücher haben verschiedene Werte:<br><table border="1"><tr><td><b>Farbe</b></td><td><b>Wert</b></td></tr><tr><td>Rot</td><td>1</td></tr><tr><td>Orange</td><td>2</td></tr><tr><td>Gelb</td><td>5</td></tr><tr><td>Grün</td><td>10</td></tr><tr><td>Hellblau</td><td>25</td></tr><tr><td>Blau</td><td>50</td></tr><tr><td>Lila</td><td>100</td></tr></table><hr><b>Bewegung:</b><br>Bewegen mit WASD nimmt Energie. Man sprintet mit Q.<br><b>Verstecke:</b><br>Man kann sich mit E verstecken, was 20% Sauerstoff pro Sekunde nimmt.<br><i>Auf komplettem Verlust einer dieser Werte verliert man 1 HP.</i><hr><h3><b>Gegner</b></h3><b>Schüler (10% pro Raum ab 40)</b><br>Warnt 7 Sekunden vor Erscheinung, indem er das Licht flackert. Wenn er dich sieht, nimmt er 3 HP.<br><b>Lehrer (20% pro Raum ab 70)</b><br>Erscheint in einem Raum. Ab 2 Sekunden aktiviert er sich, was heißt, dass du 1 HP verlierst, falls du stillstehst. Dies gilt in Verstecken nicht.<br><b>Vakuum (15% pro Raum ab 90)</b><br>Sieht aus wie eine falsch nummerierte Tür, die 2 HP auf Berührung nimmt.<br><b>Uhr (5% pro Raum ab 100)</b><br>Erscheint in den Statistiken. Nimmt 3 HP, wenn du den Raum nicht schnell genug verlässt.<hr><b>Items:</b><br>Erscheinen mit einer 12% Chance pro Raum. Man hat 4 Item-Slots.<br>Liste an Items:<table border="1"><tr><td><b>Item-Name</b></td><td><b>Stackt bis</b></td><td><b>Benutzbar bei</b></td><td><b>Effekt auf Benutzung</b></td></tr><tr><td>Medizin</td><td>5</td><td>HP ist kleiner als 3</td><td>Erhöht HP um 1</tr></table>'
    },
    {
      titel: 'n42´s RNG',
      kategorie: 'Besseres Gaming',
      vektor: [0.75, -0.09, 0.51],
      bild: 'Wurfel.jpg',
      text: 'In n42´s RNG (<a href="https://idlegameperson.github.io/n42s_RNG/">siehe hier</a>) generiert man mit einem Knopf <i>(alle 2,5s drückbar)</i> Seltenheiten.<br>Seltenheiten, ihre Chance (1/Zahl links) und gegebenen Münzen (Zahl rechts): <table border="1"><tr><td></td><td><b>I</b></td><td><b>II</b></td><td><b>III</b></td><td><b>IV</b></td><td><b>V</b></td></tr><tr><td><b>Gewöhnlich</b></td><td>6 | 1</td><td>7,2 | 1,1</td><td>8,64 | 1,21</td><td>10,4 | 1,33</td><td>12,4 | 1,46</td></tr><tr><td><b>Ungewöhnlich</b></td><td>14,9 | 1,61</td><td>17,9 | 1,77</td><td>21,4 | 1,95</td><td>25,8 | 2,14</td><td>31 | 2,36</td></tr><tr><td><b>Selten</b></td><td>37,2 | 2,59</td><td>44,6 | 2,85</td><td>53,5 | 3,14</td><td>64,2 | 3,45</td><td>77 | 3,8</td></tr><tr><td><b>Sehr selten</b></td><td>92,4 | 4,18</td><td>111 | 4,59</td><td>133 | 5,05</td><td>160 | 5,56</td><td>192 | 6,12</td></tr><tr><td><b>Episch</b></td><td>230 | 6,73</td><td>276 | 7,4</td><td>331 | 8,14</td><td>397 | 8,95</td><td>477 | 9,85</td></tr><tr><td><b>Legendär</b></td><td>572 | 10,8</td><td>687 | 11,9</td><td>824 | 13,1</td><td>989 | 14,4</td><td>1,19k | 15,9</td></tr><tr><td><b>Mythisch</b></td><td>1,42k | 17,4</td><td>1,71k | 19,2</td><td>2,05k | 21,1</td><td>2,46k | 23,2</td><td>2,95k | 25,5</td></tr><tr><td><b>Exotisch</b></td><td>3,54k | 28,1</td><td>4,25k | 30,9</td><td>5,1k | 34</td><td>6,12k | 37,4</td><td>7,35k | 41,1</td></tr><tr><td><b>Perfekt</b></td><td>8,82k | 45,3</td><td>10,6k | 49,8</td><td>12,7k | 54,8</td><td>15,2k | 60,2</td><td>18,3k | 66,3</td></tr><tr><td><b>Mysteriös</b></td><td>21,9k | 72,9</td><td>26,3k | 80,2</td><td>31,6k | 88,2</td><td>37,9k | 97</td><td>45,5k | 107</td></tr><tr><td><b>Verrückt</b></td><td>54,6k | 117</td><td>65,5k | 129</td><td>78,6k | 142</td><td>94,4k | 156</td><td>113k | 172</td></tr><tr><td><b>Extrem</b></td><td>136k | 189</td><td>163k | 208</td><td>196k | 229</td><td>235k | 252</td><td>282k | 277</td></tr><tr><td><b>Ultimativ</b></td><td>338k | 304</td><td>406k | 335</td><td>487k | 368</td><td>584k | 405</td><td>701k | 446</td></tr><tr><td><b>Super</b></td><td>841k | 490</td><td>1,01m | 539</td><td>1,21m | 593</td><td>1,45m | 653</td><td>1,74m | 718</td></tr><tr><td><b>Ewig</b></td><td>2,09m | 790</td><td>2,51m | 869</td><td>3,01m | 956</td><td>3,62m | 1,05k</td><td>4,34m | 1,16k</td></tr><tr><td><b>Himmlisch</b></td><td>5,21m | 1,27k</td><td>6,25m | 1,4k</td><td>7,5m | 1,54k</td><td>9m | 1,69k</td><td>10,8m | 1,86k</td></tr><tr><td><b>Göttlich</b></td><td>13m | 2,05k</td><td>15,6m | 2,25k</td><td>18,7m | 2,48k</td><td>22,4m | 2,73k</td><td>26,9m | 3k</td></tr><tr><td><b>Transzendent</b></td><td>32,3m | 3,3k</td><td>38,7m | 3,63k</td><td>46,4m | 3,99k</td><td>55,7m | 4,39k</td><td>66,9m | 4,83k</td></tr><tr><td><b>Omega</b></td><td>80,3m | 5,31k</td><td>96,3m | 5,84k</td><td>116m | 6,43k</td><td>139m | 7,07k</td><td>166m | 7,78k</td></tr><tr><td><b>Unendlich</b></td><td>200m | 8,56k</td><td>240m | 9,41k</td><td>288m | 10,4k</td><td>345m | 11,4k</td><td>414m | 12,5k</td></tr></table>Und Hyper-Unendlich n: 414m*1,2<sup>n</sup> | 12,5k*1,1<sup>n</sup>.<hr><b>Upgrades</b><br>Können gekauft werden, wenn man ein benachbartes Upgrade hat.<table border="1"><tr><td><b>Koordinaten</b></td><td><b>Upgrade</td><td><b>Kosten (Münzen)</b></td><td><b>Details</b></td></tr><tr><td><b>0,0</b></td><td>Glück +0,2</td><td>10</td></tr><tr><td><b>0,1</b></td><td>Glück +0,2</td><td>20</td></tr><tr><td><b>0,2</b></td><td>Glück +0,3</td><td>30</td></tr><tr><td><b>0,3</b></td><td>Glück x1,1</td><td>50 (x1,06/Kauf)</td><td>Wiederholbar</td></tr><tr><td><b>1,0</b></td><td>Münzmultiplikator +0,2</td><td>10</td></tr><tr><td><b>2,0</b></td><td>Münzmultiplikator +0,2</td><td>25</td></tr><tr><td><b>2,1</b></td><td>Münzmultiplikator +0,3</td><td>30</td></tr><tr><td><b>2,2</b></td><td>Münzmultiplikator +0,3</td><td>50 (x1,08/Kauf)</td><td>Wiederholbar</td></tr><tr><td><b>3,0</b></td><td>Knopf häufiger drückbar (-0,3s)</td><td>100</td></tr><tr><td><b>4,0</b></td><td>Knopf häufiger drückbar (-0,2s)</td><td>250</td></tr><tr><td><b>4,1</b></td><td>Autoklicker auf Knopf (10 Sek/Klick)</td><td>500</td></tr><tr><td><b>4,2</b></td><td>Immer min. Selten III</td><td>1000</td><td>Sonst Regeneration</td></tr><tr><td><b>4,3</b></td><td>Immer min. Sehr selten II</td><td>1500</td><td>Sonst Regeneration</td></tr><tr><td><b>5,0</b></td><td>10% Chance für x2 Münzen</td><td>750</td></tr><tr><td><b>5,1</b></td><td>10% Chance für Seltenheit +5</td><td>2500</td></tr><tr><td><b>5,2</b></td><td>0,3% Chance für x100 Münzen</td><td>6500</td></tr></table>'
    },
    {
      titel: 'Die Zahl 115',
      kategorie: 'Antimaterie',
      vektor: [0.37, -0.48, 0.11],
      bild: '114.jpg',
      text: 'Die Zahl 115 ist eine Geheimzahl für das Wort <i>"Du"</i>.<br>Es wird meistens als Beleidigung benutzt.<br><br><b>Geschichte</b><br>Jemand hat mal nen <u>Rechtschreibfehler</u> gemacht.'
    },
    {
      titel: 'Quaderkaffee',
      kategorie: 'Was auch immer',
      vektor: [0.9, -0.25, 0.81],
      bild: 'fioikofrijkomrefefgrjnoikmefgrjnoikm',
      text: 'Quaderkaffee ist quaderförmiger Kaffee.'
    },
    {
      titel: 'TFF3125',
      kategorie: 'Gaming',
      vektor: [0.63, 0.31, 0.47],
      bild: 'Limbo.jpg',
      text: 'TFF3125 ist der <b>Geometry Dash</b> Account von <i>n42</i> und <i>n94</i>.<br>Statistiken:<table border="1"><tr><td><b>Statistik</b></td><td><b>Wert</b></td></tr><tr><td>Sterne</td><td>1027</td></tr><tr><td>Weltranglistenposition</td><td>999634</td></tr><tr><td>Monde</td><td>108</td></tr><tr><td>goldene Münzen</td><td>85</td></tr><tr><td>silberne Münzen</td><td>128</td></tr><tr><td>Easy Demons</td><td>19</td></tr><tr><td>Medium Demons</td><td>1</td></tr><tr><td>Created Levels</td><td>85</td></tr></table>'
    },
    {
      titel: 'Banane',
      kategorie: 'Was auch immer',
      vektor: [0.18, -0.28, 0.1],
      bild: 'Satz.jpg',
      text: '<i>Banane</i> ist ein Substantiv, welches bei keinem anderen zu der Situation passendem Substantiv benutzt wird.'
    },
    {
      titel: 'Lidl',
      kategorie: 'Was auch immer',
      vektor: [0.58, 0.31, 0.47],
      bild: 'Seek.jpg',
      text: '<small>Stelle dir während Lesen vor: Doors Seek Musik</small><br>Lidl ist ein Markt. <b>Der Geschichtslehrer warnt!</b>'
    },
    {
      titel: 'n-System',
      kategorie: 'Antimaterie',
      vektor: [0.76, 0.31, 0.02],
      bild: 'n.jpg',
      text: 'TFF3125 ist der <b>Geometry Dash</b> Account von <i>n42</i> und <i>n94</i>.<br>Statistiken:<table border="1"><tr><td><b>Statistik</b></td><td><b>Wert</b></td></tr><tr><td>Sterne</td><td>1027</td></tr><tr><td>Weltranglistenposition</td><td>999634</td></tr><tr><td>Monde</td><td>108</td></tr><tr><td>goldene Münzen</td><td>85</td></tr><tr><td>silberne Münzen</td><td>128</td></tr><tr><td>Easy Demons</td><td>19</td></tr><tr><td>Medium Demons</td><td>1</td></tr><tr><td>Created Levels</td><td>85</td></tr></table>'
    },
    {
      titel: 'Insolvenzklicker',
      kategorie: 'Besseres Gaming',
      vektor: [0.63, 0.1, 0.9],
      bild: 'Business.jpg',
      text: 'In Insolvenzklicker muss man 500 Punkte erreichen, in dem man auf +1 drückt. Die Phase geht alle 50 Punkte hoch, was das Spiel verschwierigt: <table border="1"><tr><td><b>Phase</b></td><td><b>Besonderes</b></td></tr><tr><td>1</td><td>Nix besonderes</td></tr><tr><td>2</td><td>4 Knöpfe, davon nur 1 +1</td></tr><tr><td>3</td><td>Hintergrund -1</td></tr><tr><td>4</td><td>Nicht +1 Knopf sind -1 bis -5</td></tr><tr><td>5</td><td>Machmal erscheint -5 Wand</td></tr><tr><td>6</td><td>+1 ist kleiner</td></tr><tr><td>7</td><td>Knöpfe bewegen sich</td></tr><tr><td>8</td><td>+1 Knopf schneller</td></tr><tr><td>9</td><td>Wand Buffs</td></tr><tr><td>10</td><td>- Knopf Buffs</td></tr><tr><td>Post-Game</td><td>Verliere passiv Punkte</td></tr></table>Phasen gehen nie runter.'
    },
    {
      titel: '7b-Vektor',
      kategorie: 'Antimaterie',
      vektor: [0.28, 0.27, 0.01],
      bild: 'Vektor.jpg',
      text: 'Der <u>7b-Vektor</u> eines Objektes besteht aus 3 Zahlen zwischen -1 und 1.<br>Bedeutungen der Zahlen:<table border="1"><tr><td><b>Koordinate</b></td><td><b>Bedeutung bei -1</b></td><td><b>Bedeutung bei 0</b></td><td><b>Bedeutung bei 1</b</td></tr><tr><td><b>x (1. Zahl)</b></td><td>Anti-7b</td><td>Nicht 7b</td><td>7b</td></tr><tr><td><b>y (2. Zahl)</b></td><td>Selten</td><td>Normal</td><td>Häufig</td></tr><tr><td><b>z (3. Zahl)</b></td><td>Traurig</td><td>Neutral</td><td>Glücklich</td></tr></table><hr>Der 7b-Faktor ist eine Zusammenfassung des 7b-Vektors in 1 Zahl, falls man nicht 3 Zahlen lesen kann.<br>Formel: ((x*|x| + y*|y| + z*|z|) / 3)<sup>0.5</sup>.'
    },
    {
      titel: 'AMG',
      kategorie: 'Intelligenzallergie',
      vektor: [0.93, 0.58, -0.16],
      bild: 'Schule.jpg',
      text: 'Das AMG ist eine 7b-enthaltende Schule.<br>Das BMG ist das AMG 2.0: Die Antwort ist immer 3.'
    },
    {
      titel: '7b RNG',
      kategorie: 'Besseres Gaming',
      vektor: [0.8, 0.25, 0.69],
      bild: 'Katze.jpg',
      text: 'Das Spiel ist eine einzige Formel: 1/rand(0,1).<br>Es gibt nen Luck Trank der manchmal erscheint und Zahl quadriert'
    },
    {
      titel: 'Nuklearpritt',
      kategorie: 'Was auch immer',
      vektor: [0.76, 0, 0.5],
      bild: 'Pritt.jpg',
      text: '<b>Chemische Komposition</b><br> - 32% Pritt<br> - 44% Uran<br> - 20% Plutonium<br> - 4% Antimaterie<hr><b>Kosten</b><br>{10, 10 [1 [2] 2] 2} € <i>(siehe BAN-Notation)</i><hr><b>Alternative Namen</b><br> - Atompritt<br> - PrittDonald´s Pritt<br> - SCP-397942-N<br> - Pritt: 2D Edition<br> - Eher instabiles Pritt'
    },
    {
      titel: 'ä',
      kategorie: 'Was auch immer',
      vektor: [0.4, -0.18, 0.04],
      bild: 'A.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Bubble Simulator',
      kategorie: 'Besseres Gaming',
      vektor: [0.35, -0.15, 0.47],
      bild: 'Bubble.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Vermeidungssimulator',
      kategorie: 'Besseres Gaming',
      vektor: [0.24, -0.2, 0.61],
      bild: 'Vermeidung.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Zufälliger 2D Platformer',
      kategorie: 'Besseres Gaming',
      vektor: [0.16, -0.38, 0.51],
      bild: 'Platform.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Ein ganz normales Mathespiel',
      kategorie: 'Besseres Gaming',
      vektor: [-0.1, -0.1, 0.21],
      bild: 'mathe.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Ein ganz normales Mathespiel 2',
      kategorie: 'Besseres Gaming',
      vektor: [-0.21, 0.13, 0.23],
      bild: 'mathe2.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Time Survival',
      kategorie: 'Besseres Gaming',
      vektor: [0.82, 0.33, 0.51],
      bild: 'surv.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Vermeidungssimulator 2',
      kategorie: 'Besseres Gaming',
      vektor: [0.31, -0.1, 0.52],
      bild: 'Vermeidung2.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Time Survival 2',
      kategorie: 'Besseres Gaming',
      vektor: [0.27, -0.36, 0.29],
      bild: 'TimeSurvival2.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: '7b-Detektor',
      kategorie: 'Was auch immer',
      vektor: [0.6, 0.03, 0.16],
      bild: '7b-ytes.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    },
    {
      titel: 'Geldklicker',
      kategorie: 'Besseres Gaming',
      vektor: [0.84, 0.4, 0.71],
      bild: 'Geldklicker.jpg',
      text: '<code>Text fehlt. Grund: Stress und die Ethik KA.</code>'
    }
];

export const newsDaten = [
    {
      titel: 'Physik Klassenarbeit',
      kategorie: 'Klassenarbeiten',
      vektor: [-0.29, 0.24, -0.18],
      bild: 'Lichtbrechung.jpg',
      text: 'Die Physik-Klassenarbeit wurde geschrieben, was die sechste KA in diesem Monat bedeutet.<br>Hier ist ein bisschen Motivation: Am <b><i>6. Juni</i></b> starten die Pfingstferien!',
      datum: '2025-05-28'
    },
    {
      titel: 'KA in Biologie',
      kategorie: 'Klassenarbeiten',
      vektor: [-0.48, 0.23, -0.37],
      bild: 'Aorta.jpg',
      text: 'Es wurde mal wieder eine Klassenarbeit geschrieben.<br><i>Tipp:</i> Es ist schlecht, 12 Bananen am Tag zu essen.',
      datum: '2025-05-28'
    }
];

export const basisplan = {
    Montag: [
      ['07:50', '09:20', 'Religion R112/evangelisch R108/Ethik R302 [Wahl]'],
      ['09:35', '10:20', 'Latein R307/Englisch R112 [Intensivierung]'],
      ['10:20', '11:05', 'Englisch R020/Latein R302 [Intensivierung]'],
      ['11:20', '12:05', 'Kunst R012'],
      ['12:10', '12:55', 'Kunst R012']
    ],
    Dienstag: [
      ['07:50', '09:20', 'Sport'],
      ['09:35', '10:20', 'Deutsch R111'],
      ['10:20', '11:05', 'Musik R005'],
      ['11:20', '12:05', 'Mathe R306'],
      ['12:10', '12:55', 'Informatik R014']
    ],
    Mittwoch: [
      ['07:50', '09:20', 'Mathe R112'],
      ['09:35', '10:20', 'Geschichte R112'],
      ['10:20', '11:05', 'Latein R112'],
      ['11:20', '12:05', 'Musik R006'],
      ['14:00', '14:45', 'Biologie R214'],
      ['14:50', '15:35', 'Biologie R214'],
      ['15:45', '16:30', 'Physik R313'],
      ['16:35', '17:20', 'Physik R313']
    ],
    Donnerstag: [
      ['07:50', '09:20', 'Englisch R109'],
      ['09:35', '11:05', 'Deutsch R111'],
      ['11:20', '12:05', 'Latein R110'],
      ['12:10', '12:55', 'Latein R110']
    ],
    Freitag: [
      ['07:50', '08:35', 'Mathe R112'],
      ['08:35', '09:20', 'Geschichte R112'],
      ['09:35', '10:20', 'Deutsch R006'],
      ['10:20', '11:05', 'Latein R006'],
      ['11:20', '12:05', 'Englisch R304'],
      ['14:00', '14:45', 'Geographie R209'],
      ['14:50', '15:35', 'Geographie R209'],
      ['15:45', '16:30', 'Sport'],
      ['16:35', '17:20', 'Sport']
    ]
};

export const aenderungen = [
    {
      datum: '2025-06-02',
      start: '07:50',
      end: '09:20',
      fach: 'Religion R112/evangelisch R108/Ethik R302 Klassenarbeit [Wahl]'
    },
    {
      datum: '2025-06-04',
      start: '07:50',
      end: '09:20',
      fach: 'Mathe R112 Klassenarbeit'
    },
    {
      datum: '2025-06-04',
      start: '09:35',
      end: '10:20',
      fach: 'Geschichte R109'
    },
    {
      datum: '2025-06-04',
      start: '10:20',
      end: '11:05',
      fach: 'Latein R110'
    },
    {
      datum: '2025-06-05',
      start: '07:50',
      end: '09:20',
      fach: 'Englisch R109 Vokabeltest'
    },
    {
      datum: '2025-06-05',
      start: '09:35',
      end: '11:05',
      fach: 'Latein R305'
    },
    {
      datum: '2025-06-05',
      start: '11:20',
      end: '12:55',
      fach: 'efhjnzugrv'
    },
    {
      datum: '2025-06-06',
      start: '07:50',
      end: '08:35',
      fach: 'Geschichte R112'
    },
    {
      datum: '2025-06-06',
      start: '08:35',
      end: '09:20',
      fach: 'Mathe R112'
    },
    {
      datum: '2025-06-09', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-10', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-11', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-12', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-13', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-16', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-17', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-18', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-19', start: '07:50', end: '17:20', fach: 'efhjnzugrv' },
    {
      datum: '2025-06-20', start: '07:50', end: '17:20', fach: 'efhjnzugrv' }
];
