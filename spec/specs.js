describe("countUp",function(){
  it("counts up by inputted value to a specified number", function(){
    expect(countUp(2,7)).to.equal("2,4,6");
  });
//scripts.js looks great but seems to have some functionality that is not tested for here in your specs file. It works fine but if you add other business code later, it might break things like abs that are not tested for.
});
