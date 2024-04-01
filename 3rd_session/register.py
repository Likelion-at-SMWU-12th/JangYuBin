#1
print('='*30)
print('회원가입')
print('='*30)

while True:
    print('회원가입을 진행하시겠습니까?')
    print('y: 진행          n: 취소')
    answer = input('>> ').lower()
    if answer == 'y':
        print('='*30)
        print('회원가입이 진행됩니다.')
        print('='*30)
        break
    elif answer == 'n':
        print('='*30)
        print('회원가입이 취소됩니다.')
        print('='*30)
        exit()
    else:
        print("'y' 또는 'n'를 입력해주세요.")


#2
users = []

while True:
    user = {}

    username = input('ID: ')  # 아이디 입력

    while True:  # 비밀번호 입력
        pwd = input('비밀번호: ')
        pwd2 = input('비밀번호 확인: ')
        if pwd == pwd2:
            break
        else:
            print("비밀번호가 일치하지 않습니다.")

    name = input('이름: ')  # 이름 입력

    while True:  # 생일 입력
        birth = input("생년월일(6자리): ")
        if len(birth) == 6:
            break
        else:
            print("생년월일은 여섯 자리로 입력해주세요.")
    
    email = input("이메일: ")  # 이메일 입력

#3
    user['username'] = username
    user['password'] = pwd
    user['name'] = name
    user['birth'] = birth
    user['email'] = email

    users.append(user)
    print(users)

    print('='*30)
    print(user['name'], "님, 가입을 환영합니다!")
    print('='*30)
    print("회원가입을 추가로 진행하시겠습니까?")
    print("y: 진행          n: 취소")
    answer = input('>> ').lower()

    if answer == 'y':
        pass
    elif answer == 'n':
        exit()
    else:
        exit()