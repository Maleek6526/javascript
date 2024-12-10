const users = [
    {
      id: 1,
      name: 'Alice',
      age: 25,
      purchases: [
        { item: 'Laptop', price: 1200 },
        { item: 'Phone', price: 800 }
      ]
    },
    {
      id: 2,
      name: 'Bob',
      age: 30,
      purchases: [
        { item: 'Tablet', price: 600 },
        { item: 'Headphones', price: 200 }
      ]
    },
    {
      id: 3,
      name: 'Charlie',
      age: 35,
      purchases: [
        { item: 'Monitor', price: 300 },
        { item: 'Keyboard', price: 100 },
        { item: 'Mouse', price: 50 }
      ]
    },
  ];
  

  const usersAbove28 = users.filter(user => user.age > 28).map(user => user.name);
  console.log(usersAbove28);
  

  users.forEach(user => {
    user.totalSpent = user.purchases.reduce((acc, purchase) => acc + purchase.price, 0);
  });
  console.log(users);
  

  const mostExpensiveItem = users.reduce((max, user) => {
    const userMostExpensive = user.purchases.reduce((maxPurchase, purchase) => purchase.price > maxPurchase.price ? purchase : maxPurchase, { price: 0 });
    return userMostExpensive.price > max.price ? userMostExpensive : max;
  }, { price: 0 });
  console.log(mostExpensiveItem);
  
 
  const usersArray = users.map(user => ({ name: user.name, totalSpent: user.totalSpent }));
  console.log(usersArray);
  