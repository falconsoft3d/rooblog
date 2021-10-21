---
title: Install Mongodb With Docker
date: 2021/10/21
description: docker
tag: mongodb
author: Marlon Falcon Hernandez
---

- Install
```
$ docker pull mongo
$ docker run -d -p 27017-27019:27017-27019 --name mongodb mongo
```

- View
```
$ docker exec -it mongodb bash
$ mongo
```

- Use
```
$ use mongo_on_docker
db.libros.save({ titulos: 'MongoDB', 
                 author: { firstname: 'Jose', lastname: 'Gonzalez' }})
db.libros.save({ titulos: 'Docker for Everyboda', 
               author: { firstname: 'Ruben', lastname: 'Gonzalez' }})
```

- Show DB
```
$ show dbs
```
