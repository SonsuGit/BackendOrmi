`
def factorial(n):
    if n <= 1:
        return 1
    return n * factorial(n-1)

# n * (n-1) * (n-2) * ... * 1
`;

function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
