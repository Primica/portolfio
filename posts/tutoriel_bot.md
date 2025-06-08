---
title: "Tutoriel : créer son bot discord"
date: "2025-06-07"
excerpt: "Ceci est une introduction sur comment créer son premier bot discord."
---

# Votre premier bot discord 
---
> Il existe différents languages possible pour réaliser un bot discord, les deux languages les plus utilisés sont `python` et `javascript`. Ici pour des raisons de simplicité et parce que je suis plus spécialisé en `python` c'est le language que nous allons utiliser.

## Les dépendances nécessaires 
Plusieurs options s'offre à nous, la plus connue étant `discord.py` mais j'ai une préférence pour `py-cord` qui est une fork de `discord.py`

**Installer `py-cord` avec `pip3`:**
```bash
pip3 install py-cord
```

> [!important] .venv
> je vous recommande d'utiliser un environnement virtuel pour vos projet de bot python pour éviter les conflits avec des micros-dépendances d'autres modules 
## La structure de base d'un bot
```text
main.py
config.json
cogs/ 
```

Votre fichier `main.py` sera le point de lancement de votre bot, c'est dans se fichier que vous aller définir les autorisations du bot et que vous allez charger les différentes extensions de votre bot qui se situe dans votre dossier `cogs`. Le fichier `config.json` sert juste à stocker le token de votre bot qui est à garder secret quoi qu'il arrive, si vous avez initialisé un dossier `.git` penser à ajouter le fichier `config.json` à l'intérieur du `.gitignore` pour éviter de le rendre publique. 
### Le `main.py`
**Les imports:**

```python
import discord 
from discord.ext import commands
import os
import json
```

Faisons déjà un premier tour de nos imports, comme vous l'avez sans aucun doute remarquer le module discord correspond à la dépendance `py-cord` que nous avons installé précédemment, les importation json et os nous servirons pour charger notre token et indexer, chargé les extensions de notre bot discord. 

**La gestion du token:**

```python
with open("config.json", "r") as f:
	config = json.load(f)
	token = config["token"]
```

Ceci permet de charger notre token dans une variable que l'on à nommée, bien-sur il est également possible de le faire depuis un `.env` si vous le souhaité si vous ne souhaitez pas utiliser de `json`. On ouvre le fichier json avec la permission / le mode reader puis dans un second temps on charge le fichier et à la fin on attribut le token qui est lié à la clé "token" de notre fichier de configuration. 

**création de l'objet `bot`:**
```python
bot = commands.Bot(command_prefix='&', intents=discord.Intents.all())
```
Ici on crée un objet bot, avec pour préfix de commande : '&', et avec les tout les *intents* c'est à dire les permissions administrateur. 

**Le chargement des extensions:**
Un bot est constitué de plusieurs commandes, pour que le code reste modulable on classe ces différentes commandes généralement par thème dans différents fichier, ces fichiers sont appelés extensions ou/et cogs. que l'on met donc dans le dossier cogs. 
```python
def load_cogs(start_dirs:list[str]):
	for start_dir in start_dirs:
		for root, dirs, files in os.walk(start_dir):
			for file in files:
				if file.endswith('.py'):
					cog_name = os.path.splitext(file)[0]
					cog_path = os.path.join(root, cog_name)
					try:
						bot.load_extension(cog_path.replace(os.sep, '.'))
						print(f"Loaded cog: {cog_name}")
					except Exception as e:
						print(f"Failed to load cog {cog_name}: {e}")
```
Cette fonction prend en paramètre une liste de dossier de départ, bien que dans la plus part des cas votre dossier cogs suffit. Elle va charger récursivement pour chaque dossier passé en paramètre l'ensemble des extensions. 

**Affichage informatif:**
Il existe des event, donc des évènement que l'on peut déclencher à partir de certaines actions effectué soit par le bot ou par un utilisateur. Ici nous allons utiliser l'event : `on_ready()` donc quand le bot est prêt l'event va se déclencher. Le but ici est juste d'avoir un message dans le terminal qui nous confirme que le bot est bien connecté à discord. Nous allons également en profiter pour mettre à jour l'activité du bot afin d'afficher un petit message pour guider nos utilisateur (ceci est optionnel). 

```python
@bot.event
async def on_ready():
	print(f"Logged in as {bot.user.name} - {bot.user.id}")
	print("------")
	await bot.change_presence(activity=discord.Game(name="!help for commands"))	
```

**Notre première commande:**
Nous allons implémenter notre première commande dans notre fichier main pour pouvoir tester notre bot à son lancement. 

```python
@bot.command(name="ping", help="Check the bot's latency.")
async def ping(ctx):
    latency = round(bot.latency * 1000)
    await ctx.send(f'Pong! Latency: {latency}ms')
```




