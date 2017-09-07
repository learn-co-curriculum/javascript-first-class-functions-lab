const expect = chai.expect;

describe("index", function() {
  describe("`countdown` function", function() {
    before(function() {
      let useFakeTimers = null;

      if (typeof sinon === "undefined") {
        useFakeTimers = require("sinon").useFakeTimers;
      } else {
        useFakeTimers = sinon.useFakeTimers;
      }

      this.clock = sinon.useFakeTimers();
    });

    after(function() {
      this.clock.restore();
    });

    it("should exist", function() {
      expect(countdown).to.exist;
    });

    it("should have called the given callback function after two seconds", function() {
      const testObj = {
        callback: function() {}
      };

      const spy = sinon.spy(testObj, "callback");
      countdown(testObj.callback);

      expect(spy.called).to.eq(false);

      this.clock.tick(2001);

      expect(spy.called).to.eq(true);
    });
  });

  describe("`createMultiplier` function", function() {
    it("should exist", function() {
      expect(createMultiplier).to.exist;
    });

    it("should return a function", function() {
      const doubler = createMultiplier(2);
      expect(doubler).to.be.a("function");
    });

    it("should multiply a given value using the created multiplier", function() {
      const doubler = createMultiplier(2);
      expect(doubler(5)).to.eq(10);
    });
  });

  describe("Multiplier functions created with `createMultiplierBonus`", function() {
    it("should have a doubler function", function() {
      expect(doubler).to.exist;
      expect(doubler).to.be.a("function");
      expect(doubler(5)).to.eq(10);
    });

    it("should have a tripler function", function() {
      expect(tripler).to.exist;
      expect(tripler).to.be.a("function");
      expect(tripler(5)).to.eq(15);
    });
  });

  describe("`multiplier()` with partial application", function() {
    it("should exist", function() {
      expect(multiplier).to.exist;
    });

    it("should have a doubler function created using `.bind()`", function() {
      if (typeof server !== "undefined" && server && !hasUsedBind) {
        throw new Error(
          "No cheating! Make sure to use `.bind()` for this solution!"
        );
      }

      expect(doublerWithBind).to.exist;
      expect(doublerWithBind).to.be.a("function");

      expect(triplerWithBind).to.exist;
      expect(triplerWithBind).to.be.a("function");
    });
  });
});
