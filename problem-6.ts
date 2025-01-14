interface Profile {
    name: string;
    age: number;
    email: string;
  }
  
  function updateProfile(object: Profile, updates: Partial<Profile>): Profile {
    return { ...object, ...updates };
  }
  const myProfile = { name: "Alice", age: 25, email: "alice@example.com" };
  console.log(updateProfile(myProfile, { age: 26 }));

  