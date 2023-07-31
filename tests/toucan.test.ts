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
      expect(toucan.getPayload()).toEqual(payload);
    });

    it('should return a JWT which contains the payload', () => {

      const toucan = new Toucan(payload);
      const token = toucan.getToken();
      const data = toucan.getPayload();

      console.log(token);
      expect(token).toBeTruthy();
      expect(typeof token).toBe('string');
      expect(data).toEqual(payload);
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

});
