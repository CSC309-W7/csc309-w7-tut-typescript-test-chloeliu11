import type { User } from "./types";

export const apiResponse: unknown = [
  { name: "Tony", age: 23 },
  { name: "Kevin", age: "24" }, // invalid
  { name: "Jim", age: 25 },
];

export function getUsersData(): User[] {
  if(Array.isArray(apiResponse)){
    for (const obj of apiResponse) {
       if(typeof obj.name !== "string" || typeof obj.age !== "number"){
        obj.name = String(obj.name);
        obj.age = Number(obj.age);
       }
    }
  }
  else{
    console.log("Invalid data");  
  }
  
  return apiResponse as User[]; // intentionally unsafe
}

export function formatAges(users: User[]): string[] {
  return users.map((u) => u.age.toFixed(0));
}