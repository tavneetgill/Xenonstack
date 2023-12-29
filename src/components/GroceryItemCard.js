const GroceryItemCard = ({ itemName, price, imageUrl }) => (
    <div className="grocery-item-card">
      <img src={imageUrl} alt={itemName} />
      <h3>{itemName}</h3>
      <p>${price}</p>
    </div>
  );
  
  const GroceryItems = () => (
    <div className="grocery-items-container">
      {/* Add your grocery items */}
      <GroceryItemCard
        itemName="Apple"
        price="2.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/425788a.jpg?ts=1692688626" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Banana"
        price="1.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/355051a.jpg?ts=1687326264" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Apple"
        price="2.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/425788a.jpg?ts=1692688626" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Banana"
        price="1.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/355051a.jpg?ts=1687326264" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Apple"
        price="2.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/425788a.jpg?ts=1692688626" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Banana"
        price="1.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/355051a.jpg?ts=1687326264" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Apple"
        price="2.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/425788a.jpg?ts=1692688626" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Banana"
        price="1.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/355051a.jpg?ts=1687326264" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Apple"
        price="2.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/425788a.jpg?ts=1692688626" // Replace with the actual URL
      />
      <GroceryItemCard
        itemName="Banana"
        price="1.99"
        imageUrl="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=140/app/images/products/sliding_image/355051a.jpg?ts=1687326264" // Replace with the actual URL
      />
    </div>
  );
export default GroceryItems;  