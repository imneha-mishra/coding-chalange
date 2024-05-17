async function getCombineData(){

    const [data1,data2] = await Promise.all([
        fetch("https://jsonplaceholder .typecode.com/todos/1").then((response)=>response.json()),
    
    fetch("https://jsonplaceholder .typecode.com/post/1").then((response)=> response.json())
]);
   

  
    const combineData = {
        todo:data1,
        post:data2
    }
    return combineData
}
getCombineData().then((data)=>console.log(data))