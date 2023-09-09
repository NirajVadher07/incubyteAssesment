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

  it("should move left", () => {
    ResolveCommand(['l'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('W');
    expect(Chandrayaan3.Top).to.equal('U');
  })

  it("should move right", () => {
    ResolveCommand(['r'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('E');
    expect(Chandrayaan3.Top).to.equal('U');
  })

  it("turn up", () => {
    ResolveCommand(['u'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('U');
    expect(Chandrayaan3.Top).to.equal('S');
  })

  it("turn down", () => {
    ResolveCommand(['d'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('D');
    expect(Chandrayaan3.Top).to.equal('N');
  })


  it("should move backward, should move forward, should move Forward, should move Forward , should move backward", () => {
    ResolveCommand(['b', 'f', 'f', 'f', 'b'], Chandrayaan3)

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('N');
  })

  it("should move forward, should turn right, should move forward", () => {
    ResolveCommand(['f', 'r', 'f'], Chandrayaan3)

    expect(Chandrayaan3.x).to.equal(1);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('E');
  })

  it("should move backward, should move forward, should move forward, turn left, turn left, should move forward", () => {
    ResolveCommand(['b', 'f', 'f', 'l', 'l', 'f'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('S');
  })


  it("turn left, turn left, turn right, turn left, turn left, turn right , turn right , turn left", () => {
    ResolveCommand(['l', 'l', 'r', 'l', 'l', 'r', 'r', 'l'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(0);
    expect(Chandrayaan3.z).to.equal(0);
    expect(Chandrayaan3.FaceDirection).to.equal('S');
  })

  it("turn left, turn down, turn left, turn left, turn down, turn right", () => {
    temp = new SpaceCraft("Chandrayaan 3", 0, 0, 0, 'S');

    ResolveCommand(['l', 'd', 'l', 'l', 'd', 'r'], temp);

    expect(temp.FaceDirection).to.equal('N');
    expect(temp.Top).to.equal('U');
  })

  it("turn down, turn down, turn down, turn left, turn left, turn up, turn up, turn up", () => {
    ResolveCommand(['d','d','d','l','l','u','u','u'],Chandrayaan3);

    expect(Chandrayaan3.FaceDirection).to.equal('N');
    expect(Chandrayaan3.Top).to.equal('D');
  })


  it("should move forward, turn right, turn up, should move backward, turn left", () => {
    ResolveCommand(['f', 'r', 'u', 'b', 'l'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(-1);
    expect(Chandrayaan3.FaceDirection).to.equal('N');
    expect(Chandrayaan3.Top).to.equal('W');
  })

  it("should move forward, turn right, turn up, should move backward, turn right", () => {
    ResolveCommand(['f', 'r', 'u', 'b', 'r'], Chandrayaan3);

    expect(Chandrayaan3.x).to.equal(0);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(-1);
    expect(Chandrayaan3.FaceDirection).to.equal('S');
    expect(Chandrayaan3.Top).to.equal('W');
  })

  it("Combination test case", ()=>{
    ResolveCommand(['f','r', 'l', 'l', 'f', 'u', 'f', 'f', 'u', 'd', 'd'], Chandrayaan3
    );
    
    expect(Chandrayaan3.x).to.equal(-1);
    expect(Chandrayaan3.y).to.equal(1);
    expect(Chandrayaan3.z).to.equal(2);
    expect(Chandrayaan3.FaceDirection).to.equal('W');
    expect(Chandrayaan3.Top).to.equal('U');
  })

});
