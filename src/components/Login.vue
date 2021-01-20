<template>
 
    <div class="flex items-center justify-center" >
      <div class="mx-auto overflow-hidden rounded shadow-lg p-10"
      >
        <p class="text-center text-green-600 text-2xl font-bold">
          RAYLINKS INTERNATIONAL
        </p>
        <p class="text-sm my-3 text-center">
          Input your login details
        </p>
        <br />
          <form>
          <div id="inputs">
            <div class="my-3 text-center">
              <label for="account" class="block my-2 text-sm text-left">Account Number</label
              >
              <input
                type="text"
                name="account"
                id="account"
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
                min="1"
                class="w-full border rounded bg-white text-black p-3 border-bg-gray-400"
                required
              />
            </div>
          </div>
          <div class="my-5 text-center">
            <button
              type="submit"
              class="bg-green-500 text-white rounded-full px-8 py-3"
              :disabled="isSending"
            >
              Trade now
            </button>
          </div>
        </form>  
      </div>
    </div>
  
</template>
<style>
</style>