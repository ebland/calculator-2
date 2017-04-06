"""Math functions for calculator."""


def add(nums):
    """Return the sum of the two input integers."""
    total = 0
    for num in nums[1:]:
        total = int(num) + total
    return total


def subtract(nums):
    """Return the second number subtracted from the first."""

    return num1 - num2


def multiply(nums):
    """Multiply the two inputs together."""
 
    return num1 * num2


def divide(nums):
    """Divide the first input by the second, returning a floating point."""

    # Need to turn at least one argument to float for division to
    # not be integer division

    return float(num1) / num2


def square(nums):
    """Return the square of the input."""

    # Needs only one argument

    return num1 * num1


def cube(nums):
    """Return the cube of the input."""

    # Needs only one argument

    return num1 * num1 * num1


def power(nums):
    """Raise num1 to the power of num and return the value."""

    return num1 ** num2  # ** = exponent operator


def mod(nums):
    """Return the remainder of num / num2."""

    return num1 % num2
