let chatroom1 = new Map()
chatroom1.set('Adarsh', {
  msg1: "Hello, I am Adarsh",
  msg2: "I am from India",
  msg3: "I am Developer",
  msg4: " Lets Develop Something. ",
})
chatroom1.set('Hilary', {
  msg1: "Hello, I am Hilary",
  msg2: "I am from LA",
  msg3: "I am Developer",
  msg4: " Lets Develop. ",
})
chatroom1.set('Jack', {
  msg1: "Hello, I am Jack",
  msg2: "I am from LA",
  msg3: "I am Developer",
  msg4: " Lets Develop. ",
})


let chatroom2 = new Map()
chatroom2.set('Martin', {
  msg1: "Hello, I am Martin",
  msg2: "I am from LA",
  msgj3: "I am Developer",
  msg4: " Lets Develop. ",
})
chatroom2.set('Somi', {
  msg1: "Hello, I am Somi",
  msg2: "I am from LA",
  msg3: "I am Developer",
  msg4: " Lets Develop. ",
})
chatroom2.set('Jessie', {
  msg1: "Hello, I am Jessie",
  msg2: "I am from LA",
  msg3: "I am Developer",
  msg4: " Lets Develop. ",
})



console.log("Total Users in Chatroom1 : " +chatroom1.size)
chatroom1.forEach( (value, key, map) => {
  console.log(`${key}`); 
  console.log(chatroom1.get(`${key}`));
});

console.log("Total Users in Chatroom2 : " +chatroom2.size)
chatroom2.forEach( (value, key, map) => {
  console.log(`${key}`); 
  console.log(chatroom2.get(`${key}`));
});