## Union Types in TypeScript ##

Union types in TypeScript specify a variable with multiple possible types. This can be very useful when a variable accept different types of values and offer flexibility while maintaining type safety.

# Definition

A union type represents a value that can be one of several types. 

# Symbol
The pipe (`|`) symbol is used between two or more types to define union type in Typescript.
.

# Syntax
```typescript
let variableName: Var1 | Var2 | Var3;
```

For example,We want a variable to accept either a number or a string. This can be declared like this:

```typescript
let value: number | string;
value = "Hello"; // valid
value = 42; // also valid
```

# Real-World Example

Let's consider a simple function that logs a message to the console. Sometimes, the message might be a string, but other times it might be a number (like an error code).

```typescript
function showMessage(message: string | number) {
  console.log(message);
}

showMessage("Hello, World!"); 
showMessage(404);            
```

By using a union type (`string | number`), `showMessage` can handle both types without causing type errors.

# Benefits of Using Union Types

1. Flexibility: We can accept different types without losing type safety.
2. Type Checking: TypeScript will perform type checks on union types and catch potential bugs.







## Intersection Types in TypeScript ##

Intersection types in TypeScript allow to combine multiple types into a single type. This is useful when an object to have all the properties of multiple types. Intersection types provide a way to enforce a combination of multiple types.

# Definition

An intersection type represents a combination of two or more types. 

# Symbol
The ampersand (`&`) symbol is used between two or more types to define intersection type in Typescript.

# Syntax
```typescript
let variableName: Var1 & Var2 & Var3;
```

For example, if we want a variable to satisfy both `Student` and `Employee` types, you can define it like this:

```typescript
type Student = { name: string; class: number; };
type Employee = { employeeId: number; position: string; };

let employeeDetails: Person & Employee = {
  name: "Shahin",
  age: 24,
  employeeId: 103,
  position: "Developer"
};
```

Here, `employeeDetails` is required to have properties from both `Student` and `Employee`.

# Real-World Example

Imagine we are building a system where some users are also administrators. You could define separate types for `User` and `Admin`, and then use an intersection type to create a type for a `UserAdmin` who is both a user and an admin.

```typescript
type User = { username: string; email: string; };
type Admin = { adminCode: string; permissions: string[]; };

let userAdmin: User & Admin = {
  username: "shshin",
  email: "shahin@gmail.com",
  adminCode: "ADMIN23",
  permissions: ["READ", "WRITE", "DELETE"]
};
```

In this case, `userAdmin` has properties of both `User` and `Admin` types.

# Benefits of Using Intersection Types

1. Combining Types: Intersection types allow you to create types that satisfy multiple constraints.
2. Type Safety: TypeScript checks that an intersection type includes all required properties from each type.



## Conclusion

Union Types and Intersection types in TypeScript provide a way to enforce that an object meets multiple criteria. They help make your code more strong and flexible when we need objects with combined properties.
