print("Hello, please type in your name:\n");
name = input();

print(f"The name you have entered is {name}");

string = "Hello World";
print(string);

tupple = ('This', 'is', 'a', 'tupple', 1, 2, 3);

print(tupple);

lis = ['this', 'is', 'a', 'list', 1, 2, 3];
print(lis);

if len(lis) > 0:
	print('list length is greater than 0');
elif len(lis) < 0:
	print('nothing in list')

if len(tupple) > 0:
	print('tupple length is greater than 0')

s = set();

s.add('set');
s.add('is another');
s.add('data type');
s.add('where each');
s.add('value in the set');
s.add('must be unique');
s.add(1);
s.add(2);

print(s)

obj = {"t1": "this is a", "t2": " dictionary data type"}
obj['t3'] = 'It is similar to Objects in JS. There is bracket notation'
obj["t4"] = 777

print(obj)
print(obj['t4'])