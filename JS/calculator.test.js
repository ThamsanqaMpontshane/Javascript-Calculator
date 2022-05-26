describe("Calculator", function() {
    describe("add", function() {
        it("shouldadd two numbers", function() {
        assert.equal(add(1, 2), 3);
        });
    });

    describe("subtract", function() {
        it("shouldsubtract two numbers", function() {
        assert.equal(subtract(3, 2), 1);
        });
    });

    describe("multiply", function() {
        it("shouldmultiply two numbers", function() {
        assert.equal(multiply(3, 2), 6);
        });
    });

    describe("divide", function() {
        it("should ba ble divide two numbers", function() {
        assert.equal(divide(6, 2), 3);
        });
    });

});
