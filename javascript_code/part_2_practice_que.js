// QS1. create a const object called
// "product" to store information shown in the picture .

// i this picture has:  name, rating, offer ,price

const product = {
    title:"Ball pen",
    rating: 4,
    offer:5,
    price:280
};

console.log(product);
// {title: 'Ball pen', rating: 4, offer: 5, price: 280}
//> typeof (product)
//< 'object'

// > "123" +1
// < 1231

//=================================
// QS 2: give a linkdin profile :
/*  here, has: username, followers count, following count, Follow button, no_of_post, details,  */

const  profile = {
    username:"@shradhakhapra",
    isFollow:true,
    followers:2342,
    following:322,

};
console.log(typeof profile) ; // object

console.log(typeof profile["username"]); // string.
console.log(typeof profile["isFollow"]);//boolean
// > typeof profile
// < 'object'

//==================================
