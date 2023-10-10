describe('Test /users', () => {
    describe('User check on /sync', () => {
      it('users should be okay', () => {
        const actualResult = UserCheckSync();
        expect(actualResult).to.equal('OK');
      });
    });
  });