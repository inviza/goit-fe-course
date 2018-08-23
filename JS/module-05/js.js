const initialUsers = [
  { id: "-s19a6hqce", login: "mangozedog@mail.com", password: "qwe123zv", isActive: true },
  { id: "-qkpzenjxe", login: "polysweet@skynet.ze", password: "123zxc78", isActive: true },
  { id: "-e51cpd4di", login: "ajax2k@change.ua", password: "ert234qw", isActive: false }
];

const initialPosts = {
  "-s19a6hqce": [
    { id: "-5sgljaskg", text: "post #1", likes: 3 },
    { id: "-199hb6igr", text: "post #2", likes: 5 },
    { id: "-hy0eyw5qo", text: "post #3", likes: 13 }
  ],
  "-qkpzenjxe": [
    { id: "-5tu69g5rf", text: "post #1", likes: 8 },
    { id: "-bje766393", text: "post #2", likes: 15 }
  ],
  "-e51cpd4di": [
    { id: "-9y6nkmlj4", text: "post #1", likes: 18 },
    { id: "-i03pbhy3s", text: "post #2", likes: 45 }
  ],
};


function SocialBook(users = [], posts = {}){
  this.users = users; 
  this.posts = posts;

  this.getAllUsers = function(){
      return this.users;
  }

  this.getUserByLogin = function(login){
     return this.users.find(user => user.login === login); 
  }

  this.isUserActive = function(userId){
      return this.users.find(user => user.id === userId).isActive;
  }

  this.getActiveUsers = function(){
      return this.users.filter(user => user.isActive); 
  }

  this.updateUserById = function(userId, obj){
      Object.assign(this.users.find(user => user.id === userId), obj);

  }
  
  this.addUser = function(user){
      const getId = () => "-" + Math.random().toString(36).substr(2, 9);
      user.id = getId(); 
      user.isActive = false; 
      this.users.push(user); 

  } 
 
  this.removeUserById = function(userId){ 
  
      // this.users = this.users.filter(user => user.id !== userId); 
      users.splice(users.indexOf((users.find(user => user.id === userId))),1); 
  }

  this.getUsersCount = function(){
      return users.length; 
  }

  this.getUserPosts = function(userId){
      return this.posts[userId];
  }

  this.addPost = function(userId, post){
      this.posts[userId].push(post); 
  }
  
  this.removePost = function(userId, postId){
      this.posts[userId] = this.posts[userId].filter(post => post.id !== postId); 
  }
  
  this.getAllLikes = function(userId){
      return this.posts[userId].reduce((acc, post)=>acc + post.likes,0); 
  }

  this.addPostLike = function(userId, postId){
      this.posts[userId].find(post => post.id === postId).likes += 1; 
  }

  this.getPostsCount = function(userId){
      return this.posts[userId].length; 
  }
}


const palladin = new SocialBook(initialUsers, initialPosts); 

console.log(palladin.getAllUsers());
console.log(palladin.getUserByLogin('mangozedog@mail.com'));
console.log(palladin.isUserActive('-s19a6hqce'));
console.log(palladin.getActiveUsers());
const newUser = {
 login : 'hello@gmail.com',
 password: 'asssss'}
 palladin.addUser(newUser);
 palladin.updateUserById('-s19a6hqce',newUser); 
 palladin.removeUserById('-qkpzenjxe');
console.log(palladin.getUsersCount());
console.log(palladin.getUserPosts('-s19a6hqce'));
const newPost = {
   id: "-5sgljaskg",
   text: "check for grizli",
   likes: 17}
   palladin.addPost('-s19a6hqce',newPost); 
console.log(palladin.getAllLikes('-s19a6hqce'));
palladin.addPostLike('-s19a6hqce','-hy0eyw5qo');
console.log(palladin.getPostsCount('-e51cpd4di'));