# PruebaTecnica
Prueba Kavak

API REST


version: v1.0

**Libraries:**

        "cors": "^2.8.5",
        "dotenv": "^8.2.0",
        "express": "^4.17.1",
        "express-validator": "^6.4.1",
        "mysql2": "^2.1.0",
        "nodemon": "^2.0.3",
        "sequelize": "^5.21.7"

---

---

## Servicios

A continuación se muestran los servicios que se exponen en el API REST:

- vistas
- CRUD TRACKS

---

### 1-6 VIEW

```
[GET]  [dominio]/api/oneView
[GET]  [dominio]/api/twoView
[GET]  [dominio]/api/threeView
[GET]  [dominio]/api/fourView
[GET]  [dominio]/api/fiveView
[GET]  [dominio]/api/sixView
```


Response:
```json

{
    "code": 200,
    "data": []
    }
```
---

### CRUD TRACKS

```
[GET] [dominio]/api/tracks
```
Trae todos los registros de tracks, junto con los siguientes filtros:


QUERYPARAMS->>
search: *cualquier palabra que coincida con cualquier campo de tracks/users*
username:*Nombre de user del track*
status: *1/0*
order: *Tipo de ordenamiento (title,genre,name...)*
by:*desc/asc*

Response:
```json
{
    "code": 200,
    "data": []
    }
```

```
[POST] [dominio]/api/tracks
```

Body:
```json
{
	"title":"titulo ",
	"artist":"artista",
	"isrc":"isrc",
	"albumid":14,
	"genre":"genre",
	"userid":"14",
	"status":1
}
```

Response:
```json
{
    "code": 200,
    "data": {}
    }
```




