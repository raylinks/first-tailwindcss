<template>
  <MainLayout>
    <div class="flex items-center justify-center h-screen">
      <div
        class="max-w-sm mx-auto w-full overflow-hidden rounded shadow-lg p-10"
      >
        <p class="text-center text-green-600 text-2xl font-bold">
          SELL PERFECT MONEY
        </p>
        <p class="text-sm my-3 text-center">
          Sell your funds and get paid in NGN
        </p>
        <br />
        <form @submit.prevent="submitForm()">
          <div id="inputs" v-show="!isInitialized">
            <div class="my-3 text-center">
              <label for="account" class="block my-2 text-sm text-left"
                >Account Number</label
              >
              <input
                type="text"
                name="account"
                id="account"
                v-model="form.account_number"
                class="w-full border rounded bg-white text-black p-3 border-bg-gray-400"
                required
              />
            </div>
            <div class="my-3 text-center">
              <label for="amount" class="block my-2 text-sm text-left"
                >Amount</label
              >
              <input
                type="number"
                name="account"
                id="amount"
                v-model="form.amount"
                min="1"
                class="w-full border rounded bg-white text-black p-3 border-bg-gray-400"
                required
              />
            </div>
          </div>
​
          <div class="my-5 text-center" v-show="!isInitialized">
            <button
              type="submit"
              class="bg-green-500 text-white rounded-full px-8 py-3"
              :disabled="isSending"
            >
              Trade now
            </button>
          </div>
        </form>
​
        <form
          v-show="isInitialized"
          action="https://perfectmoney.is/api/step1.asp"
          method="POST"
          target="_blank"
        >
          <input
            type="hidden"
            name="PAYEE_ACCOUNT"
            v-model="trade.payee_account"
            value="U23596777"
          />
          <input
            type="hidden"
            name="PAYEE_NAME"
            v-model="trade.payee_name"
            value="Patricia"
          />
          <input
            type="hidden"
            name="PAYMENT_ID"
            v-model="trade.reference"
            value="TRZZ4IMKGPCE"
          />
          <input
            type="hidden"
            name="PAYMENT_AMOUNT"
            v-model="trade.amount"
            value="0.06"
            class="amount"
          />
          <input
            type="hidden"
            name="PAYMENT_UNITS"
            v-model="trade.currency"
            value="USD"
          />
          <input
            type="hidden"
            name="STATUS_URL"
            value="https://4bc9713ce42c.ngrok.io/perfect-money/webhook"
          />
          <input
            type="hidden"
            name="PAYMENT_URL"
            value="http://192.168.43.181:8080/perfect-money/trade/status"
          />
          <input type="hidden" name="PAYMENT_URL_METHOD" value="GET" />
          <input
            type="hidden"
            name="NOPAYMENT_URL"
            value="http://192.168.43.181:8080/perfect-money/trade"
          />
          <input
            type="hidden"
            name="SUGGESTED_MEMO"
            value="Trade Perfect Money"
          />
          <input
            type="hidden"
            name="user_identifier"
            value="bencoderus@gmail.com"
          />
          <input type="hidden" name="BAGGAGE_FIELDS" value="user_identifier" />
          <center>
            <div class="my-5">
              <a href="goback" @click.prevent="goBack()" class="font-bold"
                >Go Back</a
              >
            </div>
​
            <button
              type="submit"
              class="bg-red-500 text-white rounded-full px-8 py-3"
            >
              Proceed to make payment
            </button>
          </center>
        </form>
      </div>
    </div>
  </MainLayout>
</template>
​
<script>
import MainLayout from "../../layouts/Main";
import RequestService from "../../services/RequestService";
​
export default {
  name: "PerfectMoneyIndex",
  components: {
    MainLayout,
  },
  data() {
    return {
      isInitialized: false,
      isSending: false,
      form: {
        account_number: "",
        amount: "",
        user_identifier: "bencoderus@gmail.com",
        rate: 300,
      },
      trade: {
        amount: "",
        payee_name: "",
        payee_account: "",
        reference: "",
        currency: "",
        user_identifier: "",
      },
    };
  },
  methods: {
    goBack() {
      this.isInitialized = !this.isInitialized;
    },
​
    async submitForm() {
      const request = new RequestService();
      const response = await request.post(
        "http://127.0.0.1:8000/perfect-money/sell/initialize",
        this.form
      );
      if (response.status) {
        this.trade.currency = response.data.currency;
        this.trade.amount = response.data.amount;
        this.trade.payee_account = "U23596777";
        this.trade.payee_name = response.data.payee_account;
        this.trade.reference = response.data.reference;
        this.trade.user_identifier = response.data.user_identifier;
        this.isInitialized = true;
      }
    },
  },
};
</script>
​
<style>
</style>