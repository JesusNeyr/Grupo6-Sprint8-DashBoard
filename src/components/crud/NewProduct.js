// import { json } from 'body-parser'
import React, { useState } from 'react'
import '../../asset/css/newProduct.css'

const NewProduct = () => {
    
    const [formCreate, setCreate] = useState({
        name: '',
        price: '',
        price_inv: '',
        price_who: '',
        stock: '',
        stock_min: '',
        stock_max: '',
        category: '',
        size: '',
        discount: '',
        description: '',
        visibility: ''
    })
    const handleChange = e =>{
        setCreate({
            ...formCreate,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e)=>{
       e.preventDefault()
        const resquestInit = {
            method: "POST",
            headers:{
                "Access-Control-Allow-Origin":"*",
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
            body: JSON.stringify(formCreate)
        }
        fetch("/api/products/create", resquestInit)
        .then(response=> {
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log(response);
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            console.log("asdas");
            response.json()
        })
        .then(data => console.log(data))
        
        setCreate({
            name: '',
            price: '',
            price_inv: '',
            price_who: '',
            stock: '',
            stock_min: '',
            stock_max: '',
            category: '',
            size: '',
            discount: '',
            description: '',
            visibility: ''
        })

    }

  return (
    <React.Fragment>
    <h1 className='titleForm'>Crear producto</h1>
    <form onSubmit={handleSubmit} className="createForm" >
        <input onChange={handleChange} placeholder='Nombre' type="text" name='name' />
        <input onChange={handleChange} placeholder='precio' type="number" name='price' />
        <input onChange={handleChange} placeholder='price_inv' type="number" name='price_inv' />
        <input onChange={handleChange} placeholder='price ' type="number" name='price_who' />
        <input onChange={handleChange} placeholder='stock' type="number" name='stock' />
        <input onChange={handleChange} placeholder='stock minimo' type="number" name='stock_min' />
        <input onChange={handleChange} placeholder='stock maximo' type="number" name='stock_max' />
        <select onChange={handleChange} name='category'>
            <option value="1">De 0 a 24 meses</option>
            <option value="2">De 2 a 3 años</option>
            <option value="3">De 4 a 6 años</option>
        </select>
        <select onChange={handleChange} name='size'>
            <option value="1">Pequeño</option>
            <option value="2">Mediano</option>
            <option value="3">Grande</option>
        </select>
        <select onChange={handleChange} name='discount'>
            <option value="1">0%</option>                        
            <option value="2">5%</option>
            <option value="3">10%</option>    
            <option value="4">15%</option>  
            <option value="5">20%</option>
        </select>
        
        <textarea onChange={handleChange} name='description'></textarea>
        <select onChange={handleChange} name="visibility" id="visibilityProduct" >
            <option value="1">Visible</option>
            <option value="0">No visible</option>
        </select>
        <input className='submitForm btnDashboard' type="submit" value="Crear producto" />
    </form>
    </React.Fragment>
  )
}

export default NewProduct