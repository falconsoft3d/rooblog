---
title: axios
date: 2021/10/21
description: Hou use Axios in React
tag: reactjs
author: Marlon Falcon Hernandez
---

Ordered

1.Install Axios
```
npm i axios
```

2. Import Axios

```
import axios from 'axios';
```

3. Use Axios

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

