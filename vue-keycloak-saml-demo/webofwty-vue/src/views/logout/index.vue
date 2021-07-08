<template>
  <div class="logout">
    Login Success!
    <!-- <div>
      <input type="button" @click="logout()" value="Logout">
    </div> -->
    <form action="http://localhost:8080/saml/logout" method="get">
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
           Logout Now
          </button>
        </small>
      </form>
  </div>
  
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
    }
  },
  methods: {
    logout() {
      return axios({
        method: 'get',
        url: '/saml/logout',
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }).then(response => {
        debugger
        
      })
    }
  }
}
</script>
