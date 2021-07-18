import React, {useState, useEffect} from 'react';

function Follow() {

  useEffect(()=> {
    fetchItems(); 
  }, []);

  const [items, setItems] = useState([]);
  const fetchItems = async () => {
    const data = await fetch('https://api.github.com/users/Grezor/followers?per_page=100')
    console.log(data.body)

  }
  return (
    <div>
       {items.map(item => (
        <h1 key={item.id}>{item.name}</h1>
      ))}
    </div>
  )
}

export default Follow
