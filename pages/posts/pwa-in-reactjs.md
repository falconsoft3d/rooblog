---
title: Pwa In Reactjs
date: 2021/10/21
description: PWA
tag: reactjs
author: Marlon Falcon Hernandez
---

- Create the app
```
$ npx create-react-app my-app --template cra-template-pwa
```

or
```
$ npx create-react-app my-app --template cra-template-pwa-typescript
```

- In the index.js change “unregister” for “register”
```
serviceWorkerRegistration.register();
```

- Install serve
```
$ npm i serve -g
$ serve -s build
```
