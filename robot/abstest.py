import math
def my_abs(x): 
  if x > 0:
    return x;
  else:
    return -x;

def move(x, y, step, angle=0):
  nx = x + step * math.cos(angle)
  ny = y - step * math.sin(angle)
  return nx, ny

def person(name, age, **kw):
  print('name:', name, 'age:', age, 'other:', kw)

def person1(name, age, *, city, job):
  print(name, age, city, job)

def fact(n):
  if n == 1:
    return 1
  return n * fact(n-1)

def fact_iter(num, product = 1):
  if num == 1:
    return product;
  return fact_iter(num -1, product * num)

def fib(max):
  n, a, b = 0, 0, 1
  while n < max:
    print(b)
    a, b = b, a + b
    n = n + 1
  return 'done'