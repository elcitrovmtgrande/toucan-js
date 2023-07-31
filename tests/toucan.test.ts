const { Toucan } = require('../dist');

describe('Toucan', () => {
  const payload = { name: 'John Doe', email: 'john.doe@gmail.com', age: 42 };

  describe('Toucan can be instanciated from an object payload', () => {


    it('should not throw an error', () => {
      expect(() => {
        new Toucan(payload);
      }).not.toThrow();
    });

    it('should return an instance of Toucan', () => {
      const toucan = new Toucan(payload);
      expect(toucan).toBeInstanceOf(Toucan);
    });

    it('should return the same payload', () => {
      const toucan = new Toucan(payload);
      const output = toucan.getPayload();
      delete output.iat;
      delete output.exp;
      expect(output).toEqual(payload);
    });

    it('should return a JWT which contains the payload', () => {
      const toucan = new Toucan(payload);
      const token = toucan.getToken();
      const data = toucan.getPayload();

      delete data.iat;
      delete data.exp;

      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(data).toEqual(payload);
    });

    it('should return a JWT which is valid', () => {
      const toucan = new Toucan(payload);
      const token = toucan.getToken();
      const data = toucan.getPayload();

      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(toucan.isValid()).toBe(true);
    });

    it('should return a JWT which is not expired', () => {
      const toucan = new Toucan(payload);
      const token = toucan.getToken();
      const data = toucan.getPayload();

      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(toucan.isExpired()).toBe(false);
    });

    it('should return an authentic JWT', () => {
      const toucan = new Toucan(payload);
      const token = toucan.getToken();
      const data = toucan.getPayload();

      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(toucan.isAuthentic()).toBe(true);
    });
  });

  describe('Toucan can be instanciated from a JWT', () => {
    const T = new Toucan(payload);
    const token = T.getToken();

    it('should not throw an error', () => {
      expect(() => {
        new Toucan(token);
      }).not.toThrow();
    });

    it('should return an instance of Toucan', () => {
      const toucan = new Toucan(token);
      expect(toucan).toBeInstanceOf(Toucan);
    });

    it('should return the same payload', () => {
      const toucan = new Toucan(token);
      const outputPayload = toucan.getPayload();
      delete outputPayload.iat;
      delete outputPayload.exp;

      expect(toucan.getPayload()).toEqual(payload);
    });

  });

  describe("Toucan doesn't accept any kind of innitial value", () => {
    it('should throw an error if the initial value is not an object or a string', () => {
      expect(() => {
        new Toucan(42);
      }).toThrow();
    });
  });

  describe('Toucan can tell you if it is expired', () => {
    it('should return true if the JWT is expired', () => {
      const toucan = new Toucan(payload, { expiresIn: -1 });
      expect(toucan.isExpired()).toBe(true);
      expect(toucan.isValid()).toBe(false);
    });
  });

  describe('Toucan has some decent accessors', () => {
    it('should return the initial input', () => {
      const toucan = new Toucan(payload);
      expect(toucan.getInput()).toEqual(payload);
    });

    it('should return the initial config', () => {
      const config = { expiresIn: 20000 };
      const toucan = new Toucan(payload, config);
      expect(toucan.getConfig()).toEqual(config);
    });

    it('should return a JWT', () => {
      const toucan = new Toucan(payload);
      expect(toucan.getToken()).toBeTruthy();
      expect(typeof toucan.getToken()).toBe('string');
    });

    it('should return the payload', () => {
      const toucan = new Toucan(payload);
      const data = toucan.getPayload();
      delete data.iat;
      delete data.exp;
      expect(data).toEqual(payload);
    });
  });

});
