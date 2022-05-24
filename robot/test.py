#!/usr/bin/env python3.10
# -*- coding: UTF-8 -*- 
# from abstest import fact_iter
# from functools import reduce

# print(fact_iter(5))

# def add(x, y): 
#   return x * 10 + y

# res = reduce(add, [1, 3, 5, 7, 9])
# print(res)
# res = sorted([36, 5, -12, 9, -21], key=abs)
# print(res)

# def lazy_sum(*args):
#     def sum():
#         ax = 0
#         for n in args:
#             ax = ax + n
#         return ax
#     return sum

# f = lazy_sum(1, 3, 5, 7, 9)
# print(f())

# list(map(lambda x: x * x, [1, 2, 3, 4]))


# def log(func):
#   def wrapper(*args, **kw):
#     print('call %s():' % func.__name__)
#     return func(*args, **kw)
#   return wrapper

# @log
# def now():
#   print('2015-3-25')
# now()
# from email.mime import base
# import functools
# int2 = functools.partial(int, base=2)
# print(int2('11111'))