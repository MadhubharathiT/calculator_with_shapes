   let os=document.getElementById('os')
  function Clear()
  {
     os.value="0"
  }
  function del()
  {
     os.value=os.value.slice(0,-1)
  }

   function circle() {
    let radius=parseFloat(prompt('Enter the r value'));
    if(radius<=0){
      prompt('Please enter the correct positive value');
      return;
    }
    let pi = Math.PI;
    let circle = pi*radius*radius;
     alert(`${circle}`);
   }
   function square() {
      let side=prompt('Enter the a value');
      if(side<=0){
         prompt('Please enter the positive value');
         return;
      }
      let square = side*side;
      alert(`${square}`);
   }
   function cylinder() {
      let cy_rad =parseFloat(prompt('Enter the r value'));
      let breath =parseFloat(prompt('Enter the b value'));
      if(cy_rad<=0 || breath<=0){
         prompt('Please enter the correct positive value');
         return;
      }
         let pi=Math.PI;
         let cylinder = pi*cy_rad*cy_rad*breath;
         alert(`${cylinder}`);
   }
   
   function simpleinterest() {
      let principal =parseFloat(prompt('Enter the p value'));
      let interest =parseFloat(prompt('Enter the i value'));
      let termloan =parseFloat(prompt('Enter the n vanlue'));
       if(principal<=0 || interest<=0 || termloan<=0){
            prompt('Please enter the positive value');
            return;
     }
        let a=principal*interest*termloan;
         alert(`${a}`)
   }
    function compoundinterest(){
      let principal =parseFloat(prompt('Enter the p value'));
      let interest =parseFloat(prompt('Enter the i value'));
      let interestApplies =parseFloat(prompt('Enter the n value'));
      let interestElapsed = parseFloat(prompt('Enter the t value'));
       if(principal<=0 || interest<=0 ||interestApplies<=0 ||interestElapsed<=0){
         prompt('Please enter the positive value');
         return;
       }
         let a=(1+principal/interest)^interestApplies*interestElapsed;
         alert(`${a}`)

    }
     
  function display(txt)
  {
     os.value=os.value+txt;
     console.log(os.value);

  }
  function calc ()
  {
    os.value=eval(os.value);
  }