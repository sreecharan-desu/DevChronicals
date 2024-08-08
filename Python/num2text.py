input_number=str(input("Enter any Number : "))
def digits(n):
    text_number='';text_number+='one' if n == ('1') else 'two' if n == '2' else 'three' if n == '3' else 'four' if n == '4' else 'five' if n == '5'else 'six' if n == '6' else 'seven' if n == '7' else 'eight' if n == '8' else 'nine' if n == '9' else ''
    return text_number
def double_digits(n):
    if len(n) == 1:digits(n)
    if n[0] == '1':text_number='';text_number+='ten' if n == '10' else 'eleven' if n == '11' else 'twelve' if n == '12' else 'thirteen' if n == '13' else 'fourteen' if n == '14' else 'fifteen' if n == '15'else 'sixteen' if n == '16' else 'seventeen' if n == '17' else 'eighteen' if n == '18' else 'nineteen' if n == '19' else '' 
    if n[0] != '1':
        c=0
        for i in range(len(n)):
            c=c+1
            if c == 1:f=n[0];text_number='';text_number+='twen' if f == '2' else 'thir' if f == '3' else 'four' if f == '4' else 'fif' if f == '5'else 'six' if f == '6' else 'seven' if f == '7' else 'eight' if f == '8' else 'nine' if f == '9' else '';text_number = text_number + 'ty ' 
            if c == 2:s=n[1];text_number+=digits(s);
    return text_number
def triple_digits(n):
    last_two_digits=str(int(n[1]+n[2]));
    if len(last_two_digits) == 1:text_number='';text_number=text_number+digits(n[0])+' hundred - ' + digits(last_two_digits)
    else:text_number='';text_number=text_number+digits(n[0])+' hundred - ' + double_digits(last_two_digits)
    return text_number
def four_digits(n):
    last_three_digits=str(int(n[1]+n[2]+n[3]));
    if len(last_three_digits) == 1:text_number='';text_number=text_number+digits(n[0])+' thousand - ' + digits(last_three_digits)
    elif len(last_three_digits) == 2:text_number='';text_number=text_number+digits(n[0])+' thousand - ' + double_digits(last_three_digits)
    else:text_number='';text_number=text_number+digits(n[0])+' thousand - ' + triple_digits(last_three_digits)
    return text_number
def five_digits(n):
    first_two_digits=str(int(n[0]+n[1]));last_four_digits=str(int(n[2]+n[3]+n[4]));
    if len(last_four_digits) == 1:text_number='';text_number=text_number+double_digits(first_two_digits)+' thousand - ' + digits(last_four_digits)
    elif len(last_four_digits) == 2:text_number='';text_number=text_number+double_digits(first_two_digits)+' thousand - ' + double_digits(last_four_digits)
    elif len(last_four_digits) == 3:text_number='';text_number=text_number+double_digits(first_two_digits)+' thousand - ' + triple_digits(last_four_digits)
    elif len(last_four_digits) == 4:text_number='';text_number=text_number+double_digits(first_two_digits)+' thousand - ' + four_digits(last_four_digits)
    return text_number
def six_digits(n):
    last_five_digits=str(int(n[1]+n[2]+n[3]+n[4]+n[5]));notation='';notation = ' lakh - ' if System == 'Indian' else ' hundred - ' 
    if len(last_five_digits) == 1:text_number='';text_number=text_number+digits(n[0])+notation + digits(last_five_digits)
    elif len(last_five_digits) == 2:text_number='';text_number=text_number+digits(n[0])+notation + double_digits(last_five_digits)
    elif len(last_five_digits) == 3:text_number='';text_number=text_number+digits(n[0])+notation + triple_digits(last_five_digits)
    elif len(last_five_digits) == 4:text_number='';text_number=text_number+digits(n[0])+notation + four_digits(last_five_digits)
    elif len(last_five_digits) == 5:text_number='';text_number=text_number+digits(n[0])+notation + five_digits(last_five_digits)
    return text_number
def seven_digits(n):
    notation='' ;notation = ' lakhs - ' if System == 'Indian' else ' million - ' 
    if notation == ' million - ':first_two_digits=str(int(n[0]));A = '';last_four_digits=str(int(n[1]+n[2]+n[3]+n[4]+n[5]+n[6]));A = digits(first_two_digits)
    else:first_two_digits=str(int(n[0]+n[1]));last_four_digits=str(int(n[2]+n[3]+n[4]+n[5]+n[6]));A = double_digits(first_two_digits)
    if len(last_four_digits) == 1:text_number='';text_number=text_number+A+ notation + digits(last_four_digits)
    elif len(last_four_digits) == 2:text_number='';text_number=text_number+A+ notation + double_digits(last_four_digits)
    elif len(last_four_digits) == 3:text_number='';text_number=text_number+A+ notation + triple_digits(last_four_digits)
    elif len(last_four_digits) == 4:text_number='';text_number=text_number+A+ notation + four_digits(last_four_digits)
    elif len(last_four_digits) == 5:text_number='';text_number=text_number+A+ notation + five_digits(last_four_digits)
    elif len(last_four_digits) == 6:text_number='';text_number=text_number+A+ notation + six_digits(last_four_digits)
    return text_number
