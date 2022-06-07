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
    type ExtractContact = Extract<Person, Contact>
    // Person 不是继承类型 Contact，所以结果返回 never
    // ExtractContact {
    //   name: string;
    //   phone: string;
    // }
  }
  
  {
    type ExtractContact = Extract<Contact, Person>
    // Contact 是继承类型 Person，所以结果返回 Person
    // ExtractContact {
    //   name: string;
    //   phone: string;
    // }
  }
}

{
  type Animal = 'dog' | 'cat' | 'tiger' | 'rabbit'
  type LikeAnimal = 'dog' | 'rabbit'

  {
    type ExtractAnimal = Extract<Animal, LikeAnimal>
  // ====> 等价于
  // type ExtractAnimal = ('dog' extends 'dog' | 'rabbit' ? 'dag' : never) // ===> 'dog'
  //                    | ('cat' extends 'dog' | 'rabbit' ? 'cat' : never) // ===> never
  //                    | ('tiger' extends 'dog' | 'rabbit' ? 'tiger' : never) // ===> never
  //                    | ('rabbit' extends 'dog' | 'rabbit' ? 'rabbit' : never) // ===> 'rabbit'
  //                    // 所以结果就是 type ExtractAnimal = 'dog' | never| never | 'rabbit' = 'dog' | 'rabbit'
  
  }
  
  {
    type ExtractAnimal = Extract<LikeAnimal, Animal>
    // ====> 等价于
    // type ExtractAnimal = ('dog' extends 'dog' | 'cat' | 'tiger' | 'rabbit' ? 'dog' : never) // ===> 'dog'
    //                   | ('rabbit' extends 'dog' | 'cat' | 'tiger' | 'rabbit' ? 'rabbit' : never) // ===> 'rabbit'
    //                   // 所以结果就是 type ExtractAnimal = never | never = never
  }
}