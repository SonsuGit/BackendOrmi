# 과제 해보기 get, insert, remove등?
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        init = Node('init')
        self.head = init
        self.tail = init
        self.count = 0

    def __iter__(self):
        currentNode = self.head
        currentNode = currentNode.next
        while currentNode:
            yield currentNode.data
            currentNode = currentNode.next

    def __len__(self):
        return self.count

    def __str__(self):
        s = ''
        currentNode = self.head
        currentNode = currentNode.next
        for i in range(self.count):
            s += f'{currentNode.data}, '
            currentNode = currentNode.next
        return f'<{s[:-2]}>'

    def append(self, data):
        newNode = Node(data)
        self.tail.next = newNode
        self.tail = newNode
        self.count += 1

    def get(self, index):
        if index > self.count-1:
            return print("index가 리스트의 크기를 벗어났습니다.")
        currentNode = self.head
        currentNode = currentNode.next # 첫 번째는 init이라 한번 해줘야 0번째부터 시작함
        for _ in range(index):
            currentNode = currentNode.next
        return currentNode.data


    def insert(self, index, data):
        if index > self.count-1:
            return print("index가 리스트의 크기를 벗어났습니다.")
        currentNode = self.head
        currentNode = currentNode.next
        for _ in range(index-1): # 지시한 인덱스에 집어넣으려면 그 인덱스 직전의 노드의 next에 값을 넣어야함
            currentNode = currentNode.next # index 노드까지 찾아감
        nextNode = currentNode.next # index 노드 다음것 저장
        newNode = Node(data) # 새 노드 생성
        currentNode.next = newNode # 기존 노드 다음 노드로 새 노드
        newNode.next = nextNode # 새 노드 다음 노드는 index 노드 다음것
        self.count += 1
    
    def remove(self, index):
        if index > self.count-1:
            return print("index가 리스트의 크기를 벗어났습니다.")
        currentNode = self.head
        currentNode = currentNode.next
        for _ in range(index-1): # 지시한 인덱스에 집어넣으려면 그 인덱스 직전의 노드의 next에 값을 넣어야함
            currentNode = currentNode.next # index 노드까지 찾아감
        nextNode = currentNode.next.next
        currentNode.next = nextNode
        self.count -= 1

    def pop(self):
        lastValue = self.tail.data
        currentNode = self.head
        for i in range(self.count):
            if currentNode.next is self.tail:
                self.tail = currentNode
                break
            currentNode = currentNode.next
        self.count -= 1
        return lastValue

    def find(self, data):
        index = -1
        currentNode = self.head
        for i in range(self.count):
            if currentNode.data == data:
                return index
            index += 1
            currentNode = currentNode.next
        return index
        
l = LinkedList()
l.append(90)
l.append(2)
l.append(77)
l.append(35)
l.append(21)
print(l)
print(l.get(1))
l.insert(2, 90)
print(l)
l.remove(3)
print(l)