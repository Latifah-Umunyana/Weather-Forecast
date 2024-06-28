

const Weather = () =>{

return(


<div>

<div className="Navbar">
<h2>Rayn</h2>

<div>

 <input placeholder="Enter city name" onChange={(event) => setCity(event.target.value)} />
 <button>Search</button>

</div>

</div>

<img src="Images/beautiful-landscape-mountain-cabins_23-2148269882.jpg"/>


</div>

)


}
