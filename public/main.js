const confirmed = document.getElementsByClassName("fa-check");
const trash = document.getElementsByClassName("fa-ban");

Array.from(confirmed).forEach(function(element) {
      element.addEventListener('click', function() {
        //console.log(this.parentNode.parentNode.childNodes)
       const name = this.parentNode.parentNode.childNodes[1].innerText
       // const breed = this.parentNode.parentNode.childNodes[5].innerText
        const task = this.parentNode.parentNode.childNodes[7].innerText
        //const days = this.parentNode.parentNode.childNodes[9].innerText
       // const details = this.parentNode.parentNode.childNodes[11].innerText
        //const beginDate = this.parentNode.parentNode.childNodes[13].innerText
        fetch('confirmService', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
             'name': name,
             //'breed': breed,
            'task': task,
            //'days': days,
           // 'details': details,
           // 'beginDate': beginDate,
            'completed': true,
           
          })
        })

        .then(response => {
          if (response.ok) {
              //   return response.json()
              // })
              // .then(data => {
              //   console.log(data)
          window.location.reload(true)
          
          }
         })
        });
   });


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
       // const name = this.parentNode.parentNode.childNodes[3].innerText
        // const name = this.parentNode.parentNode.childNodes[3].innerText
        // const breed = this.parentNode.parentNode.childNodes[5].innerText
        // const task = this.parentNode.parentNode.childNodes[7].innerText
        // const days = this.parentNode.parentNode.childNodes[9].innerText
        // const details = this.parentNode.parentNode.childNodes[11].innerText
        // const beginDate = this.parentNode.parentNode.childNodes[13].innerText
        const _id = this.parentNode.parentNode.id
        console.log(_id)
            
        fetch('deleteService', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            // 'name': name,
            // 'breed': breed,
            // 'task' : task,
            // 'days': days,
            // 'details': details,
            // 'beginDate': beginDate,
           '_id': _id


          })
        }).then(function (response) {
           window.location.reload()
        })
      });
});
