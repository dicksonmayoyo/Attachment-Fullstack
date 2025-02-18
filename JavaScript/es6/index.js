const user = {
  id: "USER-123456",
  name: {
    first: "Alice",
    last: "Liddell",
  },
  email: "alice@example.com",
  address: {
    shipping: {
      street: "123 Rabbit Hole",
      city: "Wonderland",
      state: "Fantasy",
      postalCode: "12345",
      country: "WL",
    },
    billing: {
      street: "456 Mad Hatter Lane",
      city: "Tea Party",
      state: "Fantasy",
      postalCode: "67890",
      country: "WL",
    },
  },
  payment: {
    total: "100.00",
    currency: "USD",
    details: {
      subtotal: "75.00",
      tax: "15.00",
      shipping: "10.00",
    },
    transactions: [
      { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
      { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" },
    ],
  },
};

//personal info
const {
  id,
  name: { first, last }, email
} = user;
console.log(email);

// shipping address
const {shipping:{street, city, state, postalCode, country}, billing:{street: street1, city: city1, state:state1, postalCode: postalCode1, country: country1}} = user.address
console.log(country);

console.log(city1);

//transactions
const{transactions} = user.payment
console.log(transactions);


const personal = document.getElementById('personal-info')
const transactionSec = document.getElementById('transactions')
const shippingSec = document.getElementById('shipping-address');
const billingSec = document.getElementById('billing-address');
personal.innerHTML=`<h1>${first} ${last}</h1> 

<h1>${email}</h1>`

const transactionList = transactions.map(transaction => `
    <li>
        <span>${transaction.description}</span>
        <span>$${transaction.amount}</span>
    </li>
`).join('');

transactionSec.innerHTML = `
    <h2>Transactions</h2>
    <ul class="transaction-list">${transactionList}</ul>
`;



//shipping address
shippingSec.innerHTML = `
    <h2>Shipping Address</h2>
    <p>${street}, ${city}, ${state}, ${postalCode}, ${country}</p>
`;

// billing address
billingSec.innerHTML = `
    <h2>Billing Address</h2>
    <p>${street1}, ${city1}, ${state1}, ${postalCode1}, ${country1}</p>
`;
