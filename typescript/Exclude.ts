{
  interface Contact{
    name: string;
    phone: string;
    email: string;
    avatar: string;
    userid: string;
  }
  
  interface Person {
    name: string;
    phone: string;
  }
  
  
  {
    type ExcludeContact = Exclude<Person, Contact>
    // Person 不是继承类型 Contact，所以结果返回 Person
    // ExcludeContact {
    //   name: string;
    //   phone: string;
    // }
  }
  
  {
  
    type ExcludeContact = Exclude<Contact, Person>
    // Contact 是继承类型 Person，所以结果返回 never
    // ExcludeContact {
    //   name: string;
    //   phone: string;
    // }
  }
}

// -----------------
{
  type Animal = 'dog' | 'cat' | 'tiger' | 'rabbit'
  type LikeAnimal = 'dog' | 'rabbit'
  
  {
    type ExcludeAnimal = Exclude<Animal, LikeAnimal>
  // ====> 等价于
  // type ExcludeAnimal = ('dog' extends 'dog' | 'rabbit' ? never : 'dog') // ===> never
  //                    | ('cat' extends 'dog' | 'rabbit' ? never : 'cat') // ===> 'cat'
  //                    | ('tiger' extends 'dog' | 'rabbit' ? never : 'tiger') // ===> 'tiger'
  //                    | ('rabbit' extends 'dog' | 'rabbit' ? never : 'rabbit') // ===> never
                     // 所以结果就是 type ExcludeAnimal = never | 'cat' | 'tiger' | never = 'cat' | 'tiger'
  }
  
  {
    type ExcludeAnimal = Exclude<LikeAnimal, Animal>
    // ====> 等价于
    // type ExcludeAnimal = ('dog' extends 'dog' | 'cat' | 'tiger' | 'rabbit' ? never : 'dog') // ===> never
    //                    | ('rabbit' extends 'dog' | 'cat' | 'tiger' | 'rabbit' ? never : 'cat') // ===> never
                       // 所以结果就是 type ExcludeAnimal = never | never = never
  }
}
