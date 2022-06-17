# Map ISS

This is a simple web application built to track the current location of the International Space Station

The International Space Station is a modular space station in low Earth orbit. It is a multinational collaborative project involving five participating space agencies: NASA, Roscosmos, JAXA, ESA, and CSA.

ISS NORAD ID : `25544`

The Inspiration to this app comes from the NASA Live on Youtube of the activities performed by astronauts right above our heads

We will be using HTML,CSS,JS

![Track ISS](https://raw.githubusercontent.com/SambariManikanta09/mapISS/main/ISS_APP.PNG)

The App is developed using the Open Notify API

Open Notify provides 2 types of API's:

    1.  ISS current location
    2.  People in Space

---

## ISS current location

This API is functional using the below link :
`http://api.open-notify.org/iss-now.json?callback=`

This API sents the response in the JSON format in the format

```
{
    "message": "success",
    "iss_position":
        {
            "longitude": "51.507351",
            "latitude" : "-0.127758"
        },
    "timestamp": 1655468674
}
```

---

## People In Space

This API is functional using the below link:
`http://api.open-notify.org/astros.json?callback=`

This API sents the names of the astronauts currently staying is ISS, in JSON format which looks simialr to this

```
{
	"number": 10,
	"people": [{
		"name": "Oleg Artemyev",
		"craft": "ISS"
	}, {
		"name": "Denis Matveev",
		"craft": "ISS"
	}, {
		"name": "Sergey Korsakov",
		"craft": "ISS"
	}, {
		"name": "Kjell Lindgren",
		"craft": "ISS"
	}, {
		"name": "Bob Hines",
		"craft": "ISS"
	}, {
		"name": "Samantha Cristoforetti",
		"craft": "ISS"
	}, {
		"name": "Jessica Watkins",
		"craft": "ISS"
	}, {
		"name": "Cai Xuzhe",
		"craft": "Tiangong"
	}, {
		"name": "Chen Dong",
		"craft": "Tiangong"
	}, {
		"name": "Liu Yang",
		"craft": "Tiangong"
	}],
	"message": "success"
}

```

---

---

All the API provided above are openly available so feel free to make your hands dirty

website url: `http://open-notify.org/Open-Notify-API/`

Happy Learning, I'm open for any kind of improvements and suggestions
