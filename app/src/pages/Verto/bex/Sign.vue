<template>
  <q-page class="column items-center justify-start login-page">
    <div class="q-pa-md">
      <img src="statics/icons/icon-256x256.png" width="170" alt="logo"/>
    </div>
    <notify-message/>
    <div class="standard-content col-grow">
      <h2 class="landing--title">
        Verto
      </h2>
      <h2 class="landing--title__sub">
        <span class="">Multi-chain wallet manager</span>
      </h2>
      <div class="standard-content--body full-width">
        <div class="standard-content--body__form">
          <label class="ver-label">Enter your password</label>
          <q-input bg-color="white" ref="psswrd" v-model="password" @keyup.enter="login" error-message="Your password is wrong" @input="checkPassword" :error="passHasError"
                   outlined :type="isPwd ? 'password' : 'text'">
            <template v-slot:append>
              <q-icon :name="isPwd ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="isPwd = !isPwd"/>
            </template>
          </q-input>
        </div>
      </div>
      <div class="standard-content--footer full-width justify-end">
        <q-btn unelevated class="btn__blue block"  size="lg"  :loading="spinnerVisible" @click="login" label="Login"/>
        <span class="q-pa-xs"></span>
        <q-btn flat size="lg" class="btn-flat__blue" label="import or Restore" @click="startRestoreConfig"/>
      </div>
    </div>
  </q-page>
</template>

<script>
import configManager from '@/util/ConfigManager'
import {
  version
} from '../../../../package.json'
import Lib from '@/util/walletlib'
import initWallet from '@/util/_Wallets2Tokens'
import DexInteraction from '../../../mixins/DexInteraction'
import Vue from 'vue'
import VideoBg from 'vue-videobg'
import NotifyMessage from '../../../components/notify/NotifyMessage'
import store from '../../../store'