def eight_digits(n):
    last_seven_digits=str(int(n[1]+n[2]+n[3]+n[4]+n[5]+n[6]+n[7]));notation='' ;notation = ' crore -' if System == 'Indian' else ' millions - ' ;A=''
    if notation == ' millions - ':first_two_digits=str(int(n[0]+n[1]));last_seven_digits=str(int(n[2]+n[3]+n[4]+n[5]+n[6]+n[7]));A = double_digits(first_two_digits)
    else:first_two_digits=str(int(n[0]));last_seven_digits=str(int(n[1]+n[2]+n[3]+n[4]+n[5]+n[6]));A = digits(first_two_digits)
    if len(last_seven_digits) == 1:text_number='';text_number=text_number+A+notation + digits(last_seven_digits)
    elif len(last_seven_digits) == 2:text_number='';text_number=text_number+A+notation + double_digits(last_seven_digits)
    elif len(last_seven_digits) == 3:text_number='';text_number=text_number+A+notation + triple_digits(last_seven_digits)
    elif len(last_seven_digits) == 4:text_number='';text_number=text_number+A+notation + four_digits(last_seven_digits)
    elif len(last_seven_digits) == 5:text_number='';text_number=text_number+A+notation + five_digits(last_seven_digits)
    elif len(last_seven_digits) == 6:text_number='';text_number=text_number+A+notation + six_digits(last_seven_digits)
    elif len(last_seven_digits) == 7:text_number='';text_number=text_number+A+notation + seven_digits(last_seven_digits)
    return text_number
def nine_digits(n):
    notation='' ;notation = ' crore - ' if System == 'Indian' else ' million - ' 
    if notation == ' million - ':
        first_two_digits=str(int(n[0]+n[1]+n[2]));last_seven_digits=str(int(n[3]+n[4]+n[5]+n[6]+n[7]+n[8]));A=triple_digits(first_two_digits)
    else:
        first_two_digits=str(int(n[0]+n[1]));last_seven_digits=str(int(n[2]+n[3]+n[4]+n[5]+n[6]+n[7]+n[8]));A=double_digits(first_two_digits)
    if len(last_seven_digits) == 1:text_number='';text_number=text_number+A+notation + digits(last_seven_digits)
    elif len(last_seven_digits) == 2:text_number='';text_number=text_number+A+notation + double_digits(last_seven_digits)
    elif len(last_seven_digits) == 3:text_number='';text_number=text_number+A+notation + triple_digits(last_seven_digits)
    elif len(last_seven_digits) == 4:text_number='';text_number=text_number+A+notation + four_digits(last_seven_digits)
    elif len(last_seven_digits) == 5:text_number='';text_number=text_number+A+notation + five_digits(last_seven_digits)
    elif len(last_seven_digits) == 6:text_number='';text_number=text_number+A+notation + six_digits(last_seven_digits)
    elif len(last_seven_digits) == 7:text_number='';text_number=text_number+A+notation + seven_digits(last_seven_digits)
    return text_number
def ten_digits(n):
    first_three_digits=str(int(n[0]+n[1]+n[2]));last_seven_digits=str(int(n[3]+n[4]+n[5]+n[6]+n[7]+n[8]+n[9]));notation='' ;A='';text_number='';notation = ' crores - ' if System == 'Indian' else ' billion - ' 
    if notation == ' billion - ':first_three_digits=str(int(n[0]));last_seven_digits=str(int(n[1]+n[2]+n[3]+n[4]+n[5]+n[6]+n[7]+n[8]+n[9]));A = digits(first_three_digits)
    else:
        first_three_digits=str(int(n[0]+n[1]+n[2]));last_seven_digits=str(int(n[3]+n[4]+n[5]+n[6]+n[7]+n[8]+n[9]));A = triple_digits(first_three_digits)
    if len(last_seven_digits) == 1:text_number=text_number+A+notation + digits(last_seven_digits)
    elif len(last_seven_digits) == 2:text_number='';text_number=text_number+A+notation + double_digits(last_seven_digits)
    elif len(last_seven_digits) == 3:text_number='';text_number=text_number+A+notation + triple_digits(last_seven_digits)
    elif len(last_seven_digits) == 4:text_number='';text_number=text_number+A+notation + four_digits(last_seven_digits)
    elif len(last_seven_digits) == 5:text_number='';text_number=text_number+A+notation + five_digits(last_seven_digits)
    elif len(last_seven_digits) == 6:text_number='';text_number=text_number+A+notation + six_digits(last_seven_digits)
    elif len(last_seven_digits) == 7:text_number='';text_number=text_number+A+notation + seven_digits(last_seven_digits)
    elif len(last_seven_digits) == 8:text_number='';text_number=text_number+A+notation + eight_digits(last_seven_digits)
    elif len(last_seven_digits) == 9:text_number='';text_number=text_number+A+notation + nine_digits(last_seven_digits)
    return text_number
