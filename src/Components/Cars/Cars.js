import React from 'react'
import "./Cars.css";
import Car from "../Car/Car"


const users = [
    {
      name: "Mercedes Class E",
      price: "56 700 €",
      desc: <ul>
      <li> Carburant:Diesel</li>
      <li> Puissance: 143 kW (194 ch)</li>
      <li> Boîte de vitesses: Automatique 9G-TRONIC</li>
      <li>Consommation :  5,3 l/100km</li>
      </ul>,
      img: "https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZQ9vZbMw3SGtle9tsd2HdcUfp8qXGEubYJ0l3OZOB2qrnbApRn3I5ux6YQC3aM1kzNHzkm7j871hKVkSN%25vqmBkyLRsAHYaxU5prH1Gm%25n8w7OyoiZK6EM4FvRwTg9LYT6PDaGbSeWH0RtsdB%25ycJtTjqN8MYax4JOroYfV8nMrqayoiZCkuM4F8CQTg9ivO6PD4cmSeWgwjtsdRFccUfG%25yXGE0aRJ0lBHAOB2A8nbAp5IXI5gZ8lXhRjwQZzOwTbpuoQ3pE77V9hDNt3DkSW9wUwopoL24PvEa2zq7DJ3D&imgt=P27&bkgnd=9&pov=BE040&im=Crop,rect=(360,250,1280,580);Resize,width=300"
    },
    {
      name: "Mercedes Class A",
      price: "31 049 €",
      desc: <ul>
      <li> Carburant:SP95</li>
      <li> Puissance: 100 kW (136 ch)</li>
      <li> Boîte de vitesses:Manuelle à 6 rapports</li>
      <li>Consommation: 5,8 l/100km</li>
      </ul>,
      img:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNEFqtyO35PobzIExXrItvsTQKkojUfGoo7GE11KFm9n9P9Q6FjcBXBMjXGEAJ3J0l5CNOB2NrjbApjAbI5uV52QC3qsFkzNR%25km7jxyShKV1XN%25vqwI9yLRZYHYaxFrprH19g1n8wf8foiZE6pM4FlmJTg92h36PDp1oSeWuwjtsd3ZxcUfgLyXGEPimJ0leIVOB2sQ5bApUtwI5uLoxQC3aM3kzNHzxm7j8GfhKViYh%25vq4rjyLRgYDYax%250qrH1yM%25n8wYh3oiZB7lM4FAyrTg95Up6PDCIDSeWHmItsd8Y%25cUfDU0XGEWawJ0ldoVOB2fWEbApE7oI5uK6YQC3vSTkzNL6Sm%25kbFDZGOtsdB%25ycJtj9GXOcDsXJ0l8o1OB2GQ2bAp0koI5uBZwQC3AF4kzN59zm7jd6ohKVf1a%25vqLtTyLRaLDYaxH08rH18BRn8wiQ2oiZ4kIM4FgRlTg9Pxn6PKNCZnX2f3SNKE7sdeDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&im=Crop,rect=(360,250,1280,580);Resize,width=300"
    },
    {
      name: "Mercedes Class C",
      price: "49 650 €",
      desc: <ul>
      <li> Carburant:Diesel</li>
      <li> Puissance: 120 kW + 15 kW (163 ch + 20 ch)</li>
      <li> Boîte de vitesses:Automatique 9G-TRONIC</li>
      <li>Consommation:4,6 l/100km</li>
      </ul>,
      img:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXqNWFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtle9tsd2HdcUfp8qXGEubYJ0l3ofOB2NbFbApRn3I5ux5xQC31grkzNwtnm7jA2jhKViSF%25vq4tqyLRgLFYaxPrWrH1enun8wYOxoiZr7YM4FAmjTg95hp6PDCroSeWHmMtsd8J3cUfiFWXGE4TXJ0lgChOB2PzFbAp7oMIkbX1ZxecTg9Ukm6tTuweSc6ZgStsdHZdcUfarRXGEsaYJ0lU4hOB2GW1bApFfLI5uC4JQC3zg7kzN7P6m7jKGjhKUWP3IrZxD%25WLNhcDzVS%25qjuaa1frEROqEyJlfDADSjSiNsG8u4NLwaEQqE&imgt=P27&bkgnd=9&pov=BE040&im=Crop,rect=(360,250,1280,580);Resize,width=300"
    },
    {
      name: "Mercedes Class G",
      price: "127 351 €",
      desc: <ul>
      <li> Carburant:SP95</li>
      <li> Puissance:310 kW (422 ch)</li>
      <li> Boîte de vitesses:Automatique 9G-TRONIC</li>
      <li>Consommation:14,9 l/100km</li>
      </ul>
      ,
      img:"https://assets.oneweb.mercedes-benz.com/iris/iris.jpg?COSY-EU-100-1713d0VXq0WFqtyO67PobzIr3eWsrrCsdRRzwQZgk4ZbMw3SGtByStsdB%25ycJtTjqN8MYax4JOroYfV8nMrqaEoiZGe1M4F0kJTg9WeV6PDdsFSeWZnjtsdF%25QcUf9eWXGEDBdJ0lIHxOB2iMFbAp4TxI5uBOYQC3rSFkzNW66m7jdbjhKVm0t%25vqhwqyLRmYRYaxEoYrH1lIun8w2IyoiZprZM4FZyrTg9Sz26PKNCZnX2f3SNYL3vGHDkSW9wUUEVXqdYWqtyRV3H3k9kBF7v0wAFslUqoWq&imgt=P27&bkgnd=9&pov=BE040&im=Crop,rect=(360,250,1280,580);Resize,width=300"

    }
  ]
  const Cars = () => {
  
  
    return (
        <div>
        {/* Cars part */}
       
        <h2 className="title">Our Models</h2>
        <div className="list-users">
          {users.map((user, i) => (
              <Car
              name={user.name}
              price={user.price}
              desc={user.desc}
              img={user.img}
              key={i}
              
              
              
              
              />
            
          ))}
          </div>
        </div>
    )}
  

    export default Cars

      

  
  