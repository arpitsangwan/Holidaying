const searchBox=document.querySelector('.searchRest');
const searchResults=document.querySelector('.searchResults');
const form=document.querySelector('.formsearch');
document.addEventListener('click',()=>{
    searchResults.style.visibility='hidden';
})
 form.addEventListener('submit',(event)=>{
    event.preventDefault();
})



function insertResults(arr){
 
    for (let res of arr){
    
    
    let div1=document.createElement('div')
      div1.classList.add('card')
      div1.setAttribute('onclick',`location.href='/restaurants/${res._id}'`)
 
      let div2=document.createElement('div')
      div2.classList.add('row')
      div1.appendChild(div2)

      let div3=document.createElement('div')
      div3.classList.add('col-md-6')
      div2.appendChild(div3) 
      
      let img=document.createElement('img')
      img.setAttribute('src',res.image)

      div3.appendChild(img)

      let div4=document.createElement('div')
      div4.classList.add('col-md-6')
      div2.appendChild(div4) 

      let div5=document.createElement('div')
      div5.classList.add('card-body')
      div4.appendChild(div5) 

      
     

      let h5=document.createElement('h5')
      h5.appendChild(document.createTextNode(res.name))
      div5.appendChild(h5)

      let p=document.createElement('p')
      p.appendChild(document.createTextNode('Location'))
      div5.appendChild(p)
      

        searchResults.append(div1)
      
    }
}

searchBox.addEventListener('click',async (event)=>{
    event.stopPropagation();
    searchResults.style.visibility='visible';
    let searchTerm=searchBox.value;
    console.log(searchTerm)
    searchResults.innerHTML=''
    data=await axios.get(`/search?q=${searchTerm}`)
    insertResults(data.data)
})
searchBox.addEventListener('keyup',async (ev)=>{
    searchResults.style.visibility='visible';
    let searchTerm=searchBox.value;
    console.log(searchTerm)
    searchResults.innerHTML=''
    data=await axios.get(`/search?q=${searchTerm}`)
    insertResults(data.data)  
})

