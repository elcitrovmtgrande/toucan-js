# JW-Toucan 🦤
![Toucan](https://images.pexels.com/photos/15478033/pexels-photo-15478033/free-photo-of-close-up-of-a-toucan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)
#

[![Coverage](https://codecov.io/gh/username/repository/branch/master/graph/badge.svg)](https://codecov.io/gh/username/repository)


## Description
Toucan is a JS library that lets you create and manage JSON Web Tokens (JWTs). But we're not going to call it just JWT, that's too boring! Let's call it "JSON Web Toucan" instead. 🤣 This awesome library makes working with JWTs a piece of cake, whether you're on the client or server side.

Toucan is super lightweight and has a really simple and easy-to-use API. So, why stick to the old ways when you can fly high with Toucan? 🤩

## Installation
To install this amazing package, run the following command:

```bash
npm i jw-toucan
```

That's it, no need for small talk. You're ready to roll!

## Usage
To start using Toucan, just import it into your project:

```typescript
import Toucan from 'jw-toucan';
```

### Create a Toucan instance
You can create a new instance of Toucan from a JavaScript object as a data payload or directly from an existing JWT you've stored somewhere.

```typescript
const FromData = new Toucan({ id: 1, name: 'john' }, { expiresIn: 10 });

const FromJWT = new Toucan('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwibmFtZSI6ImpvaG4iLCJpYXQiOjE2OTA4NDE0NTYsImV4cCI6MTY5MDg0NTA1Nn0.4m6mk7T8z0tuW18eV3WcaGgkeZa7FVTeIIIdOfvSZGA'); 

```
This is where Toucan shines! With just one method, you can create a new instance from a data payload or an existing JWT.

### Get the JWT or the data payload from the instance
Once you have your Toucan instance, you can easily get the JWT or the data payload.

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

Keep on coding and let your Toucan fly high! 🚀