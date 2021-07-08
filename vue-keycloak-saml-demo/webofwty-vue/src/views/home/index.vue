<template>
  <div class="home">
    welcome! Please login!
    <div>
      <form action="http://localhost:8080/saml/login?disco=true" method="get">
        <fieldset hidden>
          <div >
            <label >
              <input checked  type="radio" name="idp" id="idp_http://localhost:8081/auth/realms/demo" value="http://localhost:8081/auth/realms/demo" />
              <!-- <span>http://localhost:8081/auth/realms/demo</span> -->
            </label>
          </div>
        </fieldset>

        <small>
          <button type="submit">
           Login Now
          </button>
        </small>
      </form>
    </div>
  </div>
  
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    login() {
      document.getElementById("demoForm").submit(); 
      // return axios({
      //   method: 'get',
      //   url: '/saml/login?disco=true',
      //   headers: {
      //     'Access-Control-Allow-Origin': '*'
      //   }
      // }).then(response => {
      //   debugger
        
      // })
    }
  }
}
</script>
