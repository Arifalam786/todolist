import './App.css';
import { useState } from 'react';
function App() {
  const [newItem,setNewitem] = useState("");
  const [arrItem,setArrItem] = useState([]);
 
  function update(){
    if(!newItem){
      alert("please enter the value")
    }
    const item= {
      id:Math.floor(Math.random()*1000),
      value:newItem,
      classname:'',
      btnColor:'',
      btnText:'Undone'
    }
    setArrItem([...arrItem,item])
    setNewitem("")

  }
  function deleteItem(id){
    const updated = arrItem.filter(item=> item.id !== id)
    console.log(id)
    setArrItem(updated)
  }
  function changeStyle(id,className){
    if(className === ""){
      const newstyles=arrItem.map((datas)=>
     datas.id===id ? { ...datas,classname:"newclass",btnColor:"done-btn",btnText:"Done"} : { ...datas})
    setArrItem(newstyles)
    }
    else{
      const newstyles=arrItem.map((datas)=>
     datas.id===id ? { ...datas,classname:"",btnColor:"",btnText:"Undone"} : { ...datas})
    setArrItem(newstyles)
      
    }
  }
  
  
  return (
    <div className="App">  
    
      <div className='main-div'>
        <div>
        <input className='inp' type="text" value={newItem} onChange={e=>setNewitem(e.target.value)}/> 
        <button className='add-btn' onClick={()=>update()} >Add</button>
        </div>
        <div className='disp-item'>
          {
            arrItem.map(item=>{
              return(
                // <div className='item-st' key={item.id}>{item.value}<button onClick={()=>deleteItem(item.id)}>x</button> <button >done</button></div>
                <div style={{display:"flex",width:"400px", justifyContent:"space-between"}}>
                  <p className={item.classname}>{item.value}</p>
                  <div>
                    <button onClick={()=>deleteItem(item.id)} >x</button>
                    <button className={item.btnColor} onClick={()=>changeStyle(item.id,item.classname)}>{item.btnText}</button>
                  </div>
                </div>
              )
            })
          }
        </div>

      </div>
      
      
    </div>
  );
}

export default App;
