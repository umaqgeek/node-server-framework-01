# node-server-test-01

## Installation

`$ npm install`

## Run

`$ npm start`

## Sample Online API URL
`http://node-server-framework-01-prod.herokuapp.com`

## API Usage

1. `GET /`
```
return (String) 'This is backend API'
```

2. `GET /drugs`
```
return (Array)
[
    (Object)
    {
        "id": 2, (Integer)
        "name": "Paracetamol", (String)
        "category": "medicine", (String)
        "status": 0 (Integer)
    },
    ...
]
```

3. `GET /drug/{id}`
```
return (Array)
[
    (Object)
    {
        "id": 2, (Integer)
        "name": "Paracetamol", (String)
        "category": "medicine", (String)
        "status": 0 (Integer)
    }
]
```

4. `POST /drug`
```
body (Object)
{
	"name": "Paracetamol", (String)
	"category": "medicine", (String)
	"status": 1 (Integer)
}
```
```
return (Object)
{
    "fieldCount": 0, (Integer)
    "affectedRows": 1, (Integer)
    "insertId": 2, (Integer)
    "serverStatus": 2, (Integer)
    "warningCount": 0, (Integer)
    "message": "", (String)
    "protocol41": true, (Boolean)
    "changedRows": 0 (Integer)
}
```

5. `PUT /drug/{id}`
```
body (Object)
{
	"name": "Paracetamol", (String)
	"category": "medicine", (String)
	"status": 1 (Integer)
}
```
```
return (Object)
{
    "fieldCount": 0, (Integer)
    "affectedRows": 1, (Integer)
    "insertId": 0, (Integer)
    "serverStatus": 2, (Integer)
    "warningCount": 0, (Integer)
    "message": "(Rows matched: 1  Changed: 1  Warnings: 0", (String)
    "protocol41": true, (Boolean)
    "changedRows": 1 (Integer)
}
```

6. `DELETE /drug/{id}`
```
return (Object)
{
    "message": "Drug successfully deleted" (String)
}
```
