---
title: Using fetch in react
date: 2021/10/21
description: Hou use Fetch in ReactJs
tag: reactjs
author: Marlon Falcon Hernandez
---

1. Install Fetch with npm or yarn
```
$ npm i fetch
```

2. Import fetch
```
import fetch from 'fetch';
```

3. Using Fetch
```
 const loadFetch = async () => {
    const nuewData = []
    try {
    let res = await fetch(URL);
    const dataFetch  = await res.json();
    dataFetch.map(item => {
      nuewData.push(
                      {id: item.id,     
                      name: item.name.split(" ")[0],
                      lastname: item.name.split(" ")[1],
                      email: item.email,
                      admin: Math.random() < 0.5,
                      language: "ES"},
                   )
    })
    setData(nuewData)

    }
       catch (error) {
          console.log(error);
      }

  }
```
