# Arbeiten mit fortgeschrittenen Mongoose-Schemas

Erstelle eine kleine API, die Datenbankinteraktionen verarbeiten kann, während du fortgeschrittene Schema-Validierung übst.

## Was du tun wirst

Du wirst eine kleine REST-API erstellen, die sich mit einer Datenbank verbindet. Diese API wird:

- neue Benutzer erstellen
- vorhandene Benutzer lesen
- Artikel erstellen
- vorhandene Artikel lesen

## Aufgaben

### Aufgabe 1 - Vorbereitung

1. Initialisiere `npm`

2. Richte deinen Server mit dem npm-Paket [express](https://www.npmjs.com/package/express) ein

3. Installiere auch das npm-Paket [mongoose](https://www.npmjs.com/package/mongoose)

3. Erstelle die Datei `server.js`

4. Füge die `express.json()` Middleware hinzu, um JSON aus dem Request `body` Objekt lesen zu können

### Aufgabe 2 - Erstellen des User-Schemas und Modells

1. Erstelle den Ordner `models`

2. Erstelle die Datei `User.js` im Ordner `models`

3. Erstelle anhand des folgenden Datenbeispiels ein Schema in `User.js`

```json
{
   "firstName": "Tony",
   "lastName": "Iommi",
   "bands": [
      "Black Sabbath",
      "Heaven and Hell"
   ],
   "instrument": "guitar",
   "albums": [
      {
         "title": "Vol 4",
         "year": 1972
      },
      {
         "title": "Masters of Reality",
         "year": 1971
      }
   ],
   "birthday": "1950-12-09",
   "createdOn": 1649428492873
}
```

3. Ändere das Schema so, dass die folgenden Felder `required` sind:
    - `firstName`
    - `lastName`
    - `birthday`

4. Ändere das Schema so, dass das Feld `createdOn` standardmäßig auf `Date.now()` gesetzt wird

5. Erstelle ein Modell für dein Schema und exportiere es

### Aufgabe 3 - Erstellen des Article-Schemas und Modells

1. Erstelle die Datei `Article.js` im Ordner `models`

2. Erstelle anhand des folgenden Datenbeispiels ein Schema in `Article.js`

```json
{
   "title": "When was the last time you ate lasagna",
   "author": "604f3895f7c6568b0902115e",
   "keywords":[
      "food",
      "lasagna",
      "pasta"
   ],
   "category": "Fooood",
   "comments": [
      {
         "text": "Bla bla bla i like pasta",
         "user":"604f3895f7c6568b0902115e"
      },
      {
         "text": "Bapa di bupi",
         "user": "604f3895f7c6568b0902115e"
      }
   ]
}
```

3. Ändere das Schema so, dass die folgenden Felder `required` sind:
    - `title`
    - `author`

4. Erstelle ein Modell für dein Schema und exportiere es

### Aufgabe 4 - Erstellen von Endpunkten für das User-Modell

1. Erstelle einen `GET`-Endpunkt für den Pfad `/users`, der **alle** Benutzer aus dem `User`-Modell **findet**

2. Erstelle einen `POST`-Endpunkt für den Pfad `/users`, der Daten aus dem Request `body` Objekt verwendet, um ein neues Dokument im `User`-Modell zu **erstellen**

### Aufgabe 5 - Erstellen von Endpunkten für das Article-Modell

1. Erstelle einen `GET`-Endpunkt für den Pfad `/articles`, der **alle** Artikel aus dem `Article`-Modell **findet**

2. Erstelle einen `POST`-Endpunkt für den Pfad `/articles`, der Daten aus dem Request `body` Objekt verwendet, um ein neues Dokument im `Article`-Modell zu **erstellen**

## Bonus-Aufgaben

### Erstelle ein neues Schema `album`

1. Erstelle ein separates `album`-Schema basierend auf den Eigenschaften im Feld `albums` im `user`-Schema

2. Ändere das vorhandene Feld `albums`, um das neue `album`-Schema als Array von Subdokumenten zu referenzieren

### Erstelle ein neues Schema `comment`

1. Erstelle ein separates `comment`-Schema basierend auf den Eigenschaften im Feld `comments` im `article`-Schema

2. Ändere das vorhandene Feld `comments`, um das neue `comment`-Schema als Array von Subdokumenten zu referenzieren
