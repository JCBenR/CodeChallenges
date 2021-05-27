//Find number of customers who could not get any computer

/**
 * 1. create a new set
 * 2. when customer enters, check if already in set
 *  a. If in set: remove and decrement capacity
 *  b. if not in set, proceed to check capacity
 * 3. if capacity for customer, add to set and increment capacity
 * 4. if no capacity and customer leaves right after coming in, add to without table
 * 
 * edge cases:
 * --customer enters with capacity and leaves right away should just increment and decrement
 * --incident of customer leaving (make sure is skipped by incrementing i in addtion to loop increment)
 */

 let maxCapacity = 3;
 let capacity = 0;
 let customers = ["A","B","C","D","D","C","E","F","F","E","B","G","A","G","H","H"];
 let customersNoEmpty = ['A', 'B', 'C', 'D', 'D'];
 let customersSet = new Set();
 let customersWithoutTable = [];
 
 let checkForEmpty = (customersArray) => {
   if(customersArray.length < 2) return "no customers without table";
 
   for (let i = 0; i < customersArray.length; i++) {
 
     //if in array, indicates customer is leaving
     if (customersSet.has(customersArray[i])) {
       customersSet.delete(customersArray[i]);
       capacity--;
       console.warn(`${customersArray[i]} has left and capacity is ${capacity}`)
       continue;
     }
 
     //customer got a table
     if (customersArray[i] !== customersArray[i+1] && capacity < maxCapacity) {
       customersSet.add(customersArray[i]);
       capacity++;
       console.log(`${customersArray[i]} has entered and capacity is ${capacity}`)
       continue;
     }
 
     //if there's room, but the person gets a table and leaves
     if (customersArray[i] === customersArray[i+1] && capacity < maxCapacity) {
       customersSet.add(customersArray[i]);
       capacity++;
       console.log(`${customersArray[i]} has entered and capacity is ${capacity}`)
       continue;
     }
 
     //customer could not get table
     if(customersArray[i] === customersArray[i+1] && capacity === maxCapacity){
       customersWithoutTable.push(customersArray[i]);
       console.error(`${customersArray[i]} could not get a table and capacity is ${capacity}`);
       i++;
       continue;
     }
   }
   if(customersWithoutTable.length < 1) return "All customers got tables"
   else return `customers Without Table: ${customersWithoutTable}`;
 }
 
 console.log(checkForEmpty(customers));
 console.log(capacity); 