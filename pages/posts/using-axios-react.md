---
title: Using axios in react
date: 2021/10/21
description: Hou use Axios in ReactJs
tag: reactjs
author: Marlon Falcon Hernandez
---

- Install Axios with npm or yarn
```
$ npm i axios
```

- Import Axios
```
import axios from 'axios';
```

- Use Axios
```
 const loadAxios = () => {
   axios.get(URL).then(resp => {
        const nuewData = []
        const dataAxios = resp.data
        
        dataAxios.map(item => {
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
    });
 }
```
