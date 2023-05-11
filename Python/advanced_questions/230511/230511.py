def writefile(func):
    def wrap(a, b):
        f = open("resultsss.txt", "w")
        f.write('{\n')

        f.write(f'\t"a": {a},\n')
        f.write(f'\t"b": {b},\n')
        f.write(f'\t"a+b": {a+b}\n')

        f.write('}')
        f.close()
    return wrap

@writefile
def add(a, b):
    return a + b

add(10, 20)
# writefile의 데코레이터 기능은 아래와 같은 형식으로 
# result.txt에 항상 저장되게 하는 것입니다.
# {
#     "a": 10,
#     "b": 20,
#     "a+b": 30
# }