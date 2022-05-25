#!/user/bin/env python3
# -*- codeing: utf-8 -*-
'a test module'

__author__ = 'mc'

import sys
def test():
  args = sys.argv
  if len(args)==1:
    print('Hellom world !')
  elif len(args)==2:
    print('Hello, %s!' % args[1])
  else:
    print('Too many arguments !')
  
if __name__=='__main__':
  test()