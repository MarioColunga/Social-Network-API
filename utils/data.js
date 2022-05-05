const username = [
    'Uncle',
    'Bob',
    'Kelso',
    'Jack',
    'Sparrow',
    'VFor',
    'Vendetta',
    'Sean',
    'Maguire',
    'Sirius',
    'Black',
    'Doctor',
    'House',
    'The',
    'Joker',
    'Homer',
    'Simpson',
    ``,
  ];
  
  const thoughtTextBodies = [
    'If you look for light, you can often find it. But if you look for darkness, that is all you will ever see',
    'Nothing worth having in this world comes easy',
    'You can always trust a dishonest man to be dishonest; its the honest ones you need to look out for',
    'People should not be afraid of their governments. Governments should be afraid of their people',
    'You dont know about real loss because that only occurs when you love something more than you love yourself',
    'If you want to know what a mans like, take a good look at how he treats his inferiors, not his equals',
    'People like being lied to. They dont like finding out they have been lied to',
    'If you are good at something, never do it for free',
    'No matter how good you are at something, there is always about a million people better than you',
  ];
  
  const possibleReactions = [
    'Such a cool quote!',
    'That is very true',
    'I,ve never seen it that way',
    'That is so deep',
    'Increadibly',
    'Totally agree',
    'bravo, give him a beer',
  ];
  
  const users = [];
  

  const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];
  
  
  const getRandomName = () =>{
    const randomNameOne = getRandomArrItem(username);
    const randomNameTwo = getRandomArrItem(username);
    const randomName = randomNameOne+randomNameTwo;
    return `${randomName} ${randomName}@fakemail.com`;
  }

  const getRandomThoughts = (int,friendsArray) => {
    let results = [];
    for (let i = 0; i < int; i++) {
      const usernameThought = getRandomArrItem(friendsArray);
  
      results.push({
  
        thoughtText: getRandomArrItem(thoughtTextBodies), 
        username: usernameThought,
        reactions: [...getThoughtReactions(3,friendsArray)],
       
      });
    }
    return results;
  };

  const getThoughtReactions = (int,usernameReactionArray) => {
    if (int === 1) {
      return getRandomArrItem(possibleReactions);
    }
    let results = [];
    for (let i = 0; i < int; i++) {   
      const usernameReaction = getRandomArrItem(usernameReactionArray);
  
      results.push({
        reactionBody: getRandomArrItem(possibleReactions),
        username: usernameReaction,
      });
    }
    return results;
  };

  const getRandomFriends = (usernameArray) => {
    let results = [];

    let lengthFriends = Math.floor(Math.random() * usernameArray.length)

    for (let i = 0; i < lengthFriends; i++) {
  
      const usernameFriend = getRandomArrItem(usernameArray);
         
      results.push({     
        username: usernameFriend,
      });
    }
    
    return results;
  };
  

  module.exports = { getRandomName, getRandomThoughts, getRandomFriends};