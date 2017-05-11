# @datacite/mastiff [![Build Status](https://travis-ci.org/datacite/mastiff.png?branch=master)](https://travis-ci.org/datacite/mastiff)

Nodejs server for formatted citation of dois

## Installation

```sh
npm install @datacite/mastiff --save
```


## Tests

```sh
npm install
npm test
```
```

> @datacite/mastiff@0.0.7 test /Users/Kristian/datacite/mastiff
> node spec/test.js
Garza, Kristian, Carole Goble, John Brooke, and Caroline Jay. 2015. ‘Framing the Community Data System Interface’. Proceedings of the 2015 British HCI Conference on - British HCI ’15. Association for Computing Machinery (ACM). doi:10.1145/2783446.2783605.

```

## Dependencies

- [connect](https://github.com/senchalabs/connect): High performance middleware framework
- [jsdom](https://github.com/tmpvar/jsdom): A JavaScript implementation of the DOM and HTML standards
- [mocha](https://github.com/mochajs/mocha): simple, flexible, fun test framework
- [request](https://github.com/request/request): Simplified HTTP request client.
- [should](https://github.com/shouldjs/should.js): test framework agnostic BDD-style assertions

## Dev Dependencies

- [should](https://github.com/shouldjs/should.js): test framework agnostic BDD-style assertions


## License

MIT
