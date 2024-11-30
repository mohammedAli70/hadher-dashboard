<script setup>
import { ref } from 'vue';

import {
  GoogleSignInButton,
} from 'vue3-google-signin';

// handle success event
const handleLoginSuccess = (response) => {
  const { credential } = response;
  console.log('Access Token', credential);
};

// handle an error event
const handleLoginError = () => {
  console.error('Login failed');
};

const { postRequest } = useFetchApi();
const supabase = useNuxtApp().$supabase;

const checkbox = ref(false);
const loading = ref(false);
const formRef = ref(null);

const form = reactive({
  username: '',
  password: '',
});

// Import predefined theme
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Auth } from '@supa-kit/auth-ui-vue';

const supabaseClient = useSupabaseClient();
</script>

<template>
  <div class="d-flex align-center text-center mb-6">
    <div
      class="text-h6 w-100 px-5 font-weight-regular auth-divider position-relative"
    >
      <span
        class="bg-surface px-5 py-3 position-relative text-subtitle-1 text-grey100"
        >Your Social Campaigns</span
      >
    </div>
  </div>
  <div>
    <v-row class="mb-3">
      <v-col cols="12">
        <GoogleSignInButton
          @success="handleLoginSuccess"
          @error="handleLoginError"
        ></GoogleSignInButton>

        <Auth
          :supabaseClient="supabaseClient"
          :providers="['google']"
          :appearance="{
            theme: ThemeSupa,
            variables: {
              default: {
                // Customize any styles here if needed
              },
            },
          }"
          onlyThirdPartyProviders
        />
      </v-col>
    </v-row>
  </div>
</template>
