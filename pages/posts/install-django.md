---
title: Install Django
date: 2021/10/21
description: Commands to install Django
tag: django
author: Marlon Falcon Hernandez
---

- Commands to install Django
```
python3 -m pip install virtualenv
virtualenv venv -p python3
source venv/bin/activate
pip install django
django-admin startproject myproject
cd myproject
python manage.py runserver
http://127.0.0.1:8000/
```
