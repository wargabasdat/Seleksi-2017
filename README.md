# ![ssLogo](https://raw.githubusercontent.com/ironlota/Seleksi-2017/create-react-app/client/screenshot/ssLogo.png) <!-- .element align="center" -->
[![js-semistandard-style](https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square)](https://github.com/Flet/semistandard)
[![Build Status](https://travis-ci.org/ironlota/Seleksi-2017.svg?branch=master)](https://travis-ci.org/ironlota/Seleksi-2017)
[![dependencies](https://david-dm.org/ironlota/Seleksi-2017.svg)](https://david-dm.org/ironlota/Seleksi-2017)
[![devDependencies](https://david-dm.org/ironlota/Seleksi-2017.svg)](https://david-dm.org/ironlota/Seleksi-2017/dev-status.svg)
[![License: MIT](https://img.shields.io/badge/LICENSE-MIT-blue.svg)](https://opensource.org/licenses/MIT)

A helping hand for movie enthusiast

## Getting Started

Restful API using react, redux, and rxjs implementation

### Prerequisites

What things you need to install the software and how to install them

```
Installed :
- Docker (https://www.docker.com/)
```

### Installing

```
wget https://github.com/ironlota/Seleksi-2017/archive/master.zip
unzip master.zip
cd Seleksi-2017-master
(sudo) docker-compose build
```

### Running

For development
```
- (sudo) docker-compose up -d
- open your browser at http://localhost:3000
```

For production
```
- (sudo) docker-compose -f docker-compose.yml -f docker-compose.production.yml up -d (it will take a little longer)
- open your browser at http://localhost:3000
```

For updating movie (beware, if you get error message, it means you did not run it via docker container)
```
- yarn updateMovie (retrive data to tmpMovies collection)
- yarn transferMovie (move from tmpMovies collection to mainMovies collection)
```

'-d' means that it will be running on the background, if you want to see the log, just erase '-d'

### Screenshot
![s1](https://raw.githubusercontent.com/ironlota/Seleksi-2017/create-react-app/client/screenshot/s1.png) <!-- .element height="50%" width="50%" -->
![s2](https://raw.githubusercontent.com/ironlota/Seleksi-2017/create-react-app/client/screenshot/s2.png) <!-- .element height="50%" width="50%" -->
![s3](https://raw.githubusercontent.com/ironlota/Seleksi-2017/create-react-app/client/screenshot/s3.png) <!-- .element height="50%" width="50%" -->

## Version

1.0 Major Release

## Authors

* **Ray Andrew** - [Ironlota](https://github.com/ironlota)
* **Adrian HP** - [Adrian HP](https://github.com/adrianhp97)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details