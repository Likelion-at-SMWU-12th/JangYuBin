#1
print('='*30)
print('회원가입')
print('='*30)

while True:
    print('회원가입을 진행하시겠습니까?')
    print('y: 진행      n: 취소')
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



    