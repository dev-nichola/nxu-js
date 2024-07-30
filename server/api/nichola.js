import { useRoute } from "vue-router";
import currencyapi from "@everapi/currencyapi-js";

export default defineEventHandler(async (event) => {
  // Handle Query Parameter
//   const { name } = getQuery(event);

//   // Handle Post Data
//   const { age } = await readBody(event);

  // api call with private key
  const client = new currencyapi('cur_live_N3ATCbarGyCeNAR5coc5YBdjYDWiHYgWpFJ0mLbQ')
  await client.currencies()

 return client;
});
