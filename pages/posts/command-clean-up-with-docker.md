---
title: Command clean up with docker
date: 2021/10/21
description: docker
tag: docker
author: Marlon Falcon Hernandez
---

- Prune
```
docker system prune
docker system prune -a
```

- volume
```
docker volume ls -f dangling=true
docker volume rm $(docker volume ls -f dangling=true -q)
```