Vue.component('video-bg', VideoBg)
export default {
  name: 'Login',
  components: { NotifyMessage },
  data () {
    return {
      hasConfig: false,
      passHasError: false,
      password: '',
      isPwd: true,
      deleteConfigFail: false,
      deleteConfig: false,
      version: {},
      restoreFromWords: false,
      spinnerVisible: false,
      showSubmit: false
    }
  },
  async mounted () {
    this.hasConfig = !!await configManager.hasVertoConfig()
    if (!this.hasConfig) {
      this.$router.push({
        name: 'setup',
        params: {
          showConfigStep: true
        }
      })
    }
    this.$q.notify.registerType('my-notif', {
      icon: 'announcement',
      progress: true,
      color: 'deep-purple-14',
      textColor: 'white',
      position: 'top'
    })
    this.triggerCustomRegisteredType1()
    this.getGodexCoins()
    this.get1inchCoins()
    this.getDefiboxCoins()

    this.version = version

    let oldVersion = localStorage.getItem('version')

    if (oldVersion) {
      oldVersion = oldVersion.substring(4)

      if (+oldVersion <= 237 && +(version.substring(4)) > 327) {
        localStorage.removeItem('walletPublicDatav2')
      }
    }

    localStorage.setItem('version', version)

    this.$refs.psswrd.focus()
  },
  created () {
    Lib.removeExpiredData()
    this.$store.dispatch('tokens/getTokenList')
    this.$store.dispatch('settings/getSettings')
    let ids = ['volentix-vtx']
    this.$store.dispatch('tokens/getTokenMarketData', ids)
    this.$store.dispatch('tokens/getEvmsTokensData')
  },
  methods: {
    pageStyle () {
      return {
        minWidth: '400px',
        minHeight: '700px'
      }
    },
    checkPassword () {
      if (this.password.length > 1) {
        this.showSubmit = true
      } else {
        this.showSubmit = false
      }
    },
    async startRestoreConfig () {
      // this.$router.push({
      //   name: 'restoreWallet',
      //   params: {
      //     returnto: 'settings'
      //   }
      // })
      this.$router.push({
        name: 'import-restore',
        params: {
          returnto: 'settings'
        }
      })
    },
    async login () {
      this.passHasError = false
      if (!this.password) {
        this.passHasError = true
        return
      }
      this.spinnerVisible = true
      const results = await configManager.login(this.password)
      if (results.success) {
        this.$store.commit('settings/temporary', this.password)
        if (this.$route.params.nextUrl && this.$route.params.nextUrl.includes('dashboard')) initWallet()
        setTimeout(() => {
          this.$store.dispatch('investment/getMarketDataVsUSD')
          // always redirect to dashboard for now : pending issue
          this.$router.push({
            path: /*  this.$route.params.nextUrl ? this.$route.params.nextUrl : */ '/verto/dashboard'
          })
        },
        100)
        // this.$router.push({ path: 'vertomanager' })
      } else {
        if (results.message === 'no_default_key') {
          this.$router.push({
            path: 'vertomanager'
          })
        } else {
          // this.startRestoreConfig()
          this.passHasError = true
        }
        this.spinnerVisible = false
      }
    },
    async destroyData () {
      try {
        await configManager.destroyConfig()
        this.hasConfig = false
        this.deleteConfig = false
        this.$q.notify({
          color: 'positive',
          message: 'Config successfully deleted'
        })
        this.$router.push({
          name: 'create-password'
        })
      } catch (e) {
        this.deleteConfigFail = true
        this.deleteConfig = false
      }
    },
    triggerCustomRegisteredType1 () {
      // this.$store.dispatch('notify/banner', `This app is in beta, use at your own risk.`)
      // this.$q.notify({
      //   type: 'my-notif',
      //   message: `This app is in beta, use at your own risk.`
      // })
    }
  },
  mixins: [DexInteraction]
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/variables.scss";
.login-page{
  background: #F5F5FE
}
.landing {
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;

  &--title {
    font-size: 30px;
    font-weight: bold;
    line-height: 24px;
    font-family: $Franklin;
    position: relative;
    margin-left: 0%;
    margin-top: 0px;
    text-align: center;

    b.version {
      // position: absolute;
      // right: 0px;
      // bottom: -26px;
      font-weight: $regular;
      font-size: 15px;
      margin-left: 10px;
    }

    span {
      font-size: 20px;
      margin-top: 8px;
      display: block;
      color: #000000;
      font-weight: $regular;
    }

    &__sub {
      font-size: 18px;
      text-align: center;
      line-height: 30px;
      margin-top: 0px;
    }

    strong {
      font-weight: $light;
    }

    &:before {
      content: "";
      width: 14px;
      height: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      background: #7900FF;
      background: transparent linear-gradient(180deg, #7900FF 0%, #00D0DF 100%) 0% 0% no-repeat padding-box;
      display: none;
    }
  }

  &--volentix-logo {
    margin-top: 9px;
    text-decoration: none;
    color: #000 !important;
    font-size: 20px;
    position: relative;
    text-transform: uppercase;
    margin-top: 0px;
    color: #000 !important;
    position: absolute;
    bottom: 20px;
    transform: scale(.55);

    img {
      top: 7px;
      position: relative;
      width: 40px;
    }

    // &:after {
    //     content: "Volentix";
    //     font-family: $Franklin;
    //     font-weight: $light;
    //     position: relative;
    //     left: 0px;
    //     top: 0px;
    //     margin-left: 10px;
    // }

    &:after {
      top: -8px;
    }
  }

  &--bottom-bar {
    position: absolute;
    bottom: 10px;
    width: 130px;
    height: 4px;
    background-color: #555869;
    opacity: .2;
  }

  @media screen and (min-width: 768px) {
    &--title {
      margin-left: 0%;
      padding-left: 0%;
      text-align: center;
    }
  }
}

.standard-content {
  padding: 0 10% 10% 10%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &--body {
    margin-top: 5%;
    margin-bottom: 5%;

    @media screen and (min-width: 768px) {
      margin-top: 5%;
      margin-bottom: 0%;
      max-width: 400px;
      margin-left: auto !important;
      margin-right: auto !important;
    }
  }

  &--footer {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    &.auto {
      min-height: unset;
    }

    @media screen and (min-width: 768px) {
      max-width: 400px;
      margin-left: auto !important;
      margin-right: auto !important;
    }

    .action-link {
      height: 50px;
      text-transform: initial !important;
      font-size: 16px;
      letter-spacing: .5px;
      border-radius: 10px;
      margin-left: 0px;
    }

  }
}

.q-card {
  border-radius: 25px;
  box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.2), 0 4px 35px rgba(0, 0, 0, 0.14), 0 1px 10px rgba(0, 0, 0, 0.12);
}

.yes-btn {
  color: #FFF !important;
  background-color: #00D0DF !important;
  text-transform: initial !important;
  padding: 10px 30px;
  border-radius: 50px;
  font-weight: $light;
}

.dark-theme {
  .svg_logo {
    fill: #FFF;
  }

  &.q-card {
    border: 1px solid #627797;
  }

  .landing {
    background: #04111F !important;

    .svg_logo {
      fill: #FFF;
    }

    .landing--volentix-logo:after {
      color: #FFF;
    }

    .landing--title {
      color: #FFF;

      span {
        color: #FFF;
      }
    }
  }
}

.app-logo-row {
  position: relative;
  width: 97%;

  .app-logo {
    position: absolute !important;
    left: 0px;
    z-index: 9;

    a {
      font-weight: $lighter;
      text-transform: uppercase;
      font-family: $Titillium;
      font-size: 25px;
      color: #FFF;
      text-decoration: none;
    }
  }
}

.login-page {
  .or-text {
    margin-left: 10px;
    font-size: 16px;
    // margin-top: -10px;
    // margin-bottom: 10px;
  }

  /deep/ .q-field--focused .q-field__label {
  }
  & .q-field--outlined .q-field__control{
   background-color: #fff
  }
  /deep/ .q-field--outlined .q-field__control:after {
    border: 2px solid #E1E1E9;
    //background-color: #fff;
    //box-shadow: 0px 0px 10px 0px #E1E1E9;
  }

  /deep/ .q-field--outlined .q-field__control:before {
    border: 2px solid #E1E1E9;
    //background-color: #fff;
    //box-shadow: 0px 0px 10px 0px #E1E1E9;
  }

  /deep/ .q-field--outlined.q-field--focused .q-field__control:after {
    border: 2px solid #c4c4c6;
    //background-color: #fff;
    //box-shadow: 0px 0px 10px 0px #d4d4db;
  }

  /deep/ .q-field--outlined.q-field--focused .q-field__control:before {
    border: 2px solid #c4c4c6;
    //background-color: #fff;
    //box-shadow: 0px 0px 10px 0px #d4d4db;
  }

  /deep/ .q-field--dark:not(.q-field--focused) .q-field__label,
  /deep/ .q-field--dark .q-field__marginal,
  /deep/ .q-field--dark .q-field__bottom {
  }
}
</style>
