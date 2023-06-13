function incrementAgeBy(users, increment) {
  const changedUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = JSON.parse(JSON.stringify(users[i]));
    
    user.age += increment;
    
    changedUsers.push(user);
  }
  return changedUsers;
}


function userNamesToUpperCase(users) {
  const changedUsers = [];
  for (let i = 0; i < users.length; i++) {
    const user = JSON.parse(JSON.stringify(users[i]));
    
    user.name = nameToUpperCase(user);
    
    changedUsers.push(user);
  }
  return changedUsers;
}


function transformElements(elements, transform) {
  const newElements = [];
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const transformedElement = transform(element);
    newElements.push(transformedElement);
  }
  return newElements;
}


function nameToUpperCase(user) {
  user.name = user.name.toUpperCase();
  return user;
}

function addSpacesBetweenNameChars(user) {
  user.name = user.name.split('').join(' ');
  return user;
}

function getUserName(user) {
  return user.name;
}


const users = [
  { name: 'Carlos', age: 33 },
  { name: 'Ana', age: 37 },
]
const olderUsers = incrementAgeBy(users, 10);
const upperNames = transformElements(users, nameToUpperCase);
const specialNames = transformElements(users, addSpacesBetweenNameChars);
const names = transformElements(users, getUserName);
const ages = transformElements(users, function(user) {
  return user.age;
});
const agesWithArrowFn = transformElements(users, (user) => user.age);

const agesWithMap = users.map((user) => user.age);

const grades = [1, 2, 3, 4, 5];
const doubles = grades.map((grade) => grade * 2);

console.log(grades);
console.log(doubles);

console.log(users);
console.log(olderUsers);
console.log(upperNames);
console.log(specialNames);
console.log(names);

const students = [
  { name: 'Javi' },
  { name: 'Luis' },
]

const studentsToLoweCase = students.map((student) => {
  student.name = student.name.toLowerCase();
  return student;
})
studentsToLoweCase.push({ name: 'Carlos' });

console.log(students);
console.log(studentsToLoweCase);
