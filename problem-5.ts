function getProperty<P, K extends keyof P>(obj:P, key:K): P[K] {
    return obj[key];
  }
  const person = { name: "Alice", age: 30 };
  console.log(getProperty(person, "name"));
 
  