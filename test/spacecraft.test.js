const { expect } = require('chai');
const SpaceCraft = require('../spacecraft');
const ResolveCommand = require("../ResolveCommand");

describe('Chandrayaan3', () => {
  let Chandrayaan3;

  beforeEach(() => {
    Chandrayaan3 = new SpaceCraft("Chandrayaan 3");
  });

  it('should move forward', () => {
    ResolveCommand(['f'], Chandrayaan3)
    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('N');
  });

  it("should move backward", () => {
    ResolveCommand(['b'], Chandrayaan3)

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(-1);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('N');
  })


  it("should move backward, should move forward, should move Forward, should move Forward , should move backward", () => {
    ResolveCommand(['b', 'f', 'f', 'f', 'b'], Chandrayaan3)

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('N');
  })
});
