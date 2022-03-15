<template>
  <div class="login">
    <!-- Modal -->
    <div
      class="modal fade"
      id="login"
      aria-hidden="true"
      aria-labelledby="loginLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginLabel">Login</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
              <form class="login" @submit.prevent="login">
				<h2>Login</h2>
				<input 
					type="email" 
					placeholder="Email address"
					v-model="login_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="login_form.password" />
				<input 
					type="submit" 
					value="Login" />
			</form>
          </div>
          <div class="modal-footer">
              <small>
                  Si no tienes usuario registrate aquí!
              </small>
            <button
              class="btn btn-primary"
              data-bs-target="#register"
              data-bs-toggle="modal"
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="register"
      aria-hidden="true"
      aria-labelledby="registerLabel"
      tabindex="-1"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registerToggleLabel">
                Register
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
              <form class="register" @submit.prevent="register">
				<input 
					type="email" 
					placeholder="Email address"
					v-model="register_form.email" />
				<input 
					type="password" 
					placeholder="Password" 
					v-model="register_form.password" />
				<input 
					type="submit" 
					value="Register" />
			</form>
          </div>
          <div class="modal-footer">
            <button
              class="btn btn-primary"
              data-bs-target="#login"
              data-bs-toggle="modal"
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
    <a
      class="btn btn-primary"
      data-bs-toggle="modal"
      href="#login"
      role="button"
      >Login</a
    >
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
    name: 'LogIn',
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();
		const login = () => {
			store.dispatch('login', login_form.value);
		}
		const register = () => {
			store.dispatch('register', register_form.value);
		}
		return {
			login_form,
			register_form,
			login,
			register
		}
	}
}
</script>

<style>
</style>