def converting_system(input_number,system):
    length=len(input_number);temp_list=[];num=''
    for i in input_number:temp_list.append(i)
    if length < 4:
        print(input_number)
    elif length == 4:
        if system == 'i':temp_list.insert(1,',')
        elif system == 'f':temp_list.insert(1,',')
    elif length == 5:
        if system == 'i':temp_list.insert(2,',')
        elif system == 'f':temp_list.insert(2,',')
    elif length == 6:
        if system == 'i':temp_list.insert(1,',');temp_list.insert(4,',')
        elif system == 'f':temp_list.insert(3,',')
    elif length == 7:
        if system == 'i':temp_list.insert(2,',');temp_list.insert(5,',')
        elif system == 'f':temp_list.insert(1,',');temp_list.insert(5,',')
    elif length == 8:
        if system == 'i':temp_list.insert(1,',');temp_list.insert(4,',');temp_list.insert(7,',')
        elif system == 'f':temp_list.insert(2,',');temp_list.insert(6,',')
    elif length == 9:
        if system == 'i':temp_list.insert(2,',');temp_list.insert(5,',');temp_list.insert(8,',')
        elif system == 'f':temp_list.insert(3,',');temp_list.insert(7,',')
    elif length == 10:
        if system == 'i':temp_list.insert(3,',');temp_list.insert(6,',');temp_list.insert(9,',')
        elif system == 'f':temp_list.insert(1,',');temp_list.insert(5,',');temp_list.insert(9,',')
    for j in temp_list:num+=j
    return num
def comma_check(n):    
    condition=False
    for i in n:          
        if i == ',':condition = True
    return condition
def detect_system():
    if len(input_number) < 4 :print('Please Enter Commas In Valid Places')
    elif len(input_number) >= 4:system ='';length=len(input_number);index_of_comma='';
    for i in range(len(input_number)):
        if input_number[i] == ',':index_of_comma+=str(i)
        if index_of_comma == '1' or  index_of_comma == '2' or index_of_comma == '14' or index_of_comma == '25' or index_of_comma == '147' or index_of_comma == '258' or index_of_comma == '369':system = 'i'
        elif index_of_comma == '1' or  index_of_comma == '2' or index_of_comma == '3' or index_of_comma == '15' or index_of_comma == '26' or index_of_comma == '37' or index_of_comma == '159':system = 'f'
        num = input_number
    return system,num 
def system():
    prescence_of_comma = comma_check(input_number)
    if prescence_of_comma == True:
        num='';system = detect_system();c=0
        for i in system: 
            c=c+1
            if c == 1:system = i
            elif c == 1:num=i
    elif prescence_of_comma == False:
        def ask_system():
            system=str(input('Enter System (indian / foreign) [i or f] : '))
            return system
        num='';system=''
        if len(input_number) >=4:system=ask_system();num=converting_system(input_number,system)
        else:
                if len(input_number) == 1:num=input_number;system="Indian"
                elif len(input_number) == 2:num=input_number;system="Indian"
                elif len(input_number) == 3:num=input_number;system="Indian"
    return system,num
result=system();print(f"\n\nThe Number : {input_number}");c=0;s=''
for i in result:
    c=c+1
    if c == 1:
        if i == 'i':i='Indian'
        elif i == 'f':i='International'
        print(f"System : {i}");print(f"Converted Number According to '{i}' Number System : ",end="");System = i
    elif c == 2:
        Number = i
        if comma_check(input_number) == True:Number=input_number;print(input_number)
        else:print(Number)
        break
f_num=''
for i in Number:
    if i == ',':
        continue
    f_num+=i
Number=f_num
result=digits(Number) if len(Number) == 1 else double_digits(Number) if len(Number) == 2 else triple_digits(Number) if len(Number) == 3 else four_digits(Number) if len(Number) == 4 else five_digits(Number) if len(Number) == 5 else six_digits(Number) if len(Number) == 6 else seven_digits(Number) if len(Number) == 7 else eight_digits(Number) if len(Number) == 8 else nine_digits(Number) if len(Number) == 9 else ten_digits(Number) if len(Number) == 10 else ''
print("The Number in Words : ",result,"\n\n")



#Copyrights 
#	 @Sreecharan desu
