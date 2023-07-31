# Toucan.js 🦤
![Toucan](https://images.pexels.com/photos/15478033/pexels-photo-15478033/free-photo-of-close-up-of-a-toucan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)
#

[![Coverage](https://codecov.io/gh/username/repository/branch/master/graph/badge.svg)](https://codecov.io/gh/username/repository)


## Description
Toucan is a JS library which allows you to create and manage JWT (JSON Web Token - <i>here know as a JSON Web Toucan looool </i>) the simplest way on both client and server side.

Toucan is also a very lighweight solution and its API is very simple to use.

Why wouldn't you change for Toucan ? 🤩

## Installation
To install the package, run the following command:

```bash
npm i toucan
```

Yes, no small talks, that's it.

## Usage
To use the package, you have to import it in your project:

```typescript
import Toucan from 'toucan';
```

### Create a Toucan instance
You can create a new instance of Toucan from a javascript object as a data payload or directly from an existing JWT you've stored somewhere.

```typescript
const FromData = new Toucan({ id: 1, name: 'john' }, { expiresIn: 10 });

const FromJWT = new Toucan('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImpvaG4iLCJpYXQiOjE2OTA4NDE0NTYsImV4cCI6MTY5MDg0NTA1Nn0.4m6mk7T8z0tuW18eV3WcaGgkeZa7FVTeIIIdOfvSZGA'); 

```
This the main strength of Toucan. Only one method to create a new instance from a data payload or from an existing JWT.

### Get the JWT or the data payload from the instance
Then, you can use the instance to get the JWT or the data payload.

```typescript
const MyToucan = new Toucan(payload: string | object, config: object);

MyToucan.getToken(); // returns the JWT
MyToucan.getPayload(); // returns the data payload
```

## API Reference
| Method         | Description                                                         | Parameters | Return Value       |
| -------------- | ------------------------------------------------------------------- | ---------- | ------------------ |
| `getToken()`   | Returns the JWT of the Toucan.                                      | None       | `string`           |
| `getPayload()` | Returns the data payload of Toucan's JWT                            | None       | `object`           |
| `isValid()`    | Tells you if the JWT contained in the Toucan is still valid.        | None       | `boolean`          |
| `isExpired()`  | Tells you if the JWT contained in the Toucan is expired.            | None       | `boolean`          |
| `getConfig()`  | Prints the config of the Toucan.                                    | None       | `object`           |
| `getInput()`   | Prints the initial param which was used to instantiate your Toucan. | None       | `string \| object` |


## Contributors
- [elcitrovmtgrande](https://www.linkedin.com/in/victormahe)

