/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
  {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const { randomInt } = require('crypto');


function generateTransactionList(n){

  //Variables
  choice = true;transNO=0;
  desiredTrans = n;

  //Lists
  TransactionList = []
  categoryList = ["Food","Clothes","Mobiles","Laptops"];

  foodItemList = ["Pizza","Burger","Pastha","Dosa","Idli"];
  clothItemList = ["Jeans","Cotton","Shirt","Trousers","Hand-Kerchief"];
  mobileItemList = ["Apple","SAMSUNG","MI","Jio"];
  laptopItemList = ["HP","Lenovo","Mac","Dell"];

  //Reusabilities
  function getRandomString(list){
    listLength = list.length
    index = randomInt(0,listLength)
    return list[index]
  }

  //Odd-Loop
  do{
    time = new Date().getHours() +":"+ new Date().getMinutes() +":"+ new Date().getMinutes();
    transNO++;
    
    id = transNO;
    timestamp = time;
    price = randomInt(1,1000);
    category = getRandomString(categoryList);

    if(category == "Food"){
      item = getRandomString(foodItemList);
    }
    else if(category == "Clothes"){
      item = getRandomString(clothItemList);
    }  
    else if(category == "Mobiles"){
      item = getRandomString(mobileItemList);
    }  
    else if(category == "Laptops"){
      item = getRandomString(laptopItemList);
    }

    transaction = {

      TRANSACTION_ID : "S253661243934" + id,
      TIME_STAMP : timestamp,
      PRICE : price,
      CATEGORY : category,
      ITEM : item

    }

    TransactionList.push(transaction)

  }while(transNO != desiredTrans);
    
  return TransactionList;

}

function calculateTotalSpentByCategory(transactionList){
    TotalSpentByCategory = []
    for( i=0 ; i < transactionList.length ; i++){
      category = transactionList[i].CATEGORY;
      flag = 0;
      for(s = 0 ; s < TotalSpentByCategory.length ; s++){
          if( TotalSpentByCategory[s].CATEGORY == category){
            flag = 1;
          }
      }
      if(flag == 1){
        continue;
      }
      else{
          exp = 0;

          for( j = 0; j < transactionList.length ; j++){
            if( transactionList[j].CATEGORY == category){
              exp += transactionList[j].PRICE
            }
          }

          object = {
            CATEGORY: category,
            EXPENDITURE : exp
          }

          TotalSpentByCategory.push(object);
      }
    }

  return TotalSpentByCategory;
}


lisToFtransactionS  = generateTransactionList(10);
SpentByCategory = calculateTotalSpentByCategory(lisToFtransactionS)

console.log(lisToFtransactionS)
console.log(SpentByCategory)


module.exports = calculateTotalSpentByCategory;