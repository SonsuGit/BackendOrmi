# Q1
# 원주율 정수(3)만 출력하도록 코드를 짜보세요.
원주율 = 3.141592
print(int(원주율))

# Q2
# 다음 파이썬 문법 중에서 True로 사용하는 것을 고르시오.
# 1. None
# 2. 1
# 3. ""
# 4. 0
# 5. bool(0)
print('2번')

# Q3
# 인사말을 완성해주세요.
my_name = input("이름 입력: ")
print(f'안녕하세요. {my_name}입니다.')

# Q4
# 리스트 요소 삭제 방법으로 맞지 않는 것은?
# 1. del 구문
# 2. clear()
# 3. reverse()
# 4. remove()
# 5. pop()
print('3번')

# Q5
# 숫자를 입력 받고, 해당 값의 약수를 구하는 함수를 작성하시오.
num = int(input('숫자 입력: '))

def divisor(num):
    div = []
    for i in range(1, num//2+1):
        if num % i == 0:
            div.append(i)
        div.append(num)
    print(div)

divisor(num)

# Q6
# 함수는 리스트와 알파벳을 입력받습니다.
# 입력받은 리스트에서 알파벳이 몇 개 있는지 출력하는 함수를 만들어주세요.
def solution(l, a):
    num = 0
    for i in l:
        if i == l:
            num += 1
    return num

solution(['a', 'b', 'c', 'a', 'a'], 'a') # 정답 : 3

# Q7
#  함수는 2차원 리스트를 입력받습니다.
# 아래와 같이 2차원 리스트를 두번째 값을 기준으로 내림차순 정렬하는 함수를 만들어주세요.
def solution(l):
    return sorted(l, key = lambda x:x[1], reverse = True)

solution([[10, 5], [20, 3], [30, 4], [40, 1]]) 
# 정답 : [[10, 5], [30, 4], [20, 3], [40, 1]]

# Q8
# 2차원 리스트가 주어졌을 때 각 값의 차를 저장한 리스트를 출력해주세요.
def solution(l):
    result = []
    for i in range(len(l)):
        result.append(l[i][0]-l[i][1])
    return print(result)

solution([[10, 5], [20, 3], [30, 4], [40, 1]])
# 정답 : [[5], [17], [26], [39]]

# Q9
# 주어진 문자열의 합을 구하는 코드를 작성하세요.
def solution(s):
    s = list(map(int, s))
    return print(sum(s))

solution('11123') 
# 정답 : 8

# Q10
# 주어진 문자열에서 ‘!’와 공백을 없애는 코드를 작성하세요.
def solution(s):
    s = list(filter(lambda x : x != " " and x != "!", s))
    s="".join(s)
    return print(s)

solution('!hello!wor     ld!     ') 
# 정답 : helloworld