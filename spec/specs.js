describe('romanize', function() {
  it("will take the input of 3000 and return MMM", function() {
    expect(romanize(3000)).to.equal("MMM");
  });

  it("will take the input of 2 and return II ", function() {
    expect(romanize(2)).to.equal('II');
  });

  it("will take the input of 4 and return IV ", function() {
    expect(romanize(4)).to.equal('IV');
  });

  it("will take the input of 14 and return XIV ", function() {
    expect(romanize(14)).to.equal('XIV');
  });


  it('will take an input of 1000 and return M', function() {
    expect(romanize(1000)).to.equal('M');
  });

});
