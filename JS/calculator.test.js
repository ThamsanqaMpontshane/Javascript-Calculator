describe("Calculator", function() {
    describe("add", function() {
        it("should be able to add two numbers", function() {
        assert.equal(add(1, 2), 3);
        });
    });

    describe("subtract", function() {
        it("should be able to subtract two numbers", function() {
        assert.equal(subtract(3, 2), 1);
        });
    });

    describe("multiply", function() {
        it("should be able to multiply two numbers", function() {
        assert.equal(multiply(3, 2), 6);
        });
    });

    describe("divide", function() {
        it("should be able to divide two numbers", function() {
        assert.equal(divide(6, 2), 3);
        });
    });
});
