#!/usr/bin/env python3.10
# -*- coding: UTF-8 -*- 
# name = input('please enter your name: ')
# print('hello,', name)


# a = 100
# if a > 0:
#   print(a)
# else:
#   print(-a)

# aee = int(input("请输入您的年龄第一个数字："))
# ape = int(input("请输入您的年龄第一个数字："))
# age = aee*10 + ape
# if age > 60:    
#   print("你已经老了都",age,"岁啦！")
# elif age > 30:    
#   print("恭喜你正值中年")
# else:    
#   print("还年轻")
# from abstest import my_abs  
# from abstest import move
# from abstest import person
# from abstest import person1
# from abstest import fact
# import math         
# print(True and True)
# print(True or True)
# print(not 0)
# print(10 / 3)
# print(10 // 3)
# print(10 % 3)

# classmates = [1, 2, 3]
# print(len(classmates))
# print(classmates[0])
# classmates.append(4);
# print(len(classmates))
# t = (1,)
# m = (1, 2)
# print(t[0])
# print(m)

# print(abs(100))
# print(abs(-10))
# res = my_abs(-9)
# print(res)

# if res > 0:
#   pass

# x, y = move(100, 100, 60, math.pi / 6)
# print(x, y)

# person('stone', 12)
# person('stone', 12, a=1, b=2, c=3)
# person1('stone', 12, city=1, job=2)
# print(fact(10))
# L = list(range(100))
# print(L[0:50])
# from pydoc import stripid
# from collections.abc import Iterable


# def trim(s):
#     while s[:1] == ' ':
#       s = s[1:]
#     while s[-1:] == ' ':
#       s = s[:-1]
#     return s
# print(trim(' hello '))
# print(trim(' hello ') == 'hello')
# print(isinstance('abc', Iterable))
# print(isinstance([1,2,3], Iterable))
# print(isinstance(123, Iterable))

# for i, value in enumerate(['a', 'b', 'c']):
#   print(i, value)
# list = [x * x for x in range(1, 11)]
# print(list)
import os
item = [d for d in os.listdir('.')]
print(item)