const github = new Github;

// Search input
const searchUser = document.getElementById('serachUser');


searchUser.addEventListener('keyup', (e) => {
   const userText = e.target.value;

   if (userText !== '') {
      gitHub.getUser(userText)
         .then(data => {
            if(data.profile.message === 'Not Found') {
               // Show alert
            } else {
               // Show profile
            }
         })
   } else {
      // Clear profile
   }
});