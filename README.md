# CATATAN ( NOTE )


# Zbot
Script WhatsApp Bot Multi Device

<p align="center">
	<img src="https://i.ibb.co/bgbNzS5/Null-20230212-WA0014bot.jpg" width="35%" style="margin-left: auto;margin-right: auto;display: block;">
</p>
<h1 align="center">Zbot</h1>

This is Script of WhatsApp multi device, working with [`@adiwajshing/baileys`](https://github.com/adiwajshing/baileys)

## My Project
* New script to replace this script [`look here`](https://github.com/zhwzein/Killua-Zoldyck) (`Support Legacy or Baileys`)
* WhatsApp Bot normal [`DikaArdnt/Hisoka-Morrow`](https://github.com/DikaArdnt/Hisoka-Morrow)
* WhatsApp Bot Multi Device [`DikaArdnt/Hisoka-Morou`](https://github.com/DikaArdnt/Hisoka-Morou)
* WhatsApp Bot Using Library whatsapp-web.js [`hisoka-waweb.js`](https://github.com/Hisoka-Morrou/hisoka-waweb.js/)

## HEROKU BUILDPACK
```bash
heroku/nodejs
heroku/python
https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest
https://github.com/clhuang/heroku-buildpack-webp-binaries.git
```

## UNTUK PENGGUNA WINDOWS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)


```bash
git clone https://github.com/DikaArdnt/Hisoka-Morou
cd Hisoka-Morou
npm install
```

## HOW TO CONNECT TO MONGODB WHEN RUN IN HEROKU

* Create account and database in mongodb atlas [`watch here`](https://youtu.be/rPqRyYJmx2g)
* when you already have a database, you just need to take mongourl
* Put mongourl in Procfile `worker: node . --db 'mongourl'`
* Example `worker: node . -- db 'Your Mongo URI'`
* Example `worker: node . -- db 'mongodb+srv://hisoka:hisokamorrow@hisoka.axmu8.mongodb.net/?retryWrites=true&w=majority'`



## FOR TERMUX/UBUNTU/SSH USER

```bash
apt update && apt upgrade
apt install git -y
apt install nodejs -y
apt install ffmpeg -y
git clone https://github.com/DikaArdnt/Hisoka-Morou
cd Hisoka-Morou
npm install
```

## RECOMMENDED INSTALL ON TERMUX

```bash
pkg install yarn
yarn
```

## INSTALLING
```bash
$ node .
```

## ❗ WARNING
WhatsApp bot is still in the development stage, so there are a few bugs
WhatsApp Connection (BETA, not working perfectly)

Editing Number Owner & session name in [`config.js`](https://github.com/DikaArdnt/Hisoka-Morou/blob/master/config.js)
Get Apikey zenz on [`zenz`](https://zenzapis.xyz/)


## THANKS TO
#DarkWinzo

```Thanks to all who have participated in the development of this script```
