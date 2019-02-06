class Github {
   constructor() {
      this.client_id = '2faf3e54b7d54de5c93a';
      this.client_secret = '54c943d8fb9d9c7777419550c5025a63e05ee57e';
      this.repos_count = 5;
      this.repos_sort = 'created: asc';
   }

   async getUser(user) {
      const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

      const profile = await profileResponse.json();
      const repos = await repoResponse.json();


      return {
         profile,
         repos
      }
   }
}