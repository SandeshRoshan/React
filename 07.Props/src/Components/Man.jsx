//Arrow function 


// const Man = () =>{
//     return(
//         <div>
//             <h1>Salary: 1 INR</h1>
//         </div>
//     );
// }


// Normal Function 

// function Man() {
//     return(
//         <h3>Hi</h3>
//     );
// }

// export default Man;  //unammed Export


//Named Export
export function Man(props){
    console.log(props);
    console.log(typeof props);
    return(
        <h3>Salary:{props.salary} INR</h3>
    );
}

